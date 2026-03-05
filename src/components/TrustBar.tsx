import { motion } from "framer-motion";
import { Key, Plug, Brain } from "lucide-react";

const TrustBar = () => {
  const metrics = [
    { icon: Key, label: "Seu token, sem markup", value: "Zero markup" },
    { icon: Plug, label: "Canais integrados", value: "10+ canais" },
    { icon: Brain, label: "IA treinada no seu negócio", value: "Sob medida" },
  ];

  return (
    <section className="py-12 bg-muted/30">
      <div className="container mx-auto max-w-7xl px-4">
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
