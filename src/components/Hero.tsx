import { ArrowDown, ArrowRight, MessageCircle } from "lucide-react";
import { WHATSAPP_HREF } from "@/lib/contact";
import { ReactNode, useEffect, useRef } from "react";
import { gsap } from "@/lib/gsap";

type HeroProps = {
  children?: ReactNode;
};

const Hero = ({ children }: HeroProps) => {
  const heroSectionRef = useRef<HTMLElement>(null);
  const pinLayerRef = useRef<HTMLDivElement>(null);
  const leftRef = useRef<HTMLDivElement>(null);
  const rightRef = useRef<HTMLDivElement>(null);
  const heroContentRef = useRef<HTMLDivElement>(null);
  const contentSectionRef = useRef<HTMLElement>(null);
  const mainContentRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);
  const bracketsLayerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const heroSection = heroSectionRef.current;
    const pinLayer = pinLayerRef.current;
    const left = leftRef.current;
    const right = rightRef.current;
    const heroContent = heroContentRef.current;
    const contentSection = contentSectionRef.current;
    const mainContent = mainContentRef.current;
    const glow = glowRef.current;
    const bracketsLayer = bracketsLayerRef.current;

    if (!heroSection || !pinLayer || !left || !right || !heroContent || !contentSection || !mainContent || !glow || !bracketsLayer) return;

    const mm = gsap.matchMedia();
    const ctx = gsap.context(() => {
      mm.add(
        {
          desktop: "(min-width: 1024px)",
          mobile: "(max-width: 1023px)",
          phone: "(max-width: 639px)",
          reduceMotion: "(prefers-reduced-motion: reduce)",
        },
        (media) => {
          const isReduceMotion = Boolean(media.conditions?.reduceMotion);
          const isDesktop = Boolean(media.conditions?.desktop);
          const isPhone = Boolean(media.conditions?.phone);
          const initialBracketSize = isDesktop ? 192 : 128;
          const finalBracketSize = isDesktop ? 116 : 84;
          const sideGap = isDesktop ? 22 : isPhone ? 0 : 12;
          const travel = Math.max(0, window.innerWidth / 2 - finalBracketSize / 2 - sideGap);

          gsap.set([left, right], {
            left: "50%",
            top: "50%",
            xPercent: -50,
            yPercent: -50,
            x: 0,
            scale: 1,
            opacity: 1,
            filter: "blur(0px)",
            width: initialBracketSize,
            height: initialBracketSize,
          });
          gsap.set(left, {
            clipPath: "polygon(0 0, 50% 0, 50% 100%, 0 100%)",
          });
          gsap.set(right, {
            clipPath: "polygon(50% 0, 100% 0, 100% 100%, 50% 100%)",
          });
          gsap.set(glow, {
            left: "50%",
            top: "50%",
            xPercent: -50,
            yPercent: -50,
            opacity: 1,
            scale: 1,
          });
          gsap.set(bracketsLayer, { autoAlpha: 1 });
          gsap.set(contentSection, { y: 100, opacity: 0 });
          const sideSpaceExtra = isDesktop ? 14 : isPhone ? 4 : 14;
          mainContent.style.setProperty(
            "--bracket-side-space",
            `${finalBracketSize + sideGap + sideSpaceExtra}px`
          );

          if (isReduceMotion) {
            gsap.set([left, right], {
              left: "50%",
              top: "50%",
              xPercent: -50,
              yPercent: -50,
              x: 0,
              scale: 1,
              opacity: 1,
              filter: "blur(0px)",
            });
            gsap.set(heroContent, { opacity: 1, scale: 1, filter: "blur(0px)" });
            gsap.set(contentSection, { y: 0, opacity: 1 });
            gsap.set(bracketsLayer, { autoAlpha: 0 });
            return;
          }

          const tl = gsap.timeline({
            defaults: { ease: "power2.inOut" },
            scrollTrigger: {
              trigger: heroSection,
              start: "top top",
              end: "bottom top",
              scrub: true,
              pin: pinLayer,
              anticipatePin: 1,
            },
          });

          tl.to(
            heroContent,
            {
              opacity: 0.2,
              scale: 0.98,
              filter: "blur(3px)",
            },
            0
          )
            .to(
              glow,
              {
                opacity: 0.2,
                scale: 1.25,
              },
              0
            )
            .to(
              [left, right],
              {
                scale: isDesktop ? 0.92 : 0.9,
                opacity: 0.94,
                filter: "blur(1.5px)",
              },
              0
            )
            .to(
              left,
              {
                clipPath:
                  "polygon(8% 0, 58% 0, 46% 22%, 34% 50%, 46% 78%, 58% 100%, 8% 100%, 0 78%, 12% 50%, 0 22%)",
              },
              0.15
            )
            .to(
              right,
              {
                clipPath:
                  "polygon(92% 0, 42% 0, 54% 22%, 66% 50%, 54% 78%, 42% 100%, 92% 100%, 100% 78%, 88% 50%, 100% 22%)",
              },
              0.15
            )
            .to(
              left,
              {
                x: -travel,
                width: finalBracketSize,
                height: "100vh",
                top: 0,
                yPercent: 0,
                xPercent: -50,
                filter: "blur(0px)",
              },
              0.25
            )
            .to(
              right,
              {
                x: travel,
                width: finalBracketSize,
                height: "100vh",
                top: 0,
                yPercent: 0,
                xPercent: -50,
                filter: "blur(0px)",
              },
              0.25
            )
            .to(
              contentSection,
              {
                y: 0,
                opacity: 1,
              },
              0.08
            );

          const lastSection = contentSection.querySelector<HTMLElement>("#cta") ?? contentSection;

          gsap.to(bracketsLayer, {
            autoAlpha: 0,
            ease: "none",
            scrollTrigger: {
              trigger: lastSection,
              start: "top bottom",
              end: "top center",
              scrub: true,
            },
          });
        }
      );
    }, heroSection);

    return () => {
      if (mainContent) {
        mainContent.style.removeProperty("--bracket-side-space");
      }
      mm.revert();
      ctx.revert();
    };
  }, []);

  return (
    <>
      <section ref={heroSectionRef} className="hero-section relative isolate bg-awful-bg">
        <div ref={pinLayerRef} className="hero-pin-layer relative h-[100svh] overflow-hidden pt-24 pb-24 md:pt-36 md:pb-32">
          <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
            <div className="tech-glow absolute inset-0 opacity-80" />
            <div className="tech-grid-bg absolute inset-0 opacity-40" />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-awful-bg/40 to-awful-bg" />
          </div>

          <div ref={heroContentRef} className="container-custom relative z-10">
            <p className="text-center font-mono text-[10px] font-semibold uppercase tracking-[0.42em] text-awful-muted sm:text-[11px]">
              izcode
            </p>

            <div className="mt-10 grid gap-6 lg:relative lg:min-h-[36rem] lg:gap-0">
              <div
                className="animate-float-subtle motion-reduce:animate-none order-1 py-2 lg:absolute lg:left-0 lg:top-4 lg:max-w-[26rem]"
                style={{ animationDelay: "0.2s" }}
              >
                <h1 className="font-display text-4xl font-semibold leading-[0.95] tracking-tight text-awful-fg sm:text-6xl lg:text-7xl">
                  Na fronteira
                  <span className="mt-2 block text-awful-muted">do digital.</span>
                </h1>
              </div>

              <div
                className="animate-float-subtle motion-reduce:animate-none order-2 py-2 text-sm leading-[1.75] text-awful-muted sm:text-base lg:absolute lg:right-0 lg:top-16 lg:max-w-[29rem] lg:text-lg"
                style={{ animationDelay: "0.6s" }}
              >
                Desenvolvimento, CRM e integrações com escopo e prazo combinados — da primeira conversa
                ao que roda em produção.
              </div>

              <div className="order-3 relative mx-auto my-2 h-64 w-64 sm:h-72 sm:w-72 lg:my-0 lg:h-80 lg:w-80" />

              <div
                className="animate-float-subtle motion-reduce:animate-none order-4 py-2 lg:absolute lg:bottom-8 lg:left-0 lg:max-w-[28rem]"
                style={{ animationDelay: "1s" }}
              >
                <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-awful-accent">
                  Compromisso
                </p>
                <p className="mt-3 text-awful-muted">
                  Escopo validado, marcos claros e acompanhamento contínuo para evitar surpresa no meio do
                  caminho.
                </p>
              </div>

              <div
                className="animate-float-subtle motion-reduce:animate-none order-5 py-2 lg:absolute lg:bottom-8 lg:right-0 lg:max-w-[30rem]"
                style={{ animationDelay: "1.4s" }}
              >
                <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                  <a
                    href={WHATSAPP_HREF}
                    target="_blank"
                    rel="noreferrer"
                    className="awful-btn-primary w-full justify-center leading-none sm:w-auto"
                  >
                    <span className="inline-flex h-4 w-4 shrink-0 items-center justify-center" aria-hidden>
                      <MessageCircle className="h-4 w-4" />
                    </span>
                    <span className="leading-none">Pedir proposta</span>
                    <span className="inline-flex h-4 w-4 shrink-0 items-center justify-center opacity-90" aria-hidden>
                      <ArrowRight className="h-4 w-4" />
                    </span>
                  </a>
                  <a href="#services" className="awful-btn-outline w-full justify-center leading-none sm:w-auto">
                    <span className="leading-none">Ver serviços</span>
                    <span className="inline-flex h-4 w-4 shrink-0 items-center justify-center opacity-80" aria-hidden>
                      <ArrowDown className="h-4 w-4" />
                    </span>
                  </a>
                </div>
                <p className="mt-4 font-mono text-xs text-awful-muted">
                  Resposta em até 24h úteis · © {new Date().getFullYear()} izcode
                </p>
              </div>
            </div>
          </div>

          <div
            className="hero-scroll-hint pointer-events-none absolute bottom-8 left-1/2 z-10 hidden -translate-x-1/2 flex-col items-center gap-2 lg:bottom-10 lg:flex"
            aria-hidden
          >
            <span className="font-mono text-[10px] uppercase tracking-[0.28em] text-awful-muted sm:text-[11px]">
              Role
            </span>
            <span className="awful-scroll-hint-line" />
          </div>
        </div>
      </section>

      <div ref={bracketsLayerRef} className="brackets-layer pointer-events-none fixed inset-0 z-[45]" aria-hidden>
        <div
          ref={glowRef}
          className="pointer-events-none fixed z-[44] h-28 w-28 rounded-full bg-awful-accent/30 blur-3xl sm:h-36 sm:w-36 lg:h-44 lg:w-44"
        />
        <div ref={leftRef} className="logo-half logo-half-left fixed z-[46]">
          <img
            src="/footo-removebg-preview.png"
            alt=""
            className="block h-full w-full object-contain object-center"
          />
        </div>
        <div ref={rightRef} className="logo-half logo-half-right fixed z-[46]">
          <img
            src="/footo-removebg-preview.png"
            alt=""
            className="block h-full w-full object-contain object-center"
          />
        </div>
      </div>

      <section ref={contentSectionRef} className="content-section relative z-20">
        <div ref={mainContentRef} className="main-content">
          {children}
        </div>
      </section>
    </>
  );
};

export default Hero;
