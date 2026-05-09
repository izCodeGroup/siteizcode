import { useState } from "react";
import { Menu, X } from "lucide-react";
import { useNavbarScrollTrigger } from "@/hooks/useNavbarScrollTrigger";
import { WHATSAPP_HREF } from "@/lib/contact";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const scrolled = useNavbarScrollTrigger();

  const linkClass =
    "text-sm font-medium text-awful-muted transition-colors hover:text-awful-fg px-3 py-2";

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "tech-navbar-solid py-3 md:py-3.5" : "bg-awful-bg/80 py-5 backdrop-blur-sm md:py-6"
      }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between gap-4">
          <a
            href="/"
            className="flex shrink-0 items-center rounded-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-awful-accent/50"
          >
            <img
              src="/logo.png"
              alt="izcode"
              className="h-8 brightness-0 invert opacity-95 md:h-9"
            />
          </a>

          <div className="hidden items-center gap-1 md:flex lg:gap-2">
            <a href="#services" className={linkClass}>
              Serviços
            </a>
            <a href="#features" className={linkClass}>
              Princípios
            </a>
            <a href="#cta" className={linkClass}>
              Contato
            </a>
            <a
              href={WHATSAPP_HREF}
              target="_blank"
              rel="noreferrer"
              className="awful-btn-primary ml-2 text-xs sm:text-sm lg:ml-4"
            >
              WhatsApp
            </a>
          </div>

          <button
            type="button"
            className="border border-white/10 bg-awful-elevated p-2.5 text-awful-fg transition-colors hover:border-awful-accent/40 md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-expanded={isMenuOpen}
            aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
          >
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="mt-4 border border-white/10 bg-awful-elevated p-4 shadow-xl backdrop-blur-xl md:hidden">
            <div className="flex flex-col gap-1">
              {[
                ["#services", "Serviços"],
                ["#features", "Princípios"],
                ["#cta", "Contato"],
              ].map(([href, label]) => (
                <a
                  key={href}
                  href={href}
                  className="px-3 py-3 font-medium text-awful-fg hover:bg-white/5"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {label}
                </a>
              ))}
              <a
                href={WHATSAPP_HREF}
                target="_blank"
                rel="noreferrer"
                className="awful-btn-primary mt-2 w-full justify-center text-center"
                onClick={() => setIsMenuOpen(false)}
              >
                WhatsApp
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
