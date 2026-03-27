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
          {/* Subtle Glow Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>

          <div className="relative z-10">
            <div className="flex items-center gap-2 mb-6">
              <Utensils className="text-primary group-hover:scale-110 transition-transform duration-300" size={24} />
              <span className="font-headline font-bold text-lg group-hover:text-primary transition-colors duration-300">Food that fits your mood</span>
            </div>

            <div
              className="bg-surface-container-lowest p-6 rounded-2xl editorial-shadow max-w-xs mt-4 relative overflow-hidden opacity-80 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500"
            >
              {/* Shimmer effect on hover */}
              <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/40 to-transparent group-hover:animate-[shimmer_1.5s_infinite] pointer-events-none"></div>

              <div className="flex justify-between items-start mb-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                  <SlidersHorizontal className="text-primary" size={20} />
                </div>
                <span className="text-[10px] font-bold bg-surface-container-high px-2 py-1 rounded-full uppercase tracking-wider text-on-surface-variant font-label group-hover:bg-primary group-hover:text-white transition-colors duration-300">From your Twin</span>
              </div>
              <p className="font-body text-on-surface font-medium leading-snug mb-4">Craving something light? Try a paneer rice bowl nearby at Saffron Street.</p>
              <div className="flex gap-1">
                <div className="h-1 bg-primary rounded-full w-8 group-hover:w-16 transition-all duration-500"></div>
                <div className="h-1 w-4 bg-primary/20 rounded-full"></div>
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
          {/* Subtle Glow Background */}
          <div className="absolute inset-0 bg-gradient-to-tl from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>

          <div className="flex items-center gap-2 mb-6 relative z-10">
            <Film className="text-primary group-hover:scale-110 transition-transform duration-300" size={24} />
            <span className="font-headline font-bold text-lg group-hover:text-primary transition-colors duration-300">Entertainment you genuinely enjoy</span>
          </div>
          <div className="mt-auto space-y-4 relative z-10">
            <div
              className="bg-on-surface text-surface p-6 rounded-2xl relative overflow-hidden editorial-shadow opacity-80 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500"
            >
              {/* Shimmer effect on hover */}
              <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/10 to-transparent group-hover:animate-[shimmer_1.5s_infinite] pointer-events-none"></div>

              <div className="flex justify-between items-center mb-6">
                <span className="text-xs font-label uppercase tracking-widest opacity-60 group-hover:opacity-100 transition-opacity duration-300">Tonight’s pick</span>
                <Sparkles className="text-primary-container group-hover:text-primary transition-colors duration-300 group-hover:animate-pulse" size={20} />
              </div>
              <h4 className="font-headline text-2xl font-bold mb-2 group-hover:text-primary-container transition-colors duration-300">The Silent Horizon</h4>
              <p className="text-sm opacity-80 font-light mb-6 font-body">A slow-burn thriller that matches your preference for architectural cinematography and Nordic noir pacing.</p>
              <div className="flex items-center gap-4 border-t border-surface/10 pt-4">
                <span className="text-[10px] flex items-center gap-1 font-label group-hover:text-primary-container transition-colors duration-300"><PlayCircle size={14} /> Streaming on Mubi</span>
                <span className="text-[10px] flex items-center gap-1 font-label group-hover:text-primary-container transition-colors duration-300"><History size={14} /> 98% Match</span>
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
          className="group relative bg-surface-container-high p-8 rounded-3xl flex flex-col justify-between min-h-[480px] cursor-pointer border border-transparent hover:border-primary/20 overflow-hidden transition-colors duration-500"
        >
          {/* Subtle Glow Background */}
          <div className="absolute inset-0 bg-gradient-to-tr from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>

          <div className="relative z-10">
            <div className="flex items-center gap-2 mb-6">
              <ShoppingBag className="text-primary group-hover:scale-110 transition-transform duration-300" size={24} />
              <span className="font-headline font-bold text-lg group-hover:text-primary transition-colors duration-300">Shopping with better instinct</span>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div
                className="aspect-[3/4] rounded-2xl overflow-hidden shadow-lg relative opacity-80 scale-95 -rotate-2 group-hover:opacity-100 group-hover:scale-105 group-hover:rotate-0 transition-all duration-500"
              >
                {/* Image overlay glow */}
                <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 mix-blend-overlay transition-opacity duration-500 z-10 pointer-events-none"></div>
                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDavtUvPdqSlyTpXrwEu23SJX9PzBGoyQpJe5Uhwie30ZXKJRSOusHrtamdqMcPQVasMP6WOa4fZozuqeefumvUHsT3hc_6ayH2WRd_dMCOtY_PbVxHrVNHRCWU16S-oYCRYcE6ySImqnm4eKz3C8Dqe03QOPhvIh1vU_OgqMJ_04d2hrwtnBTt1-Vh2IR3v81AM0zwrVWnzcT7cpiKzYTQPfiJwLaIi2NPCQE186YoOIqSyg8AnrY8Ifp_BOMNy3EadOcyllo3je4"
                  alt="Shopping"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="flex flex-col justify-end pb-4">
                <div
                  className="bg-surface-container-lowest p-4 rounded-2xl shadow-sm border border-outline-variant/15 relative overflow-hidden opacity-80 translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500"
                >
                  {/* Shimmer effect on hover */}
                  <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-primary/5 to-transparent group-hover:animate-[shimmer_1.5s_infinite] pointer-events-none"></div>

                  <span className="text-[10px] text-primary font-bold uppercase block mb-1 font-label">Taste Discovery</span>
                  <p className="text-xs text-on-surface font-medium italic font-body">"Matches your bookmarks on brutalist pottery."</p>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-8 relative z-10">
            <p className="font-body text-on-surface-variant text-sm leading-relaxed max-w-[200px] group-hover:text-on-surface transition-colors duration-300">We find objects that belong in your home, not just in your cart.</p>
          </div>
        </motion.div>

        {/* Module 4: Travel */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          whileHover={{ y: -12, boxShadow: "0 30px 60px rgba(243,112,33,0.12)" }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="group relative bg-surface-container-lowest p-8 rounded-3xl flex flex-col justify-center min-h-[480px] editorial-shadow mt-8 lg:mt-8 border border-surface-container-high hover:border-primary/20 cursor-pointer overflow-hidden transition-colors duration-500"
        >
          {/* Subtle Glow Background */}
          <div className="absolute inset-0 bg-gradient-to-bl from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>

          <div className="absolute top-8 left-8 z-10">
            <div className="flex items-center gap-2">
              <Compass className="text-primary group-hover:scale-110 transition-transform duration-300" size={24} />
              <span className="font-headline font-bold text-lg group-hover:text-primary transition-colors duration-300">Travel itineraries you’d actually follow</span>
            </div>
          </div>
          <div className="text-center px-4 space-y-6 mt-12 relative z-10">
            <div className="relative inline-block">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDrDnspMhB3IF_vXruww_1IVTN9x4MjDFa-TCyTcrNqaZ7qv48I3WyVTo6ZXuvbPdxd0CIpRiGeQQvzmQereEuMg0PdgxqObCZ0cKa4_0TphqXHpCM6ndvSiULUR1CfSNDTcegPeDUm29dtRjxrS3AZwW-uwUCzhUM6ASLhxywn3vlYIzCeNRhNBW2bOG76PcYo5Uo99HSH3VvIbA8XNfx9fKilKgzI3go1xD_ge5NUh2kQbaZNDe-auqzI_n1VMySccis46QB9Crg"
                alt="Travel"
                className="w-64 h-64 rounded-full object-cover mx-auto ring-8 ring-surface-container-low group-hover:ring-primary/30 transition-all duration-700 opacity-80 scale-95 group-hover:opacity-100 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <div
                className="absolute -bottom-4 -right-4 bg-primary text-white p-4 rounded-2xl shadow-xl max-w-[140px] text-left overflow-hidden opacity-80 translate-y-4 scale-95 group-hover:opacity-100 group-hover:-translate-y-2 group-hover:-rotate-3 group-hover:scale-110 transition-all duration-500"
              >
                {/* Shimmer effect on hover */}
                <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent group-hover:animate-[shimmer_1.5s_infinite] pointer-events-none"></div>

                <span className="text-[10px] font-bold uppercase tracking-tighter block mb-1 font-label">Optimal Weekend</span>
                <p className="text-xs font-bold leading-tight font-headline">Misty Pines Retreat</p>
                <p className="text-[10px] opacity-80 mt-1 font-body">2.5h drive away</p>
              </div>
            </div>
            <p className="text-on-surface-variant font-light text-lg font-body group-hover:text-on-surface transition-colors duration-300">Your Twin knows when you need to disconnect. No itinerary needed, just a location that feels like you.</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
