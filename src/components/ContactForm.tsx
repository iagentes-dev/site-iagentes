import { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Lock, Loader2 } from "lucide-react";
import { API_ENDPOINTS } from "@/config/endpoints";

const formSchema = z.object({
  nome: z.string().min(2, "Nome deve ter pelo menos 2 caracteres").max(100),
  email: z.string().email("Email inválido").max(255),
  empresa: z.string().min(2, "Nome da empresa é obrigatório").max(100),
  telefone: z.string().min(10, "Telefone inválido").max(20),
  mensagem: z.string().min(10, "Mensagem deve ter pelo menos 10 caracteres").max(1000),
});

type FormData = z.infer<typeof formSchema>;

const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);

    try {
      const response = await fetch(API_ENDPOINTS.CONTACT_FORM, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error('Erro ao enviar formulário');
      }

      const result = await response.json();

      toast({
        title: "Mensagem enviada!",
        description: result.message || "Entraremos em contato em breve.",
      });

      reset();
    } catch (error: any) {
      console.error('Error submitting form:', error);
      toast({
        title: "Erro ao enviar",
        description: error.message || "Tente novamente mais tarde.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 px-4 bg-gradient-to-br from-primary via-primary/95 to-primary/90 dark:from-[hsl(350,100%,25%)] dark:via-[hsl(350,95%,22%)] dark:to-[hsl(350,90%,20%)]">
      <div className="container mx-auto max-w-2xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <div className="inline-block px-4 py-1.5 mb-6 rounded-full bg-white/30 border border-white/40 backdrop-blur-sm">
            <span className="text-sm font-semibold text-white drop-shadow-md">Diagnóstico Gratuito</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 drop-shadow-[0_2px_10px_rgba(0,0,0,0.3)]">
            Vamos Treinar Seu Agente de IA
          </h2>
          <p className="text-xl text-white max-w-2xl mx-auto drop-shadow-[0_2px_8px_rgba(0,0,0,0.25)]">
            Agende uma conversa sem compromisso. Vamos entender seu processo e mostrar como um agente pode transformar seu negócio.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-card p-8 rounded-2xl shadow-2xl"
        >
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div>
              <Input
                {...register("nome")}
                placeholder="Nome completo"
                className="h-12"
                disabled={isSubmitting}
              />
              {errors.nome && (
                <p className="text-destructive text-sm mt-1">{errors.nome.message}</p>
              )}
            </div>

            <div>
              <Input
                {...register("email")}
                type="email"
                placeholder="Email corporativo"
                className="h-12"
                disabled={isSubmitting}
              />
              {errors.email && (
                <p className="text-destructive text-sm mt-1">{errors.email.message}</p>
              )}
            </div>

            <div>
              <Input
                {...register("empresa")}
                placeholder="Empresa"
                className="h-12"
                disabled={isSubmitting}
              />
              {errors.empresa && (
                <p className="text-destructive text-sm mt-1">{errors.empresa.message}</p>
              )}
            </div>

            <div>
              <Input
                {...register("telefone")}
                type="tel"
                placeholder="Telefone (WhatsApp)"
                className="h-12"
                disabled={isSubmitting}
              />
              {errors.telefone && (
                <p className="text-destructive text-sm mt-1">{errors.telefone.message}</p>
              )}
            </div>

            <div>
              <Textarea
                {...register("mensagem")}
                placeholder="Conte brevemente qual processo quer automatizar (atendimento, vendas, suporte, etc.)"
                className="min-h-32 resize-none"
                disabled={isSubmitting}
              />
              {errors.mensagem && (
                <p className="text-destructive text-sm mt-1">{errors.mensagem.message}</p>
              )}
            </div>

            <Button
              type="submit"
              size="lg"
              className="w-full h-14 text-base font-bold uppercase"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                  Enviando...
                </>
              ) : (
                "QUERO TREINAR MEU AGENTE"
              )}
            </Button>

            <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
              <Lock className="w-4 h-4" />
              <span>Dados seguros. LGPD compliant. Resposta em 24h úteis.</span>
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactForm;
