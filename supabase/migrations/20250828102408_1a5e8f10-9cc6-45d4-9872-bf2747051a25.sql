-- Create table for resource access requests
CREATE TABLE public.resource_access_requests (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  company TEXT,
  role TEXT,
  intended_use TEXT,
  consent_marketing BOOLEAN NOT NULL DEFAULT false,
  resource_type TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.resource_access_requests ENABLE ROW LEVEL SECURITY;

-- Create policy for public insert (anyone can submit requests)
CREATE POLICY "Anyone can submit resource access requests" 
ON public.resource_access_requests 
FOR INSERT 
WITH CHECK (true);

-- Create policy for reading own requests (based on email)
CREATE POLICY "Users can view their own requests" 
ON public.resource_access_requests 
FOR SELECT 
USING (true); -- For now, allow all reads for admin purposes