import "https://deno.land/x/xhr@0.1.0/mod.ts";
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2.39.3';

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { filePath } = await req.json();
    
    if (!filePath) {
      return new Response(
        JSON.stringify({ success: false, error: 'filePath is required' }),
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    const startTime = Date.now();
    const fileName = filePath.split('/').pop() || filePath;
    
    console.log(`Processing: ${fileName}`);

    const supabaseUrl = Deno.env.get('SUPABASE_URL')!;
    const supabaseKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!;
    const lovableApiKey = Deno.env.get('LOVABLE_API_KEY');
    
    if (!lovableApiKey) {
      throw new Error('LOVABLE_API_KEY not configured');
    }

    const supabase = createClient(supabaseUrl, supabaseKey);

    // Download file from storage
    const { data: fileData, error: downloadError } = await supabase
      .storage
      .from('cv-documents')
      .download(filePath);

    if (downloadError) {
      return new Response(
        JSON.stringify({ success: false, error: `File not found: ${downloadError.message}` }),
        { status: 404, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    const arrayBuffer = await fileData.arrayBuffer();
    
    // Check file size (10MB limit)
    if (arrayBuffer.byteLength > 10 * 1024 * 1024) {
      return new Response(
        JSON.stringify({ success: false, error: 'File exceeds 10MB limit' }),
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
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
      return new Response(
        JSON.stringify({ 
          success: true, 
          skipped: true, 
          reason: 'Already processed',
          fileName,
          fileHash 
        }),
        { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    // Create ingestion log entry
    const { data: logEntry } = await supabase
      .from('ingestion_log')
      .insert({
        source_type: 'cv',
        source_file: fileName,
        status: 'processing',
        file_hash: fileHash
      })
      .select()
      .single();

    try {
      const uint8Array = new Uint8Array(arrayBuffer);
      
      // Handle HTML files differently
      let extractionPrompt: string;
      let base64 = '';
      
      if (fileName.toLowerCase().endsWith('.html') || fileName.toLowerCase().endsWith('.htm')) {
        const htmlText = new TextDecoder().decode(uint8Array);
        
        const textContent = htmlText
          .replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '')
          .replace(/<style\b[^<]*(?:(?!<\/style>)<[^<]*)*<\/style>/gi, '')
          .replace(/<[^>]+>/g, ' ')
          .replace(/\s+/g, ' ')
          .trim();
        
        extractionPrompt = `Extract CV data from this HTML resume:\n\n${textContent.substring(0, 15000)}`;
      } else {
        // Convert to base64
        const CHUNK_SIZE = 32768;
        for (let i = 0; i < uint8Array.length; i += CHUNK_SIZE) {
          const chunk = uint8Array.slice(i, i + CHUNK_SIZE);
          base64 += btoa(String.fromCharCode(...chunk));
        }
        
        extractionPrompt = `Extract structured CV data from this document`;
      }

      // AI extraction with retry logic
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

      let extractedData: any = {};
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
          
          const jsonMatch = content.match(/```(?:json)?\s*(\{[\s\S]*\})\s*```/) || 
                          content.match(/(\{[\s\S]*\})/);
          
          if (jsonMatch) {
            extractedData = JSON.parse(jsonMatch[1]);
          } else {
            extractedData = JSON.parse(content);
          }

          const requiredFields = ['name', 'title'];
          const missingFields = requiredFields.filter(field => !extractedData[field]);
          
          if (missingFields.length > 0) {
            throw new Error(`Missing required fields: ${missingFields.join(', ')}`);
          }

          console.log(`✓ AI extraction successful for ${fileName}`);
          break;
          
        } catch (aiError) {
          retryCount++;
          console.error(`AI attempt ${retryCount} failed for ${fileName}:`, aiError);
          
          if (retryCount > MAX_RETRIES) {
            throw new Error(`Failed after ${MAX_RETRIES} retries: ${aiError instanceof Error ? aiError.message : 'Unknown error'}`);
          }
          
          await new Promise(resolve => setTimeout(resolve, 2000));
        }
      }

      // Count skills
      const skillCount = extractedData.skills?.reduce(
        (sum: number, cat: any) => sum + (cat.items?.length || 0),
        0
      ) || 0;

      // Insert into cv_profiles
      const { data: profile } = await supabase
        .from('cv_profiles')
        .insert({
          candidate_name: extractedData.name || 'Troy Latter',
          full_name: extractedData.name || 'Troy Latter',
          professional_title: extractedData.title || 'Technology Executive',
          summary: extractedData.summary || '',
          experience: extractedData.experience || [],
          skills: extractedData.skills || [],
          achievements: extractedData.achievements || [],
          education: extractedData.education || []
        })
        .select()
        .single();

      // Update ingestion log
      await supabase
        .from('ingestion_log')
        .update({
          status: 'completed',
          skills_extracted: skillCount,
          new_skills_discovered: 0,
          existing_skills_updated: 0,
          star_examples_added: 0
        })
        .eq('id', logEntry?.id);

      // Update cv_master
      const { data: existingMaster } = await supabase
        .from('cv_master')
        .select('*')
        .limit(1)
        .maybeSingle();

      if (existingMaster) {
        const currentParsedData = existingMaster.parsed_data || { cvs: [] };
        const currentSourceFiles = existingMaster.source_files || [];
        
        currentParsedData.cvs.push({
          fileName,
          data: extractedData
        });
        currentSourceFiles.push(fileName);
        
        await supabase
          .from('cv_master')
          .update({
            parsed_data: currentParsedData,
            source_files: currentSourceFiles,
            last_updated: new Date().toISOString()
          })
          .eq('cv_id', existingMaster.cv_id);
      } else {
        await supabase
          .from('cv_master')
          .insert({
            candidate_name: 'Troy Latter',
            parsed_data: {
              cvs: [{ fileName, data: extractedData }],
              totalCVs: 1,
              processedAt: new Date().toISOString()
            },
            source_files: [fileName]
          });
      }

      const processingTimeMs = Date.now() - startTime;

      return new Response(
        JSON.stringify({
          success: true,
          fileName,
          profileId: profile?.cv_id,
          skillsExtracted: skillCount,
          processingTimeMs,
          fileHash
        }),
        { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );

    } catch (error) {
      console.error(`✗ Failed to process ${fileName}:`, error);
      
      if (logEntry?.id) {
        await supabase
          .from('ingestion_log')
          .update({
            status: 'failed',
            error_message: error instanceof Error ? error.message : 'Unknown error'
          })
          .eq('id', logEntry.id);
      }

      return new Response(
        JSON.stringify({
          success: false,
          error: error instanceof Error ? error.message : 'Unknown error',
          fileName
        }),
        { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

  } catch (error) {
    console.error('Function error:', error);
    return new Response(
      JSON.stringify({ 
        success: false, 
        error: error instanceof Error ? error.message : 'Unknown error' 
      }),
      { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  }
});
