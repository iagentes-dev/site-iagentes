import { motion } from "framer-motion";
import { CheckCircle2, XCircle } from "lucide-react";

const ICPSection = () => {
  const idealFit = [
    "Perde leads fora do horário comercial",
    "Suporte sobrecarregado com perguntas repetitivas",
    "Precisa qualificar leads antes da venda",
    "Já tem processos definidos (CRM, scripts, fluxos)",
    "Gasta R$3k-10k/mês em ferramentas de atendimento",
    "Busca ROI em 3 meses, não em 12",
  ];

  const notFit = [
    "Processos desorganizados — organize primeiro, depois automatize",
    "Quer chatbot genérico barato — não é nosso foco",
    "Espera que IA funcione sozinha sem supervisão inicial",
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
            É Pra Você?
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Cliente certo fecha mais e indica mais. O errado drena tudo.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="p-8 rounded-2xl bg-card border-2 border-primary/20"
          >
            <h3 className="text-xl font-bold text-primary mb-6 flex items-center gap-2">
              <CheckCircle2 className="w-6 h-6" />
              Perfeito se:
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

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="p-8 rounded-2xl bg-card border-2 border-destructive/20"
          >
            <h3 className="text-xl font-bold text-destructive mb-6 flex items-center gap-2">
              <XCircle className="w-6 h-6" />
              Não é pra você se:
            </h3>
            <div className="space-y-4">
              {notFit.map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                  <XCircle className="w-5 h-5 text-destructive shrink-0 mt-0.5" />
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
