import { useState, useEffect } from 'react';

export function useActiveAnchor() {
  const [activeAnchor, setActiveAnchor] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'projects', 'about', 'contact'];
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      
      // Если почти в конце страницы - активируем contact
      if (scrollPosition + windowHeight >= documentHeight - 100) {
        setActiveAnchor('contact');
        return;
      }
      
      // Определяем текущую секцию
      let currentSection = 'home';
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const elementTop = window.scrollY + element.getBoundingClientRect().top;
          if (scrollPosition + 150 >= elementTop) {
            currentSection = section;
          }
        }
      }
      
      setActiveAnchor(currentSection);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return activeAnchor;
}
