import { motion } from 'motion/react';
import { ShoppingBag, Heart, Filter, ChevronDown } from 'lucide-react';
import { useState } from 'react';

const products = [
  {
    id: 1,
    name: 'MOMENT OF DAWN',
    category: 'FLORAL / FRESH',
    price: '₩128,000',
    image: 'https://images.unsplash.com/photo-1594035910387-fea47794261f?auto=format&fit=crop&q=80&w=1000',
    notes: 'Dewy Grass, White Rose, Musk',
  },
  {
    id: 2,
    name: 'MIDNIGHT WHISPER',
    category: 'WOODY / SPICY',
    price: '₩145,000',
    image: 'https://images.unsplash.com/photo-1594035910387-fea47794261f?auto=format&fit=crop&q=80&w=1000',
    notes: 'Sandalwood, Black Pepper, Amber',
  },
  {
    id: 3,
    name: 'SUNSET SERENADE',
    category: 'CITRUS / AMBER',
    price: '₩132,000',
    image: 'https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?auto=format&fit=crop&q=80&w=1000',
    notes: 'Bergamot, Orange Blossom, Vanilla',
  },
  {
    id: 4,
    name: 'VELVET GARDEN',
    category: 'FLORAL / MUSK',
    price: '₩138,000',
    image: 'https://images.unsplash.com/photo-1512777576244-b846ac3d816f?auto=format&fit=crop&q=80&w=1000',
    notes: 'Damask Rose, Jasmine, White Musk',
  },
  {
    id: 5,
    name: 'OCEAN BREEZE',
    category: 'AQUATIC / FRESH',
    price: '₩118,000',
    image: 'https://images.unsplash.com/photo-1557170334-a9632e77c6e4?auto=format&fit=crop&q=80&w=1000',
    notes: 'Sea Salt, Sage, Ambrette',
  },
  {
    id: 6,
    name: 'FOREST PATH',
    category: 'GREEN / EARTHY',
    price: '₩125,000',
    image: 'https://images.unsplash.com/photo-1615484477778-ca3b77940c25?auto=format&fit=crop&q=80&w=1000',
    notes: 'Pine, Cedarwood, Vetiver',
  },
];

export default function Perfume() {
  const [activeFilter, setActiveFilter] = useState('ALL');

  return (
    <div className="bg-white pt-32 pb-20 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 space-y-8 md:space-y-0">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-serif tracking-tight mb-4 uppercase">EAU DE PARFUM</h1>
            <p className="text-xs text-gray-400 tracking-[0.2em] font-medium uppercase">Discover your signature scent</p>
          </motion.div>

          <div className="flex items-center space-x-8">
            <div className="flex items-center space-x-2 text-[10px] tracking-[0.2em] font-bold text-gray-400 cursor-pointer hover:text-black transition-colors">
              <Filter size={14} />
              <span>FILTER</span>
            </div>
            <div className="flex items-center space-x-2 text-[10px] tracking-[0.2em] font-bold text-gray-400 cursor-pointer hover:text-black transition-colors">
              <span>SORT BY</span>
              <ChevronDown size={14} />
            </div>
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-20">
          {products.map((product, idx) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="aspect-[4/5] overflow-hidden bg-gray-50 mb-8 relative">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <button className="w-10 h-10 rounded-full bg-white/80 backdrop-blur-md flex items-center justify-center text-black hover:bg-black hover:text-white transition-all">
                    <Heart size={18} strokeWidth={1.5} />
                  </button>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-500 bg-white/90 backdrop-blur-sm">
                  <button className="w-full py-4 bg-black text-white text-[10px] tracking-[0.3em] font-bold flex items-center justify-center space-x-3 hover:bg-gray-800 transition-colors">
                    <ShoppingBag size={14} />
                    <span>ADD TO CART</span>
                  </button>
                </div>
              </div>
              
              <div className="space-y-3">
                <div className="flex justify-between items-start">
                  <div>
                    <span className="text-[9px] tracking-[0.2em] font-bold text-gray-400 uppercase mb-2 block">{product.category}</span>
                    <h3 className="text-lg font-serif tracking-tight uppercase">{product.name}</h3>
                  </div>
                  <p className="text-sm font-serif font-medium">{product.price}</p>
                </div>
                <p className="text-[11px] text-gray-400 tracking-widest leading-relaxed">
                  Notes: {product.notes}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Load More */}
        <div className="mt-32 text-center">
          <button className="px-12 py-4 border border-gray-200 text-[10px] tracking-[0.3em] font-bold text-gray-400 hover:border-black hover:text-black transition-all duration-500 uppercase">
            Load More
          </button>
        </div>
      </div>
    </div>
  );
}
