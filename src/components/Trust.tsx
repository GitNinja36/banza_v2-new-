import { motion } from 'motion/react';
import { Fingerprint, Lock, ToggleRight, ShieldCheck, EyeOff } from 'lucide-react';

export default function Trust() {
  return (
    <section id="security" className="py-32 px-6 md:px-12 bg-surface relative overflow-hidden">
      <div className="max-w-7xl mx-auto">

        {/* Top Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            >
              <span className="font-label font-bold text-primary uppercase tracking-[0.2em] text-[10px] mb-6 block">
                Protected Intelligence
              </span>
              <h2 className="font-headline text-5xl md:text-7xl font-bold tracking-tight text-on-surface leading-[1.05] mb-6">
                Secured from the ground up.<br />
                <span className="text-primary">Controlled by you.</span>
              </h2>
              <p className="text-lg md:text-xl text-on-surface-variant font-light leading-relaxed font-body max-w-md">
                Personalization without invasion. Your preferences remain entirely yours, with privacy engineered in from the start.
              </p>
            </motion.div>
          </div>

          {/* Right Visual - Concentric Circles */}
          <div className="relative h-[400px] md:h-[500px] flex items-center justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, type: "spring", bounce: 0.4 }}
              className="relative w-full max-w-[400px] aspect-square flex items-center justify-center"
            >
              {/* Animated Circles */}
              <motion.div
                animate={{ scale: [1, 1.05, 1], opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute inset-0 rounded-full border border-[#E5E0D8] shadow-[inset_0_0_50px_rgba(0,0,0,0.02)]"
              ></motion.div>
              <motion.div
                animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.8, 0.3], rotate: [0, 90, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                className="absolute inset-8 rounded-full border border-[#E5E0D8] border-dashed"
              ></motion.div>
              <motion.div
                animate={{ scale: [1, 1.15, 1], opacity: [0.2, 0.6, 0.2] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute inset-16 rounded-full border border-[#E5E0D8]"
              ></motion.div>
              <div className="absolute inset-24 rounded-full border border-[#E5E0D8] bg-[#FDFBF7] shadow-[0_0_40px_rgba(0,0,0,0.03)]"></div>

              {/* Crosshairs */}
              <div className="absolute top-0 bottom-0 left-1/2 w-px bg-gradient-to-b from-transparent via-[#E5E0D8] to-transparent -translate-x-1/2"></div>
              <div className="absolute left-0 right-0 top-1/2 h-px bg-gradient-to-r from-transparent via-[#E5E0D8] to-transparent -translate-y-1/2"></div>

              {/* Orbiting Dots */}
              <motion.div animate={{ rotate: 360 }} transition={{ duration: 20, repeat: Infinity, ease: "linear" }} className="absolute inset-8">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-[#f37021] shadow-[0_0_10px_#f37021]"></div>
              </motion.div>
              <motion.div animate={{ rotate: -360 }} transition={{ duration: 25, repeat: Infinity, ease: "linear" }} className="absolute inset-16">
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-1.5 h-1.5 rounded-full bg-[#D3B8A3]"></div>
                <div className="absolute top-1/2 left-0 -translate-x-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-[#D3B8A3]"></div>
              </motion.div>

              {/* Center Fingerprint */}
              <motion.div
                whileHover={{ scale: 1.1 }}
                className="w-20 h-20 bg-gradient-to-br from-[#ff8c42] to-[#f37021] rounded-full flex items-center justify-center z-10 relative shadow-[0_0_40px_rgba(243,112,33,0.4)] overflow-hidden group cursor-pointer"
              >
                {/* Scanning Line */}
                <motion.div
                  animate={{ top: ['-50%', '150%'] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                  className="absolute left-0 right-0 h-[2px] bg-white/80 blur-[1px] z-20 shadow-[0_0_10px_white]"
                />
                <motion.div
                  animate={{ opacity: [0.7, 1, 0.7] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                >
                  <Fingerprint className="text-white relative z-10" size={32} strokeWidth={1.5} />
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* 4 Cards Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-32">
          {/* Card 1 */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            whileHover={{ y: -8, scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="bg-[#F5F3ED] p-8 rounded-[32px] flex flex-col group cursor-pointer shadow-sm hover:shadow-xl transition-all duration-300"
          >
            <div className="h-32 bg-[#EAE8E3] rounded-2xl mb-8 flex items-center justify-center relative overflow-hidden">
              <div className="absolute inset-0 bg-[#f37021]/5 scale-0 group-hover:scale-150 transition-transform duration-700 rounded-full" />
              <motion.div
                className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center relative z-10"
                whileHover={{ rotateY: 180 }}
                transition={{ duration: 0.6 }}
              >
                <Lock className="text-[#f37021]" size={20} />
              </motion.div>
            </div>
            <h3 className="font-headline font-bold text-xl mb-3 text-[#1A1A1A]">Private by default</h3>
            <p className="font-body text-[#4A4A4A] text-sm leading-relaxed">Encrypted on-device. Only you hold the keys.</p>
          </motion.div>

          {/* Card 2 */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            whileHover={{ y: -8, scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300, damping: 20, delay: 0.1 }}
            className="bg-[#F5F3ED] p-8 rounded-[32px] flex flex-col group cursor-pointer shadow-sm hover:shadow-xl transition-all duration-300"
          >
            <div className="h-32 bg-[#EAE8E3] rounded-2xl mb-8 flex flex-col items-center justify-center gap-2 px-6 relative overflow-hidden">
              <div className="absolute inset-0 bg-[#f37021]/5 scale-0 group-hover:scale-150 transition-transform duration-700 rounded-full" />
              <motion.div className="w-full bg-white rounded-lg p-2 flex justify-between items-center shadow-sm relative z-10 group-hover:scale-105 transition-transform">
                <span className="text-[8px] font-bold font-body flex items-center gap-1"><div className="w-3 h-3 bg-blue-100 rounded text-blue-600 flex items-center justify-center">@</div> Email Sync</span>
                <motion.div animate={{ x: [0, -2, 0] }} transition={{ duration: 1.5, repeat: Infinity }} className="text-[#f37021] group-hover:text-green-600 transition-colors">
                  <ToggleRight size={16} />
                </motion.div>
              </motion.div>
              <div className="w-full bg-white rounded-lg p-2 flex justify-between items-center shadow-sm opacity-50 relative z-10">
                <span className="text-[8px] font-bold font-body flex items-center gap-1"><div className="w-3 h-3 bg-green-100 rounded text-green-600 flex items-center justify-center">📅</div> Calendar</span>
                <div className="w-4 h-2.5 bg-gray-200 rounded-full"></div>
              </div>
            </div>
            <h3 className="font-headline font-bold text-xl mb-3 text-[#1A1A1A]">You stay in control</h3>
            <p className="font-body text-[#4A4A4A] text-sm leading-relaxed">Granular toggles for every connection. Revoke access anytime.</p>
          </motion.div>

          {/* Card 3 */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            whileHover={{ y: -8, scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300, damping: 20, delay: 0.2 }}
            className="bg-[#F5F3ED] p-8 rounded-[32px] flex flex-col group cursor-pointer shadow-sm hover:shadow-xl transition-all duration-300"
          >
            <div className="h-32 bg-[#EAE8E3] rounded-2xl mb-8 flex items-center justify-center relative overflow-hidden">
              <div className="absolute inset-0 bg-[#f37021]/5 scale-0 group-hover:scale-150 transition-transform duration-700 rounded-full" />
              <div className="flex gap-1 relative z-10">
                {[0.4, 0.6, 0.8, 1].map((opacity, i) => (
                  <motion.div
                    key={i}
                    className="w-3 h-3 bg-[#D3B8A3] rounded-sm group-hover:bg-[#f37021] transition-colors duration-300"
                    style={{ opacity }}
                    animate={{ y: [0, -4, 0] }}
                    transition={{ duration: 2, repeat: Infinity, delay: i * 0.2 }}
                  />
                ))}
              </div>
            </div>
            <h3 className="font-headline font-bold text-xl mb-3 text-[#1A1A1A]">Minimal exposure</h3>
            <p className="font-body text-[#4A4A4A] text-sm leading-relaxed">We generate insights without ever viewing your raw data.</p>
          </motion.div>

          {/* Card 4 */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            whileHover={{ y: -8, scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300, damping: 20, delay: 0.3 }}
            className="bg-[#F5F3ED] p-8 rounded-[32px] flex flex-col group cursor-pointer shadow-sm hover:shadow-xl transition-all duration-300"
          >
            <div className="h-32 bg-[#EAE8E3] rounded-2xl mb-8 flex flex-col justify-center px-6 gap-2 relative overflow-hidden">
              <div className="absolute inset-0 bg-[#f37021]/5 scale-0 group-hover:scale-150 transition-transform duration-700 rounded-full" />
              <div className="w-full h-1.5 bg-white rounded-full relative z-10 group-hover:w-[90%] transition-all duration-500"></div>
              <div className="w-3/4 h-1.5 bg-white rounded-full relative z-10 group-hover:w-[80%] transition-all duration-500 delay-75"></div>
              <div className="w-1/2 h-1.5 bg-[#D3B8A3] rounded-full relative z-10 group-hover:bg-[#f37021] group-hover:w-[60%] transition-all duration-500 delay-150"></div>
              <div className="flex gap-2 mt-2 relative z-10">
                {[0, 1, 2].map((i) => (
                  <motion.div key={i} animate={{ y: [0, -3, 0] }} transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }}>
                    <ShieldCheck size={10} className="text-[#f37021] group-hover:scale-125 transition-transform duration-300" />
                  </motion.div>
                ))}
              </div>
            </div>
            <h3 className="font-headline font-bold text-xl mb-3 text-[#1A1A1A]">Global Standards</h3>
            <p className="font-body text-[#4A4A4A] text-sm leading-relaxed">Exceeding GDPR, CCPA, and the latest AI safety requirements</p>
          </motion.div>
        </div>

        {/* Bottom CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="bg-surface-container-low rounded-[3rem] p-16 md:p-24 text-center max-w-4xl mx-auto border border-outline-variant/10"
        >
          <h2 className="font-headline text-4xl md:text-5xl font-bold tracking-tight text-on-surface leading-[1.1] mb-12">
            You’re not the product.<br />
            <span className="text-primary italic font-serif font-normal">Your Twin works for you.</span>
          </h2>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="px-8 py-4 bg-primary text-white rounded-full font-label text-xs font-bold tracking-widest uppercase hover:bg-primary/90 transition-colors shadow-md"
            >
              Start Your Journey
            </motion.button>
            <motion.button
              whileHover={{ x: 4 }}
              className="px-8 py-4 text-on-surface font-label text-xs font-bold tracking-widest uppercase hover:text-primary transition-colors"
            >
              Read The Manifesto
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
