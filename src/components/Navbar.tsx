import { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="py-6 bg-white sticky top-0 z-10 border-b border-gray-100">
      <div className="container-custom">
        <div className="flex justify-between items-center">
          <a href="/" className="flex items-center">
            <img
              src="/public/logo.png"
              alt="izcode Logo"
              className="h-10"
            />
          </a>
          
          <div className="hidden md:flex items-center space-x-12">
            <a href="#services" className="text-izcode-black font-mono text-sm hover:text-izcode-blue transition-colors uppercase tracking-wider">
              Serviços
            </a>
            <a href="#features" className="text-izcode-black font-mono text-sm hover:text-izcode-blue transition-colors uppercase tracking-wider">
              Por quê nos escolher
            </a>
            <a 
              href="https://api.whatsapp.com/send/?phone=5531991732236&text&type=phone_number&app_absent=0r" 
              target="_blank" 
              rel="noreferrer"
              className="btn-primary text-sm tracking-wider uppercase"
            >
              Fale Conosco
            </a>
          </div>
          
          <button 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        
        {isMenuOpen && (
          <div className="md:hidden mt-4 py-4 border-t border-gray-100">
            <div className="flex flex-col space-y-4">
              <a 
                href="#services" 
                className="text-izcode-black font-mono text-sm hover:text-izcode-blue transition-colors uppercase tracking-wider"
                onClick={() => setIsMenuOpen(false)}
              >
                Serviços
              </a>
              <a 
                href="#features" 
                className="text-izcode-black font-mono text-sm hover:text-izcode-blue transition-colors uppercase tracking-wider"
                onClick={() => setIsMenuOpen(false)}
              >
                Por quê nos escolher
              </a>
              <a 
                href="https://api.whatsapp.com/send/?phone=5531991732236&text&type=phone_number&app_absent=0r" 
                target="_blank" 
                rel="noreferrer"
                className="btn-primary inline-block text-center text-sm tracking-wider uppercase"
                onClick={() => setIsMenuOpen(false)}
              >
                Fale Conosco
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;