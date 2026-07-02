import {
  useCallback,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from "react";
import {
  AnimatePresence,
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  type PanInfo,
  type Variants,
} from "framer-motion";
import { ArrowUpRight, MessageCircle } from "lucide-react";
import { gsap } from "@/lib/gsap";
import { WHATSAPP_HREF } from "@/lib/contact";

type CaseImage = {
  src: string;
  alt: string;
  position: string;
  kind?: "image" | "video";
};

type ProjectCase = {
  id: string;
  title: string;
  description: string;
  url?: string;
  gallery?: "default" | "mobile" | "split";
  tags: string[];
  details: Array<{ label: string; value: string }>;
  images: CaseImage[];
};

const projectCases: ProjectCase[] = [
  {
    id: "01",
    title: "Landing Page Profissional",
    description:
      "Landing page desenvolvida para apresentar o atendimento com clareza, elevar a percepção de confiança e conduzir o visitante até o agendamento.",
    tags: ["Landing page", "Saúde e estética", "Conversão"],
    details: [
      { label: "Experiência", value: "Institucional premium" },
      { label: "Foco", value: "Autoridade e contato" },
      { label: "Fluxo", value: "Agendamento via WhatsApp" },
    ],
    images: [
      {
        src: "/fotolandingpage.png",
        alt: "Hero da landing page profissional",
        position: "center",
      },
      {
        src: "/landingpage-2.png",
        alt: "Seção sobre o médico da landing page profissional",
        position: "center top",
      },
      {
        src: "/landingpage-3.png",
        alt: "Seção de procedimentos da landing page profissional",
        position: "center",
      },
    ],
  },
  {
    id: "02",
    title: "Link Bio Profissional",
    gallery: "mobile",
    description:
      "Página mobile-first para centralizar WhatsApp, Instagram, catálogo e contatos em uma experiência direta, refinada e pronta para converter.",
    tags: ["Link Bio", "Mobile-first", "Contatos"],
    details: [
      { label: "Experiência", value: "Navegação rápida" },
      { label: "Foco", value: "Conversão de audiência" },
      { label: "Canais", value: "WhatsApp, redes e catálogo" },
    ],
    images: [
      {
        src: "/linkbio-1.png",
        alt: "Link Bio profissional de Angélica Maciel",
        position: "center top",
      },
      {
        src: "/linkbio-2.png",
        alt: "Link Bio profissional de Gabriela Neves",
        position: "center top",
      },
    ],
  },
  {
    id: "03",
    title: "Sistemas Desktop",
    url: "https://gestortrip.vercel.app/",
    description:
      "Sistema desktop para agências de turismo, organizadores de excursões e gestores de viagens. Controle clientes, viagens e pagamentos — tudo em um só lugar, sem precisar de internet.",
    tags: ["Sistema desktop", "Turismo", "Offline", "Gestão"],
    details: [
      { label: "Produto", value: "Sistema para desktop" },
      { label: "Operação", value: "Funciona sem internet" },
      { label: "Controle", value: "Clientes, viagens e pagamentos" },
    ],
    images: [
      {
        kind: "video",
        src: "/demoog.mp4",
        alt: "Demonstração do sistema desktop para gerenciamento de viagens",
        position: "center",
      },
    ],
  },
  {
    id: "04",
    title: "E-commerce",
    url: "https://noowaystore.vercel.app/",
    gallery: "split",
    description:
      "Loja virtual moderna para apresentar produtos com uma experiência visual direta, elegante e pensada para transformar navegação em compra.",
    tags: ["E-commerce", "Loja virtual", "Catálogo", "Conversão"],
    details: [
      { label: "Produto", value: "Storefront responsivo" },
      { label: "Foco", value: "Apresentação de produtos" },
      { label: "Experiência", value: "Compra simples e visual premium" },
    ],
    images: [
      {
        src: "/Captura%20de%20tela%202026-06-11%20203321.png",
        alt: "Tela da Nooway Store com vitrine de produtos",
        position: "center top",
      },
      {
        src: "/Captura%20de%20tela%202026-06-11%20203254.png",
        alt: "Tela da Nooway Store com navegação e produtos",
        position: "center top",
      },
    ],
  },
];

const showcaseChapters = [
  "Estratégia visual",
  "Interface com intenção",
  "Entrega em produção",
];

const premiumEase: [number, number, number, number] = [0.22, 1, 0.36, 1];

const wrapIndex = (index: number) => (index + projectCases.length) % projectCases.length;

type CasePosition = "left" | "center" | "right" | "hidden";

const getCasePosition = (index: number, activeIndex: number, direction: number): CasePosition => {
  if (index === activeIndex) return "center";

  if (projectCases.length === 2) {
    return direction >= 0 ? "left" : "right";
  }

  let offset = index - activeIndex;
  const half = projectCases.length / 2;

  if (offset > half) offset -= projectCases.length;
  if (offset < -half) offset += projectCases.length;

  if (offset === -1) return "left";
  if (offset === 1) return "right";
  return "hidden";
};

const cardVariants: Variants = {
  center: {
    x: "-50%",
    y: 0,
    z: 0,
    rotateY: 0,
    scale: 1,
    opacity: 1,
    filter: "blur(0px) saturate(1)",
    transition: {
      type: "spring" as const,
      stiffness: 92,
      damping: 23,
      mass: 1.08,
      opacity: { duration: 0.65 },
      filter: { duration: 0.78 },
    },
  },
  left: {
    x: "-111%",
    y: 20,
    z: -250,
    rotateY: 10,
    scale: 0.825,
    opacity: 0.36,
    filter: "blur(3.2px) saturate(0.74)",
    transition: {
      type: "spring" as const,
      stiffness: 82,
      damping: 24,
      mass: 1.16,
      opacity: { duration: 0.62 },
      filter: { duration: 0.7 },
    },
  },
  right: {
    x: "11%",
    y: 24,
    z: -230,
    rotateY: -10,
    scale: 0.845,
    opacity: 0.46,
    filter: "blur(2.4px) saturate(0.8)",
    transition: {
      type: "spring" as const,
      stiffness: 82,
      damping: 24,
      mass: 1.16,
      opacity: { duration: 0.62 },
      filter: { duration: 0.7 },
    },
  },
  hidden: {
    x: "-50%",
    y: 44,
    z: -360,
    rotateY: 0,
    scale: 0.72,
    opacity: 0,
    filter: "blur(8px) saturate(0.6)",
    transition: { duration: 0.5, ease: premiumEase },
  },
};

const copyVariants: Variants = {
  center: {
    opacity: 1,
    transition: {
      delayChildren: 0.18,
      staggerChildren: 0.07,
    },
  },
  peek: {
    opacity: 0.22,
    transition: {
      staggerChildren: 0.025,
      staggerDirection: -1,
    },
  },
};

const copyItemVariants: Variants = {
  center: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.68, ease: premiumEase },
  },
  peek: {
    opacity: 0,
    y: 18,
    filter: "blur(7px)",
    transition: { duration: 0.34, ease: "easeOut" },
  },
};

const galleryVariants: Variants = {
  center: {
    transition: { staggerChildren: 0.075, delayChildren: 0.08 },
  },
  peek: {
    transition: { staggerChildren: 0.03, staggerDirection: -1 },
  },
};

const shotVariants: Variants = {
  center: {
    opacity: 1,
    y: 0,
    scale: 1,
    filter: "blur(0px)",
    transition: { duration: 0.82, ease: premiumEase },
  },
  peek: {
    opacity: 0.72,
    y: 20,
    scale: 0.986,
    filter: "blur(2px)",
    transition: { duration: 0.52, ease: premiumEase },
  },
};

const CaseGallery = ({ project, active }: { project: ProjectCase; active: boolean }) => (
  <motion.div
    className={`showcase-gallery ${
      project.gallery === "mobile" ? "showcase-gallery-mobile" : project.gallery === "split" ? "showcase-gallery-split" : ""
    }`}
    aria-label={`Galeria do projeto ${project.title}`}
    variants={galleryVariants}
    initial={false}
    animate={active ? "center" : "peek"}
  >
    {project.images.map((image, index) => (
      <motion.figure
        key={image.src}
        data-case-shot
        className={`showcase-shot ${index === 0 ? "showcase-shot-main" : "showcase-shot-secondary"}`}
        variants={shotVariants}
      >
        {image.kind === "video" ? (
          <video
            data-case-image
            src={image.src}
            aria-label={image.alt}
            style={{ objectPosition: image.position }}
            className="showcase-video"
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
          />
        ) : (
          <img
            data-case-image
            src={image.src}
            alt={image.alt}
            style={{ objectPosition: image.position }}
            loading={index === 0 ? "eager" : "lazy"}
            decoding="async"
          />
        )}
      </motion.figure>
    ))}
  </motion.div>
);

const CaseCard = ({
  project,
  position,
  onSelect,
}: {
  project: ProjectCase;
  position: CasePosition;
  onSelect: () => void;
}) => {
  const active = position === "center";

  return (
  <motion.article
    data-showcase-card
    data-slot={position === "center" ? 0 : position === "left" ? -1 : 1}
    data-position={position}
    aria-hidden={!active}
    className={`showcase-card ${active ? "is-active" : "is-peek"}`}
    variants={cardVariants}
    initial={false}
    animate={position}
    whileHover={active ? { y: -3, scale: 1.006 } : undefined}
  >
    <AnimatePresence initial={false}>
      {active && (
        <motion.span
          key={`${project.id}-focus`}
          className="showcase-focus"
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.985 }}
          transition={{ duration: 0.85, ease: premiumEase }}
          aria-hidden
        />
      )}
    </AnimatePresence>

    {!active && (
      <button
        type="button"
        className="showcase-peek-hit"
        onClick={onSelect}
        aria-label={`Abrir case ${project.title}`}
      />
    )}

    <CaseGallery project={project} active={active} />

    <motion.div
      className="showcase-copy"
      variants={copyVariants}
      initial={false}
      animate={active ? "center" : "peek"}
    >
      <motion.p variants={copyItemVariants} data-case-motion className="showcase-index">
        Case {project.id}
      </motion.p>
      <motion.h3 variants={copyItemVariants} data-case-motion>
        {project.title}
      </motion.h3>
      <motion.p variants={copyItemVariants} data-case-motion className="showcase-description">
        {project.description}
      </motion.p>

      <motion.div variants={copyItemVariants} data-case-motion className="showcase-tags" aria-label="Categorias do projeto">
        {project.tags.map((tag) => (
          <motion.span key={tag} variants={copyItemVariants}>
            {tag}
          </motion.span>
        ))}
      </motion.div>

      <motion.dl variants={copyItemVariants} data-case-motion className="showcase-details">
        {project.details.map((detail) => (
          <motion.div key={detail.label} variants={copyItemVariants}>
            <dt>{detail.label}</dt>
            <dd>{detail.value}</dd>
          </motion.div>
        ))}
      </motion.dl>

      <motion.a
        variants={copyItemVariants}
        data-case-motion
        href={project.url ?? "#cta"}
        target={project.url ? "_blank" : undefined}
        rel={project.url ? "noreferrer" : undefined}
        className="showcase-link"
      >
        Ver projeto
        <ArrowUpRight className="h-4 w-4" aria-hidden />
      </motion.a>
    </motion.div>
  </motion.article>
  );
};

const Services = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const stageRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(-1);
  const [paused, setPaused] = useState(false);
  const deckX = useMotionValue(0);
  const deckTilt = useTransform(deckX, [-260, 0, 260], [3.4, 0, -3.4]);
  const deckTiltSpring = useSpring(deckTilt, { stiffness: 120, damping: 20, mass: 0.7 });
  const deckLight = useTransform(deckX, [-260, 0, 260], [0.65, 1, 0.65]);

  const goTo = useCallback((index: number) => {
    const target = wrapIndex(index);
    if (target === activeIndex) return;

    const forward = wrapIndex(activeIndex + 1) === target;
    setDirection(forward ? 1 : -1);
    setActiveIndex(target);
  }, [activeIndex]);

  const showNext = useCallback(() => {
    setDirection(1);
    setActiveIndex((index) => wrapIndex(index + 1));
  }, []);

  const showPrevious = useCallback(() => {
    setDirection(-1);
    setActiveIndex((index) => wrapIndex(index - 1));
  }, []);

  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (paused || reduceMotion || projectCases.length < 2) return;

    const timer = window.setInterval(showNext, 6800);
    return () => window.clearInterval(timer);
  }, [paused, showNext]);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion) return;

    const ctx = gsap.context(() => {
      gsap.from("[data-cases-reveal]", {
        autoAlpha: 0,
        y: 28,
        duration: 0.8,
        stagger: 0.11,
        ease: "power3.out",
        scrollTrigger: {
          trigger: section,
          start: "top 80%",
        },
      });

      gsap.from("[data-showcase-stage]", {
        autoAlpha: 0,
        y: 42,
        scale: 0.985,
        duration: 1.05,
        ease: "power3.out",
        scrollTrigger: {
          trigger: section,
          start: "top 72%",
        },
      });
    }, section);

    return () => ctx.revert();
  }, []);

  useLayoutEffect(() => {
    const stage = stageRef.current;
    if (!stage) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion) return;

    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>('[data-slot="0"] [data-case-image]').forEach((image) => {
        gsap.fromTo(
          image,
          { yPercent: -1.4 },
          {
            yPercent: 1.4,
            ease: "none",
            scrollTrigger: {
              trigger: image,
              start: "top bottom",
              end: "bottom top",
              scrub: 0.85,
            },
          }
        );
      });
    }, stage);

    return () => ctx.revert();
  }, [activeIndex]);

  const startDrag = () => {
    setPaused(true);
  };

  const finishDrag = (_event: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
    if (info.offset.x < -72 || info.velocity.x < -520) showNext();
    if (info.offset.x > 72 || info.velocity.x > 520) showPrevious();
    setPaused(false);
  };

  return (
    <section ref={sectionRef} id="services" className="cases-section scroll-mt-24">
      <div className="container-custom relative z-10">
        <div className="showcase-heading">
          <div>
            <p data-cases-reveal className="showcase-eyebrow">
              Cases / Produto em cena
            </p>
            <h2 data-cases-reveal>Interfaces que contam o valor antes do primeiro contato.</h2>
            <p data-cases-reveal>
              Um reel de projetos entregues: estratégia, imagem e fluxo comercial organizados para
              transformar atenção em confiança.
            </p>
          </div> 
        </div>

        <div
          ref={stageRef}
          data-showcase-stage
          className="showcase-stage"
          onPointerEnter={() => setPaused(true)}
          onPointerLeave={() => setPaused(false)}
          onFocusCapture={() => setPaused(true)}
          onBlurCapture={() => setPaused(false)}
        >
          <motion.div
            className="showcase-slides"
            style={{ x: deckX, rotateY: deckTiltSpring }}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.18}
            dragMomentum
            dragSnapToOrigin
            dragTransition={{ bounceStiffness: 180, bounceDamping: 24, timeConstant: 240 }}
            onDragStart={startDrag}
            onDragEnd={finishDrag}
          >
            <motion.span className="showcase-stage-light" style={{ opacity: deckLight }} aria-hidden />
            {projectCases.map((project, index) => (
              <CaseCard
                key={project.id}
                project={project}
                position={getCasePosition(index, activeIndex, direction)}
                onSelect={() => goTo(index)}
              />
            ))}
          </motion.div>

        </div>

        <div data-cases-reveal className="cases-footer showcase-footer">
          <p>
            Um portfólio com respiro: projetos reais, imagens protagonistas e movimento discreto para sustentar a percepção premium.
          </p>
          <a href={WHATSAPP_HREF} target="_blank" rel="noreferrer" className="awful-btn-primary cases-cta">
            <MessageCircle className="h-4 w-4" aria-hidden />
            Quero um projeto assim
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;
