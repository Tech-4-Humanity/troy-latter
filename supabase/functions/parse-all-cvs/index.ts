import "https://deno.land/x/xhr@0.1.0/mod.ts";
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2.39.3';

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

interface ParsedCV {
  fileName: string;
  fullText: string;
  extractedData: {
    name?: string;
    title?: string;
    summary?: string;
    experience?: any[];
    skills?: any[];
    achievements?: any[];
    education?: any[];
    quantifiedMetrics?: string[];
  };
}

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    console.log('Starting CV ingestion pipeline...');

    const supabaseUrl = Deno.env.get('SUPABASE_URL')!;
    const supabaseKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!;
    const supabase = createClient(supabaseUrl, supabaseKey);

    // List all files in cv-documents bucket
    const { data: files, error: listError } = await supabase
      .storage
      .from('cv-documents')
      .list('all_cvs_found/all_cvs_found', {
        limit: 100,
        sortBy: { column: 'name', order: 'asc' }
      });

    if (listError) {
      throw new Error(`Failed to list CV files: ${listError.message}`);
    }

    console.log(`Found ${files?.length || 0} files in storage`);

    const cvFiles = (files || []).filter(file => 
      file.name.toLowerCase().endsWith('.pdf') || 
      file.name.toLowerCase().endsWith('.docx') ||
      file.name.toLowerCase().endsWith('.html') ||
      file.name.toLowerCase().endsWith('.htm')
    );

    console.log(`Processing ${cvFiles.length} CV files`);

    // Create processing session
    const { data: session, error: sessionError } = await supabase
      .from('processing_sessions')
      .insert({
        total_files: cvFiles.length,
        status: 'running'
      })
      .select()
      .single();

    if (sessionError) {
      console.error('Failed to create processing session:', sessionError);
    }

    const parsedCVs: ParsedCV[] = [];
    const lovableApiKey = Deno.env.get('LOVABLE_API_KEY');
    
    if (!lovableApiKey) {
      throw new Error('LOVABLE_API_KEY not configured');
    }

    // Process ALL files with batch processing
    const BATCH_SIZE = 10;
    const FUNCTION_TIMEOUT = 13 * 60 * 1000; // 13 minutes
    const startTime = Date.now();
    let totalProcessed = 0;
    let totalFailed = 0;
    let totalSkipped = 0;

    for (let i = 0; i < cvFiles.length; i += BATCH_SIZE) {
      // Check timeout
      if (Date.now() - startTime > FUNCTION_TIMEOUT) {
        console.log('⏱️ Approaching function timeout, stopping gracefully');
        if (session) {
          await supabase
            .from('processing_sessions')
            .update({
              status: 'timeout',
              completed_at: new Date().toISOString(),
              processed_count: totalProcessed,
              failed_count: totalFailed,
              skipped_count: totalSkipped
            })
            .eq('session_id', session.session_id);
        }
        break;
      }

      const batch = cvFiles.slice(i, i + BATCH_SIZE);
      console.log(`📦 Processing batch ${Math.floor(i/BATCH_SIZE) + 1} of ${Math.ceil(cvFiles.length/BATCH_SIZE)}`);

      for (const file of batch) {
        const fileName = file.name;
        console.log(`Processing: ${fileName}`);

        // Create ingestion log entry
        const { data: logEntry } = await supabase
          .from('ingestion_log')
          .insert({
            source_type: 'cv',
            source_file: fileName,
            status: 'processing'
          })
          .select()
          .single();

        try {
          // Download file from storage
          const { data: fileData, error: downloadError } = await supabase
            .storage
            .from('cv-documents')
            .download(`all_cvs_found/all_cvs_found/${fileName}`);

          if (downloadError) {
            throw new Error(`Download failed: ${downloadError.message}`);
          }

          // Convert to base64 with error handling
          const arrayBuffer = await fileData.arrayBuffer();
          
          // Check file size (10MB limit)
          if (arrayBuffer.byteLength > 10 * 1024 * 1024) {
            throw new Error('File exceeds 10MB limit');
          }

          // Calculate file hash for deduplication
          const hashBuffer = await crypto.subtle.digest(
            'SHA-256',
            new TextEncoder().encode(fileName + arrayBuffer.byteLength)
          );
          const fileHash = Array.from(new Uint8Array(hashBuffer))
            .map(b => b.toString(16).padStart(2, '0'))
            .join('');

          // Check if already processed
          const { data: existingLog } = await supabase
            .from('ingestion_log')
            .select('id')
            .eq('file_hash', fileHash)
            .eq('status', 'completed')
            .maybeSingle();

          if (existingLog) {
            console.log(`⏭️ Skipping already processed: ${fileName}`);
            totalSkipped++;
            if (session) {
              await supabase
                .from('processing_sessions')
                .update({
                  skipped_count: totalSkipped
                })
                .eq('session_id', session.session_id);
            }
            continue;
          }

          const uint8Array = new Uint8Array(arrayBuffer);
          
          // PHASE 1 & 2: Handle HTML files differently (extract text, no base64 needed)
          let extractionPrompt: string;
          let base64 = '';
          
          if (fileName.toLowerCase().endsWith('.html') || fileName.toLowerCase().endsWith('.htm')) {
            const htmlText = new TextDecoder().decode(uint8Array);
            
            // Extract text from HTML
            const textContent = htmlText
              .replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '')
              .replace(/<style\b[^<]*(?:(?!<\/style>)<[^<]*)*<\/style>/gi, '')
              .replace(/<[^>]+>/g, ' ')
              .replace(/\s+/g, ' ')
              .trim();
            
            extractionPrompt = `Extract CV data from this HTML resume:\n\n${textContent.substring(0, 15000)}`;
          } else {
            // PHASE 1: Convert to base64 using chunked approach to avoid call stack limits
            try {
              const CHUNK_SIZE = 32768; // 32KB chunks
              for (let i = 0; i < uint8Array.length; i += CHUNK_SIZE) {
                const chunk = uint8Array.slice(i, i + CHUNK_SIZE);
                base64 += btoa(String.fromCharCode(...chunk));
              }
            } catch (conversionError) {
              console.error(`Base64 conversion failed for ${fileName}:`, conversionError);
              throw new Error(`File too large or corrupted: ${conversionError instanceof Error ? conversionError.message : 'Unknown error'}`);
            }
            
            extractionPrompt = `Extract structured CV data from this document`;
          }

          // Use AI to extract structured data from CV
          const structuredPrompt = `Extract structured information from this CV/resume. Return ONLY valid JSON with this exact structure:
{
  "name": "Full Name",
  "title": "Professional Title",
  "summary": "Executive summary or professional summary",
  "experience": [
    {
      "company": "Company Name",
      "role": "Job Title",
      "period": "Start - End",
      "achievements": ["Achievement 1", "Achievement 2"]
    }
  ],
  "skills": [
    {
      "category": "Category Name",
      "items": ["Skill 1", "Skill 2"]
    }
  ],
  "achievements": ["Quantified achievement 1", "Quantified achievement 2"],
  "education": [
    {
      "institution": "School Name",
      "degree": "Degree",
      "year": "Year"
    }
  ],
  "quantifiedMetrics": ["$350M", "30%", "10 nations", etc.]
}

Extract ALL experiences, skills, and achievements. Focus on quantified metrics.`;

          // PHASE 2: Add retry logic with JSON validation
          let extractedData = {};
          let retryCount = 0;
          const MAX_RETRIES = 2;

          while (retryCount <= MAX_RETRIES) {
            try {
              const aiResponse = await fetch('https://ai.gateway.lovable.dev/v1/chat/completions', {
                method: 'POST',
                headers: {
                  'Authorization': `Bearer ${lovableApiKey}`,
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                  model: 'google/gemini-2.5-flash',
                  messages: [
                    { 
                      role: 'user', 
                      content: fileName.toLowerCase().endsWith('.html') || fileName.toLowerCase().endsWith('.htm')
                        ? `${extractionPrompt}\n\n${structuredPrompt}\n\nPlease analyze and extract the information.`
                        : `${extractionPrompt}\n\n${structuredPrompt}\n\nCV File: ${fileName}\n\nPlease analyze and extract the information.` 
                    }
                  ],
                  temperature: 0.3,
                }),
              });

              if (!aiResponse.ok) {
                throw new Error(`AI extraction failed: ${aiResponse.status}`);
              }

              const aiData = await aiResponse.json();
              const content = aiData.choices[0].message.content;
              
              // Try to parse JSON
              const jsonMatch = content.match(/```(?:json)?\s*(\{[\s\S]*\})\s*```/) || 
                              content.match(/(\{[\s\S]*\})/);
              
              if (jsonMatch) {
                extractedData = JSON.parse(jsonMatch[1]);
              } else {
                extractedData = JSON.parse(content);
              }

              // Validate required fields
              const requiredFields = ['name', 'title'];
              const missingFields = requiredFields.filter(field => !(extractedData as any)[field]);
              
              if (missingFields.length > 0) {
                throw new Error(`AI response missing required fields: ${missingFields.join(', ')}`);
              }

              // Success - break retry loop
              console.log(`✓ AI extraction successful for ${fileName}`);
              break;
              
            } catch (aiError) {
              retryCount++;
              console.error(`AI attempt ${retryCount} failed for ${fileName}:`, aiError);
              
              if (retryCount > MAX_RETRIES) {
                console.error(`Failed after ${MAX_RETRIES} retries, using fallback data`);
                extractedData = { 
                  rawContent: 'Failed to extract structured data',
                  error: aiError instanceof Error ? aiError.message : 'Unknown error'
                };
                break;
              }
              
              // Wait 2 seconds before retry
              await new Promise(resolve => setTimeout(resolve, 2000));
            }
          }

          parsedCVs.push({
            fileName,
            fullText: `Processed from ${fileName}`,
            extractedData: extractedData as any
          });

          // Count individual skill keywords, not categories
          const skillCount = (extractedData as any).skills?.reduce(
            (sum: number, cat: any) => sum + (cat.items?.length || 0),
            0
          ) || 0;

          await supabase
            .from('ingestion_log')
            .update({
              status: 'completed',
              skills_extracted: skillCount,
              new_skills_discovered: 0,
              existing_skills_updated: 0,
              star_examples_added: 0,
              file_hash: fileHash
            })
            .eq('id', logEntry?.id);

          totalProcessed++;
          if (session) {
            await supabase
              .from('processing_sessions')
              .update({
                processed_count: totalProcessed,
                failed_count: totalFailed,
                skipped_count: totalSkipped
              })
              .eq('session_id', session.session_id);
          }

          console.log(`✓ Completed: ${fileName}`);

        } catch (fileError) {
          console.error(`✗ Failed to process ${fileName}:`, fileError);
          
          if (logEntry?.id) {
            await supabase
              .from('ingestion_log')
              .update({
                status: 'failed',
                error_message: fileError instanceof Error ? fileError.message : 'Unknown error'
              })
              .eq('id', logEntry.id);
          }

          totalFailed++;
          if (session) {
            await supabase
              .from('processing_sessions')
              .update({
                processed_count: totalProcessed,
                failed_count: totalFailed,
                skipped_count: totalSkipped
              })
              .eq('session_id', session.session_id);
          }
        }
      }

      // Small pause between batches to avoid rate limits
      if (i + BATCH_SIZE < cvFiles.length) {
        await new Promise(resolve => setTimeout(resolve, 2000));
      }
    }

    // Merge all parsed data into master CV
    if (parsedCVs.length > 0) {
      const { data: existingMaster } = await supabase
        .from('cv_master')
        .select('*')
        .limit(1)
        .maybeSingle();

      const allSourceFiles = parsedCVs.map(cv => cv.fileName);
      const mergedParsedData = {
        cvs: parsedCVs.map(cv => ({
          fileName: cv.fileName,
          data: cv.extractedData
        })),
        totalCVs: parsedCVs.length,
        processedAt: new Date().toISOString()
      };

      if (existingMaster) {
        await supabase
          .from('cv_master')
          .update({
            parsed_data: mergedParsedData,
            source_files: allSourceFiles,
            last_updated: new Date().toISOString()
          })
          .eq('cv_id', existingMaster.cv_id);
      } else {
        await supabase
          .from('cv_master')
          .insert({
            candidate_name: 'Troy Latter',
            parsed_data: mergedParsedData,
            source_files: allSourceFiles
          });
      }

      // Update cv_profiles with consolidated data
      const consolidatedExperience: any[] = [];
      const consolidatedSkills: any[] = [];
      const consolidatedAchievements: any[] = [];
      const consolidatedEducation: any[] = [];

      parsedCVs.forEach(cv => {
        if (cv.extractedData.experience) {
          consolidatedExperience.push(...cv.extractedData.experience);
        }
        if (cv.extractedData.skills) {
          consolidatedSkills.push(...cv.extractedData.skills);
        }
        if (cv.extractedData.achievements) {
          consolidatedAchievements.push(...cv.extractedData.achievements);
        }
        if (cv.extractedData.education) {
          consolidatedEducation.push(...cv.extractedData.education);
        }
      });

      const latestCV = parsedCVs[parsedCVs.length - 1];
      
      const { data: existingProfile } = await supabase
        .from('cv_profiles')
        .select('*')
        .limit(1)
        .maybeSingle();

      if (existingProfile) {
        await supabase
          .from('cv_profiles')
          .update({
            full_name: latestCV.extractedData.name || existingProfile.full_name,
            professional_title: latestCV.extractedData.title || existingProfile.professional_title,
            summary: latestCV.extractedData.summary || existingProfile.summary,
            experience: consolidatedExperience,
            skills: consolidatedSkills,
            achievements: consolidatedAchievements,
            education: consolidatedEducation
          })
          .eq('cv_id', existingProfile.cv_id);
      } else {
        await supabase
          .from('cv_profiles')
          .insert({
            candidate_name: 'Troy Latter',
            full_name: latestCV.extractedData.name || 'Troy Latter',
            professional_title: latestCV.extractedData.title || 'Technology Executive',
            summary: latestCV.extractedData.summary || '',
            experience: consolidatedExperience,
            skills: consolidatedSkills,
            achievements: consolidatedAchievements,
            education: consolidatedEducation
          });
      }

      console.log('✓ Master CV and profile updated successfully');
    }

    // Mark session as completed
    if (session) {
      await supabase
        .from('processing_sessions')
        .update({
          status: 'completed',
          completed_at: new Date().toISOString(),
          processed_count: totalProcessed,
          failed_count: totalFailed,
          skipped_count: totalSkipped
        })
        .eq('session_id', session.session_id);
    }

    return new Response(
      JSON.stringify({
        success: true,
        filesProcessed: totalProcessed,
        totalFiles: cvFiles.length,
        failed: totalFailed,
        skipped: totalSkipped,
        parsedCVs: parsedCVs.map(cv => ({
          fileName: cv.fileName,
          skillsFound: cv.extractedData?.skills?.reduce(
            (sum: number, cat: any) => sum + (cat.items?.length || 0),
            0
          ) || 0,
          experiencesFound: cv.extractedData?.experience?.length || 0,
          achievementsFound: cv.extractedData?.achievements?.length || 0
        }))
      }),
      { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );

  } catch (error) {
    console.error('Fatal error in parse-all-cvs:', error);
    
    // Mark session as failed with current counts
    if (session) {
      await supabase
        .from('processing_sessions')
        .update({
          status: 'failed',
          completed_at: new Date().toISOString(),
          processed_count: totalProcessed,
          failed_count: totalFailed,
          skipped_count: totalSkipped
        })
        .eq('session_id', session.session_id);
    }
    
    return new Response(
      JSON.stringify({ 
        error: error instanceof Error ? error.message : 'Internal server error',
        processed: totalProcessed,
        failed: totalFailed,
        skipped: totalSkipped
      }),
      { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  }
});