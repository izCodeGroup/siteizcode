import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-white dark:bg-gray-900 px-4">
      <div className="text-center max-w-md">
        <p className="font-mono text-xs uppercase tracking-[0.28em] text-gray-500 dark:text-gray-400 mb-6">
          Erro
        </p>
        <h1 className="text-6xl sm:text-7xl font-bold tracking-tighter text-gray-900 dark:text-white font-heading mb-4">
          404
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
          Esta página não existe ou foi movida.
        </p>
        <a href="/" className="btn-primary">
          Voltar ao início
        </a>
      </div>
    </div>
  );
};

export default NotFound;
