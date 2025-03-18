import { MessageSquare } from "lucide-react";

const CallToAction = () => {
  return (
    <section className="py-32 bg-izcode-black text-white">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">
            Pronto para transformar suas ideias em realidade?
          </h2>
          <p className="text-xl opacity-90 mb-12 font-light">
            Entre em contato conosco hoje mesmo para discutir seu projeto e receber uma consultoria especializada.
          </p>
          
          <div className="mb-12 flex justify-center">
            <svg width="60" height="4" viewBox="0 0 60 4">
              <rect width="60" height="4" fill="white" />
            </svg>
          </div>
          
          <a 
            href="https://api.whatsapp.com/send/?phone=5531991732236&text&type=phone_number&app_absent=0r" 
            target="_blank" 
            rel="noreferrer"
            className="inline-flex items-center bg-white text-izcode-black py-3 px-8 font-mono text-sm uppercase tracking-wider hover:bg-gray-100 transition-colors duration-300"
          >
            <MessageSquare className="mr-2 h-4 w-4" />
            Fale conosco pelo WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
