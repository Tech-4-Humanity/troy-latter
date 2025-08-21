-- Enable vector extension for embeddings
CREATE EXTENSION IF NOT EXISTS vector;

-- Create knowledge base tables for RAG
CREATE TABLE public.knowledge_documents (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  content TEXT NOT NULL,
  source_type TEXT NOT NULL, -- 'site', 'linkedin_article', 'certification', 'pdf'
  source_url TEXT,
  file_path TEXT,
  metadata JSONB DEFAULT '{}',
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create chunks table for vector search
CREATE TABLE public.knowledge_chunks (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  document_id UUID NOT NULL REFERENCES public.knowledge_documents(id) ON DELETE CASCADE,
  content TEXT NOT NULL,
  chunk_index INTEGER NOT NULL,
  embedding VECTOR(1536), -- OpenAI embedding dimension
  metadata JSONB DEFAULT '{}',
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create chat sessions table
CREATE TABLE public.chat_sessions (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
  title TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create chat messages table
CREATE TABLE public.chat_messages (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  session_id UUID NOT NULL REFERENCES public.chat_sessions(id) ON DELETE CASCADE,
  role TEXT NOT NULL CHECK (role IN ('user', 'assistant', 'system')),
  content TEXT NOT NULL,
  metadata JSONB DEFAULT '{}', -- for storing voice/video data, sources, etc.
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.knowledge_documents ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.knowledge_chunks ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.chat_sessions ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.chat_messages ENABLE ROW LEVEL SECURITY;

-- RLS Policies for public read on knowledge base
CREATE POLICY "Knowledge documents are publicly readable" 
ON public.knowledge_documents 
FOR SELECT 
USING (true);

CREATE POLICY "Knowledge chunks are publicly readable" 
ON public.knowledge_chunks 
FOR SELECT 
USING (true);

-- RLS Policies for chat sessions (user-specific)
CREATE POLICY "Users can view their own chat sessions" 
ON public.chat_sessions 
FOR SELECT 
USING (auth.uid() = user_id OR user_id IS NULL);

CREATE POLICY "Users can create chat sessions" 
ON public.chat_sessions 
FOR INSERT 
WITH CHECK (auth.uid() = user_id OR user_id IS NULL);

CREATE POLICY "Users can update their own chat sessions" 
ON public.chat_sessions 
FOR UPDATE 
USING (auth.uid() = user_id OR user_id IS NULL);

-- RLS Policies for chat messages
CREATE POLICY "Users can view messages from their sessions" 
ON public.chat_messages 
FOR SELECT 
USING (
  session_id IN (
    SELECT id FROM public.chat_sessions 
    WHERE auth.uid() = user_id OR user_id IS NULL
  )
);

CREATE POLICY "Users can create messages in their sessions" 
ON public.chat_messages 
FOR INSERT 
WITH CHECK (
  session_id IN (
    SELECT id FROM public.chat_sessions 
    WHERE auth.uid() = user_id OR user_id IS NULL
  )
);

-- Create indexes for performance
CREATE INDEX idx_knowledge_chunks_document_id ON public.knowledge_chunks(document_id);
CREATE INDEX idx_knowledge_chunks_embedding ON public.knowledge_chunks USING ivfflat (embedding vector_cosine_ops);
CREATE INDEX idx_chat_messages_session_id ON public.chat_messages(session_id);
CREATE INDEX idx_chat_sessions_user_id ON public.chat_sessions(user_id);

-- Create function to update timestamps
CREATE OR REPLACE FUNCTION public.update_knowledge_documents_timestamp()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE OR REPLACE FUNCTION public.update_chat_sessions_timestamp()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Create triggers for automatic timestamp updates
CREATE TRIGGER update_knowledge_documents_updated_at
BEFORE UPDATE ON public.knowledge_documents
FOR EACH ROW
EXECUTE FUNCTION public.update_knowledge_documents_timestamp();

CREATE TRIGGER update_chat_sessions_updated_at
BEFORE UPDATE ON public.chat_sessions
FOR EACH ROW
EXECUTE FUNCTION public.update_chat_sessions_timestamp();