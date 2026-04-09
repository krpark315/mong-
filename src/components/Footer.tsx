import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-100 pt-20 pb-10 px-6 md:px-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        {/* Brand Info */}
        <div className="col-span-1 md:col-span-1">
          <h2 className="text-xl font-serif tracking-widest mb-6">MONG MOMANG</h2>
          <p className="text-xs text-gray-400 leading-relaxed max-w-xs">
            Moments of Memory, Mong Momang.
            We capture the most beautiful moments in a bottle.
          </p>
          <div className="flex space-x-4 mt-8">
            <Instagram size={18} className="text-gray-400 hover:text-black cursor-pointer transition-colors" />
            <Facebook size={18} className="text-gray-400 hover:text-black cursor-pointer transition-colors" />
            <Twitter size={18} className="text-gray-400 hover:text-black cursor-pointer transition-colors" />
          </div>
        </div>

        {/* Links */}
        <div>
          <h3 className="text-xs font-bold tracking-[0.2em] mb-6">SHOP</h3>
          <ul className="space-y-4 text-xs text-gray-500 tracking-wider">
            <li><Link to="/perfume" className="hover:text-black transition-colors">All Perfumes</Link></li>
            <li><Link to="/perfume" className="hover:text-black transition-colors">Discovery Set</Link></li>
            <li><Link to="/perfume" className="hover:text-black transition-colors">Gift Guide</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="text-xs font-bold tracking-[0.2em] mb-6">ABOUT</h3>
          <ul className="space-y-4 text-xs text-gray-500 tracking-wider">
            <li><Link to="/about" className="hover:text-black transition-colors">Our Story</Link></li>
            <li><Link to="/about" className="hover:text-black transition-colors">Philosophy</Link></li>
            <li><Link to="/support" className="hover:text-black transition-colors">Contact Us</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="text-xs font-bold tracking-[0.2em] mb-6">SUPPORT</h3>
          <ul className="space-y-4 text-xs text-gray-500 tracking-wider">
            <li><Link to="/support" className="hover:text-black transition-colors">FAQ</Link></li>
            <li><Link to="/support" className="hover:text-black transition-colors">Shipping & Returns</Link></li>
            <li><Link to="/support" className="hover:text-black transition-colors">Terms of Service</Link></li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-20 pt-10 border-t border-gray-50 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
        <p className="text-[10px] text-gray-400 tracking-widest">
          © 2026 MONG MOMANG. ALL RIGHTS RESERVED.
        </p>
        <div className="flex space-x-6 text-[10px] text-gray-400 tracking-widest">
          <Link to="#" className="hover:text-black transition-colors">PRIVACY POLICY</Link>
          <Link to="#" className="hover:text-black transition-colors">TERMS OF USE</Link>
        </div>
      </div>
    </footer>
  );
}
