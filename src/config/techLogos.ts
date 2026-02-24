// Configuração dos logos de tecnologia
// Para alterar qualquer logo, basta modificar a URL da imagem e/ou className
// Todos os logos devem ser visíveis em fundo escuro (bg-secondary)

export interface TechLogo {
  id: string;
  description: string;
  image: string;
  className?: string;
}

export const TECH_LOGOS: TechLogo[] = [
  // ============================================
  // MODELOS DE IA
  // ============================================
  {
    id: "openai",
    description: "OpenAI GPT",
    // Logo oficial OpenAI com wordmark (texto)
    image: "https://upload.wikimedia.org/wikipedia/commons/4/4d/OpenAI_Logo.svg",
    className: "h-7 w-auto brightness-0 invert", // Invertido para ficar branco
  },
  {
    id: "claude",
    description: "Anthropic Claude",
    // Logo oficial Anthropic com wordmark
    image: "https://upload.wikimedia.org/wikipedia/commons/7/78/Anthropic_logo.svg",
    className: "h-6 w-auto brightness-0 invert", // Invertido para ficar branco
  },
  {
    id: "gemini",
    description: "Google Gemini",
    // Logo oficial Google Gemini (ícone colorido)
    image: "https://www.gstatic.com/lamda/images/gemini_sparkle_v002_d4735304ff6292a690345.svg",
    className: "h-8 w-auto brightness-125", // Aumenta brilho para maior visibilidade
  },
  {
    id: "meta",
    description: "Meta AI",
    // Logo Meta baixado localmente com wordmark
    image: "/logos/meta-wordmark.png",
    className: "h-9 w-auto brightness-0 invert", // Invertido para ficar branco
  },

  // ============================================
  // PLATAFORMAS SOCIAIS E COMUNICAÇÃO
  // ============================================
  {
    id: "whatsapp",
    description: "WhatsApp Business API",
    // Logo WhatsApp com wordmark baixado localmente
    image: "/logos/whatsapp-wordmark.png",
    className: "h-7 w-auto", // Verde original do WhatsApp
  },
  {
    id: "instagram",
    description: "Instagram Business API",
    // Logo Instagram com wordmark baixado localmente
    image: "/logos/instagram-wordmark.png",
    className: "h-7 w-auto", // Gradiente original do Instagram
  },
  {
    id: "google",
    description: "Google Cloud",
    // Logo Google oficial com wordmark colorido
    image: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
    className: "h-7 w-auto", // Cores originais do Google
  },
  {
    id: "maps",
    description: "Google Maps API",
    // Logo Google Maps oficial
    image: "https://upload.wikimedia.org/wikipedia/commons/b/bd/Google_Maps_Logo_2020.svg",
    className: "h-7 w-auto brightness-125", // Aumenta brilho
  },

  // ============================================
  // STACK DE DESENVOLVIMENTO
  // ============================================
  {
    id: "nextjs",
    description: "Next.js Framework",
    // Logo Next.js baixado localmente
    image: "/logos/nextjs-icon.png",
    className: "h-8 w-auto brightness-0 invert", // Invertido para ficar branco
  },
  {
    id: "react",
    description: "React Library",
    // Logo React oficial (azul)
    image: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
    className: "h-8 w-auto", // Azul original do React
  },
  {
    id: "supabase",
    description: "Supabase Backend",
    // Logo Supabase com wordmark baixado localmente
    image: "/logos/supabase-wordmark.png",
    className: "h-7 w-auto", // Verde original do Supabase
  },
  {
    id: "vercel",
    description: "Vercel Hosting",
    // Logo Vercel oficial com wordmark
    image: "https://assets.vercel.com/image/upload/v1588805858/repositories/vercel/logo.png",
    className: "h-7 w-auto brightness-0 invert", // Invertido para ficar branco
  },
  {
    id: "postgres",
    description: "PostgreSQL Database",
    // Logo PostgreSQL oficial (elefante azul)
    image: "https://upload.wikimedia.org/wikipedia/commons/2/29/Postgresql_elephant.svg",
    className: "h-9 w-auto", // Azul original do PostgreSQL
  },
  {
    id: "github",
    description: "GitHub",
    // Logo GitHub com wordmark baixado localmente
    image: "/logos/github-wordmark.png",
    className: "h-7 w-auto brightness-0 invert", // Invertido para ficar branco
  },
];

// INSTRUÇÕES PARA EDIÇÃO:
// 
// 1. Para trocar um logo:
//    - Altere a propriedade "image" com a nova URL ou caminho local
//    - Ajuste o "className" conforme necessário
//
// 2. Para adicionar novo logo:
//    - Adicione um novo objeto ao array TECH_LOGOS seguindo o padrão acima
//
// 3. Para remover um logo:
//    - Delete o objeto correspondente do array
//
// 4. Filtros CSS disponíveis (use no className):
//    - brightness-0 invert: Torna logo preto em branco
//    - brightness-125: Aumenta brilho em 25%
//    - brightness-150: Aumenta brilho em 50%
//    - opacity-90: Reduz opacidade para 90%
//
// 5. Tamanhos recomendados (h-X):
//    - h-6: Pequeno (24px)
//    - h-7: Médio (28px)
//    - h-8: Grande (32px)
//    - h-9: Extra Grande (36px)
