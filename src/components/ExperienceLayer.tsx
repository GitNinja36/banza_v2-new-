import { motion } from 'motion/react';
import { Utensils, Film, ShoppingBag, Compass, SlidersHorizontal, Sparkles, PlayCircle, History } from 'lucide-react';

export default function ExperienceLayer() {
  return (
    <section id="experience" className="pt-32 pb-24 px-6 md:px-12 max-w-7xl mx-auto bg-surface">
      <header className="mb-20 max-w-3xl">
        <motion.span
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="font-label font-bold text-primary uppercase tracking-[0.2em] text-xs mb-4 block"
        >
          What Your AI Twin Can Do
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="font-headline text-5xl md:text-7xl font-extrabold tracking-tight text-on-surface leading-[1.1] mb-8"
        >
          Your Twin doesn't just respond. <span className="text-primary">It acts ahead.</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="text-xl md:text-2xl text-on-surface-variant font-light leading-relaxed font-body"
        >
          Banza's AI Twin turns your connected apps and personal signals into proactive experiences — helping you decide what to eat, what to watch, what to buy, and where to go, before you even ask.
        </motion.p>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-24">
        {/* Module 1: Food */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          whileHover={{ y: -12, boxShadow: "0 30px 60px rgba(243,112,33,0.12)" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="group relative bg-surface-container-low p-8 rounded-3xl flex flex-col justify-between min-h-[480px] overflow-hidden cursor-pointer border border-transparent hover:border-primary/20 transition-colors duration-500"
        >
          {/* Background Image */}
          <div className="absolute inset-0 z-0 overflow-hidden">
            <img
              src="https://res.cloudinary.com/davtv5r1c/image/upload/v1774590932/cream_coloured_paneer_bowl_720_onbc87.jpg"
              alt="Food background"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            {/* Gradient overlay for readability */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-black/60 transition-opacity duration-500 group-hover:opacity-80"></div>
          </div>

          <div className="relative z-10">
            <div className="flex items-center gap-2 mb-6 drop-shadow-lg">
              <Utensils className="text-white group-hover:scale-110 transition-transform duration-300" size={24} />
              <span className="font-headline font-bold text-lg text-white transition-colors duration-300">Food that fits your mood</span>
            </div>

            <div
              className="bg-black/40 backdrop-blur-2xl border border-white/20 p-5 rounded-3xl shadow-2xl max-w-[280px] mt-4 relative overflow-hidden opacity-90 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500"
            >
              {/* Shimmer effect on hover */}
              <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent group-hover:animate-[shimmer_1.5s_infinite] pointer-events-none"></div>

              <div className="flex justify-between items-start mb-3">
                <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center group-hover:bg-primary/30 transition-colors duration-300">
                  <SlidersHorizontal className="text-primary" size={18} />
                </div>
                <span className="text-[9px] font-bold bg-white/10 px-2.5 py-1 rounded-full uppercase tracking-widest text-white/90 font-label group-hover:bg-primary group-hover:text-white transition-colors duration-300">From your Twin</span>
              </div>
              <p className="font-body text-white/95 text-sm font-light leading-relaxed mb-5">Craving something light? Try a paneer rice bowl nearby at Saffron Street.</p>
              <div className="flex gap-1">
                <div className="h-1 bg-primary rounded-full w-8 group-hover:w-16 transition-all duration-500"></div>
                <div className="h-1 w-3 bg-white/20 rounded-full"></div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Module 2: Entertainment */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          whileHover={{ y: -12, boxShadow: "0 30px 60px rgba(243,112,33,0.12)" }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="group relative bg-surface-container p-8 rounded-3xl flex flex-col min-h-[480px] lg:mt-12 cursor-pointer border border-transparent hover:border-primary/20 overflow-hidden transition-colors duration-500"
        >
          {/* Background Image */}
          <div className="absolute inset-0 z-0 overflow-hidden">
            <img
              src="https://res.cloudinary.com/davtv5r1c/image/upload/v1774590925/silent_horizon_light_mode_720_w0lmaq.jpg"
              alt="Entertainment background"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-black/60 transition-opacity duration-500 group-hover:opacity-80"></div>
          </div>

          <div className="flex items-center gap-2 mb-6 relative z-10 drop-shadow-lg">
            <Film className="text-white group-hover:scale-110 transition-transform duration-300" size={24} />
            <span className="font-headline font-bold text-lg text-white transition-colors duration-300">Entertainment you genuinely enjoy</span>
          </div>
          <div className="mt-auto space-y-4 relative z-10 w-full flex justify-end">
            <div
              className="bg-black/40 backdrop-blur-2xl border border-white/20 p-6 rounded-3xl shadow-2xl relative overflow-hidden opacity-95 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 max-w-[320px]"
            >
              {/* Shimmer effect on hover */}
              <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent group-hover:animate-[shimmer_1.5s_infinite] pointer-events-none"></div>

              <div className="flex justify-between items-center mb-5">
                <span className="text-[10px] font-label uppercase tracking-widest text-white/60 group-hover:text-white/90 transition-colors duration-300">Tonight’s pick</span>
                <Sparkles className="text-primary group-hover:animate-pulse" size={18} />
              </div>
              <h4 className="font-headline text-2xl font-bold text-white mb-2">The Silent Horizon</h4>
              <p className="text-xs text-white/70 font-light mb-6 font-body leading-relaxed">A slow-burn thriller that matches your preference for architectural cinematography and Nordic noir pacing.</p>
              <div className="flex items-center gap-4 border-t border-white/10 pt-4">
                <span className="text-[10px] flex items-center gap-1.5 font-label text-white/90"><PlayCircle size={14} className="text-primary" /> Streaming on Mubi</span>
                <span className="text-[10px] flex items-center gap-1.5 font-label text-white/90"><History size={14} className="text-primary" /> 98% Match</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Module 3: Shopping */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          whileHover={{ y: -12, boxShadow: "0 30px 60px rgba(243,112,33,0.12)" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="group relative p-8 rounded-3xl flex flex-col justify-between min-h-[480px] cursor-pointer border border-transparent hover:border-primary/20 overflow-hidden transition-colors duration-500"
        >
          {/* Background Image */}
          <div className="absolute inset-0 z-0 overflow-hidden">
            <img
              src="https://res.cloudinary.com/davtv5r1c/image/upload/v1774590907/pots_against_light_bg_720_fvswwo.jpg"
              alt="Shopping background"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/60 transition-opacity duration-500 group-hover:opacity-80"></div>
          </div>

          <div className="relative z-10 flex flex-col md:flex-row justify-between items-start w-full gap-6">
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-4 drop-shadow-[0_4px_4px_rgba(0,0,0,0.5)]">
                <ShoppingBag className="text-white group-hover:scale-110 transition-transform duration-300" size={24} />
                <span className="font-headline font-bold text-lg text-white transition-colors duration-300">Shopping with better instinct</span>
              </div>
              <p className="font-body text-white/90 text-sm leading-relaxed max-w-[260px] drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">We find objects that belong in your home, not just in your cart.</p>
            </div>

            <div
              className="bg-black/40 backdrop-blur-2xl border border-white/20 p-5 rounded-3xl shadow-2xl w-full max-w-[280px] relative overflow-hidden opacity-90 translate-y-4 md:translate-y-0 md:translate-x-4 group-hover:opacity-100 group-hover:translate-y-0 md:group-hover:translate-x-0 transition-all duration-500"
            >
              {/* Shimmer effect on hover */}
              <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent group-hover:animate-[shimmer_1.5s_infinite] pointer-events-none"></div>

              <span className="text-[9px] text-white/90 font-bold uppercase tracking-widest block mb-1 font-label">Taste Discovery</span>
              <p className="text-sm text-white/95 font-medium italic font-body leading-relaxed">"Matches your bookmarks on brutalist pottery."</p>
            </div>
          </div>
        </motion.div>

        {/* Module 4: Travel */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          whileHover={{ y: -12, boxShadow: "0 30px 60px rgba(243,112,33,0.12)" }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="group relative p-8 rounded-3xl flex flex-col min-h-[480px] lg:mt-12 cursor-pointer border border-transparent hover:border-primary/20 overflow-hidden transition-colors duration-500"
        >
          {/* Background Image */}
          <div className="absolute inset-0 z-0 overflow-hidden">
            <img
              src="https://res.cloudinary.com/davtv5r1c/image/upload/v1774590917/unreal_cabin_720_hwhblx.jpg"
              alt="Travel background"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            {/* Gradient overlay - Darkened for much better legibility */}
            <div className="absolute inset-0 bg-gradient-to-tr from-black/95 via-black/60 to-black/80 transition-opacity duration-500 group-hover:opacity-90"></div>
          </div>

          <div className="flex items-center gap-2 mb-4 relative z-10 drop-shadow-[0_4px_4px_rgba(0,0,0,0.6)]">
            <Compass className="text-white group-hover:scale-110 transition-transform duration-300" size={24} />
            <span className="font-headline font-bold text-lg text-white transition-colors duration-300">Travel itineraries you’d actually follow</span>
          </div>

          <div className="relative z-10 drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
            <p className="font-body text-white/90 text-sm leading-relaxed max-w-[260px]">Your Twin knows when you need to disconnect. No itinerary needed, just a location that feels like you.</p>
          </div>

          <div className="mt-auto space-y-4 relative z-10 w-full flex justify-end">
            <div
              className="bg-black/40 backdrop-blur-2xl border border-white/20 text-white p-5 rounded-3xl shadow-2xl max-w-[260px] text-left relative overflow-hidden opacity-90 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500"
            >
              {/* Shimmer effect on hover */}
              <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent group-hover:animate-[shimmer_1.5s_infinite] pointer-events-none"></div>

              <div className="flex justify-between items-center mb-3">
                <span className="text-[9px] font-bold uppercase tracking-widest block font-label text-white/80">Optimal Weekend</span>
                <Sparkles className="text-primary group-hover:animate-pulse" size={16} />
              </div>
              <p className="text-lg font-bold leading-tight font-headline text-white mb-3">Misty Pines Retreat</p>
              <div className="flex items-center gap-2 border-t border-white/10 pt-3">
                <div className="w-2 h-2 rounded-full bg-primary animate-pulse shadow-[0_0_8px_rgba(243,112,33,0.8)]"></div>
                <p className="text-[11px] text-white/90 font-medium font-body">2.5h drive away</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
