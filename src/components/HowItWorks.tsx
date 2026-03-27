import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { Music, RefreshCw, Film, Sparkles } from 'lucide-react';

const steps = [
  {
    step: "01",
    title: "Connect your apps",
    desc: "Securely link your favorite services from Spotify to Netflix. Banza gathers your taste to build a complete profile.",
    visual: (
      <div className="flex items-center gap-3 relative z-10">
        <motion.div
          animate={{ y: [-4, 4, -4] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center"
        >
          <Music className="text-primary" size={24} />
        </motion.div>
        <div className="w-1 px-4 border-t-2 border-dashed border-outline-variant/30"></div>
        <motion.div
          animate={{ rotate: 360, scale: [1, 1.05, 1] }}
          transition={{
            rotate: { duration: 8, repeat: Infinity, ease: "linear" },
            scale: { duration: 2, repeat: Infinity, ease: "easeInOut" }
          }}
          className="w-14 h-14 bg-primary text-white rounded-full flex items-center justify-center shadow-lg"
        >
          <RefreshCw size={24} />
        </motion.div>
        <div className="w-1 px-4 border-t-2 border-dashed border-outline-variant/30"></div>
        <motion.div
          animate={{ y: [4, -4, 4] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center"
        >
          <Film className="text-tertiary" size={24} />
        </motion.div>
      </div>
    )
  },
  {
    step: "02",
    title: "Train your Twin",
    desc: "Refine your AI Twin with short daily questionnaires. It evolves with your changing moods, becoming more like you with every interaction.",
    visual: (
      <div className="flex flex-col items-center justify-center w-full">
        <div className="flex flex-wrap gap-2 justify-center mb-4">
          <motion.span
            animate={{ y: [-2, 2, -2] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0 }}
            className="px-3 py-1 bg-white rounded-full text-[10px] font-bold shadow-sm border border-outline-variant/10"
          >
            Jazz Mornings
          </motion.span>
          <motion.span
            animate={{ y: [-2, 2, -2] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="px-3 py-1 bg-primary/10 text-primary rounded-full text-[10px] font-bold shadow-sm"
          >
            Sci-Fi Enthusiast
          </motion.span>
          <motion.span
            animate={{ y: [-2, 2, -2] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 2 }}
            className="px-3 py-1 bg-white rounded-full text-[10px] font-bold shadow-sm border border-outline-variant/10"
          >
            Minimalist
          </motion.span>
        </div>
        <div className="w-full h-2 bg-surface-container-highest rounded-full overflow-hidden">
          <motion.div
            initial={{ width: "0%" }}
            whileInView={{ width: "68%" }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="h-full bg-gradient-to-r from-primary to-primary-container rounded-full"
          />
        </div>
        <span className="mt-2 text-[10px] font-medium text-on-surface-variant">Identity Syncing... 68%</span>
      </div>
    ),
    delay: 0.2
  },
  {
    step: "03",
    title: "Unlock experiences",
    desc: "Experience proactive curation of personal recommendations, from restaurants near you to music playlists. Your Twin suggests the perfect choice before you have to think about it.",
    visual: (
      <div className="bg-white p-4 rounded-xl shadow-xl w-full border border-outline-variant/5">
        <div className="flex items-center gap-3 mb-3">
          <motion.div
            animate={{ rotate: [0, 15, -15, 0], scale: [1, 1.2, 1] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <Sparkles className="text-tertiary" size={16} />
          </motion.div>
          <span className="text-[10px] font-bold text-on-surface-variant uppercase tracking-tighter">Tonight's Pick</span>
        </div>
        <div className="h-16 w-full rounded-lg mb-2 overflow-hidden">
          <motion.img
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuA_EPQzlCxnVPES44ABsDUwmB3RhdoO4o2u4scVIKFcbXuLVXzZ8Lcx2-UKSLaiVOWAQ_GvfN-r5mwNBIUt079Gkl6qzNSUuAPy1BqQH6S_zHZZH5_jshZM6ffylVNMjAIJre7vUcLsb6EEAYHMLnEg6cET2rLvuHMnBDab5va7tM7xQnxqslMcS0TZ3CLpuEOMlGsGp3AtXEwuVKyP6S5wU_RJk7FNs6lTSwKdAO0Hq9mdxVwaX4lGnpn1QZcHtBYG14NvW5ZHRss"
            alt="Recommendation Preview"
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="text-[11px] font-bold text-on-surface">The Midnight Library</div>
      </div>
    ),
    delay: 0.4
  },
  {
    step: "04",
    title: "Stay in control",
    desc: "You own your data, period. Adjust privacy settings, toggle learning modes, or reset your Twin anytime. Your curation remains strictly yours.",
    visual: (
      <div className="w-full space-y-3">
        {[
          { label: "Privacy Shield", active: true },
          { label: "Data Portability", active: false },
          { label: "Active Learning", active: true }
        ].map((toggle, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.02 }}
            className="flex items-center justify-between p-2 bg-white rounded-lg shadow-sm"
          >
            <span className="text-[10px] font-medium">{toggle.label}</span>
            <div className={`w-8 h-4 rounded-full relative transition-colors ${toggle.active ? 'bg-primary' : 'bg-surface-container-highest'}`}>
              <motion.div
                initial={false}
                animate={{
                  x: toggle.active ? 16 : 2,
                  scale: toggle.active ? [1, 1.2, 1] : 1
                }}
                transition={{
                  x: { type: "spring", stiffness: 500, damping: 30 },
                  scale: { duration: 2, repeat: Infinity, ease: "easeInOut" }
                }}
                className="absolute top-0.5 w-3 h-3 bg-white rounded-full shadow-sm"
              />
            </div>
          </motion.div>
        ))}
      </div>
    ),
    delay: 0.6
  }
];

export default function HowItWorks() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 70%", "end 50%"]
  });

  const lineWidth = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section id="how-it-works" ref={containerRef} className="pt-32 pb-24 px-6 overflow-x-hidden bg-surface">
      <div className="max-w-4xl mx-auto text-center mb-24">
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-label font-bold tracking-wider uppercase text-xs text-primary mb-4 block"
        >
          How Banza's AI Twin Works
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-5xl md:text-7xl font-headline font-extrabold tracking-tight text-on-background mb-8 leading-[1.1]"
        >
          Your Twin comes to life in 4 steps
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-lg md:text-xl text-on-surface-variant leading-relaxed max-w-2xl mx-auto font-body"
        >
          We’ve replaced tedious prompting with an intuitive training process. Your Banza AI Twin learns who you are across your digital life to create a proactive companion that understands you.
        </motion.p>
      </div>

      <div className="max-w-7xl mx-auto relative">
        {/* Connecting Line */}
        <div className="absolute top-1/2 left-0 w-full h-1 bg-outline-variant/10 -translate-y-1/2 hidden lg:block z-0 rounded-full">
          <motion.div
            className="h-full bg-primary rounded-full relative"
            style={{ width: lineWidth }}
          >
            {/* Traveling glowing dot */}
            <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 w-4 h-4 bg-white border-[3px] border-primary rounded-full shadow-[0_0_15px_rgba(230,92,0,0.8)]"></div>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
          {steps.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: item.delay || 0 }}
              className={`group relative bg-surface-container-lowest rounded-[2rem] p-8 shadow-[0_12px_40px_rgba(28,28,25,0.04)] hover:shadow-[0_20px_60px_rgba(28,28,25,0.08)] hover:-translate-y-2 transition-all duration-500 cursor-pointer ${index % 2 !== 0 ? 'lg:mt-12' : ''}`}
            >
              <div className="h-48 mb-8 flex items-center justify-center relative overflow-hidden bg-surface-container-low rounded-2xl px-4">
                {item.visual}
                {index === 0 && (
                  <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary to-transparent pointer-events-none"></div>
                )}
              </div>
              <div className="space-y-4">
                <span className="text-primary font-bold font-label text-xs uppercase tracking-widest">Step {item.step}</span>
                <h3 className="text-2xl font-bold font-headline text-on-surface">{item.title}</h3>
                <p className="text-on-surface-variant leading-relaxed text-sm font-body">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
