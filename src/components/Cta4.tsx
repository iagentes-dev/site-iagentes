import { ArrowRight, Check } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Cta4Props {
  title?: string;
  description?: string;
  buttonText?: string;
  items?: string[];
  onButtonClick?: () => void;
}

const defaultItems = [
  "Diagnóstico gratuito de processos",
  "Design personalizado do agente",
  "Treinamento com conhecimento do seu negócio",
  "Integração completa com sistemas existentes",
  "Suporte dedicado + evolução contínua",
];

export const Cta4 = ({
  title = "Pronto para Automatizar Com Inteligência?",
  description = "Agende uma conversa estratégica sem compromisso. Vamos entender suas dores e mostrar como um agente de IA pode transformar seu atendimento.",
  buttonText = "Quero Diagnóstico Gratuito",
  items = defaultItems,
  onButtonClick,
}: Cta4Props) => {
  const handleClick = () => {
    if (onButtonClick) {
      onButtonClick();
    } else {
      const contactSection = document.getElementById('contact');
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <section className="py-32">
      <div className="container mx-auto">
        <div className="flex justify-center">
          <div className="max-w-5xl">
            <div className="flex flex-col items-start justify-between gap-8 rounded-lg bg-card border border-border px-6 py-10 md:flex-row lg:px-20 lg:py-16 shadow-lg">
              <div className="md:w-1/2">
                <h4 className="mb-1 text-2xl font-bold md:text-3xl text-foreground">{title}</h4>
                <p className="text-muted-foreground">{description}</p>
                <Button className="mt-6" onClick={handleClick}>
                  {buttonText} <ArrowRight className="size-4" />
                </Button>
              </div>
              <div className="md:w-1/3">
                <ul className="flex flex-col space-y-2 text-sm font-medium">
                  {items.map((item, idx) => (
                    <li className="flex items-center" key={idx}>
                      <Check className="mr-4 size-4 flex-shrink-0 text-primary" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
