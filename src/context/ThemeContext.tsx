import { createContext, useState, ReactNode, useContext } from 'react';

export const ThemeContext = createContext<{ isDark: boolean; toggleTheme: () => void } | undefined>(undefined);

export function ThemeProvider({ children }: { children: ReactNode }) {
    const [isDark, setIsDark] = useState(false);

    const toggleTheme = () => setIsDark(!isDark);

    return (
        <ThemeContext.Provider value={{ isDark, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
}

export function useTheme() {
    const context = useContext(ThemeContext);
    if (!context) {
        throw new Error('useTheme must be used within ThemeProvider');
    }
    return context;
}
