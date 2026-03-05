import { motion } from "framer-motion";
import { Clock, Shield, Zap } from "lucide-react";

const TrustBar = () => {
  const metrics = [
    { icon: Zap, label: "Uptime", value: "99.9%" },
    { icon: Clock, label: "Resposta", value: "<100ms" },
    { icon: Shield, label: "Segurança", value: "SOC 2" },
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
            Infraestrutura enterprise. Preço de startup.
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
