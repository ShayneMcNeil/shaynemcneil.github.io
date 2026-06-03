import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { isDark, toggleDark } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const getLinkClasses = ({ isActive }: { isActive: boolean }) =>
    `transition-colors duration-200 px-4 pt-3 pb-2 rounded-t-lg font-mono text-sm font-semibold border-b-2 flex items-center ${
      isActive
        ? 'text-blue-800 dark:text-blue-300 bg-blue-100/80 dark:bg-blue-900/50 border-blue-600 dark:border-blue-400'
        : 'text-gray-800 dark:text-gray-200 hover:text-blue-900 dark:hover:text-white hover:bg-white dark:hover:bg-gray-800/50 border-transparent hover:border-gray-300 dark:hover:border-gray-500'
    }`;

  const getMobileLinkClasses = ({ isActive }: { isActive: boolean }) =>
    `block px-3 py-3 rounded-md font-mono text-sm font-semibold transition-colors duration-200 ${
      isActive 
        ? 'text-blue-800 dark:text-blue-300 bg-blue-100/90 dark:bg-blue-900/50 border-l-4 border-blue-600 dark:border-blue-400' 
        : 'text-gray-800 dark:text-gray-200 hover:text-blue-900 dark:hover:text-white hover:bg-gray-50 dark:hover:bg-gray-800 border-l-4 border-transparent'
    }`;

  const navLinks = [
    { path: '/', label: 'about' },
    { path: '/education', label: 'education_and_training' },
    { path: '/portfolio', label: 'portfolio' },
    { path: '/contact', label: 'contact' },
  ];

  return (
    <nav
      className={`sticky top-0 z-50 transition-all duration-300 border-b shadow-sm 
        ${scrolled 
          ? 'bg-gray-100 dark:bg-gray-900 border-gray-200 dark:border-gray-800' 
          : 'bg-white/70 dark:bg-gray-900/80 backdrop-blur-md border-gray-200/50 dark:border-gray-800/50'}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          
          {/* Logo / Wordmark */}
          <div className="flex-shrink-0 flex items-center gap-3">
            <NavLink
              to="/"
              className="font-mono font-semibold text-xl tracking-tight text-gray-900 dark:text-gray-100 hover:text-blue-700 dark:hover:text-blue-400 transition-colors"
            >
              <span className="text-blue-600 dark:text-blue-500">&lt;</span>ShayneMcNeil<span className="text-blue-600 dark:text-blue-500">/&gt;</span>
            </NavLink>
          </div>

          {/* Actions */}
          <div className="flex items-center gap-2">
            {/* Desktop Links */}
            <div className="hidden md:flex md:space-x-2 mr-2">
              {navLinks.map((link) => (
                <NavLink key={link.path} to={link.path} className={getLinkClasses}>
                  /{link.label}/
                </NavLink>
              ))}
            </div>

            {/* Dark Mode Toggle */}
            <button
              onClick={toggleDark}
              className="p-2 rounded-full text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-gray-900 dark:hover:text-gray-100 transition-colors"
              aria-label="Toggle dark mode"
            >
              {isDark ? <Sun size={20} /> : <Moon size={20} />}
            </button>

            {/* Mobile Menu Button */}
            <div className="flex items-center md:hidden">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 focus:outline-none p-2"
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Links */}
      {mobileMenuOpen && (
        <div className={`md:hidden border-b border-gray-100 dark:border-gray-800 px-2 pt-2 pb-3 space-y-1 shadow-lg transition-colors ${
          scrolled ? 'bg-gray-100 dark:bg-gray-900 border-gray-200 dark:border-gray-800 backdrop-blur-none' : 'bg-white/70 dark:bg-gray-900/80 backdrop-blur-md'
        }`}>
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={getMobileLinkClasses}
              onClick={() => setMobileMenuOpen(false)}
            >
              /{link.label}/
            </NavLink>
          ))}
        </div>
      )}
    </nav>
  );
}
