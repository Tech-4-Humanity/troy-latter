
import "https://deno.land/x/xhr@0.1.0/mod.ts";
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2';

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

serve(async (req) => {
  console.log('Chat-with-rag function started - method:', req.method);
  
  if (req.method === 'OPTIONS') {
    console.log('Handling CORS preflight request');
    return new Response('ok', { headers: corsHeaders });
  }

  // Check if assistant is disabled
  const isDisabled = Deno.env.get('ASSISTANT_DISABLED') === 'true';
  if (isDisabled) {
    console.log('Assistant is disabled, returning 503');
    return new Response(
      JSON.stringify({ 
        error: "Troy's AI Assistant is currently being reconstructed. Please leave your email to be notified when it's back." 
      }),
      {
        status: 503,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      }
    );
  }

  try {
    const { message, sessionId, sources = [], userEmail } = await req.json();

    if (!message) {
      throw new Error('Message is required');
    }

    if (!userEmail) {
      throw new Error('User email is required for AI assistant access');
    }

    console.log('Chat request:', { message, sessionId, sourcesCount: sources.length, userEmail });

    // Initialize Supabase client
    const supabaseUrl = Deno.env.get('SUPABASE_URL')!;
    const supabaseServiceKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!;
    const supabase = createClient(supabaseUrl, supabaseServiceKey);

    // Verify user has access by checking if email exists in ai_leads
    const { data: leadExists, error: leadError } = await supabase
      .from('ai_leads')
      .select('id')
      .eq('email', userEmail.toLowerCase())
      .eq('source', 'ai_assistant')
      .single();

    if (leadError || !leadExists) {
      console.error('Unauthorized access attempt:', { userEmail, leadError });
      throw new Error('Access not granted. Please provide your email first.');
    }

    console.log('User access verified:', { userEmail, leadId: leadExists.id });

    // Create or get chat session
    let chatSessionId = sessionId;
    if (!chatSessionId) {
      const { data: session, error: sessionError } = await supabase
        .from('chat_sessions')
        .insert({
          title: message.slice(0, 50) + '...',
          user_id: null // Allow anonymous for now
        })
        .select()
        .single();

      if (sessionError) {
        console.error('Error creating session:', sessionError);
        throw sessionError;
      }
      chatSessionId = session.id;
    }

    // Save user message
    const { error: userMessageError } = await supabase
      .from('chat_messages')
      .insert({
        session_id: chatSessionId,
        role: 'user',
        content: message,
        metadata: { sources, userEmail }
      });

    if (userMessageError) {
      console.error('Error saving user message:', userMessageError);
      throw userMessageError;
    }

    // Search knowledge base for relevant content
    let context = '';
    if (sources.length > 0) {
      const { data: chunks, error: searchError } = await supabase
        .from('knowledge_chunks')
        .select('content, knowledge_documents(title, source_type)')
        .in('document_id', sources)
        .limit(10);

      if (!searchError && chunks) {
        context = chunks.map(chunk => 
          `Source: ${chunk.knowledge_documents.title} (${chunk.knowledge_documents.source_type})\n${chunk.content}`
        ).join('\n\n');
      }
    } else {
      // Simple text search for now - in production, use vector search
      const { data: chunks, error: searchError } = await supabase
        .from('knowledge_chunks')
        .select('content, knowledge_documents(title, source_type)')
        .textSearch('content', message, { type: 'websearch' })
        .limit(5);

      if (!searchError && chunks) {
        context = chunks.map(chunk => 
          `Source: ${chunk.knowledge_documents.title} (${chunk.knowledge_documents.source_type})\n${chunk.content}`
        ).join('\n\n');
      }
    }

    // Call Lovable AI (Free Model)
    const lovableAIResponse = await fetch('https://ai.gateway.lovable.dev/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${Deno.env.get('LOVABLE_API_KEY')}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'google/gemini-2.5-flash',
        messages: [
          {
            role: 'system',
            content: `You are an AI assistant for Troy, a senior innovation and AI executive. You have access to information about Troy's professional experience, achievements, and expertise from his LinkedIn profile, website content, and professional certifications.

            When answering questions:
            1. Be professional but conversational
            2. Draw from the provided context when relevant
            3. If you don't have specific information, be honest about it
            4. Focus on Troy's expertise in AI, innovation, digital transformation, and leadership
            5. Provide actionable insights when possible

            Context from knowledge base:
            ${context}

            If no relevant context is found, still answer helpfully based on your general knowledge while noting you don't have specific details about Troy's experience in that area.`
          },
          {
            role: 'user',
            content: message
          }
        ],
        max_tokens: 1000,
      }),
    });

    if (!lovableAIResponse.ok) {
      const error = await lovableAIResponse.json();
      console.error('Lovable AI API error:', error);
      
      // Handle rate limiting
      if (lovableAIResponse.status === 429) {
        throw new Error('Rate limit exceeded. Please try again in a moment.');
      }
      
      // Handle payment required
      if (lovableAIResponse.status === 402) {
        throw new Error('AI credits exhausted. Please contact support.');
      }
      
      throw new Error(error.error?.message || 'Failed to generate response');
    }

    const aiResponse = await lovableAIResponse.json();
    const assistantMessage = aiResponse.choices[0].message.content;

    // Save assistant message
    const { error: assistantMessageError } = await supabase
      .from('chat_messages')
      .insert({
        session_id: chatSessionId,
        role: 'assistant',
        content: assistantMessage,
        metadata: { model: 'google/gemini-2.5-flash', context_used: context.length > 0, userEmail }
      });

    if (assistantMessageError) {
      console.error('Error saving assistant message:', assistantMessageError);
    }

    return new Response(
      JSON.stringify({
        message: assistantMessage,
        sessionId: chatSessionId,
        contextUsed: context.length > 0
      }),
      {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      }
    );

  } catch (error) {
    console.error('Error in chat-with-rag function:', error);
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        status: 500,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      }
    );
  }
});
