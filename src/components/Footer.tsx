import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { API_ENDPOINTS } from "@/config/endpoints";
import { useToast } from "@/hooks/use-toast";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Github, Linkedin, Moon, Send, Sun } from "lucide-react";

const Footer = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDarkMode]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!newsletterEmail || !newsletterEmail.includes('@')) {
      toast({
        title: "Email inválido",
        description: "Por favor, insira um email válido.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch(API_ENDPOINTS.NEWSLETTER, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email: newsletterEmail }),
      });

      if (!response.ok) {
        throw new Error('Erro ao inscrever');
      }

      toast({
        title: "Inscrito com sucesso!",
        description: "Você receberá nossas novidades em breve.",
      });

      setNewsletterEmail("");
    } catch (error: any) {
      console.error('Error subscribing:', error);
      toast({
        title: "Erro ao inscrever",
        description: error.message || "Tente novamente mais tarde.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <footer className="relative border-t bg-background text-foreground transition-colors duration-300">
      <div className="container mx-auto px-4 py-12 md:px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div className="relative">
            <h2 className="mb-4 text-3xl font-bold tracking-tight">Fique Conectado</h2>
            <p className="mb-6 text-muted-foreground">
              Receba insights sobre automação inteligente e treinamento de agentes de IA.
            </p>
            <form className="relative" onSubmit={handleNewsletterSubmit}>
              <Input
                type="email"
                placeholder="Seu melhor email"
                className="pr-12 backdrop-blur-sm"
                value={newsletterEmail}
                onChange={(e) => setNewsletterEmail(e.target.value)}
                disabled={isSubmitting}
              />
              <Button
                type="submit"
                size="icon"
                className="absolute right-1 top-1 h-8 w-8 rounded-full bg-primary text-primary-foreground transition-transform hover:scale-105"
                disabled={isSubmitting}
              >
                <Send className="h-4 w-4" />
                <span className="sr-only">Inscrever</span>
              </Button>
            </form>
            <div className="absolute -right-4 top-0 h-24 w-24 rounded-full bg-primary/10 blur-2xl" />
          </div>
          
          <div>
            <h3 className="mb-4 text-lg font-semibold">Links Rápidos</h3>
            <nav className="space-y-2 text-sm">
              <button onClick={() => scrollToSection('hero')} className="block transition-colors hover:text-primary text-left">
                Home
              </button>
              <button onClick={() => scrollToSection('cases')} className="block transition-colors hover:text-primary text-left">
                Cases
              </button>
              <button onClick={() => scrollToSection('processo')} className="block transition-colors hover:text-primary text-left">
                Como Funciona
              </button>
              <button onClick={() => scrollToSection('faq')} className="block transition-colors hover:text-primary text-left">
                FAQ
              </button>
              <button onClick={() => scrollToSection('contact')} className="block transition-colors hover:text-primary text-left">
                Contato
              </button>
            </nav>
          </div>
          
          <div>
            <h3 className="mb-4 text-lg font-semibold">Contato</h3>
            <address className="space-y-2 text-sm not-italic">
              <p>CRM: crm-iagentes.abckx.com.br</p>
              <p>GitHub: github.com/iagentes-dev</p>
              <p>Email: contato@iagentes.dev</p>
              <p className="text-muted-foreground mt-4">
                Treinamento profissional de agentes de IA para empresas.
              </p>
            </address>
          </div>
          
          <div className="relative">
            <h3 className="mb-4 text-lg font-semibold">Siga-nos</h3>
            <div className="mb-6 flex space-x-4">
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <a href="https://github.com/iagentes-dev" target="_blank" rel="noopener noreferrer">
                      <Button variant="outline" size="icon" className="rounded-full">
                        <Github className="h-4 w-4" />
                        <span className="sr-only">GitHub</span>
                      </Button>
                    </a>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Contribua no GitHub</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <a href="https://linkedin.com/company/iagentes" target="_blank" rel="noopener noreferrer">
                      <Button variant="outline" size="icon" className="rounded-full">
                        <Linkedin className="h-4 w-4" />
                        <span className="sr-only">LinkedIn</span>
                      </Button>
                    </a>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Conecte-se no LinkedIn</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
            <div className="flex items-center space-x-2">
              <Sun className="h-4 w-4" />
              <Switch
                id="dark-mode"
                checked={isDarkMode}
                onCheckedChange={setIsDarkMode}
              />
              <Moon className="h-4 w-4" />
              <Label htmlFor="dark-mode" className="sr-only">
                Alternar modo escuro
              </Label>
            </div>
          </div>
        </div>
        
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t pt-8 text-center md:flex-row">
          <p className="text-sm text-muted-foreground">
            © 2026 iAgentes. Todos os direitos reservados.
          </p>
          <nav className="flex gap-4 text-sm">
            <a href="#" className="transition-colors hover:text-primary">
              Política de Privacidade
            </a>
            <a href="#" className="transition-colors hover:text-primary">
              Termos de Serviço
            </a>
            <a href="#" className="transition-colors hover:text-primary">
              LGPD
            </a>
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
