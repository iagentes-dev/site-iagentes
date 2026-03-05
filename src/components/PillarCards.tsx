import { motion } from "framer-motion";
import { Brain, Plug, LineChart } from "lucide-react";

const PillarCards = () => {
  const pillars = [
    {
      icon: Brain,
      title: "Treinado Com Seu DNA",
      description: "Não é chatbot genérico. Treinamos com a linguagem, processos, tom de voz e conhecimento específico da sua empresa. Agente entende seu negócio.",
    },
    {
      icon: Plug,
      title: "Integrado Aos Seus Sistemas",
      description: "WhatsApp, Telegram, Slack, CRM, APIs — 10+ canais. Agente acessa dados reais e age: qualifica, agenda, responde. Não só conversa.",
    },
    {
      icon: LineChart,
      title: "Evolui Com Uso Real",
      description: "Monitoramos, ajustamos, melhoramos. Seu agente fica mais inteligente com cada interação. Suporte consultivo incluso — não é instala e esquece.",
    },
  ];

  return (
    <section id="pilares" className="py-24 px-4">
      <div className="container mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-foreground">
            Como Resolvemos
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Não vendemos IA. Vendemos um funcionário que nunca dorme.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pillars.map((pillar, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="group relative p-8 rounded-2xl bg-card hover:shadow-xl transition-all duration-300 border border-border hover:border-primary/30"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-[var(--gradient-hero)] rounded-t-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
              
              <div className="p-4 rounded-xl bg-primary/10 w-fit mb-6 group-hover:bg-primary/20 transition-colors">
                <pillar.icon className="w-8 h-8 text-primary" />
              </div>
              
              <h3 className="text-xl font-bold mb-4 text-foreground">{pillar.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{pillar.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PillarCards;
