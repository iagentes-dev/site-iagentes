"use client";

import AutoScroll from "embla-carousel-auto-scroll";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { TECH_LOGOS, TechLogo } from "@/config/techLogos";

interface TechLogosProps {
  heading?: string;
}

const TechLogos = ({
  heading = "Tecnologias de Ponta. Parceiros Confiáveis.",
}: TechLogosProps) => {
  return (
    <section className="py-16 bg-secondary">
      <div className="container flex flex-col items-center text-center">
        <h3 className="mb-8 text-xl font-bold text-secondary-foreground lg:text-2xl">
          {heading}
        </h3>
      </div>
      <div className="relative mx-auto flex items-center justify-center lg:max-w-5xl">
        <Carousel
          opts={{ loop: true }}
          plugins={[AutoScroll({ playOnInit: true, speed: 1, stopOnInteraction: false })]}
        >
          <CarouselContent className="ml-0">
            {TECH_LOGOS.map((logo) => (
              <CarouselItem
                key={logo.id}
                className="flex basis-1/3 justify-center pl-0 sm:basis-1/4 md:basis-1/5 lg:basis-1/6"
              >
                <div className="mx-10 flex shrink-0 items-center justify-center pointer-events-none">
                  <img
                    src={logo.image}
                    alt={logo.description}
                    className={logo.className}
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  );
};

export { TechLogos };
