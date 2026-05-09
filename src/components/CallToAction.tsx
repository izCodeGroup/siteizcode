import { useRef } from "react";
import { ArrowRight, MessageCircle } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { WHATSAPP_HREF } from "@/lib/contact";

const CallToAction = () => {
  const sectionRef = useRef<HTMLElement>(null);
  useScrollReveal(sectionRef, { stagger: 0.1, y: 44, scaleFrom: 0.9 });

  return (
    <section
      ref={sectionRef}
      id="cta"
      className="scroll-mt-24 border-t border-white/10 bg-awful-bg py-24 md:py-32"
    >
      <div className="container-custom">
        <p data-reveal className="font-mono text-[11px] font-semibold uppercase tracking-[0.3em] text-awful-accent">
          Próximo passo
        </p>
        <h2
          data-reveal
          className="mt-5 max-w-4xl font-display text-[clamp(2rem,6vw,3.75rem)] font-bold leading-[1.05] tracking-tight text-awful-fg"
        >
          Envie seu cenário e receba proposta objetiva em até 24h úteis.
        </h2>
        <p data-reveal className="mt-6 max-w-2xl text-base leading-relaxed text-awful-muted sm:text-lg">
          Uma conversa direta para alinhar escopo, prazo e investimento sem fricção.
        </p>

        <div data-reveal className="mt-10 flex flex-col items-stretch gap-3 sm:flex-row sm:items-center">
          <a href={WHATSAPP_HREF} target="_blank" rel="noreferrer" className="awful-btn-primary w-full justify-center sm:w-auto">
            <MessageCircle className="h-4 w-4" aria-hidden />
            Chamar no WhatsApp
            <ArrowRight className="h-4 w-4" aria-hidden />
          </a>
          <a href="#services" className="awful-btn-outline w-full justify-center text-center sm:w-auto">
            Rever serviços
          </a>
        </div>

        <p data-reveal className="mt-6 font-mono text-xs text-awful-muted">
          Comercial · (31) 99173-2236
        </p>
      </div>
    </section>
  );
};

export default CallToAction;
