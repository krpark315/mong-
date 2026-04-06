import React from 'react';
import { motion } from 'framer-motion';

export default function SpecialEvent() {
  return (
    <section id="event" className="py-32 bg-[#f8f5e6]">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-serif text-gray-900 mb-6 font-bold">
            Special Event
          </h2>
          <p className="text-lg text-gray-700 mb-10">
            지금 진행 중인 다양한 이벤트를 만나보세요.
          </p>
          <a 
            href="#none" 
            className="inline-block border-b-2 border-gray-900 text-gray-900 pb-1 text-sm tracking-widest hover:text-gray-600 hover:border-gray-600 transition-colors"
          >
            자세히 보기
          </a>
        </motion.div>
      </div>
    </section>
  );
}
