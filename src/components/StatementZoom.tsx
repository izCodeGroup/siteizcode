const stats = [
  { value: "24h", label: "Primeiro retorno", hint: "horário comercial" },
  { value: "100%", label: "Por escrito", hint: "escopo e entregas" },
  { value: "50+", label: "Projetos", hint: "sites, CRMs, sistemas" },
];

const StatementZoom = () => {
  return (
    <section
      className="relative z-0 border-t border-white/10 bg-awful-bg py-24 md:py-32"
      aria-labelledby="statement-heading"
    >
      <div className="pointer-events-none absolute inset-0 opacity-[0.25]" aria-hidden>
        <div className="tech-grid-bg absolute inset-0" />
      </div>

      <div className="container-custom relative z-[1]">
        <div className="mx-auto max-w-4xl text-center">
          <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.35em] text-awful-accent">
            O mesmo salto
          </p>
          <h2
            id="statement-heading"
            className="awful-display-large mt-10 text-awful-fg"
          >
            Você define o rumo.
          </h2>
          <p className="mt-4 font-display text-[clamp(1.75rem,5vw,3.5rem)] font-semibold leading-tight tracking-tight text-awful-muted">
            A gente entrega o software.
          </p>
          <p className="mx-auto mt-10 max-w-lg text-sm leading-relaxed text-awful-muted md:text-base">
            Inspirados em quem trata produto digital como vantagem estrutural — não como anexo
            ao negócio.
          </p>
        </div>

        <div className="mt-16 flex flex-wrap justify-center gap-10 md:mt-20 md:gap-14">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <div className="font-display text-4xl font-bold tabular-nums text-awful-accent md:text-5xl">
                {s.value}
              </div>
              <div className="mt-1 text-sm font-medium text-awful-fg">{s.label}</div>
              <div className="mt-0.5 font-mono text-[10px] uppercase tracking-wider text-awful-muted">
                {s.hint}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatementZoom;
