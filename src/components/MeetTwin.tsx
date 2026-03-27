import React from 'react';
import { motion } from 'motion/react';

export default function MeetTwin() {
  return (
    <section id="twin" className="py-32 px-6 md:px-12 max-w-7xl mx-auto overflow-hidden bg-surface">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center w-full">
        <div className="space-y-6">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="font-headline text-4xl md:text-5xl font-bold tracking-tight text-on-surface"
          >
            Designed for depth, not shallow responses.
          </motion.h3>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="text-lg text-on-surface-variant font-light leading-relaxed font-body max-w-md"
          >
            AI should understand intent, not blindly process requests. With our Memory Engine, every interaction shapes an experience that reflects you — just like a Twin.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col sm:flex-row gap-4 md:justify-end"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-primary text-white rounded-full font-label text-xs font-bold tracking-widest uppercase hover:bg-primary/90 transition-colors shadow-lg"
          >
            Build My Twin
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
