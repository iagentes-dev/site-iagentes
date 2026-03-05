import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, TrendingUp } from "lucide-react";
import caseCRM from "@/assets/case-crm.jpg";
import caseMentoria from "@/assets/case-mentoria.jpg";

const CaseStudies = () => {
  const cases = [
    {
      title: "Atendimento 24/7 — Sem Contratar",
      description: "Agente treinado com base de conhecimento completa. Responde dúvidas, qualifica leads e agenda reuniões — instantaneamente, qualquer horário. Cliente nunca mais espera.",
      results: ["70% redução no volume de suporte repetitivo", "Economia de $8k/mês em equipe", "Resposta instantânea vs 24h antes"],
      image: caseCRM,
    },
    {
      title: "Vendas Que Não Param",
      description: "Agente SDR qualifica leads automaticamente, agenda demos e envia propostas. Vendedor só entra na conversa quente. Mais demos, menos tempo perdido.",
      results: ["3x mais demos agendadas", "20% maior conversão", "60% menos tempo de prospecção"],
      image: caseMentoria,
    },
  ];

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="cases" className="py-24 px-4 bg-muted/30">
      <div className="container mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-foreground">
            Resultados Reais
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Menos dor, mais como resolvemos. Veja na prática.
          </p>
        </motion.div>

        <div className="space-y-16">
          {cases.map((caseItem, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className={`grid md:grid-cols-2 gap-8 items-center ${
                index % 2 === 1 ? 'md:flex-row-reverse' : ''
              }`}
            >
              <div className={`${index % 2 === 1 ? 'md:order-2' : ''}`}>
                <img
                  src={caseItem.image}
                  alt={caseItem.title}
                  className="rounded-2xl shadow-lg w-full h-auto"
                />
              </div>

              <div className={`space-y-6 ${index % 2 === 1 ? 'md:order-1' : ''}`}>
                <h3 className="text-2xl md:text-3xl font-bold text-primary">
                  {caseItem.title}
                </h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {caseItem.description}
                </p>
                <div className="space-y-3">
                  {caseItem.results.map((result, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <TrendingUp className="w-5 h-5 text-primary shrink-0 mt-1" />
                      <span className="text-foreground font-semibold">{result}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mt-16"
        >
          <p className="text-xl font-semibold mb-6 text-foreground">
            Quer resultados assim?
          </p>
          <Button size="lg" onClick={scrollToContact} className="group shadow-lg">
            Quero Meu Agente
            <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default CaseStudies;
