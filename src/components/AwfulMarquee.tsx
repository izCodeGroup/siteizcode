const PHRASES = [
  "Software sob medida",
  "CRM que acompanha o negócio",
  "Proposta antes do build",
  "Da ideia à produção",
  "izcode · Brasil",
];

const AwfulMarquee = () => {
  const doubled = [...PHRASES, ...PHRASES];

  return (
    <div
      className="relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] w-screen overflow-hidden border-y border-white/10 bg-awful-bg py-10"
      aria-hidden
    >
      <div className="awful-marquee-track">
        {doubled.map((text, i) => (
          <span
            key={`${text}-${i}`}
            className={`shrink-0 px-12 font-display text-[clamp(1.35rem,3.5vw,2.75rem)] font-semibold ${
              i % PHRASES.length === 0 ? "text-awful-accent opacity-100" : "text-awful-muted opacity-[0.28]"
            }`}
          >
            {text}
          </span>
        ))}
      </div>
    </div>
  );
};

export default AwfulMarquee;
