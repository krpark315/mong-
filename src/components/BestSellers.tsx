import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { api } from '../services/api';
import { useCart } from '../context/CartContext';

const categories = [
  { id: 'all', name: '전체' },
  { id: 'ring', name: '반지' },
  { id: 'necklace', name: '목걸이' },
  { id: 'earring', name: '귀걸이' },
  { id: 'bracelet', name: '팔찌' }
];

export default function BestSellers() {
  const [activeTab, setActiveTab] = useState('all');
  const [products, setProducts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const { addToCart } = useCart();

  useEffect(() => {
    api.getBestSellers().then(data => {
      setProducts(data);
      setLoading(false);
    });
  }, []);

  const filteredProducts = activeTab === 'all' 
    ? products 
    : products.filter(p => p.category === activeTab);

  return (
    <section id="best" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif text-gray-900 mb-4">BEST! SELLER</h2>
          <p className="text-gray-500 tracking-wider text-sm">베스트 셀러를 만나보세요</p>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveTab(category.id)}
              className={`px-6 py-2 text-sm tracking-wider transition-colors ${
                activeTab === category.id 
                  ? 'bg-gray-900 text-white' 
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Product Grid */}
        {loading ? (
          <div className="grid grid-cols-2 lg:grid-cols-5 gap-4 sm:gap-6">
            {[1, 2, 3, 4, 5].map(i => (
              <div key={i} className="animate-pulse">
                <div className="aspect-square bg-gray-200 mb-4"></div>
                <div className="h-4 bg-gray-200 w-3/4 mx-auto mb-2"></div>
                <div className="h-4 bg-gray-200 w-1/2 mx-auto"></div>
              </div>
            ))}
          </div>
        ) : (
          <motion.div layout className="grid grid-cols-2 lg:grid-cols-5 gap-4 sm:gap-6">
            <AnimatePresence mode="popLayout">
              {filteredProducts.map((product) => (
                <motion.div 
                  key={product.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  className="group cursor-pointer"
                >
                  <div className="relative aspect-square overflow-hidden bg-gray-100 mb-4">
                    <img 
                      src={product.image} 
                      alt={product.name}
                      className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
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
                        className="w-full bg-white/90 backdrop-blur-sm text-gray-900 py-2 text-xs tracking-wider hover:bg-gray-900 hover:text-white transition-colors"
                      >
                        장바구니 담기
                      </button>
                    </div>
                  </div>
                  <div className="text-center">
                    <h3 className="text-sm text-gray-800 mb-1 truncate px-2">{product.name}</h3>
                    <span className="text-sm font-medium text-gray-900">
                      {product.price.toLocaleString()}원
                    </span>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        )}
      </div>
    </section>
  );
}
