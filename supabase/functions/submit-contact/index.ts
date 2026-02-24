import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

// Rate limiting: track submissions by IP
const submissionCache = new Map<string, number[]>();
const RATE_LIMIT_WINDOW_MS = 60 * 60 * 1000; // 1 hour
const MAX_SUBMISSIONS_PER_WINDOW = 5;

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    // Rate limiting check
    const clientIP = req.headers.get('x-forwarded-for') || req.headers.get('x-real-ip') || 'unknown';
    const now = Date.now();
    
    // Clean old submissions from cache
    if (submissionCache.has(clientIP)) {
      const timestamps = submissionCache.get(clientIP)!.filter(
        timestamp => now - timestamp < RATE_LIMIT_WINDOW_MS
      );
      submissionCache.set(clientIP, timestamps);
      
      // Check rate limit
      if (timestamps.length >= MAX_SUBMISSIONS_PER_WINDOW) {
        console.log(`Rate limit exceeded for IP: ${clientIP}`);
        return new Response(
          JSON.stringify({ error: 'Muitas tentativas. Tente novamente mais tarde.' }),
          { status: 429, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
        );
      }
    }

    const { nome, email, empresa, telefone, mensagem } = await req.json();

    // Validate required fields
    if (!nome || !email || !empresa || !telefone || !mensagem) {
      return new Response(
        JSON.stringify({ error: 'Todos os campos são obrigatórios' }),
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    // Comprehensive length validation
    if (nome.length < 2 || nome.length > 100) {
      return new Response(
        JSON.stringify({ error: 'Nome deve ter entre 2 e 100 caracteres' }),
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    if (empresa.length < 2 || empresa.length > 100) {
      return new Response(
        JSON.stringify({ error: 'Empresa deve ter entre 2 e 100 caracteres' }),
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    if (telefone.length < 10 || telefone.length > 20) {
      return new Response(
        JSON.stringify({ error: 'Telefone deve ter entre 10 e 20 caracteres' }),
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    if (email.length > 255) {
      return new Response(
        JSON.stringify({ error: 'Email muito longo (máximo 255 caracteres)' }),
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    if (mensagem.length < 10 || mensagem.length > 1000) {
      return new Response(
        JSON.stringify({ error: 'Mensagem deve ter entre 10 e 1000 caracteres' }),
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return new Response(
        JSON.stringify({ error: 'Email inválido' }),
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    // Initialize Supabase client
    const supabaseUrl = Deno.env.get('SUPABASE_URL')!;
    const supabaseKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!;
    const supabase = createClient(supabaseUrl, supabaseKey);

    // Insert contact lead
    const { data, error } = await supabase
      .from('contact_leads')
      .insert({
        nome: nome.trim(),
        email: email.trim().toLowerCase(),
        empresa: empresa.trim(),
        telefone: telefone.trim(),
        mensagem: mensagem.trim(),
      })
      .select()
      .single();

    if (error) {
      console.error('Database error:', { code: error.code, timestamp: new Date().toISOString() });
      return new Response(
        JSON.stringify({ error: 'Erro ao enviar formulário. Tente novamente.' }),
        { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    console.log('Contact lead created:', data.id);

    // Record successful submission for rate limiting
    const timestamps = submissionCache.get(clientIP) || [];
    timestamps.push(now);
    submissionCache.set(clientIP, timestamps);

    return new Response(
      JSON.stringify({ 
        success: true, 
        message: 'Mensagem enviada com sucesso! Entraremos em contato em breve.' 
      }),
      { status: 200, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );

  } catch (error) {
    console.error('Error in submit-contact function:', { 
      message: error instanceof Error ? error.message : 'Unknown error',
      timestamp: new Date().toISOString() 
    });
    return new Response(
      JSON.stringify({ error: 'Erro interno do servidor' }),
      { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  }
});
