import { useState, useEffect } from 'react';

export function useActiveAnchor() {
    const [activeAnchor, setActiveAnchor] = useState('home');

    useEffect(() => {
        const handleScroll = () => {
            const sections = ['home', 'projects', 'about', 'contact'];

            for (const section of sections) {
                const element = document.getElementById(section);
                if (element) {
                    const rect = element.getBoundingClientRect();
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
