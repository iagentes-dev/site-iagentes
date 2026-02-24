-- Create contact leads table
CREATE TABLE IF NOT EXISTS public.contact_leads (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  nome TEXT NOT NULL,
  email TEXT NOT NULL,
  empresa TEXT NOT NULL,
  telefone TEXT NOT NULL,
  mensagem TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  status TEXT DEFAULT 'novo',
  notified BOOLEAN DEFAULT false
);

-- Enable Row Level Security
ALTER TABLE public.contact_leads ENABLE ROW LEVEL SECURITY;

-- Create policy to allow anyone to insert contact forms (public form)
CREATE POLICY "Anyone can submit contact form" 
ON public.contact_leads 
FOR INSERT 
WITH CHECK (true);

-- Create policy to prevent public reads (admin only access via backend)
CREATE POLICY "No public reads" 
ON public.contact_leads 
FOR SELECT 
USING (false);

-- Create index for better query performance
CREATE INDEX idx_contact_leads_created_at ON public.contact_leads(created_at DESC);
CREATE INDEX idx_contact_leads_status ON public.contact_leads(status);