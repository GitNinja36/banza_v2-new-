import React from 'react';
import { motion, useScroll, useTransform, useMotionValue, useSpring } from 'motion/react';
import { Shield, Network, Box, ShieldCheck } from 'lucide-react';
import { AppIcon } from './Logo';

export default function Hero() {
  const { scrollY } = useScroll();
  const phoneScrollY = useTransform(scrollY, [0, 800], [0, -100]);
  const card1ScrollY = useTransform(scrollY, [0, 800], [0, -250]);
  const card2ScrollY = useTransform(scrollY, [0, 800], [0, 180]);
  const card3ScrollY = useTransform(scrollY, [0, 800], [0, -150]);
  const card4ScrollY = useTransform(scrollY, [0, 800], [0, 220]);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 30, stiffness: 100, mass: 0.5 };
  const smoothMouseX = useSpring(mouseX, springConfig);
  const smoothMouseY = useSpring(mouseY, springConfig);

  const handleMouseMove = (e: React.MouseEvent) => {
    const { clientX, clientY } = e;
    const x = (clientX / window.innerWidth - 0.5) * 50; 
    const y = (clientY / window.innerHeight - 0.5) * 50; 
    mouseX.set(x);
    mouseY.set(y);
  };

  const rotateX = useTransform(smoothMouseY, [-25, 25], [10, -10]);
  const rotateY = useTransform(smoothMouseX, [-25, 25], [-10, 10]);

  return (
    <section 
      className="relative min-h-screen pt-16 overflow-hidden flex items-center perspective-1000 bg-surface"
      onMouseMove={handleMouseMove}
    >
      {/* Soft Ambient Background instead of particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-primary/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] bg-tertiary/5 rounded-full blur-[150px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center py-12 lg:py-24 w-full">
        
        {/* LEFT SIDE: Content */}
        <div className="flex flex-col space-y-10 z-10">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="space-y-4"
          >
            <h1 className="font-headline text-6xl lg:text-[6.5rem] font-bold leading-[0.95] tracking-tight text-on-surface">
              Build Your <br /> 
              <span className="text-primary italic font-serif font-normal">AI Twin</span>
            </h1>
            <p className="max-w-lg text-xl lg:text-2xl text-on-surface-variant leading-relaxed font-serif mt-6">
              Your Twin learns from the apps you use and the signals you choose to share — so it can proactively help with food, entertainment, shopping, travel, and more.
            </p>
          </motion.div>

          {/* Chips */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-wrap gap-3"
          >
            {[
              { icon: Shield, text: "Private AI Twin", iconColor: "text-primary" },
              { icon: Network, text: "Cross-app intelligence", iconColor: "text-tertiary" },
              { icon: Box, text: "Proactive Recommendations", iconColor: "text-secondary" }
            ].map((chip, i) => (
              <motion.div 
                key={i} 
                whileHover={{ scale: 1.02, backgroundColor: "var(--color-surface-container-high)" }}
                className="group relative overflow-hidden flex items-center gap-2 px-5 py-2.5 bg-surface-container-low rounded-full text-sm font-medium text-on-surface font-body cursor-pointer transition-colors border border-outline-variant/20"
              >
                <div className="absolute inset-0 -translate-x-full group-hover:animate-shimmer-slide bg-gradient-to-r from-transparent via-white/10 to-transparent z-10" />
                <chip.icon size={16} className={chip.iconColor} />
                {chip.text}
              </motion.div>
            ))}
          </motion.div>

          {/* Buttons */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col sm:flex-row items-center gap-4 mt-4"
          >
            <div className="relative inline-block group w-full sm:w-auto">
              <div className="absolute -inset-1 bg-gradient-to-r from-primary via-secondary-container to-primary rounded-full blur-md opacity-70 group-hover:opacity-100 animate-shimmer-border transition duration-500"></div>
              <motion.button 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="relative w-full sm:w-auto px-8 py-4 bg-primary text-white rounded-full font-label text-sm font-bold tracking-wider uppercase hover:bg-primary/90 shadow-lg transition-colors"
                transition={{ type: "spring", stiffness: 400, damping: 25 }}
              >
                Download Banza
              </motion.button>
            </div>
            <motion.button 
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full sm:w-auto px-8 py-4 bg-surface-container-low text-on-surface rounded-full font-label text-sm font-bold tracking-wider uppercase hover:bg-surface-container-high transition-colors border border-outline-variant/20"
              transition={{ type: "spring", stiffness: 400, damping: 25 }}
            >
              See how it works
            </motion.button>
          </motion.div>

          {/* Trust Micro-copy */}
          <div className="pt-8 border-t border-outline-variant/20 mt-8">
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex items-center gap-2 text-xs font-medium text-on-surface-variant font-serif"
            >
              <ShieldCheck size={14} className="text-on-surface" />
              Private by design. Built for your control. Personal to only you.
            </motion.p>
          </div>
        </div>

        {/* RIGHT SIDE: Visual */}
        <div className="relative flex justify-center items-center lg:h-[800px] mt-12 lg:mt-0">
          
          {/* Main Device Mockup */}
          <motion.div style={{ y: phoneScrollY }} className="relative z-10">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              style={{ 
                x: smoothMouseX,
                y: smoothMouseY,
                rotateX,
                rotateY,
                transformStyle: "preserve-3d"
              }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
              className="relative w-[320px] lg:w-[360px] aspect-[9/19] rounded-[3.5rem] p-[3px] bg-gradient-to-br from-white/80 via-white/20 to-white/40 shadow-[0_0_50px_rgba(230,92,0,0.2),0_40px_100px_rgba(0,0,0,0.1)]"
            >
              {/* Outer Glow */}
              <div className="absolute inset-0 rounded-[3.5rem] bg-gradient-to-tr from-primary/30 via-transparent to-primary/10 blur-xl -z-10"></div>
              
              {/* Inner Phone Body */}
              <div className="w-full h-full bg-[#1A1A1A] rounded-[3.4rem] p-3 relative shadow-[inset_0_0_20px_rgba(0,0,0,0.8)]">
                
                {/* Screen */}
                <div className="h-full w-full bg-surface rounded-[2.8rem] overflow-hidden relative flex flex-col items-center justify-center shadow-[0_0_0_2px_rgba(0,0,0,1)]">
                  
                  {/* Dynamic Glare */}
                  <motion.div
                    className="absolute -inset-[150%] z-50 pointer-events-none bg-gradient-to-tr from-transparent via-white/40 to-transparent rotate-45"
                    style={{
                      x: useTransform(smoothMouseX, [-25, 25], ['-30%', '30%']),
                      y: useTransform(smoothMouseY, [-25, 25], ['-30%', '30%'])
                    }}
                  />
                  
                  {/* Graphic */}
                  <div className="relative w-48 h-48 flex items-center justify-center mb-12">
                <motion.div 
                  animate={{ scale: [1, 1.02, 1] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute inset-0 bg-gradient-to-b from-surface-container-lowest to-surface-container-low rounded-full"
                ></motion.div>
                <div className="absolute inset-4 bg-gradient-to-b from-surface-container-lowest to-surface-container-low rounded-full shadow-inner"></div>
                <motion.div 
                  animate={{ y: [-5, 5, -5] }}
                  transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute inset-4 flex items-center justify-center z-20"
                >
                  <div className="w-24 h-24 rounded-full bg-gradient-to-br from-primary to-tertiary blur-[2px] opacity-80" />
                </motion.div>
              </div>

              {/* Text */}
              <div className="text-center px-6">
                <motion.h3 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="text-2xl font-headline font-bold text-on-surface mb-3"
                >
                  Good Morning
                </motion.h3>
                <motion.p 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 }}
                  className="text-sm text-on-surface-variant font-serif leading-relaxed"
                >
                  I've curated 4 new experiences for you based on this week's vibe.
                </motion.p>
              </div>

            </div>
          </div>
          </motion.div>
          </motion.div>

          {/* Floating Recommendation Cards */}
          
          {/* Card 1: Food */}
          <motion.div 
            style={{ y: card1ScrollY, x: useTransform(smoothMouseX, x => x * -0.5) }}
            className="absolute top-12 -left-4 lg:-left-8 z-20 hidden md:block"
          >
            <motion.div 
              animate={{ y: [0, -10, 0], rotate: [0, 1, 0] }}
              transition={{ duration: 5.2, repeat: Infinity, ease: "easeInOut" }}
              whileHover={{ scale: 1.02, boxShadow: "0 20px 40px rgba(0,0,0,0.08)" }}
              className="bg-surface-container-lowest/90 backdrop-blur-md p-4 rounded-2xl shadow-sm w-64 flex gap-4 items-start border border-outline-variant/20 cursor-pointer editorial-shadow"
            >
              <img src="https://images.unsplash.com/photo-1541518763669-27fef04b14ea?w=100&h=100&fit=crop" alt="Food" className="w-12 h-12 rounded-xl object-cover shrink-0" />
              <div>
                <span className="text-[10px] font-bold uppercase tracking-widest text-primary font-label block mb-1">Food</span>
                <p className="text-sm font-bold font-headline text-on-surface mb-1">Mezze nearby</p>
                <p className="text-[10px] text-on-surface-variant font-serif leading-snug">Top rated by locals. Your Twin found a quiet table for 7 PM.</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Card 2: Events */}
          <motion.div 
            style={{ y: card2ScrollY, x: useTransform(smoothMouseX, x => x * 0.8) }}
            className="absolute bottom-24 -left-4 lg:-left-8 z-20 hidden md:block"
          >
            <motion.div 
              animate={{ y: [0, -12, 0], rotate: [0, -1, 0] }}
              transition={{ duration: 6.1, repeat: Infinity, ease: "easeInOut", delay: 0.7 }}
              whileHover={{ scale: 1.02, boxShadow: "0 20px 40px rgba(0,0,0,0.08)" }}
              className="bg-surface-container-lowest/90 backdrop-blur-md p-4 rounded-2xl shadow-sm w-64 flex gap-4 items-start border border-outline-variant/20 cursor-pointer editorial-shadow"
            >
              <img src="https://images.unsplash.com/photo-1511192336575-5a79af67a629?w=100&h=100&fit=crop" alt="Events" className="w-12 h-12 rounded-xl object-cover shrink-0" />
              <div>
                <span className="text-[10px] font-bold uppercase tracking-widest text-tertiary font-label block mb-1">Events</span>
                <p className="text-sm font-bold font-headline text-on-surface mb-1">Jazz Set</p>
                <p className="text-[10px] text-on-surface-variant font-serif leading-snug">Live at The Blue Note. Your calendar is clear this Friday.</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Card 3: Shopping */}
          <motion.div 
            style={{ y: card3ScrollY, x: useTransform(smoothMouseX, x => x * -1.2) }}
            className="absolute top-32 -right-4 lg:-right-8 z-20 hidden lg:block"
          >
            <motion.div 
              animate={{ y: [0, -10, 0], rotate: [0, 1, 0] }}
              transition={{ duration: 5.8, repeat: Infinity, ease: "easeInOut", delay: 1.2 }}
              whileHover={{ scale: 1.02, boxShadow: "0 20px 40px rgba(0,0,0,0.08)" }}
              className="bg-surface-container-lowest/90 backdrop-blur-md p-4 rounded-2xl shadow-sm w-64 flex gap-4 items-start border border-outline-variant/20 cursor-pointer editorial-shadow"
            >
              <img src="https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=100&h=100&fit=crop" alt="Shopping" className="w-12 h-12 rounded-xl object-cover shrink-0" />
              <div>
                <span className="text-[10px] font-bold uppercase tracking-widest text-secondary font-label block mb-1">Shopping</span>
                <p className="text-sm font-bold font-headline text-on-surface mb-1">Personal Style</p>
                <p className="text-[10px] text-on-surface-variant font-serif leading-snug">Available in your size. Limited edition matches your palette.</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Card 4: Travel */}
          <motion.div 
            style={{ y: card4ScrollY, x: useTransform(smoothMouseX, x => x * 0.5) }}
            className="absolute bottom-32 -right-4 lg:-right-8 z-20 hidden md:block"
          >
            <motion.div 
              animate={{ y: [0, -12, 0], rotate: [0, -1, 0] }}
              transition={{ duration: 6.5, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}
              whileHover={{ scale: 1.02, boxShadow: "0 20px 40px rgba(0,0,0,0.08)" }}
              className="bg-surface-container-lowest/90 backdrop-blur-md p-4 rounded-2xl shadow-sm w-64 flex gap-4 items-start border border-outline-variant/20 cursor-pointer editorial-shadow"
            >
              <img src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=100&h=100&fit=crop" alt="Travel" className="w-12 h-12 rounded-xl object-cover shrink-0" />
              <div>
                <span className="text-[10px] font-bold uppercase tracking-widest text-primary font-label block mb-1">Travel</span>
                <p className="text-sm font-bold font-headline text-on-surface mb-1">Weekend Stay</p>
                <p className="text-[10px] text-on-surface-variant font-serif leading-snug">A secluded getaway 2 hours away. I've found you the perfect Bed n Breakfast.</p>
              </div>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
