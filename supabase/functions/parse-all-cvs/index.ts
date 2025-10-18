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

    // Initialize Supabase client
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

    // Filter for PDF and DOCX files only
    const cvFiles = (files || []).filter(file => 
      file.name.toLowerCase().endsWith('.pdf') || 
      file.name.toLowerCase().endsWith('.docx')
    );

    console.log(`Processing ${cvFiles.length} CV files`);

    const parsedCVs: ParsedCV[] = [];
    const lovableApiKey = Deno.env.get('LOVABLE_API_KEY');
    
    if (!lovableApiKey) {
      throw new Error('LOVABLE_API_KEY not configured');
    }

    // Process each CV file
    for (const file of cvFiles.slice(0, 5)) { // Start with first 5 CVs
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

        // Convert to base64 for AI processing
        const arrayBuffer = await fileData.arrayBuffer();
        const uint8Array = new Uint8Array(arrayBuffer);
        const base64 = btoa(String.fromCharCode(...uint8Array));

        // Use AI to extract structured data from CV
        const extractionPrompt = `Extract structured information from this CV/resume. Return ONLY valid JSON with this exact structure:
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
                content: `${extractionPrompt}\n\nCV File: ${fileName}\n\nPlease analyze and extract the information.` 
              }
            ],
            temperature: 0.3,
          }),
        });

        if (!aiResponse.ok) {
          throw new Error(`AI extraction failed: ${aiResponse.status}`);
        }

        const aiData = await aiResponse.json();
        let extractedData = {};
        
        try {
          const content = aiData.choices[0].message.content;
          // Try to extract JSON from markdown code blocks
          const jsonMatch = content.match(/```(?:json)?\s*(\{[\s\S]*\})\s*```/) || 
                          content.match(/(\{[\s\S]*\})/);
          
          if (jsonMatch) {
            extractedData = JSON.parse(jsonMatch[1]);
          } else {
            extractedData = JSON.parse(content);
          }
        } catch (parseError) {
          console.error('Failed to parse AI response:', parseError);
          extractedData = { rawContent: aiData.choices[0].message.content };
        }

        parsedCVs.push({
          fileName,
          fullText: `Processed from ${fileName}`,
          extractedData: extractedData as any
        });

        // Update ingestion log
        await supabase
          .from('ingestion_log')
          .update({
            status: 'completed',
            skills_extracted: (extractedData as any).skills?.length || 0
          })
          .eq('id', logEntry?.id);

        console.log(`✓ Completed: ${fileName}`);

      } catch (fileError) {
        console.error(`✗ Failed to process ${fileName}:`, fileError);
        
        // Update ingestion log with error
        if (logEntry?.id) {
          await supabase
            .from('ingestion_log')
            .update({
              status: 'failed',
              error_message: fileError.message
            })
            .eq('id', logEntry.id);
        }
      }
    }

    // Merge all parsed data into master CV
    if (parsedCVs.length > 0) {
      // Check if cv_master entry exists
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
        // Update existing master
        await supabase
          .from('cv_master')
          .update({
            parsed_data: mergedParsedData,
            source_files: allSourceFiles,
            last_updated: new Date().toISOString()
          })
          .eq('cv_id', existingMaster.cv_id);
      } else {
        // Create new master entry
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

      // Get latest name, title, summary (from most recent CV)
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

    return new Response(
      JSON.stringify({
        success: true,
        filesProcessed: parsedCVs.length,
        totalFiles: cvFiles.length,
        parsedCVs: parsedCVs.map(cv => ({
          fileName: cv.fileName,
          skillsFound: cv.extractedData.skills?.length || 0,
          experiencesFound: cv.extractedData.experience?.length || 0,
          achievementsFound: cv.extractedData.achievements?.length || 0
        }))
      }),
      { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );

  } catch (error) {
    console.error('Error in parse-all-cvs function:', error);
    return new Response(
      JSON.stringify({ error: error.message || 'Internal server error' }),
      { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  }
});
