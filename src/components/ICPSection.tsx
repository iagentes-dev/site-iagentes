import { motion } from "framer-motion";
import { CheckCircle2, XCircle } from "lucide-react";

const ICPSection = () => {
  const idealFit = [
    "Recebe muitas mensagens/leads repetitivos",
    "Time sobrecarregado com atendimento",
    "Perde vendas por demora na resposta",
    "Precisa qualificar leads antes da venda",
    "Quer atendimento 24/7 sem contratar",
    "Já tem processos definidos (não improvisação)",
  ];

  const notFit = [
    "Processos ainda muito desorganizados (organize primeiro)",
    "Espera IA resolver tudo sozinha (precisa supervisão inicial)",
    "Quer chatbot genérico barato (não é nosso foco)",
  ];

  return (
    <section id="icp" className="py-24 px-4">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-foreground">
            Ideal Para Empresas Que Querem Automação Inteligente
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Ideal Fit */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="p-8 rounded-2xl bg-card border-2 border-primary/20"
          >
            <h3 className="text-xl font-bold text-primary mb-6 flex items-center gap-2">
              <CheckCircle2 className="w-6 h-6" />
              Perfeito para você se:
            </h3>
            <div className="space-y-4">
              {idealFit.map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Not a Fit */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="p-8 rounded-2xl bg-card border-2 border-muted"
          >
            <h3 className="text-xl font-bold text-muted-foreground mb-6 flex items-center gap-2">
              <XCircle className="w-6 h-6" />
              Não é ideal se:
            </h3>
            <div className="space-y-4">
              {notFit.map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                  <XCircle className="w-5 h-5 text-muted-foreground shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ICPSection;
