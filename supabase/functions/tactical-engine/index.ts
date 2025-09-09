import "https://deno.land/x/xhr@0.1.0/mod.ts";
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2';

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
  'Access-Control-Allow-Methods': 'GET,POST,OPTIONS',
  'Access-Control-Max-Age': '86400',
};

// Allowed domains for web enrichment
const ALLOWED_DOMAINS = [
  'lenovo.com',
  'www.lenovo.com',
  'news.lenovo.com',
  'blog.lenovo.com',
  'support.lenovo.com'
];

// Simple web content fetcher with domain validation
async function fetchWebContent(url: string): Promise<string | null> {
  try {
    const urlObj = new URL(url);
    
    // Check if domain is allowed
    if (!ALLOWED_DOMAINS.some(domain => urlObj.hostname.endsWith(domain))) {
      console.log(`Domain not allowed: ${urlObj.hostname}`);
      return null;
    }
    
    console.log(`Fetching content from: ${url}`);
    
    const response = await fetch(url, {
      headers: {
        'User-Agent': 'Lenovo-Advisor-Bot/1.0'
      },
      signal: AbortSignal.timeout(10000) // 10 second timeout
    });
    
    if (!response.ok) {
      console.log(`Failed to fetch ${url}: ${response.status}`);
      return null;
    }
    
    const html = await response.text();
    
    // Basic text extraction (remove HTML tags and clean up)
    const textContent = html
      .replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '')
      .replace(/<style\b[^<]*(?:(?!<\/style>)<[^<]*)*<\/style>/gi, '')
      .replace(/<[^>]*>/g, ' ')
      .replace(/\s+/g, ' ')
      .trim();
    
    // Limit to first 2000 characters for context
    return textContent.substring(0, 2000);
    
  } catch (error) {
    console.error(`Error fetching web content from ${url}:`, error);
    return null;
  }
}

const LENOVO_PRODUCT_MAP = {
  "ThinkPad": "Laptops and mobile workstations for professionals",
  "ThinkSystem": "Servers and enterprise infrastructure",
  "ThinkEdge": "Edge computing and IoT solutions", 
  "ThinkCentre": "Desktop computers and workstations",
  "Lenovo Legion": "Gaming laptops and desktops",
  "IdeaPad": "Consumer laptops and 2-in-1s",
  "SE350": "Edge servers and micro data centers",
  "Storage": "Enterprise storage solutions",
  "Networking": "Network infrastructure and switches"
};

const SYSTEM_PROMPT = `You are a Lenovo solutions expert providing tactical recommendations for the Lenovo Tactical Deck.

Your role is to analyze customer pain points and provide structured recommendations using Lenovo's product portfolio.

AVAILABLE LENOVO STACK:
${Object.entries(LENOVO_PRODUCT_MAP).map(([product, desc]) => `- ${product}: ${desc}`).join('\n')}

RESPONSE FORMAT: Always respond with valid JSON in this exact structure:
{
  "pain": "Brief summary of the customer's core pain point",
  "stack": "Recommended Lenovo products/solutions (be specific - mention exact product lines)",
  "outcomes": "Expected business outcomes and benefits",
  "when_fit": "When this solution is ideal (specific scenarios)",
  "when_not": "When to avoid or consider alternatives",
  "competitors": "Key competitors to be aware of (HP, Dell, etc.)",
  "vignette": "One compelling sentence about the solution impact",
  "notes": "Additional considerations or implementation notes"
}

Guidelines:
- Be specific about Lenovo product recommendations
- Consider the industry context if provided
- Address scalability, security, and cost considerations
- Mention relevant certifications or compliance when applicable
- Keep responses concise but actionable`;

serve(async (req) => {
  console.log('Tactical engine function called', req.method, req.url);
  
  // Health check endpoint
  if (req.method === 'GET') {
    return new Response(JSON.stringify({ 
      status: 'healthy', 
      timestamp: new Date().toISOString(),
      openai_key_available: !!Deno.env.get('OPENAI_API_KEY'),
      service_role_key_available: !!Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')
    }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' }
    });
  }
  
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    console.log('Processing request...');
    const { prompt, context, webUrls } = await req.json();
    console.log('Request data received:', { prompt: prompt?.substring(0, 50) + '...', context, webUrlsCount: webUrls?.length || 0 });
    
    if (!prompt) {
      throw new Error('Prompt is required');
    }

    console.log('Tactical engine request:', { prompt, context, webUrls });

    // Fetch web content if URLs provided
    let webContext = '';
    const fetchedSources: string[] = [];
    
    if (webUrls && Array.isArray(webUrls) && webUrls.length > 0) {
      console.log('Fetching web content from provided URLs...');
      
      const webContents = await Promise.allSettled(
        webUrls.slice(0, 3).map(async (url: string) => { // Limit to 3 URLs
          const content = await fetchWebContent(url);
          if (content) {
            fetchedSources.push(url);
            return `SOURCE: ${url}\nCONTENT: ${content}\n\n`;
          }
          return null;
        })
      );
      
      webContext = webContents
        .filter(result => result.status === 'fulfilled' && result.value)
        .map(result => (result as any).value)
        .join('');
    }

    const contextInfo = context ? `
CONTEXT:
- Active Filter: ${context.activeChip || 'None'}
- Current Section: ${context.currentSection || 'General'}
    `.trim() : '';

    const webContextInfo = webContext ? `
WEB CONTEXT (from Lenovo sources):
${webContext}
    `.trim() : '';

    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${Deno.env.get('OPENAI_API_KEY')}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'gpt-4.1-2025-04-14',
        messages: [
          { role: 'system', content: SYSTEM_PROMPT },
          { role: 'user', content: `${contextInfo}${webContextInfo}\n\nCUSTOMER REQUEST: ${prompt}` }
        ],
        max_completion_tokens: 1000,
      }),
      signal: AbortSignal.timeout(25000)
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error('OpenAI API error:', errorText);
      throw new Error(`OpenAI API error: ${errorText}`);
    }

    const data = await response.json();
    const content = data.choices[0].message.content;
    
    console.log('OpenAI response:', content);

    // Parse JSON response
    let parsedResponse;
    try {
      parsedResponse = JSON.parse(content);
    } catch (parseError) {
      console.error('Failed to parse OpenAI response as JSON:', content);
      throw new Error('Invalid response format from AI');
    }

    // Save to database (optional)
    let documentId = null;
    const serviceRoleKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY');
    
    if (serviceRoleKey) {
      try {
        const supabase = createClient(
          'https://lzfgigiyqpuuxslsygjt.supabase.co',
          serviceRoleKey
        );

      // Extract product tags from the response
      const productTags = Object.keys(LENOVO_PRODUCT_MAP).filter(product => 
        parsedResponse.stack?.toLowerCase().includes(product.toLowerCase())
      );

      const { data: docData, error: dbError } = await supabase
        .from('knowledge_documents')
        .insert({
          title: `Lenovo Tactical Recommendation`,
          content: JSON.stringify({
            prompt: prompt.trim(),
            context: context || {},
            response: parsedResponse,
            webSources: fetchedSources,
            timestamp: new Date().toISOString()
          }),
          source_type: 'lenovo-advisor',
          tags: productTags,
          metadata: {
            activeChip: context?.activeChip,
            currentSection: context?.currentSection,
            productRecommendations: productTags,
            webSourcesUsed: fetchedSources.length > 0
          }
        })
        .select('id')
        .single();

        if (dbError) {
          console.error('Database save error:', dbError);
        } else {
          documentId = docData?.id;
          console.log('Saved to database with ID:', documentId);
        }
      } catch (dbError) {
        console.error('Database operation failed:', dbError);
      }
    } else {
      console.log('No service role key available, skipping database save');
    }

    return new Response(
      JSON.stringify({ 
        response: parsedResponse, 
        documentId 
      }),
      { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );

  } catch (error) {
    console.error('Error in tactical-engine function:', error);
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        status: 500,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      }
    );
  }
});