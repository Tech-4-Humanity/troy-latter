-- Create table for Lenovo focus images
CREATE TABLE public.lenovo_focus_images (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  description TEXT,
  image_url TEXT NOT NULL,
  category TEXT,
  sort_order INTEGER DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable RLS
ALTER TABLE public.lenovo_focus_images ENABLE ROW LEVEL SECURITY;

-- Create policy for public read access
CREATE POLICY "Public read access for lenovo focus images" 
ON public.lenovo_focus_images 
FOR SELECT 
USING (true);

-- Create trigger for updated_at
CREATE TRIGGER update_lenovo_focus_images_updated_at
BEFORE UPDATE ON public.lenovo_focus_images
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_timestamp();

-- Insert the focus images data
INSERT INTO public.lenovo_focus_images (title, description, image_url, category, sort_order) VALUES
('Lenovo Strategic Overview', 'High-level strategic positioning and market approach for Lenovo DaaS solutions', 'https://lzfgigiyqpuuxslsygjt.supabase.co/storage/v1/object/public/images/Screenshot%202025-09-03%20at%209.50.13%20am.png', 'strategy', 1),
('Market Positioning Framework', 'Comprehensive framework showing Lenovo''s competitive positioning in the ANZ market', 'https://lzfgigiyqpuuxslsygjt.supabase.co/storage/v1/object/public/images/Screenshot%202025-09-03%20at%209.45.29%20am.png', 'framework', 2),
('Service Delivery Model', 'Detailed view of how Lenovo delivers DaaS services across different customer segments', 'https://lzfgigiyqpuuxslsygjt.supabase.co/storage/v1/object/public/images/Screenshot%202025-09-03%20at%209.48.27%20am.png', 'delivery', 3),
('Implementation Roadmap', 'Step-by-step implementation approach for enterprise DaaS deployments', 'https://lzfgigiyqpuuxslsygjt.supabase.co/storage/v1/object/public/images/Screenshot%202025-09-03%20at%209.49.10%20am.png', 'implementation', 4),
('Value Proposition Matrix', 'Comprehensive value mapping across different customer personas and use cases', 'https://lzfgigiyqpuuxslsygjt.supabase.co/storage/v1/object/public/images/Screenshot%202025-09-03%20at%209.49.44%20am.png', 'value', 5),
('Executive Dashboard View', 'Key metrics and KPIs for executive stakeholders and decision makers', 'https://lzfgigiyqpuuxslsygjt.supabase.co/storage/v1/object/public/images/Screenshot%202025-09-03%20at%209.50.50%20am.png', 'metrics', 6);