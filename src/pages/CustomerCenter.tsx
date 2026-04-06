import { motion } from 'motion/react';
import { Mail, Phone, MessageSquare, ChevronDown } from 'lucide-react';
import { useState } from 'react';
import { cn } from '@/src/lib/utils';

export default function CustomerCenter() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="bg-white pt-32 pb-20 px-6 md:px-12">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-24">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-[10px] tracking-[0.4em] font-bold text-gray-400 uppercase mb-6 block"
          >
            Support
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-serif tracking-tight mb-10"
          >
            CUSTOMER CENTER
          </motion.h1>
        </div>

        {/* Cafe24 Boards */}
        <div className="mb-24 space-y-16">
          <section>
            <h2 className="text-xl font-serif mb-8 text-center uppercase tracking-widest">공지사항</h2>
            <div dangerouslySetInnerHTML={{ __html: '<div module="board_list_1"></div>' }} />
          </section>
          <section>
            <h2 className="text-xl font-serif mb-8 text-center uppercase tracking-widest">이벤트</h2>
            <div dangerouslySetInnerHTML={{ __html: '<div module="board_list_2"></div>' }} />
          </section>
        </div>

        {/* Contact Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-32">
          <motion.div
            whileHover={{ y: -5 }}
            className="p-10 bg-gray-50 text-center rounded-2xl border border-transparent hover:border-gray-200 transition-all"
          >
            <Mail size={24} className="mx-auto mb-6 text-gray-400" />
            <h3 className="text-xs font-bold tracking-widest mb-4 uppercase">Email Us</h3>
            <p className="text-xs text-gray-500 tracking-widest">support@mongmomang.com</p>
          </motion.div>
          <motion.div
            whileHover={{ y: -5 }}
            className="p-10 bg-gray-50 text-center rounded-2xl border border-transparent hover:border-gray-200 transition-all"
          >
            <Phone size={24} className="mx-auto mb-6 text-gray-400" />
            <h3 className="text-xs font-bold tracking-widest mb-4 uppercase">Call Us</h3>
            <p className="text-xs text-gray-500 tracking-widest">+82 02-123-4567</p>
          </motion.div>
          <motion.div
            whileHover={{ y: -5 }}
            className="p-10 bg-gray-50 text-center rounded-2xl border border-transparent hover:border-gray-200 transition-all"
          >
            <MessageSquare size={24} className="mx-auto mb-6 text-gray-400" />
            <h3 className="text-xs font-bold tracking-widest mb-4 uppercase">Live Chat</h3>
            <p className="text-xs text-gray-500 tracking-widest">Available 11am - 6pm</p>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
