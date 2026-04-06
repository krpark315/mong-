import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { api } from '../services/api';
import { useCart } from '../context/CartContext';

export default function SaleItems() {
  const [products, setProducts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const { addToCart } = useCart();

  useEffect(() => {
    api.getSaleItems().then(data => {
      setProducts(data);
      setLoading(false);
    });
  }, []);

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif text-gray-900 mb-4">Sale Item</h2>
          <p className="text-gray-500 tracking-wider text-sm">특별할인 세일 상품</p>
        </div>

        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map(i => (
              <div key={i} className="animate-pulse bg-white p-4">
                <div className="aspect-[4/5] bg-gray-200 mb-6"></div>
                <div className="h-4 bg-gray-200 w-3/4 mx-auto mb-2"></div>
                <div className="h-4 bg-gray-200 w-1/2 mx-auto"></div>
              </div>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <motion.div 
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group cursor-pointer bg-white p-4 shadow-sm hover:shadow-md transition-shadow relative"
              >
                <div className="relative aspect-[4/5] overflow-hidden bg-gray-100 mb-6">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute top-4 right-4 bg-red-500 text-white text-sm font-bold px-3 py-1 z-10">
                    {product.discount}%
                  </div>
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
                  <h3 className="text-base font-medium text-gray-900 mb-2">{product.name}</h3>
                  <div className="flex items-center justify-center space-x-3">
                    <span className="text-lg font-bold text-red-500">
                      {product.price.toLocaleString()}원
                    </span>
                    {product.originalPrice && (
                      <span className="text-sm text-gray-400 line-through">
                        {product.originalPrice.toLocaleString()}원
                      </span>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
