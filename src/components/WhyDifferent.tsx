import { motion } from 'motion/react';
import { Settings2, SlidersHorizontal, ShieldCheck, Sparkles, BrainCircuit, Fingerprint } from 'lucide-react';

export default function WhyDifferent() {
  return (
    <section id="why-banza" className="pt-32 pb-36 px-6 md:px-12 max-w-7xl mx-auto">
      <div className="text-center mb-24 max-w-3xl mx-auto">
        <motion.span 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="font-label font-bold text-primary uppercase tracking-[0.2em] text-[10px] mb-6 block"
        >
          The Architecture of You
        </motion.span>
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="font-headline text-4xl md:text-6xl font-bold tracking-tight text-on-surface leading-[1.1]"
        >
          Personal AI should <br className="hidden md:block"/> actually feel personal.
        </motion.h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        
        {/* Card 1: Understands Nuance */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          whileHover={{ y: -8, boxShadow: "0 20px 40px rgba(0,0,0,0.08)" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="bg-surface-container-low rounded-[2rem] p-10 flex flex-col h-[400px] overflow-hidden relative group border border-transparent hover:border-primary/10 transition-colors duration-500 cursor-pointer"
        >
          <div className="relative z-10 flex flex-col h-full">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-8 text-primary group-hover:scale-110 transition-transform duration-500">
              <BrainCircuit size={24} strokeWidth={1.5} />
            </div>
            <h3 className="font-headline font-bold text-2xl mb-3 text-on-surface">Understands Nuance</h3>
            <p className="font-body text-on-surface-variant text-base leading-relaxed max-w-[280px]">Banza knows the difference between your 'focus' jazz and your 'dinner party' jazz. It grasps context, not just keywords.</p>
          </div>
          
          {/* Abstract Visual */}
          <div className="absolute bottom-0 right-0 w-full h-2/3 flex items-end justify-end p-8 opacity-80 group-hover:opacity-100 transition-opacity">
            <div className="bg-surface-container-lowest p-6 rounded-2xl shadow-xl w-64 space-y-4 transform translate-x-4 translate-y-4 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-500">
              {[
                { label: "Acoustic", val: "80%" },
                { label: "Electronic", val: "30%" },
                { label: "Tempo", val: "65%" }
              ].map((item, i) => (
                <div key={i} className="space-y-1">
                  <div className="flex justify-between text-[10px] font-label font-bold text-on-surface-variant uppercase">
                    <span>{item.label}</span>
                    <span>{item.val}</span>
                  </div>
                  <div className="h-1.5 w-full bg-surface-container rounded-full overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      whileInView={{ width: item.val }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.2 + (i * 0.1), ease: [0.22, 1, 0.36, 1] }}
                      className="h-full bg-primary rounded-full"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Card 2: Evolves With You */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          whileHover={{ y: -8, boxShadow: "0 20px 40px rgba(0,0,0,0.08)" }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="bg-surface-container rounded-[2rem] p-10 flex flex-col h-[400px] overflow-hidden relative group border border-transparent hover:border-primary/10 transition-colors duration-500 cursor-pointer"
        >
          <div className="relative z-10 flex flex-col h-full">
            <div className="w-12 h-12 rounded-full bg-tertiary/10 flex items-center justify-center mb-8 text-tertiary group-hover:scale-110 transition-transform duration-500">
              <Sparkles size={24} strokeWidth={1.5} />
            </div>
            <h3 className="font-headline font-bold text-2xl mb-3 text-on-surface">Evolves With You</h3>
            <p className="font-body text-on-surface-variant text-base leading-relaxed max-w-[280px]">Your Twin isn't static. It learns from every interaction, refining its model of your taste and preferences daily.</p>
          </div>

          <div className="absolute bottom-0 right-0 w-full h-2/3 flex items-center justify-center pointer-events-none opacity-50 group-hover:opacity-100 transition-opacity duration-700">
            <div className="relative w-32 h-32 flex items-center justify-center translate-x-12 translate-y-12">
              {[1, 2, 3].map((i) => (
                <motion.div
                  key={i}
                  animate={{ scale: [1, 2], opacity: [0.5, 0] }}
                  transition={{ duration: 4, repeat: Infinity, delay: i * 1.3, ease: "easeOut" }}
                  className="absolute w-full h-full rounded-full border border-tertiary/40"
                />
              ))}
              <div className="w-8 h-8 bg-tertiary/40 rounded-full blur-sm"></div>
            </div>
          </div>
        </motion.div>

        {/* Card 3: Speaks Your Language */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          whileHover={{ y: -8, boxShadow: "0 20px 40px rgba(0,0,0,0.08)" }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="bg-surface-container-high rounded-[2rem] p-10 flex flex-col h-[400px] overflow-hidden relative group border border-transparent hover:border-primary/10 transition-colors duration-500 cursor-pointer"
        >
          <div className="relative z-10 flex flex-col h-full">
            <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center mb-8 text-secondary group-hover:scale-110 transition-transform duration-500">
              <Fingerprint size={24} strokeWidth={1.5} />
            </div>
            <h3 className="font-headline font-bold text-2xl mb-3 text-on-surface">Speaks Your Language</h3>
            <p className="font-body text-on-surface-variant text-base leading-relaxed max-w-[280px]">It doesn't just know what you like, it knows how you like it presented. Direct, detailed, or somewhere in between.</p>
          </div>

          <div className="absolute bottom-8 left-8 right-8">
            <div className="bg-surface-container-lowest rounded-2xl p-4 shadow-lg space-y-3 transform group-hover:-translate-y-2 transition-transform duration-500">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Settings2 size={16} className="text-primary group-hover:rotate-90 transition-transform duration-500" />
                  <span className="text-xs font-bold font-label">Communication Style</span>
                </div>
                <span className="text-[10px] bg-primary/10 text-primary px-2 py-1 rounded-full font-bold">Direct</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <SlidersHorizontal size={16} className="text-tertiary group-hover:rotate-180 transition-transform duration-500" />
                  <span className="text-xs font-bold font-label">Proactivity Level</span>
                </div>
                <span className="text-[10px] bg-tertiary/10 text-tertiary px-2 py-1 rounded-full font-bold">High</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Card 4: Private By Design */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          whileHover={{ y: -8, boxShadow: "0 20px 40px rgba(0,0,0,0.08)" }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="bg-surface-container-lowest rounded-[2rem] p-10 flex flex-col h-[400px] overflow-hidden relative group border border-outline-variant/20 hover:border-primary/20 transition-colors duration-500 editorial-shadow cursor-pointer"
        >
          <div className="relative z-10 flex flex-col h-full">
            <div className="w-12 h-12 rounded-full bg-surface-container-high flex items-center justify-center mb-8 text-on-surface group-hover:scale-110 transition-transform duration-500">
              <ShieldCheck size={24} strokeWidth={1.5} />
            </div>
            <h3 className="font-headline font-bold text-2xl mb-3 text-on-surface">Private By Design</h3>
            <p className="font-body text-on-surface-variant text-base leading-relaxed max-w-[280px]">Dial in exactly what Banza knows. Your data stays yours, and you can wipe memories instantly.</p>
          </div>

          <div className="absolute bottom-8 right-8 left-8 flex flex-col gap-4">
            <div className="w-full bg-surface-container-low h-12 rounded-xl flex items-center px-4 justify-between transform group-hover:translate-x-2 transition-transform duration-500">
              <span className="text-xs font-bold font-label text-on-surface-variant">Location History</span>
              <div className="w-10 h-5 bg-primary rounded-full relative">
                <div className="absolute right-1 top-1 w-3 h-3 bg-white rounded-full"></div>
              </div>
            </div>
            <div className="w-full bg-surface-container-low h-12 rounded-xl flex items-center px-4 justify-between opacity-60 transform group-hover:-translate-x-2 transition-transform duration-500">
              <span className="text-xs font-bold font-label text-on-surface-variant">Purchase Data</span>
              <div className="w-10 h-5 bg-surface-container-highest rounded-full relative">
                <div className="absolute left-1 top-1 w-3 h-3 bg-white rounded-full"></div>
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
