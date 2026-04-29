import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="bg-white py-20 md:py-28">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight">
            Transformando ideias em <span className="text-izcode-blue">soluções digitais</span>
          </h1>
          <p className="text-lg text-gray-600 mb-12 max-w-2xl font-light">
            Desenvolvemos produtos digitais para startups, Landing Pages, CRMs personalizados e soluções tecnológicas que impulsionam o crescimento do seu negócio.
          </p>
          <a 
            href="https://api.whatsapp.com/send/?phone=5531991732236&text=Ol%C3%A1%2C%20vim%20pelo%20site%2C%20estou%20interessado%20no%20servi%C3%A7o%20da%20izcode&type=phone_number&app_absent=0" 
            target="_blank" 
            rel="noreferrer"
            className="btn-primary inline-flex items-center text-sm uppercase tracking-wider"
          >
            Inicie seu projeto
            <ArrowRight className="ml-2 h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
