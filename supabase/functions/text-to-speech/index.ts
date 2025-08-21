import "https://deno.land/x/xhr@0.1.0/mod.ts";
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders });
  }

  try {
    const { text, voice = 'alloy' } = await req.json();

    if (!text) {
      throw new Error('Text is required');
    }

    console.log('TTS request:', { text: text.slice(0, 100), voice });

    // Check if ElevenLabs API key is available
    const elevenLabsApiKey = Deno.env.get('ELEVENLABS_API_KEY');
    
    if (elevenLabsApiKey) {
      // Use ElevenLabs for higher quality
      const response = await fetch('https://api.elevenlabs.io/v1/text-to-speech/21m00Tcm4TlvDq8ikWAM', {
        method: 'POST',
        headers: {
          'Accept': 'audio/mpeg',
          'Content-Type': 'application/json',
          'xi-api-key': elevenLabsApiKey,
        },
        body: JSON.stringify({
          text: text,
          model_id: 'eleven_monolingual_v1',
          voice_settings: {
            stability: 0.5,
            similarity_boost: 0.5
          }
        }),
      });

      if (!response.ok) {
        const error = await response.json();
        console.error('ElevenLabs API error:', error);
        throw new Error(error.detail?.message || 'Failed to generate speech');
      }

      const arrayBuffer = await response.arrayBuffer();
      const base64Audio = btoa(String.fromCharCode(...new Uint8Array(arrayBuffer)));

      return new Response(
        JSON.stringify({ 
          audioContent: base64Audio,
          provider: 'elevenlabs',
          format: 'mp3'
        }),
        {
          headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        }
      );
    } else {
      // Fallback to OpenAI TTS
      const response = await fetch('https://api.openai.com/v1/audio/speech', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${Deno.env.get('OPENAI_API_KEY')}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          model: 'tts-1',
          input: text,
          voice: voice,
          response_format: 'mp3',
        }),
      });

      if (!response.ok) {
        const error = await response.json();
        console.error('OpenAI TTS API error:', error);
        throw new Error(error.error?.message || 'Failed to generate speech');
      }

      const arrayBuffer = await response.arrayBuffer();
      const base64Audio = btoa(String.fromCharCode(...new Uint8Array(arrayBuffer)));

      return new Response(
        JSON.stringify({ 
          audioContent: base64Audio,
          provider: 'openai',
          format: 'mp3'
        }),
        {
          headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        }
      );
    }

  } catch (error) {
    console.error('Error in text-to-speech function:', error);
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        status: 500,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      }
    );
  }
});