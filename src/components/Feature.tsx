import { Check, Circle } from "lucide-react";

const Features = () => {
  const features = [
    {
      title: "Desenvolvimento Ágil",
      description: "Utilizamos metodologias ágeis para entregar valor continuamente, com ciclos rápidos de feedback."
    },
    {
      title: "Experiência do Usuário",
      description: "Criamos interfaces intuitivas e agradáveis que proporcionam a melhor experiência para seus usuários."
    },
    {
      title: "Escalabilidade",
      description: "Construímos soluções prontas para crescer junto com o seu negócio, sem comprometer a performance."
    },
    {
      title: "Tecnologias Modernas",
      description: "Trabalhamos com as mais recentes tecnologias e frameworks para garantir soluções de ponta."
    },
    {
      title: "Equipe Especializada",
      description: "Contamos com profissionais experientes em desenvolvimento de produtos digitais e soluções empresariais."
    },
    {
      title: "Suporte Contínuo",
      description: "Oferecemos suporte e manutenção após a entrega, garantindo o funcionamento perfeito da sua solução."
    }
  ];

  return (
    <section id="features" className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Por que escolher a izcode</h2>
          <p className="text-lg text-gray-600 max-w-xl mx-auto font-light">
            Nossa expertise e compromisso fazem a diferença no desenvolvimento do seu projeto
          </p>
          
          <div className="mt-8 flex justify-center">
            <svg width="60" height="4" viewBox="0 0 60 4">
              <rect width="60" height="4" fill="black" />
            </svg>
          </div>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-10">
          {features.map((feature, index) => (
            <div key={index} className="flex">
              <div className="flex-shrink-0 mt-1">
                <Circle className="h-3 w-3 text-izcode-black" fill="black" />
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-mono uppercase tracking-wider mb-2">{feature.title}</h3>
                <p className="text-gray-600 font-light">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-20 flex justify-center">
          <svg width="240" height="2" viewBox="0 0 240 2" className="opacity-20">
            <path d="M0,1 L240,1" stroke="black" strokeWidth="1" strokeDasharray="4 4" />
          </svg>
        </div>
      </div>
    </section>
  );
};

export default Features;
