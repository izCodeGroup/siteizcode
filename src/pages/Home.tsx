import React from 'react';
import { ArrowRight, Code, Palette, Search } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="bg-gray-900">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-indigo-900 to-purple-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Transforme sua ideia em realidade!
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8">
              Desenvolvimento web profissional e design inovador para o seu negócio
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center bg-indigo-600 text-white px-8 py-3 rounded-full font-medium hover:bg-indigo-700 transition-colors"
            >
              Comece seu projeto
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white">Nossos Serviços</h2>
            <p className="mt-4 text-xl text-gray-400">
              Soluções completas para sua presença digital
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-800 p-8 rounded-lg shadow-lg">
              <Code className="h-12 w-12 text-indigo-400 mb-4" />
              <h3 className="text-xl font-bold mb-4 text-white">Desenvolvimento Web</h3>
              <p className="text-gray-400">
                Sites institucionais, e-commerce e sistemas personalizados com as
                melhores tecnologias do mercado.
              </p>
            </div>

            <div className="bg-gray-800 p-8 rounded-lg shadow-lg">
              <Palette className="h-12 w-12 text-indigo-400 mb-4" />
              <h3 className="text-xl font-bold mb-4 text-white">Web Design</h3>
              <p className="text-gray-400">
                Design moderno e responsivo, com foco na experiência do usuário e
                identidade visual única.
              </p>
            </div>

            <div className="bg-gray-800 p-8 rounded-lg shadow-lg">
              <Search className="h-12 w-12 text-indigo-400 mb-4" />
              <h3 className="text-xl font-bold mb-4 text-white">SEO e Performance</h3>
              <p className="text-gray-400">
                Otimização para mecanismos de busca e melhorias de performance
                para seu site.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-gray-800 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-white mb-16">
            O que nossos clientes dizem
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gray-900 p-8 rounded-lg shadow-lg">
                <p className="text-gray-300 mb-6">{testimonial.text}</p>
                <div className="flex items-center">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="h-12 w-12 rounded-full"
                  />
                  <div className="ml-4">
                    <p className="font-medium text-white">{testimonial.name}</p>
                    <p className="text-gray-400">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

const testimonials = [
  {
    text: "A equipe da izcode superou todas as nossas expectativas. O site ficou incrível e a performance é excepcional!",
    name: "Ana Silva",
    role: "CEO, TechStart",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop"
  },
  {
    text: "Profissionais extremamente competentes e comprometidos com o resultado. Recomendo fortemente!",
    name: "Pedro Santos",
    role: "Diretor de Marketing, InnovaCorp",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop"
  },
  {
    text: "O processo de desenvolvimento foi transparente e o resultado final atendeu perfeitamente nossas necessidades.",
    name: "Carla Oliveira",
    role: "Proprietária, Design Studio",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop"
  }
];

export default Home;