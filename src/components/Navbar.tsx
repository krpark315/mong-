import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ShoppingBag, User, Menu, X } from 'lucide-react';
import { cn } from '@/src/lib/utils';
import { motion, AnimatePresence } from 'motion/react';

const navItems = [
  { name: 'ABOUT', path: '/about' },
  { name: 'PERFUME', path: '/perfume' },
  { name: 'SUPPORT', path: '/support' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-500',
        isScrolled ? 'bg-white/80 backdrop-blur-md shadow-sm' : 'bg-transparent'
      )}
    >
      {/* Cafe24 Banner Module */}
      <div className="w-full bg-black text-white">
        <div dangerouslySetInnerHTML={{ __html: '<div module="design_banner_1"></div>' }} />
      </div>

      <div className="px-6 py-4 md:px-12 max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link 
          to="/" 
          className={cn(
            "text-xl tracking-[0.3em] font-serif transition-all duration-300 hover:opacity-70",
            isScrolled ? "text-[#4A2C18]" : "text-white"
          )}
        >
          MONG MOMANG
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-12">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className={cn(
                'text-xs tracking-[0.2em] font-medium transition-all duration-300 hover:opacity-60',
                isScrolled ? 'text-black' : 'text-white'
              )}
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* Icons */}
        <div className="flex items-center space-x-6">
          <a href="/member/login.html" className={cn('transition-colors', isScrolled ? 'text-black' : 'text-white')}>
            <User size={20} strokeWidth={1.5} />
          </a>
          <a href="/order/basket.html" className={cn('transition-colors', isScrolled ? 'text-black' : 'text-white')}>
            <ShoppingBag size={20} strokeWidth={1.5} />
          </a>
          <button 
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X size={24} className={isScrolled ? 'text-black' : 'text-white'} />
            ) : (
              <Menu size={24} className={isScrolled ? 'text-black' : 'text-white'} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-white shadow-xl p-8 flex flex-col space-y-6 md:hidden"
          >
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className="text-sm tracking-[0.2em] font-medium text-black border-b border-gray-100 pb-4"
              >
                {item.name}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
