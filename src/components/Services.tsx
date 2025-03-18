import { Rocket, Database, Zap } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: <Rocket className="h-8 w-8 text-izcode-black" />,
      title: "Desenvolvimento para Startups",
      description: "Transformamos suas ideias em produtos digitais escaláveis que atraem investidores e conquistam usuários."
    },
    {
      icon: <Database className="h-8 w-8 text-izcode-black" />,
      title: "CRM Personalizado",
      description: "Sistemas de gestão de relacionamento com clientes adaptados às necessidades específicas do seu negócio."
    },
    {
      icon: <Zap className="h-8 w-8 text-izcode-black" />,
      title: "Soluções Sob Medida",
      description: "Resolvemos problemas complexos com soluções tecnológicas personalizadas para o crescimento da sua empresa."
    }
  ];

  return (
    <section id="services" className="section-padding bg-izcode-gray-light">
      <div className="container-custom">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Nossos Serviços</h2>
          <p className="text-lg text-gray-600 max-w-xl mx-auto font-light">
            Oferecemos soluções completas para transformar sua visão em realidade digital
          </p>
          
          <div className="mt-8 flex justify-center">
            <svg width="60" height="4" viewBox="0 0 60 4">
              <rect width="60" height="4" fill="black" />
            </svg>
          </div>
        </div>
        
        <div className="grid md:grid-cols-3 gap-12">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="border border-black p-8 transition-transform duration-300 hover:-translate-y-2"
            >
              <div className="mb-6">{service.icon}</div>
              <h3 className="text-xl font-mono uppercase tracking-wider mb-4">{service.title}</h3>
              <p className="text-gray-600 font-light">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;