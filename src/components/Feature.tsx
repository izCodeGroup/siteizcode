import { useRef } from "react";
import { ArrowRight, Clock, MessageCircle, Shield, Star, Users, Zap } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { WHATSAPP_HREF } from "@/lib/contact";

const Features = () => {
  const sectionRef = useRef<HTMLElement>(null);
  useScrollReveal(sectionRef, { stagger: 0.09, y: 36, scaleFrom: 0.91 });
  
  const principles = [
    "Escopo e prioridade definidos antes de iniciar.",
    "Entregas curtas com validação contínua.",
    "Comunicação simples para decisão rápida.",
  ];

  const features = [
    {
      icon: <Zap className="h-5 w-5 text-awful-accent" />,
      title: "Entregas em etapas",
      sentence: "Resultado visível antes da próxima fase.",
    },
    {
      icon: <Star className="h-5 w-5 text-awful-accent" />,
      title: "Experiência que converte",
      sentence: "Jornada clara para reduzir atrito e aumentar conversão.",
    },
    {
      icon: <Shield className="h-5 w-5 text-awful-accent" />,
      title: "Tecnologia transparente",
      sentence: "Stack documentada para facilitar manutenção e evolução.",
    },
    {
      icon: <Users className="h-5 w-5 text-awful-accent" />,
      title: "Quem vende, entrega",
      sentence: "A mesma equipe acompanha o projeto do início ao fim.",
    },
    {
      icon: <Clock className="h-5 w-5 text-awful-accent" />,
      title: "Depois do lançamento",
      sentence: "Suporte contínuo para ajustes e novas melhorias.",
    },
  ];

  return (
    <section
      ref={sectionRef}
      id="features"
      className="scroll-mt-24 border-t border-white/10 bg-awful-bg py-24 md:py-32"
    >
      <div className="container-custom">
        <p data-reveal className="font-mono text-[11px] font-semibold uppercase tracking-[0.3em] text-awful-accent">
          Método
        </p>
        <h2
          data-reveal
          className="mt-4 max-w-4xl font-display text-4xl font-semibold leading-[1.05] tracking-tight text-awful-fg sm:text-5xl"
        >
          Como garantimos clareza, ritmo e previsibilidade.
        </h2>

        <ul className="mt-10 space-y-3 text-awful-muted sm:text-lg">
          {principles.map((item) => (
            <li key={item} data-reveal className="flex items-start gap-3">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-awful-accent" aria-hidden />
              {item}
            </li>
          ))}
        </ul>

        <div className="mt-14 divide-y divide-white/10 border-y border-white/10">
          {features.map((feature) => (
            <article
              key={feature.title}
              data-reveal
              className="flex flex-col gap-4 py-7 sm:py-8 md:flex-row md:items-center md:justify-between"
            >
              <div className="flex max-w-2xl items-start gap-4">
                <span className="mt-1 shrink-0 text-awful-accent" aria-hidden>
                  {feature.icon}
                </span>
                <div>
                  <h3 className="font-display text-xl font-semibold tracking-tight text-awful-fg sm:text-2xl">
                    {feature.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-awful-muted sm:text-base">
                    {feature.sentence}
                  </p>
                </div>
              </div>
              <a
                href="#cta"
                className="inline-flex w-full items-center justify-between gap-2 text-sm font-semibold text-awful-accent transition-colors hover:text-awful-accent-dim sm:w-fit sm:justify-start"
              >
                Entender próximo passo
                <ArrowRight className="h-4 w-4" aria-hidden />
              </a>
            </article>
          ))}
        </div>

        <div data-reveal className="mt-12">
          <a
            href={WHATSAPP_HREF}
            target="_blank"
            rel="noreferrer"
            className="awful-btn-outline w-full justify-center text-sm sm:w-auto"
          >
            <MessageCircle className="h-4 w-4" aria-hidden />
            Falar com a izcode
          </a>
        </div>
      </div>
    </section>
  );
};

export default Features;
