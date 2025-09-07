import "https://deno.land/x/xhr@0.1.0/mod.ts";
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

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
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { prompt, context } = await req.json();
    
    if (!prompt) {
      throw new Error('Prompt is required');
    }

    console.log('Lenovo advisor request:', { prompt, context });

    const contextInfo = context ? `
CONTEXT:
- Active Filter: ${context.activeChip || 'None'}
- Current Section: ${context.currentSection || 'General'}
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
          { 
            role: 'system', 
            content: SYSTEM_PROMPT 
          },
          { 
            role: 'user', 
            content: `${contextInfo}\n\nCUSTOMER REQUEST: ${prompt}` 
          }
        ],
        max_completion_tokens: 1000,
      }),
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

    return new Response(
      JSON.stringify({ response: parsedResponse }),
      { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );

  } catch (error) {
    console.error('Error in lenovo-advisor function:', error);
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        status: 500,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      }
    );
  }
});