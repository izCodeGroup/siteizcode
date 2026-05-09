import { useRef } from "react";
import { useDemoTerminalGsap } from "@/hooks/useDemoTerminalGsap";

const lines: { label: string; detail: string }[] = [
  {
    label: "Você explica o que precisa",
    detail: "A gente traduz para um plano simples, com começo, meio e fim.",
  },
  {
    label: "Você acompanha sem complicação",
    detail: "Mostramos cada etapa em linguagem clara, sem termos técnicos.",
  },
  {
    label: "Você sabe o próximo passo",
    detail: "Prazo, investimento e entregas ficam combinados por escrito.",
  },
];

const DemoTerminal = () => {
  const sectionRef = useRef<HTMLElement>(null);
  useDemoTerminalGsap(sectionRef);

  return (
    <section
      ref={sectionRef}
      className="border-t border-white/10 bg-awful-bg py-20 md:py-28"
      aria-labelledby="terminal-demo-heading"
    >
      <div className="container-custom">
        <div className="max-w-3xl">
          <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.28em] text-awful-muted">
            Transparência
          </p>
          <h2
            id="terminal-demo-heading"
            className="mt-4 font-display text-3xl font-semibold tracking-tight text-awful-fg sm:text-4xl md:text-5xl"
          >
            Você acompanha o projeto com linguagem simples.
          </h2>
          <div data-terminal-shell className="mt-10 space-y-6">
            {lines.map((line, i) => (
              <div
                key={i}
                data-terminal-row
                className="border-b border-white/10 pb-5 font-mono text-[13px] leading-relaxed md:text-sm"
              >
                <div className="flex flex-wrap gap-x-3 gap-y-1">
                  <span className="shrink-0 text-awful-accent">•</span>
                  <span className="text-awful-fg">{line.label}</span>
                </div>
                <p className="pl-0 text-awful-muted md:pl-6">{line.detail}</p>
              </div>
            ))}
            <div data-terminal-caption className="flex items-center gap-2 font-mono text-xs text-awful-muted">
              <span className="inline-block h-2 w-2 rounded-full bg-awful-accent" />
              Atualização contínua até a entrega final
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DemoTerminal;
