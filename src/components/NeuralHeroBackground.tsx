const edges = [
  "M76 348 C178 250 288 278 382 208",
  "M118 486 C248 438 315 512 444 432",
  "M208 166 C336 218 420 118 548 194",
  "M384 208 C504 296 562 262 674 336",
  "M444 432 C562 368 612 470 740 418",
  "M548 194 C648 132 748 178 848 126",
  "M674 336 C792 268 836 328 952 254",
  "M740 418 C864 500 934 438 1068 512",
  "M848 126 C958 190 1010 140 1132 218",
  "M952 254 C1026 314 1072 352 1140 438",
  "M238 628 C390 594 482 662 616 572",
  "M616 572 C728 520 842 620 978 558",
  "M76 348 C216 380 304 344 384 208",
  "M382 208 C410 318 468 370 444 432",
  "M674 336 C660 438 654 504 616 572",
  "M952 254 C940 372 944 474 978 558",
];

const nodes = [
  { x: 76, y: 348, r: 4 },
  { x: 118, y: 486, r: 5 },
  { x: 208, y: 166, r: 4 },
  { x: 238, y: 628, r: 4 },
  { x: 382, y: 208, r: 7 },
  { x: 444, y: 432, r: 8 },
  { x: 548, y: 194, r: 5 },
  { x: 616, y: 572, r: 7 },
  { x: 674, y: 336, r: 9 },
  { x: 740, y: 418, r: 5 },
  { x: 848, y: 126, r: 7 },
  { x: 952, y: 254, r: 8 },
  { x: 978, y: 558, r: 6 },
  { x: 1068, y: 512, r: 4 },
  { x: 1132, y: 218, r: 5 },
  { x: 1140, y: 438, r: 4 },
];

const NeuralHeroBackground = () => {
  return (
    <div className="neural-hero-bg absolute inset-0 overflow-hidden" aria-hidden="true">
      <div className="neural-hero-bg__aura" />
      <svg
        className="neural-hero-bg__graph"
        viewBox="0 0 1200 760"
        preserveAspectRatio="xMidYMid slice"
        role="presentation"
      >
        <defs>
          <radialGradient id="neural-node-core" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="rgba(232, 248, 255, 1)" />
            <stop offset="42%" stopColor="rgba(51, 153, 255, 0.9)" />
            <stop offset="100%" stopColor="rgba(51, 153, 255, 0)" />
          </radialGradient>
          <linearGradient id="neural-edge" x1="0%" x2="100%" y1="0%" y2="0%">
            <stop offset="0%" stopColor="rgba(51, 153, 255, 0)" />
            <stop offset="45%" stopColor="rgba(151, 211, 255, 0.42)" />
            <stop offset="100%" stopColor="rgba(51, 153, 255, 0)" />
          </linearGradient>
          <linearGradient id="neural-pulse" x1="0%" x2="100%" y1="0%" y2="0%">
            <stop offset="0%" stopColor="rgba(255, 255, 255, 0)" />
            <stop offset="48%" stopColor="rgba(255, 255, 255, 0.95)" />
            <stop offset="100%" stopColor="rgba(51, 153, 255, 0)" />
          </linearGradient>
          <filter id="neural-soft-glow" x="-40%" y="-40%" width="180%" height="180%">
            <feGaussianBlur stdDeviation="7" result="blur" />
            <feColorMatrix
              in="blur"
              type="matrix"
              values="0 0 0 0 0.2 0 0 0 0 0.58 0 0 0 0 1 0 0 0 0.85 0"
            />
            <feMerge>
              <feMergeNode />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        <g className="neural-hero-bg__edges">
          {edges.map((edge, index) => (
            <path key={`edge-${index}`} d={edge} />
          ))}
        </g>

        <g className="neural-hero-bg__pulses">
          {edges.slice(0, 12).map((edge, index) => (
            <path key={`pulse-${index}`} d={edge} style={{ animationDelay: `${index * -0.7}s` }} />
          ))}
        </g>

        <g className="neural-hero-bg__nodes" filter="url(#neural-soft-glow)">
          {nodes.map((node, index) => (
            <g key={`node-${index}`} style={{ animationDelay: `${index * -0.18}s` }}>
              <circle cx={node.x} cy={node.y} r={node.r * 1.9} className="neural-hero-bg__node-halo" />
              <circle cx={node.x} cy={node.y} r={node.r * 0.58} className="neural-hero-bg__node-core" />
            </g>
          ))}
        </g>
      </svg>
      <div className="neural-hero-bg__vignette" />
    </div>
  );
};

export default NeuralHeroBackground;
