import React from 'react';
import { motion, useMotionValue, useTransform, useSpring } from 'motion/react';
import { Film, Footprints, Sparkles, Infinity as InfinityIcon } from 'lucide-react';

export default function MeetTwin() {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 100, damping: 30, mass: 0.5 });
  const mouseYSpring = useSpring(y, { stiffness: 100, damping: 30, mass: 0.5 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <section id="twin" className="py-32 px-6 md:px-12 max-w-7xl mx-auto overflow-hidden bg-surface">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">

        {/* Left Content */}
        <div className="space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="font-label font-bold text-primary uppercase tracking-[0.2em] text-[10px] mb-6 block">
              Meet Your Twin
            </span>
            <h2 className="font-headline text-5xl md:text-7xl font-bold tracking-tight text-on-surface leading-[1.05] mb-6">
              The first AI<br />
              <span className="text-primary relative inline-block">
                that feels yours.
              </span>
            </h2>
            <p className="text-lg md:text-xl text-on-surface-variant font-light leading-relaxed font-body max-w-md">
              Not a generic assistant. A personal intelligence that learns your taste, remembers your context, and evolves with every interaction.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-wrap gap-x-8 gap-y-4 pt-4"
          >
            {[
              "Remembers context",
              "Adapts to taste",
              "Private by design"
            ].map((text, i) => (
              <div key={i} className="flex items-center gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-primary/60"></div>
                <span className="text-sm font-medium text-on-surface font-body">{text}</span>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Right Visual */}
        <div className="relative h-[500px] md:h-[600px] flex items-center justify-center [perspective:1000px]">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
            className="w-full max-w-[480px] aspect-square bg-white rounded-[40px] shadow-[0_20px_60px_rgba(28,28,25,0.05)] relative flex items-center justify-center cursor-pointer transition-shadow duration-700 hover:shadow-[0_30px_80px_rgba(230,92,0,0.15)]"
          >
            {/* Concentric Circles */}
            <div
              className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden rounded-[40px]"
              style={{ transform: "translateZ(-30px)" }}
            >
              <div className="w-[120%] h-[120%] rounded-full border border-[#EFECE6] absolute animate-[spin_20s_linear_infinite]"></div>
              <div className="w-[90%] h-[90%] rounded-full border border-[#EFECE6] absolute animate-[spin_15s_linear_infinite_reverse]"></div>
              <div className="w-[60%] h-[60%] rounded-full bg-gradient-to-tr from-[#E65C00]/10 to-transparent absolute blur-xl"></div>
            </div>

            {/* Center Infinity Logo */}
            <div
              className="w-24 h-24 bg-white rounded-full shadow-[0_10px_30px_rgba(230,92,0,0.15)] flex items-center justify-center z-10 relative"
              style={{ transform: "translateZ(40px)" }}
            >
              <InfinityIcon size={40} className="text-[#E65C00]" strokeWidth={2.5} />
            </div>

            {/* Floating Card 1 (Top Right) */}
            <div className="absolute -top-6 -right-6 md:-top-10 md:-right-10 z-20" style={{ transform: "translateZ(80px)" }}>
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="bg-white p-4 rounded-2xl shadow-[0_15px_35px_rgba(0,0,0,0.08)] max-w-[220px]"
              >
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-[#E6F0FF] flex items-center justify-center text-[#0066FF] shrink-0">
                    <Film size={14} />
                  </div>
                  <div>
                    <p className="text-xs font-bold font-body text-[#1A1A1A] leading-snug mb-1">You've been into slower films lately.</p>
                    <span className="text-[8px] font-bold uppercase tracking-widest text-[#0066FF] font-label">Curated Thought</span>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Floating Card 2 (Middle Left) */}
            <div className="absolute top-1/2 -left-6 md:-left-16 -translate-y-1/2 z-20" style={{ transform: "translateZ(100px)" }}>
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="bg-white p-4 rounded-2xl shadow-[0_15px_35px_rgba(0,0,0,0.08)] max-w-[200px]"
              >
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-[#FFF0E6] flex items-center justify-center text-[#E65C00] shrink-0">
                    <Footprints size={14} />
                  </div>
                  <div>
                    <p className="text-xs font-bold font-body text-[#1A1A1A] leading-snug mb-1">Your late-night taste feels calmer this week.</p>
                    <span className="text-[8px] font-bold uppercase tracking-widest text-[#8B4513] font-label">Rhythm Update</span>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Floating Card 3 (Bottom Right) */}
            <div className="absolute -bottom-6 right-4 md:-bottom-8 md:right-10 z-20" style={{ transform: "translateZ(60px)" }}>
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                className="bg-white px-6 py-4 rounded-full shadow-[0_15px_35px_rgba(0,0,0,0.08)] flex items-center gap-3"
              >
                <div className="w-2 h-2 rounded-full bg-[#E65C00]"></div>
                <span className="text-[10px] font-bold uppercase tracking-widest text-[#1A1A1A] font-label">Taste Profile Evolving.</span>
              </motion.div>
            </div>

            {/* Center Label */}
            <div className="absolute bottom-12 left-1/2 -translate-x-1/2 text-center" style={{ transform: "translateZ(30px)" }}>
              <h4 className="font-headline font-bold text-[#1A1A1A] text-lg">Your Twin</h4>
              <p className="text-[9px] font-label uppercase tracking-widest text-[#8B8B8B] mt-1">Deep Learning Mode Active</p>
              <div className="flex justify-center gap-1 mt-3">
                <div className="w-1.5 h-1.5 rounded-full bg-[#E65C00] animate-pulse"></div>
                <div className="w-1.5 h-1.5 rounded-full bg-[#EFECE6] animate-pulse" style={{ animationDelay: "0.2s" }}></div>
                <div className="w-1.5 h-1.5 rounded-full bg-[#EFECE6] animate-pulse" style={{ animationDelay: "0.4s" }}></div>
              </div>
            </div>

          </motion.div>
        </div>
      </div>
      {/* Bottom Section */}
      <div className="bg-[#F5F3ED] py-16 px-8 md:py-24 md:px-16 rounded-[3rem] mt-12 w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="font-headline text-4xl md:text-5xl font-bold tracking-tight text-[#1A1A1A]"
            >
              Designed for depth, not just data.
            </motion.h3>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="text-lg text-[#4A4A4A] font-light leading-relaxed font-body max-w-md"
            >
              AI should understand intent, not just process requests. Our Memory Engine builds on every conversation, creating a companion that reflects your unique perspective.
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
              className="px-8 py-4 bg-[#EAE8E3] text-[#1A1A1A] rounded-full font-label text-xs font-bold tracking-widest uppercase hover:bg-[#E0DCD5] transition-colors"
            >
              Learn More
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-[#f37021] text-white rounded-full font-label text-xs font-bold tracking-widest uppercase hover:bg-[#e65c00] transition-colors shadow-lg shadow-[#f37021]/20"
            >
              Build My Twin
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
