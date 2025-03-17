import React from 'react';

const Portfolio = () => {
  return (
    <div className="py-16 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-white mb-4">Nosso Portfólio</h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Conheça alguns dos projetos que desenvolvemos e as histórias de sucesso
            que ajudamos a construir.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-gray-800 rounded-lg shadow-lg overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                <p className="text-gray-400 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-indigo-900 text-indigo-300 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const projects = [
  {
    title: "E-commerce TechStore",
    description: "Desenvolvimento de plataforma completa de e-commerce com sistema de pagamentos integrado.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&h=300&fit=crop",
    technologies: ["React", "Node.js", "MongoDB"]
  },
  {
    title: "Portal Educacional EduLearn",
    description: "Plataforma de ensino online com recursos interativos e sistema de gestão de conteúdo.",
    image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=500&h=300&fit=crop",
    technologies: ["Vue.js", "Python", "PostgreSQL"]
  },
  {
    title: "App Delivery FoodFast",
    description: "Aplicativo de delivery com rastreamento em tempo real e sistema de avaliações.",
    image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=500&h=300&fit=crop",
    technologies: ["React Native", "Firebase"]
  },
  {
    title: "Blog TechNews",
    description: "Portal de notícias tecnológicas com sistema de newsletters e área de membros.",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=500&h=300&fit=crop",
    technologies: ["Next.js", "Strapi", "AWS"]
  },
  {
    title: "Sistema CRM VendaMais",
    description: "Sistema de gestão de relacionamento com clientes com dashboards personalizados.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&h=300&fit=crop",
    technologies: ["Angular", "Spring Boot", "MySQL"]
  },
  {
    title: "Website Institucional ArchDesign",
    description: "Site institucional para escritório de arquitetura com galeria de projetos.",
    image: "https://images.unsplash.com/photo-1431576901776-e539bd916ba2?w=500&h=300&fit=crop",
    technologies: ["React", "Tailwind CSS", "Contentful"]
  }
];

export default Portfolio;