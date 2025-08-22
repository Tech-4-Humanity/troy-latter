import { serve } from 'https://deno.land/std@0.168.0/http/server.ts'
import "https://deno.land/x/xhr@0.1.0/mod.ts"

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
  }

  try {
    const HEYGEN_API_KEY = Deno.env.get('HEYGEN_API_KEY')
    
    if (!HEYGEN_API_KEY) {
      return new Response(
        JSON.stringify({ error: 'HeyGen API key not configured' }),
        {
          status: 500,
          headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        }
      )
    }

    // Create streaming session with HeyGen API
    const response = await fetch('https://api.heygen.com/v1/streaming.create_token', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${HEYGEN_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        quality: 'high',
        avatar_name: 'default', // This should be configured for Troy's specific avatar
        background: 'transparent',
        voice: {
          voice_id: 'default',
          emotion: 'friendly'
        }
      }),
    })

    if (!response.ok) {
      const error = await response.json()
      console.error('HeyGen API error:', error)
      return new Response(
        JSON.stringify({ error: 'Failed to create HeyGen session' }),
        {
          status: response.status,
          headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        }
      )
    }

    const data = await response.json()
    
    return new Response(
      JSON.stringify({
        token: data.data?.token,
        session_id: data.data?.session_id,
      }),
      {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      }
    )

  } catch (error) {
    console.error('Error creating HeyGen session:', error)
    return new Response(
      JSON.stringify({ error: 'Internal server error' }),
      {
        status: 500,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      }
    )
  }
})