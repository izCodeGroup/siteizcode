import { useEffect, useState } from 'react';

export const useTheme = () => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    // Função para verificar o tema do sistema
    const checkSystemTheme = () => {
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      setIsDark(prefersDark);
      
      // Aplicar classe dark no documento
      if (prefersDark) {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
    };

    // Verificar tema inicial
    checkSystemTheme();

    // Listener para mudanças no tema do sistema
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    mediaQuery.addEventListener('change', checkSystemTheme);

    return () => {
      mediaQuery.removeEventListener('change', checkSystemTheme);
    };
  }, []);

  return { isDark };
};
