import { motion } from "framer-motion";
import { Bot, Clock, TrendingUp } from "lucide-react";

const TrustBar = () => {
  const metrics = [
    { icon: Bot, label: "Agentes Treinados", value: "100+ agentes" },
    { icon: Clock, label: "Tempo Médio Resposta", value: "<30 segundos" },
    { icon: TrendingUp, label: "Satisfação Clientes", value: "92%" },
  ];

  return (
    <section className="py-12 bg-muted/30">
      <div className="container mx-auto max-w-7xl px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-8"
        >
          <p className="text-lg font-semibold text-muted-foreground">
            Confiado por empresas que automatizam com inteligência
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {metrics.map((metric, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col items-center text-center space-y-2"
            >
              <div className="p-3 rounded-full bg-primary/10">
                <metric.icon className="w-6 h-6 text-primary" />
              </div>
              <div className="text-2xl font-bold text-primary">{metric.value}</div>
              <div className="text-sm text-muted-foreground">{metric.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustBar;
