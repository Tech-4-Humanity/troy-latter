-- Fix RLS policies for anonymous chat functionality

-- Drop existing problematic policies
DROP POLICY IF EXISTS "Users can view their own chat sessions" ON public.chat_sessions;
DROP POLICY IF EXISTS "Users can create chat sessions" ON public.chat_sessions;
DROP POLICY IF EXISTS "Users can update their own chat sessions" ON public.chat_sessions;
DROP POLICY IF EXISTS "Users can view messages from their sessions" ON public.chat_messages;
DROP POLICY IF EXISTS "Users can create messages in their sessions" ON public.chat_messages;

-- Create new policies that properly handle both authenticated and anonymous users
-- Allow service role to bypass RLS for anonymous sessions

-- Chat Sessions Policies
CREATE POLICY "Allow service role full access to chat sessions" 
ON public.chat_sessions 
FOR ALL 
TO service_role 
USING (true) 
WITH CHECK (true);

CREATE POLICY "Users can access their own or anonymous chat sessions" 
ON public.chat_sessions 
FOR ALL 
TO authenticated, anon
USING (
  auth.uid() = user_id OR 
  user_id IS NULL
)
WITH CHECK (
  auth.uid() = user_id OR 
  user_id IS NULL
);

-- Chat Messages Policies  
CREATE POLICY "Allow service role full access to chat messages"
ON public.chat_messages
FOR ALL
TO service_role
USING (true)
WITH CHECK (true);

CREATE POLICY "Users can access messages from their sessions or anonymous sessions"
ON public.chat_messages
FOR ALL
TO authenticated, anon
USING (
  session_id IN (
    SELECT id FROM public.chat_sessions 
    WHERE auth.uid() = user_id OR user_id IS NULL
  )
)
WITH CHECK (
  session_id IN (
    SELECT id FROM public.chat_sessions 
    WHERE auth.uid() = user_id OR user_id IS NULL
  )
);

-- Drop and recreate knowledge base policies for clarity
DROP POLICY IF EXISTS "Allow public read access to knowledge documents" ON public.knowledge_documents;
DROP POLICY IF EXISTS "Allow public read access to knowledge chunks" ON public.knowledge_chunks;
DROP POLICY IF EXISTS "Allow service role full access to knowledge documents" ON public.knowledge_documents;
DROP POLICY IF EXISTS "Allow service role full access to knowledge chunks" ON public.knowledge_chunks;

-- Knowledge documents policies
CREATE POLICY "Public read access to knowledge documents"
ON public.knowledge_documents
FOR SELECT
TO authenticated, anon, service_role
USING (true);

CREATE POLICY "Service role full access to knowledge documents"
ON public.knowledge_documents
FOR ALL
TO service_role
USING (true)
WITH CHECK (true);

-- Knowledge chunks policies
CREATE POLICY "Public read access to knowledge chunks"  
ON public.knowledge_chunks
FOR SELECT
TO authenticated, anon, service_role
USING (true);

CREATE POLICY "Service role full access to knowledge chunks"
ON public.knowledge_chunks  
FOR ALL
TO service_role
USING (true)
WITH CHECK (true);