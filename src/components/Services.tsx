import { useRef } from "react";
import { ArrowRight, MessageCircle } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { WHATSAPP_HREF } from "@/lib/contact";

const Services = () => {
  const sectionRef = useRef<HTMLElement>(null);
  useScrollReveal(sectionRef, { stagger: 0.11, y: 40, scaleFrom: 0.92 });

  const services = [
    {
      step: "01",
      title: "Desenvolvimento para startups",
      sentence: "Do MVP ao crescimento, com validação rápida e evolução por ciclos curtos.",
      action: "Iniciar com MVP",
    },
    {
      step: "02",
      title: "CRM personalizado",
      sentence: "Funil e relatórios adaptados ao seu processo real, sem ferramenta genérica.",
      action: "Estruturar CRM",
    },
    {
      step: "03",
      title: "Soluções sob medida",
      sentence: "Automação e sistemas internos com escopo fechado antes da primeira linha de código.",
      action: "Mapear automação",
    },
  ];

  return (
    <section
      ref={sectionRef}
      id="services"
      className="scroll-mt-24 border-t border-white/10 bg-awful-bg py-24 md:py-32"
    >
      <div className="container-custom">
        <p data-reveal className="font-mono text-[11px] font-semibold uppercase tracking-[0.3em] text-awful-accent">
          O que fazemos
        </p>
        <h2
          data-reveal
          className="mt-4 max-w-4xl font-display text-4xl font-semibold leading-[1.05] tracking-tight text-awful-fg sm:text-5xl md:text-6xl"
        >
          Engenharia com proposta antes do build.
        </h2>

        <p data-reveal className="mt-5 max-w-2xl text-sm leading-relaxed text-awful-muted sm:text-base">
          Você escolhe a frente inicial. A gente transforma em plano objetivo, entrega e acompanhamento.
        </p>

        <div data-reveal className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-awful-muted">
          <span className="font-mono uppercase tracking-[0.22em] text-awful-accent">frentes</span>
          <span>Startups</span>
          <span className="h-1 w-1 rounded-full bg-white/30" aria-hidden />
          <span>CRM</span>
          <span className="h-1 w-1 rounded-full bg-white/30" aria-hidden />
          <span>Automação</span>
        </div>

        <div className="mt-12 border-t border-white/10">
          {services.map((service) => (
            <article
              key={service.title}
              data-reveal
              className="grid gap-4 border-b border-white/10 py-8 sm:py-10 md:grid-cols-[70px_minmax(0,1fr)_auto] md:items-center md:gap-8"
            >
              <p className="font-mono text-sm font-semibold tracking-[0.2em] text-awful-accent">{service.step}</p>
              <div className="max-w-3xl">
                <h3 className="font-display text-2xl font-semibold tracking-tight text-awful-fg sm:text-3xl">
                  {service.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-awful-muted sm:text-base">{service.sentence}</p>
              </div>
              <a
                href={WHATSAPP_HREF}
                target="_blank"
                rel="noreferrer"
                className="inline-flex w-full items-center justify-between gap-2 text-sm font-semibold text-awful-accent transition-colors hover:text-awful-accent-dim sm:w-fit sm:justify-start md:justify-self-end"
              >
                {service.action}
                <ArrowRight className="h-4 w-4" aria-hidden />
              </a>
            </article>
          ))}
        </div>

        <div data-reveal className="mt-10 pt-2">
          <a
            href={WHATSAPP_HREF}
            target="_blank"
            rel="noreferrer"
            className="awful-btn-primary w-full justify-center text-sm sm:w-auto"
          >
            <MessageCircle className="h-4 w-4" aria-hidden />
            Pedir proposta
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;
