import { motion } from 'motion/react';

export default function About() {
  return (
    <div className="bg-white pt-32 pb-20">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center mb-24"
        >
          <span className="text-[10px] tracking-[0.4em] font-bold text-gray-400 uppercase mb-6 block">Our Story</span>
          <h1 className="text-5xl md:text-7xl font-serif tracking-tight mb-10">MONG MOMANG</h1>
          <p className="text-sm text-gray-500 tracking-widest leading-loose max-w-2xl mx-auto">
            A perfume brand that captures the most beautiful moments of your life.
            Every scent is a story, every bottle is a memory.
          </p>
        </motion.div>

        <div className="space-y-32">
          {/* Brand Philosophy */}
          <section className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
            >
              <h2 className="text-3xl font-serif mb-8">Philosophy</h2>
              <p className="text-sm text-gray-600 leading-loose mb-6">
                We believe that scent is the most powerful way to trigger memories. Our philosophy is built on the intersection of nature's finest ingredients and the human experience.
              </p>
              <p className="text-sm text-gray-600 leading-loose">
                Each fragrance is carefully crafted to evoke a specific time, place, or emotion, allowing you to carry your most cherished moments with you.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              className="aspect-[4/5] overflow-hidden rounded-2xl"
            >
              <img 
                src="https://images.unsplash.com/photo-1547881338-64929745b3d6?auto=format&fit=crop&q=80&w=1000" 
                alt="Philosophy" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </motion.div>
          </section>

          {/* Craftsmanship */}
          <section className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              className="aspect-[4/5] overflow-hidden rounded-2xl md:order-1 order-2"
            >
              <img 
                src="https://images.unsplash.com/photo-1595428774223-ef52624120d2?auto=format&fit=crop&q=80&w=1000" 
                alt="Craftsmanship" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              className="md:order-2 order-1"
            >
              <h2 className="text-3xl font-serif mb-8">Craftsmanship</h2>
              <p className="text-sm text-gray-600 leading-loose mb-6">
                Our perfumes are hand-blended in small batches to ensure the highest quality and attention to detail. We source our raw materials from sustainable farms around the world.
              </p>
              <p className="text-sm text-gray-600 leading-loose">
                From the initial scent profile to the final packaging, every step of our process is guided by a commitment to excellence and artistic expression.
              </p>
            </motion.div>
          </section>

          {/* Vision */}
          <section className="text-center py-20 border-y border-gray-50">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              <h2 className="text-3xl font-serif mb-10 italic">"The scent of a memory is eternal."</h2>
              <p className="text-xs tracking-[0.3em] font-bold text-gray-400 uppercase">Mong Momang Creative Director</p>
            </motion.div>
          </section>
        </div>
      </div>
    </div>
  );
}
