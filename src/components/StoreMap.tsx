import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Clock, Plus } from 'lucide-react';

export default function StoreMap() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Text Content */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="w-full lg:w-1/3 space-y-8"
          >
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">오프라인 스토어</h2>
              <p className="text-gray-600 leading-relaxed">
                매장에서는 고객 여러분을 따뜻하게 맞이하고<br />
                기프트 구매를 위한 맞춤형 컨설팅을 제공해드립니다.
              </p>
            </div>

            <div className="space-y-4 text-sm text-gray-800">
              <div className="flex items-start space-x-3">
                <Clock className="w-5 h-5 text-gray-400 mt-0.5" />
                <div>
                  <p className="font-medium">운영시간</p>
                  <p className="text-gray-600">평일 09:00 - 18:00</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-gray-400 mt-0.5" />
                <div>
                  <p className="font-medium">주소</p>
                  <p className="text-gray-600">서울특별시 동작구 보라매로0길 00</p>
                </div>
              </div>
            </div>

            <a 
              href="https://www.google.com/maps" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 text-sm font-bold tracking-widest text-gray-900 hover:text-gray-600 transition-colors"
            >
              <span>VIEW MORE</span>
              <Plus className="w-4 h-4" />
            </a>
          </motion.div>

          {/* Map Image */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="w-full lg:w-2/3"
          >
            <div className="relative aspect-[4/3] lg:aspect-[16/9] overflow-hidden bg-gray-100 rounded-lg">
              <img 
                src="https://images.unsplash.com/photo-1570825930505-1046d3215574?auto=format&fit=crop&q=80&w=1600" 
                alt="Store Location"
                className="object-cover w-full h-full hover:scale-105 transition-transform duration-700"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
