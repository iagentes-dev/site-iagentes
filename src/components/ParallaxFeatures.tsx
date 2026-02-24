import { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { cn } from "@/lib/utils";

interface Feature {
  title: string;
  description: string;
  image: string;
}

interface ParallaxFeaturesProps {
  features: Feature[];
  className?: string;
}

export const ParallaxFeatures = ({ features, className }: ParallaxFeaturesProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const springConfig = { stiffness: 300, damping: 30, bounce: 100 };

  const opacity = useSpring(
    useTransform(scrollYProgress, [0, 0.3], [0.4, 1]),
    springConfig
  );
  const scale = useSpring(
    useTransform(scrollYProgress, [0, 0.3], [0.8, 1]),
    springConfig
  );
  const translateY = useSpring(
    useTransform(scrollYProgress, [0, 0.5], [-100, 0]),
    springConfig
  );

  const firstRow = features.slice(0, Math.ceil(features.length / 2));
  const secondRow = features.slice(Math.ceil(features.length / 2));

  return (
    <div
      ref={ref}
      className={cn(
        "min-h-[200vh] py-20 md:py-40 overflow-hidden relative",
        className
      )}
    >
      <motion.div
        style={{
          opacity,
          scale,
          translateY,
        }}
        className="container mx-auto px-4 max-w-7xl"
      >
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16 md:mb-24"
        >
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-foreground to-foreground/70 mb-6">
            Tecnologia que Transforma
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Soluções personalizadas que elevam seu negócio para o próximo nível
          </p>
        </motion.div>

        {/* First Row - Scroll Left */}
        <div className="mb-12 md:mb-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {firstRow.map((feature, index) => (
              <FeatureCard
                key={feature.title}
                feature={feature}
                index={index}
                direction="left"
              />
            ))}
          </div>
        </div>

        {/* Second Row - Scroll Right */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {secondRow.map((feature, index) => (
            <FeatureCard
              key={feature.title}
              feature={feature}
              index={index}
              direction="right"
            />
          ))}
        </div>
      </motion.div>
    </div>
  );
};

const FeatureCard = ({
  feature,
  index,
  direction,
}: {
  feature: Feature;
  index: number;
  direction: "left" | "right";
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const springConfig = { stiffness: 100, damping: 30 };
  
  const translateX = useSpring(
    useTransform(
      scrollYProgress,
      [0, 1],
      direction === "left" ? [-50, 50] : [50, -50]
    ),
    springConfig
  );

  const opacity = useSpring(
    useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.3, 1, 1, 0.3]),
    springConfig
  );

  const scale = useSpring(
    useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.9, 1, 1, 0.9]),
    springConfig
  );

  return (
    <motion.div
      ref={ref}
      style={{
        x: translateX,
        opacity,
        scale,
      }}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ y: -10, scale: 1.02 }}
      className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-card to-card/50 backdrop-blur-sm border border-primary/10 hover:border-primary/30 transition-all duration-300 shadow-lg hover:shadow-2xl hover:shadow-primary/20"
    >
      {/* Image */}
      <div className="relative h-48 md:h-64 overflow-hidden">
        <motion.img
          src={feature.image}
          alt={feature.title}
          className="w-full h-full object-cover"
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.4 }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
      </div>

      {/* Content */}
      <div className="p-6 md:p-8 relative z-10">
        <h3 className="text-xl md:text-2xl font-bold mb-3 bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/70">
          {feature.title}
        </h3>
        <p className="text-muted-foreground leading-relaxed">
          {feature.description}
        </p>
      </div>

      {/* Hover glow effect */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent" />
      </div>
    </motion.div>
  );
};
