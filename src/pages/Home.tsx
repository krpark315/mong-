import { motion } from 'motion/react';
import { ArrowRight, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import { cn } from '@/src/lib/utils';

const products = [
  {
    id: 1,
    name: 'MOMENT OF DAWN',
    description: 'The freshness of early morning dew and soft floral notes.',
    price: '₩128,000',
    image: 'https://images.unsplash.com/photo-1594035910387-fea47794261f?auto=format&fit=crop&q=80&w=1000',
  },
  {
    id: 2,
    name: 'MIDNIGHT WHISPER',
    description: 'Deep woody base with a hint of mysterious spices.',
    price: '₩145,000',
    image: 'https://images.unsplash.com/photo-1594035910387-fea47794261f?auto=format&fit=crop&q=80&w=1000',
  },
  {
    id: 3,
    name: 'SUNSET SERENADE',
    description: 'Warm amber and citrus notes capturing the golden hour.',
    price: '₩132,000',
    image: 'https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?auto=format&fit=crop&q=80&w=1000',
  },
  {
    id: 4,
    name: 'VELVET GARDEN',
    description: 'Rich rose and jasmine petals on a bed of musk.',
    price: '₩138,000',
    image: 'https://images.unsplash.com/photo-1512777576244-b846ac3d816f?auto=format&fit=crop&q=80&w=1000',
  },
];

export default function Home() {
  return (
    <div className="bg-white overflow-hidden">
      {/* Section 1: Hero / Product Photo Page */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden bg-[#1a1a1a]">
        <div className="absolute inset-0 z-0 pointer-events-none">
          <iframe
            src="https://player.vimeo.com/video/1176529323?badge=0&autopause=0&player_id=0&app_id=58479&autoplay=1&muted=1&loop=1&background=1"
            className="absolute top-1/2 left-1/2 w-[177.77vh] h-[100vh] min-w-full min-h-full -translate-x-1/2 -translate-y-1/2"
            frameBorder="0"
            allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
            title="mongmomang_2026_brandvideo"
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>
        
        <div className="relative z-10 text-center px-6">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-xs tracking-[0.4em] font-medium text-white/90 uppercase mb-6 block"
          >
            The Art of Scent
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-5xl md:text-8xl font-serif text-white tracking-tighter mb-10"
          >
            MONG MOMANG
          </motion.h1>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Link 
              to="/perfume" 
              className="inline-flex items-center px-10 py-4 bg-white/10 backdrop-blur-md border border-white/30 text-white text-xs tracking-[0.2em] font-medium hover:bg-white hover:text-black transition-all duration-500 rounded-full group"
            >
              EXPLORE COLLECTION
              <ArrowRight size={14} className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Section 2: Background Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-[-1] bg-white" />
        <img 
          src="https://ais-pre-2wcm2cn6hqlvhoia45l2wh-301425028650.asia-northeast1.run.app/api/attachments/perfume_grid.jpg"
          alt="Background"
          className="absolute inset-0 z-0 w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        
        <div className="relative z-10 text-center max-w-4xl px-6">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-4xl md:text-7xl font-serif text-black mb-8 leading-tight uppercase tracking-tighter"
          >
            Capturing the essence of <br /> 
            <span className="italic">unseen memories.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-[10px] md:text-xs text-gray-800 tracking-[0.4em] font-bold uppercase max-w-xl mx-auto leading-relaxed"
          >
            Mongmomang explores the boundary between memory and reality, 
            crafting scents that speak to the soul.
          </motion.p>
        </div>
      </section>

      {/* Section 3: Product List Slider */}
      <section className="py-32 px-6 md:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-end mb-16">
            <div>
              <span className="text-[10px] tracking-[0.3em] font-bold text-gray-400 uppercase mb-4 block">Our Signature</span>
              <h2 className="text-4xl font-serif tracking-tight">EAU DE PARFUM</h2>
            </div>
            <Link to="/perfume" className="text-xs tracking-[0.2em] font-medium text-gray-400 hover:text-black transition-colors flex items-center">
              VIEW ALL <ArrowRight size={14} className="ml-2" />
            </Link>
          </div>

          <div className="flex md:grid md:grid-cols-2 lg:grid-cols-4 gap-8 overflow-x-auto md:overflow-x-visible pb-8 md:pb-0 scrollbar-hide snap-x">
            {products.map((product, idx) => (
              <motion.div 
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="group cursor-pointer min-w-[280px] md:min-w-0 snap-start"
              >
                <div className="aspect-[3/4] overflow-hidden bg-gray-50 mb-6 relative">
                  <Link to={`/product/${product.id}`}>
                    <img 
                      src={product.image} 
                      alt={product.name} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-500" />
                  </Link>
                  <div className="absolute bottom-6 left-6 right-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                    <button className="w-full py-3 bg-white text-[10px] tracking-[0.2em] font-bold text-black shadow-xl">
                      ADD TO CART
                    </button>
                  </div>
                </div>
                <Link to={`/product/${product.id}`}>
                  <h3 className="text-sm font-bold tracking-widest mb-2">{product.name}</h3>
                </Link>
                <p className="text-xs text-gray-400 mb-4 line-clamp-1">{product.description}</p>
                <p className="text-sm font-serif">{product.price}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 4: Offline Store Introduction */}
      <section className="py-32 px-6 md:px-12 bg-[#1a1a1a] text-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <span className="text-[10px] tracking-[0.3em] font-bold text-gray-500 uppercase mb-6 block">Experience the Scent</span>
            <h2 className="text-4xl md:text-6xl font-serif mb-10 leading-tight">
              Visit our <br /> Flagship Atelier
            </h2>
            <p className="text-sm text-gray-400 leading-relaxed mb-12 max-w-md">
              Step into a space where time slows down. Discover our full collection and experience the personalized scent consultation in our beautifully curated prop shop.
            </p>
            
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <MapPin size={20} className="text-gray-500 mt-1" />
                <div>
                  <h4 className="text-xs font-bold tracking-widest mb-2 uppercase">Location</h4>
                  <p className="text-sm text-gray-400">123 Seongsu-dong, Seongdong-gu, Seoul</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-5 h-5 border border-gray-500 rounded-full flex items-center justify-center text-[10px] text-gray-500 mt-1">H</div>
                <div>
                  <h4 className="text-xs font-bold tracking-widest mb-2 uppercase">Hours</h4>
                  <p className="text-sm text-gray-400">Tue - Sun: 11:00 AM - 8:00 PM</p>
                </div>
              </div>
            </div>

            <button className="mt-16 px-10 py-4 border border-white/20 text-[10px] tracking-[0.3em] font-bold hover:bg-white hover:text-black transition-all duration-500 uppercase">
              View on Map
            </button>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="grid grid-cols-2 gap-4"
          >
            <div className="space-y-4">
              <img 
                src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=800" 
                alt="Store Interior 1" 
                className="w-full aspect-[4/5] object-cover rounded-2xl"
                referrerPolicy="no-referrer"
              />
              <img 
                src="https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&q=80&w=800" 
                alt="Store Interior 2" 
                className="w-full aspect-square object-cover rounded-2xl"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="pt-12 space-y-4">
              <img 
                src="https://images.unsplash.com/photo-1582555172866-f73bb12a2ab3?auto=format&fit=crop&q=80&w=800" 
                alt="Store Interior 3" 
                className="w-full aspect-square object-cover rounded-2xl"
                referrerPolicy="no-referrer"
              />
              <img 
                src="https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?auto=format&fit=crop&q=80&w=800" 
                alt="Store Interior 4" 
                className="w-full aspect-[4/5] object-cover rounded-2xl"
                referrerPolicy="no-referrer"
              />
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
