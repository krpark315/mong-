import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '@/src/lib/utils';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X } from 'lucide-react';
import TopBanner from './TopBanner';

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
    <header className={cn("header main fixed top-0 left-0 right-0 z-50 transition-all duration-500", isScrolled ? "bg-white/90 backdrop-blur-md" : "bg-transparent")}>
      <div className="h_inner">
        <div className="h_top">
          <TopBanner />
        </div>

        <div className="h_container flex items-center justify-between px-6 py-4 md:px-12">
          <div className="h_left">
            <div className="h_logo">
              <Link to="/" className={cn("text-xl tracking-[0.3em] font-serif transition-colors", isScrolled ? "text-black" : "text-white")}>
                MONG MOMANG
              </Link>
            </div>
          </div>

          <div className="h_midd hidden md:block">
            <div className="h_gnb">
              <div className="h_category flex space-x-12">
                <Link to="/about" className={cn("text-xs tracking-[0.2em] font-medium transition-colors", isScrolled ? "text-black" : "text-white")}>ABOUT</Link>
                <Link to="/perfume" className={cn("text-xs tracking-[0.2em] font-medium transition-colors", isScrolled ? "text-black" : "text-white")}>PARFUM</Link>
                <Link to="/support" className={cn("text-xs tracking-[0.2em] font-medium transition-colors", isScrolled ? "text-black" : "text-white")}>SUPPORT</Link>
              </div>
            </div>
          </div>

          <div className="h_right flex items-center space-x-6">
            <Link to="/login" className={cn('transition-colors', isScrolled ? 'text-black' : 'text-white')}>로그인</Link>
            <Link to="/order/basket.html" className={cn('transition-colors', isScrolled ? 'text-black' : 'text-white')}>장바구니</Link>
            <button className="md:hidden" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
              {isMobileMenuOpen ? <X size={24} className={isScrolled ? 'text-black' : 'text-white'} /> : <Menu size={24} className={isScrolled ? 'text-black' : 'text-white'} />}
            </button>
          </div>
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
            <Link to="/about" className="text-sm font-medium text-black">ABOUT</Link>
            <Link to="/perfume" className="text-sm font-medium text-black">PARFUM</Link>
            <Link to="/support" className="text-sm font-medium text-black">SUPPORT</Link>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
