import { useState, useEffect } from 'react';

export function useActiveAnchor() {
  const [activeAnchor, setActiveAnchor] = useState('home');

  useEffect(() => {
    // Функция для определения активного якоря
    const handleScroll = () => {
      const sections = ['home', 'projects', 'about', 'contact'];
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          // Если элемент в верхней части экрана (в пределах 100px от top)
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveAnchor(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return activeAnchor;
}
