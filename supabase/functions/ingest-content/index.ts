import "https://deno.land/x/xhr@0.1.0/mod.ts";
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2';

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

// Simple text chunking function
function chunkText(text: string, maxChunkSize = 1000, overlap = 200): string[] {
  const chunks: string[] = [];
  let start = 0;

  while (start < text.length) {
    let end = start + maxChunkSize;
    
    // Try to find a good break point (sentence end, paragraph, etc.)
    if (end < text.length) {
      const lastPeriod = text.lastIndexOf('.', end);
      const lastNewline = text.lastIndexOf('\n', end);
      const breakPoint = Math.max(lastPeriod, lastNewline);
      
      if (breakPoint > start + maxChunkSize * 0.5) {
        end = breakPoint + 1;
      }
    }

    chunks.push(text.slice(start, end).trim());
    start = end - overlap;
  }

  return chunks.filter(chunk => chunk.length > 10);
}

// Generate embeddings using OpenAI
async function generateEmbedding(text: string): Promise<number[]> {
  const response = await fetch('https://api.openai.com/v1/embeddings', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${Deno.env.get('OPENAI_API_KEY')}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      model: 'text-embedding-ada-002',
      input: text,
    }),
  });

  if (!response.ok) {
    throw new Error('Failed to generate embedding');
  }

  const data = await response.json();
  return data.data[0].embedding;
}

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders });
  }

  try {
    const { title, content, sourceType, sourceUrl, filePath } = await req.json();

    if (!title || !content || !sourceType) {
      throw new Error('Title, content, and sourceType are required');
    }

    console.log('Ingesting content:', { title, sourceType, contentLength: content.length });

    // Initialize Supabase client
    const supabaseUrl = Deno.env.get('SUPABASE_URL')!;
    const supabaseServiceKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!;
    const supabase = createClient(supabaseUrl, supabaseServiceKey);

    // Create document record
    const { data: document, error: docError } = await supabase
      .from('knowledge_documents')
      .insert({
        title,
        content,
        source_type: sourceType,
        source_url: sourceUrl,
        file_path: filePath,
        metadata: {
          ingested_at: new Date().toISOString(),
          content_length: content.length
        }
      })
      .select()
      .single();

    if (docError) {
      console.error('Error creating document:', docError);
      throw docError;
    }

    console.log('Document created:', document.id);

    // Chunk the content
    const chunks = chunkText(content);
    console.log('Generated chunks:', chunks.length);

    // Process chunks in batches to avoid rate limits
    const batchSize = 10;
    let processedChunks = 0;

    for (let i = 0; i < chunks.length; i += batchSize) {
      const batch = chunks.slice(i, i + batchSize);
      
      const chunkPromises = batch.map(async (chunk, batchIndex) => {
        const chunkIndex = i + batchIndex;
        
        try {
          // Generate embedding
          const embedding = await generateEmbedding(chunk);
          
          return {
            document_id: document.id,
            content: chunk,
            chunk_index: chunkIndex,
            embedding: `[${embedding.join(',')}]`, // PostgreSQL vector format
            metadata: {
              chunk_length: chunk.length,
              created_at: new Date().toISOString()
            }
          };
        } catch (error) {
          console.error(`Error processing chunk ${chunkIndex}:`, error);
          return null;
        }
      });

      const chunkData = (await Promise.all(chunkPromises)).filter(Boolean);

      if (chunkData.length > 0) {
        const { error: chunkError } = await supabase
          .from('knowledge_chunks')
          .insert(chunkData);

        if (chunkError) {
          console.error('Error inserting chunks:', chunkError);
          throw chunkError;
        }

        processedChunks += chunkData.length;
        console.log(`Processed ${processedChunks}/${chunks.length} chunks`);
      }

      // Add delay between batches to avoid rate limits
      if (i + batchSize < chunks.length) {
        await new Promise(resolve => setTimeout(resolve, 1000));
      }
    }

    return new Response(
      JSON.stringify({
        success: true,
        documentId: document.id,
        chunksProcessed: processedChunks,
        totalChunks: chunks.length
      }),
      {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      }
    );

  } catch (error) {
    console.error('Error in ingest-content function:', error);
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        status: 500,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      }
    );
  }
});