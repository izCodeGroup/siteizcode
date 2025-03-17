import React from 'react';
import { Target, Users, Zap } from 'lucide-react';

const About = () => {
  return (
    <div className="py-16 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-white mb-4">Sobre a izcode</h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Somos uma equipe apaixonada por tecnologia, focada em criar soluções digitais
            inovadoras que impulsionam o sucesso dos nossos clientes.
          </p>
        </div>

        {/* Mission, Vision, Values */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="bg-gray-800 p-8 rounded-lg shadow-lg text-center">
            <Target className="h-12 w-12 text-indigo-400 mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-4 text-white">Missão</h3>
            <p className="text-gray-400">
              Transformar ideias em soluções digitais inovadoras que impulsionem o
              crescimento e sucesso de nossos clientes.
            </p>
          </div>

          <div className="bg-gray-800 p-8 rounded-lg shadow-lg text-center">
            <Zap className="h-12 w-12 text-indigo-400 mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-4 text-white">Visão</h3>
            <p className="text-gray-400">
              Ser referência em desenvolvimento web e design digital, reconhecida pela
              excelência e inovação em nossas soluções.
            </p>
          </div>

          <div className="bg-gray-800 p-8 rounded-lg shadow-lg text-center">
            <Users className="h-12 w-12 text-indigo-400 mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-4 text-white">Valores</h3>
            <p className="text-gray-400">
              Inovação, comprometimento, transparência e foco na satisfação do cliente
              são os pilares que guiam nosso trabalho.
            </p>
          </div>
        </div>

        {/* Team Section */}
        <div className="bg-gray-800 rounded-2xl p-8 mb-16">
          <h2 className="text-3xl font-bold text-center text-white mb-12">Nossa Equipe</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div key={index} className="text-center">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="text-xl font-bold text-white">{member.name}</h3>
                <p className="text-gray-400">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const team = [
  {
    name: "João Silva",
    role: "Desenvolvedor Full Stack",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop"
  },
  {
    name: "Maria Santos",
    role: "UI/UX Designer",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300&h=300&fit=crop"
  },
  {
    name: "Pedro Oliveira",
    role: "Especialista em SEO",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&h=300&fit=crop"
  }
];

export default About;