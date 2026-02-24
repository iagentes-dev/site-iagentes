import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import { SplineScene } from "@/components/ui/spline";
import { Spotlight } from "@/components/ui/spotlight";
import { TextRotate } from "@/components/ui/text-rotate";
import heroDashboard from "@/assets/hero-dashboard.jpg";

const HeroSection = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const scrollToCases = () => {
    document.getElementById('cases')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-20 relative overflow-hidden bg-background">
      {/* Spotlight effect */}
      <Spotlight size={400} className="z-10" />
      
      {/* Background gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/5 via-background to-background opacity-60"></div>
      
      <div className="container mx-auto max-w-7xl relative z-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <motion.div 
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-primary/20 via-primary/10 to-primary/20 backdrop-blur-sm border border-primary/30 shadow-lg shadow-primary/10"
            >
              <Sparkles className="w-4 h-4 text-primary animate-pulse" />
              <span className="text-sm font-semibold text-foreground/90">Agentes de</span>
              <TextRotate
                texts={["IA Treinados", "IA Inteligentes"]}
                rotationInterval={3500}
                mainClassName="inline-flex bg-clip-text text-transparent bg-gradient-to-r from-primary via-primary/80 to-primary/60 font-bold"
                staggerDuration={0.04}
                staggerFrom="center"
                transition={{ 
                  type: "spring", 
                  damping: 20, 
                  stiffness: 200 
                }}
                splitBy="characters"
              />
            </motion.div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-foreground to-foreground/70 leading-tight pb-2">
              Automação Inteligente Que Realmente Funciona.
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              Pare de perder clientes por demora no atendimento. Treinamos agentes de IA sob medida para SEU negócio — não chatbot genérico.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button 
                size="lg" 
                onClick={scrollToContact}
                className="group shadow-lg hover:shadow-xl hover:shadow-primary/20 transition-all"
              >
                Quero Meu Agente
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              
              <Button 
                size="lg" 
                variant="outline"
                onClick={scrollToCases}
                className="shadow-sm hover:shadow-md transition-all border-primary/20 hover:border-primary/40"
              >
                Ver Como Funciona
              </Button>
            </div>
          </motion.div>

          {/* Right: 3D Spline Scene */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative h-[400px] md:h-[600px] rounded-2xl overflow-hidden shadow-2xl border border-primary/10 bg-gradient-to-br from-background to-secondary/20"
          >
            {isMobile ? (
              <img 
                src={heroDashboard}
                alt="Dashboard agentes de IA iAgentes"
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="w-full h-full relative">
                <SplineScene 
                  scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
                  className="w-full h-full"
                />
                {/* Gradient overlay for better text contrast */}
                <div className="absolute inset-0 bg-gradient-to-t from-background/20 via-transparent to-transparent pointer-events-none"></div>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
