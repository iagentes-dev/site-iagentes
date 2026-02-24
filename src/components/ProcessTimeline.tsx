import { motion } from "framer-motion";
import CyberneticGridShader from "./CyberneticGridShader";

const ProcessTimeline = () => {
  const steps = [
    {
      number: "01",
      title: "Diagnóstico de Processos",
      text: "Entendemos seu negócio, processos, linguagem, dores. Mapeamos o que o agente precisa saber e fazer.",
    },
    {
      number: "02",
      title: "Design do Agente",
      text: "Definimos personalidade, tom de voz, fluxos de conversação, integrações necessárias.",
    },
    {
      number: "03",
      title: "Treinamento da IA",
      text: "Alimentamos com conhecimento do seu negócio — FAQs, processos, produtos, scripts de vendas.",
    },
    {
      number: "04",
      title: "Integração",
      text: "Conectamos com WhatsApp, CRM, Email, calendário, sistemas internos. Agente age, não só conversa.",
    },
    {
      number: "05",
      title: "Testes + Go-Live",
      text: "Testamos cenários reais, ajustamos respostas, validamos fluxos. Lançamento supervisionado.",
    },
    {
      number: "06",
      title: "Monitoramento + Evolução",
      text: "Acompanhamos performance, ajustamos treinamento, adicionamos conhecimento conforme necessidade.",
    },
  ];

  return (
    <section id="processo" className="relative py-24 px-4 overflow-hidden bg-background">
      <CyberneticGridShader />
      <div className="container mx-auto max-w-7xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <div className="inline-block px-4 py-1.5 mb-6 rounded-full bg-primary/10 border border-primary/20 backdrop-blur-sm">
            <span className="text-sm font-semibold text-primary">Metodologia Comprovada</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-foreground">
            Do Zero ao Agente Trabalhando
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Processo estruturado em 6 etapas para garantir agente funcional desde o primeiro dia
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-primary/20 -translate-x-1/2"></div>

          <div className="space-y-12">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative flex items-center gap-8 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                <div className={`flex-1 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                  <div className="p-6 rounded-xl bg-card/80 backdrop-blur-sm border border-border hover:border-primary/30 hover:shadow-lg hover:shadow-primary/10 transition-all group">
                    <h3 className="text-xl font-bold text-primary mb-2 group-hover:text-primary/90 transition-colors">{step.title}</h3>
                    <p className="text-muted-foreground">{step.text}</p>
                  </div>
                </div>

                <div className="hidden md:flex items-center justify-center w-16 h-16 rounded-full bg-primary text-primary-foreground font-bold text-lg z-10 shadow-lg">
                  {step.number}
                </div>

                <div className="flex-1 md:block hidden"></div>

                {/* Mobile number */}
                <div className="md:hidden absolute -left-4 top-6 flex items-center justify-center w-12 h-12 rounded-full bg-primary text-primary-foreground font-bold z-10">
                  {step.number}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessTimeline;
