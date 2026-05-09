import { useRef } from "react";
import { ArrowRight, MessageSquare, Mail } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { WHATSAPP_HREF } from "@/lib/contact";

const Footer = () => {
  const sectionRef = useRef<HTMLElement>(null);
  useScrollReveal(sectionRef, { stagger: 0.1, start: "top 92%", scaleFrom: 0.96, y: 24 });

  const currentYear = new Date().getFullYear();

  return (
    <footer
      ref={sectionRef}
      className="relative z-[3] border-t border-white/10 bg-awful-bg text-awful-fg"
    >
      <div className="container-custom py-16 md:py-20">
        <div className="mb-14 grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-12 lg:gap-10 md:mb-16">
          <div data-reveal className="lg:col-span-5">
            <img
              src="/logo.png"
              alt="izcode"
              className="h-9 brightness-0 invert opacity-90"
            />
            <p className="mt-6 max-w-md text-sm leading-relaxed text-awful-muted">
              Desenvolvimento de software e CRM sob medida — proposta clara, prazo definido
              e time que responde depois do go-live.
            </p>
            <a
              href={WHATSAPP_HREF}
              target="_blank"
              rel="noreferrer"
              className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-awful-accent transition-colors hover:text-awful-accent-dim"
            >
              Pedir proposta
              <ArrowRight className="h-4 w-4" aria-hidden />
            </a>
          </div>

          <div data-reveal className="lg:col-span-4">
            <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.28em] text-awful-muted">
              Mapa do site
            </p>
            <ul className="mt-4 space-y-3 text-sm text-awful-muted">
              <li>
                <a href="#services" className="transition-colors hover:text-awful-fg">
                  Serviços
                </a>
              </li>
              <li>
                <a href="#features" className="transition-colors hover:text-awful-fg">
                  Princípios e método
                </a>
              </li>
              <li>
                <a href="#cta" className="transition-colors hover:text-awful-fg">
                  Contato / proposta
                </a>
              </li>
            </ul>
          </div>

          <div data-reveal className="lg:col-span-3">
            <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.28em] text-awful-muted">
              Contato
            </p>
            <div className="mt-4 space-y-4">
              <a
                href={WHATSAPP_HREF}
                target="_blank"
                rel="noreferrer"
                className="flex items-start gap-3 text-awful-muted transition-colors hover:text-awful-fg sm:items-center"
              >
                <span className="flex h-9 w-9 items-center justify-center border border-white/10 bg-awful-elevated">
                  <MessageSquare className="h-4 w-4" />
                </span>
                <span className="text-sm font-medium break-words">WhatsApp · (31) 99173-2236</span>
              </a>
              <a
                href="mailto:contato@izcode.com.br"
                className="flex items-start gap-3 text-awful-muted transition-colors hover:text-awful-fg sm:items-center"
              >
                <span className="flex h-9 w-9 items-center justify-center border border-white/10 bg-awful-elevated">
                  <Mail className="h-4 w-4" />
                </span>
                <span className="text-sm font-medium break-all">contato@izcode.com.br</span>
              </a>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-4 border-t border-white/[0.06] pt-8 sm:flex-row">
          <p data-reveal className="font-mono text-sm text-awful-muted">
            © {currentYear} izcode
          </p>
          <p data-reveal className="max-w-md text-center text-xs text-awful-muted/80 sm:text-right">
            Minas Gerais, Brasil · Tudo combinado por escrito
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
