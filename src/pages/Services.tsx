import React from 'react';
import { Code2, Palette, Search, Gauge, Globe, ShieldCheck } from 'lucide-react';

const ServiceCard = ({ icon: Icon, title, description }: { icon: React.ElementType, title: string, description: string }) => (
  <div className="bg-gray-800 p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
    <Icon className="h-12 w-12 text-indigo-400 mb-4" />
    <h3 className="text-xl font-bold mb-4 text-white">{title}</h3>
    <p className="text-gray-400">{description}</p>
  </div>
);

const Services = () => {
  const services = [
    {
      icon: Code2,
      title: "Desenvolvimento Web",
      description: "Sites institucionais, e-commerce e sistemas personalizados desenvolvidos com as mais modernas tecnologias do mercado."
    },
    {
      icon: Palette,
      title: "Web Design",
      description: "Design moderno e responsivo, focado na experiência do usuário e na criação de uma identidade visual única para sua marca."
    },
    {
      icon: Search,
      title: "SEO",
      description: "Otimização para mecanismos de busca, garantindo melhor visibilidade e alcance para seu site nos resultados de pesquisa."
    },
    {
      icon: Gauge,
      title: "Otimização de Performance",
      description: "Análise e melhorias de performance para garantir que seu site carregue rapidamente e ofereça a melhor experiência aos usuários."
    },
    {
      icon: Globe,
      title: "Hospedagem e Domínio",
      description: "Suporte completo na configuração de hospedagem e domínio, garantindo que seu site esteja sempre disponível e seguro."
    },
    {
      icon: ShieldCheck,
      title: "Manutenção e Suporte",
      description: "Serviços contínuos de manutenção, atualizações de segurança e suporte técnico para seu site ou aplicação."
    }
  ];

  return (
    <div className="py-16 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-white mb-4">Nossos Serviços</h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Oferecemos soluções completas em desenvolvimento web e design digital para impulsionar seu negócio online.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;