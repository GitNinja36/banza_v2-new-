import { motion } from 'motion/react';
import { AppIcon } from './Logo';

export default function FinalCTA() {
  return (
    <section id="download" className="py-32 px-6 bg-surface relative overflow-hidden flex flex-col items-center justify-center min-h-[80vh]">
      {/* Soft Ambient Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div 
          animate={{ 
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.5, 0.3] 
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[100px]"
        />
        <motion.div 
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.4, 0.2] 
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-tertiary/5 rounded-full blur-[80px]"
        />
      </div>

      <div className="max-w-3xl mx-auto text-center relative z-10 flex flex-col items-center">
        
        {/* Abstract Twin Representation */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="mb-12 relative"
        >
          <div className="w-24 h-24 rounded-full bg-surface-container-lowest shadow-sm border border-outline-variant/20 flex items-center justify-center relative z-10">
            <motion.div 
              animate={{ scale: [1, 1.05, 1], opacity: [0.8, 1, 0.8] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-tertiary blur-[2px]"
            />
          </div>
          {/* Orbiting element */}
          <motion.div 
            animate={{ rotate: 360 }} 
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }} 
            className="absolute inset-[-20px] z-0"
          >
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-primary/40 backdrop-blur-sm border border-primary/20"></div>
          </motion.div>
        </motion.div>

        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="font-headline text-5xl md:text-7xl font-bold tracking-tight text-on-surface mb-8 leading-[1.05]"
        >
          Ready to meet <br/>
          <span className="text-primary italic font-serif font-normal">your Twin?</span>
        </motion.h2>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="text-lg md:text-xl text-on-surface-variant font-light mb-12 max-w-xl mx-auto font-body leading-relaxed"
        >
          Start building your personal AI today. It only gets smarter, more intuitive, and more personal from here.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col items-center"
        >
          <motion.button 
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="px-10 py-5 bg-primary text-white rounded-full font-label text-sm font-bold tracking-widest uppercase shadow-lg hover:bg-primary/90 transition-colors"
          >
            Get Banza Free
          </motion.button>
          <p className="mt-6 text-[10px] font-label uppercase tracking-[0.2em] text-on-surface-variant/60">
            Available on iOS and Android
          </p>
        </motion.div>
      </div>
    </section>
  );
}
