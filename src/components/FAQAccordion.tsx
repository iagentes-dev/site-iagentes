import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQAccordion = () => {
  const questions = [
    {
      q: "Quanto custa treinar um agente de IA?",
      a: "Setup inicial R$5k-15k (diagnóstico + treinamento + integração) + mensalidade R$1.5k-5k/agente (infra + suporte + evolução). Valor varia conforme complexidade, integrações e volume de uso. Orçamento personalizado após diagnóstico gratuito.",
    },
    {
      q: "Quanto tempo até o agente estar funcionando?",
      a: "2-4 semanas (agente simples), 4-8 semanas (agente complexo com múltiplas integrações). Entregamos MVP funcional em 2 semanas, refinamos conforme feedback real.",
    },
    {
      q: "O agente vai errar muito no início?",
      a: "Fase inicial tem supervisão — monitoramos conversas, ajustamos respostas, treinamos com casos reais. Taxa de acerto >80% na primeira semana, >90% após 30 dias de evolução contínua.",
    },
    {
      q: "Consigo integrar com WhatsApp, CRM, Email?",
      a: "Sim. Integramos com WhatsApp Business, Telegram, Email, CRMs principais (Pipedrive, HubSpot, RD Station), Google Calendar, Slack, Discord, sistemas via API.",
    },
    {
      q: "E se o agente não souber responder algo?",
      a: "Configuramos fallback inteligente — agente transfere para humano, agenda callback ou coleta info e envia notificação pro time. Nunca deixa cliente sem resposta.",
    },
    {
      q: "Meu time vai perder controle do atendimento?",
      a: "Não. Você tem dashboard completo — vê todas conversas, intervém quando quiser, analisa métricas. Agente é assistente, não substituto cego.",
    },
    {
      q: "Como garantem segurança das conversas?",
      a: "Infra dedicada, criptografia end-to-end, compliance LGPD completo, logs auditáveis. Dados nunca usados para treinar modelos públicos — tudo privado.",
    },
    {
      q: "Posso cancelar quando quiser?",
      a: "Sim. Sem fidelidade. Aviso prévio 30 dias. Exportamos histórico completo de conversas, treinamento, integrações. Zero lock-in.",
    },
    {
      q: "Qual diferença de chatbot comum?",
      a: "Chatbot genérico: fluxos fixos, respostas engessadas, zero contexto. Nosso agente: treinado com seu negócio, integrado com sistemas, aprende com uso, toma ações (agenda, qualifica, acessa CRM).",
    },
  ];

  return (
    <section id="faq" className="py-24 px-4 bg-muted/30">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Perguntas Frequentes
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Tire suas dúvidas sobre treinamento de agentes de IA e processo de automação
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Accordion type="single" collapsible className="space-y-4">
            {questions.map((item, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-card border border-border rounded-xl px-6 hover:border-primary/50 transition-all hover:shadow-md"
              >
                <AccordionTrigger className="text-left font-semibold text-foreground hover:text-primary">
                  {item.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pt-2">
                  {item.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQAccordion;
