import React from 'react';
import { useTheme } from '../contexts/ThemeContext';
import { Moon, Sun } from 'lucide-react';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const { theme, toggleTheme } = useTheme();
  
  return (
    <div className={`min-h-screen transition-colors duration-300 ${
      theme === 'light' 
        ? 'bg-[#F5F5DC] text-[#5D4037]' 
        : 'bg-[#2D2016] text-[#E8E4C9]'
    }`}>
      <header className="py-4 px-6 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <span className="font-bold text-2xl">QuiZZinga</span>
        </div>
        <button
          onClick={toggleTheme}
          className={`p-2 rounded-full ${
            theme === 'light'
              ? 'bg-[#8B4513] text-[#F5F5DC]'
              : 'bg-[#E8E4C9] text-[#8B4513]'
          } transition-colors duration-300`}
          aria-label={theme === 'light' ? 'Switch to dark mode' : 'Switch to light mode'}
        >
          {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
        </button>
      </header>
      <main className="container mx-auto px-4 py-8 max-w-4xl">
        {children}
      </main>
      <footer className={`py-4 px-6 text-center ${
        theme === 'light' 
          ? 'text-[#8B4513]' 
          : 'text-[#E8E4C9]'
      }`}>
        <p>© 2025 QuiZZinga - Test Your Knowledge!</p>
      </footer>
    </div>
  );
};

export default Layout;