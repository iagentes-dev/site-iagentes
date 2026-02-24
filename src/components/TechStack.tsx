import { motion } from "framer-motion";
import { Cpu, Shield, Cloud, Zap, CheckCircle2 } from "lucide-react";
import { TechLogos } from "./TechLogos";

const TechStack = () => {
  const techItems = [
    { icon: Cpu, text: "IA: OpenAI, Claude, Gemini, Groq, Grok, Llama, DeepSeek, Qwen - modelos proprietários calibrados" },
    { icon: Cloud, text: "Infra: Cloud escalável, servidores dedicados por cliente" },
    { icon: Shield, text: "Segurança e compliance LGPD e padrões do mercado" },
    { icon: Zap, text: "Integrações: APIs oficiais (WhatsApp, Email, CRMs, ERPs)" },
  ];

  const guarantees = [
    "Backups automáticos diários (nunca perde dados)",
    "Monitoramento 24/7 (detectamos problemas antes de você)",
    "Suporte especializado dedicado (responsável direto, não ticket genérico)",
    "Equipe 10+ especialistas (designers, devs, IA, infra)",
    "Branding completo seu (cores, logo, domínio próprio)",
    "IA calibrada especificamente negócio (não genérica)",
    "Parceiros operadores especializados (network inacessível)",
  ];

  return (
    <section id="tech" className="py-24 px-4 bg-secondary text-secondary-foreground">
      <div className="container mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-secondary-foreground">
            Tecnologia Enterprise. Segurança Garantida.
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Tech Stack */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold mb-6 text-primary">Tech que usamos</h3>
            <div className="space-y-4">
              {techItems.map((item, index) => (
                <div key={index} className="flex items-start gap-4 p-4 rounded-lg bg-secondary-foreground/5 hover:bg-secondary-foreground/10 transition-colors">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <item.icon className="w-5 h-5 text-primary" />
                  </div>
                  <span className="text-secondary-foreground/90">{item.text}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Guarantees */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold mb-6 text-primary">Garantias empresa grande</h3>
            <div className="space-y-3">
              {guarantees.map((guarantee, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <span className="text-secondary-foreground/90 text-sm">{guarantee}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
        
        <TechLogos />
      </div>
    </section>
  );
};

export default TechStack;
