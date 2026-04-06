import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { api } from '../services/api';
import { useCart } from '../context/CartContext';

export default function NewArrivals() {
  const [products, setProducts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const { addToCart } = useCart();

  useEffect(() => {
    api.getNewArrivals().then(data => {
      setProducts(data);
      setLoading(false);
    });
  }, []);

  return (
    <section id="new" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif text-gray-900 mb-4">NEW! ARRIVALS</h2>
          <p className="text-gray-500 tracking-wider text-sm">언제나 새로운 신상품</p>
        </div>

        {loading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[1, 2, 3, 4].map(i => (
              <div key={i} className="animate-pulse">
                <div className="aspect-[3/4] bg-gray-200 mb-4"></div>
                <div className="h-4 bg-gray-200 w-3/4 mx-auto mb-2"></div>
                <div className="h-4 bg-gray-200 w-1/2 mx-auto"></div>
              </div>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {products.map((product, index) => (
              <motion.div 
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group cursor-pointer"
              >
                <div className="relative aspect-[3/4] overflow-hidden bg-gray-100 mb-4">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-700"
                  />
                  {product.isNew && (
                    <div className="absolute top-4 left-4 bg-black text-white text-xs px-2 py-1 tracking-wider">
                      NEW
                    </div>
                  )}
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <button 
                      onClick={(e) => {
                        e.stopPropagation();
                        addToCart({
                          id: product.id,
                          name: product.name,
                          price: product.price,
                          image: product.image
                        });
                      }}
                      className="bg-white text-gray-900 px-6 py-2 text-sm tracking-wider hover:bg-gray-900 hover:text-white transition-colors"
                    >
                      장바구니 담기
                    </button>
                  </div>
                </div>
                <div className="text-center">
                  <h3 className="text-sm font-medium text-gray-900 mb-2">{product.name}</h3>
                  <div className="flex items-center justify-center space-x-2">
                    <span className="text-sm font-bold text-gray-900">
                      {product.price.toLocaleString()}원
                    </span>
                    {product.originalPrice && (
                      <span className="text-xs text-gray-400 line-through">
                        {product.originalPrice.toLocaleString()}원
                      </span>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}

        <div className="mt-16 text-center">
          <button className="inline-block border border-gray-300 text-gray-600 px-8 py-3 text-sm tracking-widest hover:border-gray-900 hover:text-gray-900 transition-colors">
            상품 더보기
          </button>
        </div>
      </div>
    </section>
  );
}
