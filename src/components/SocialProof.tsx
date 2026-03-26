import { motion } from 'motion/react';

const testimonials = [
  {
    quote: "It's eerie how well it knows me. It suggested a tiny omakase place in a new city that perfectly matched my usual dining habits.",
    author: "Sarah J.",
    role: "Product Designer"
  },
  {
    quote: "I used to spend 20 minutes picking a movie. Now Banza just gives me two options based on my mood, and it's always right.",
    author: "Marcus T.",
    role: "Software Engineer"
  },
  {
    quote: "The privacy controls are what sold me. I love that I can see exactly what it's learning and turn off certain apps when I want.",
    author: "Elena R.",
    role: "Creative Director"
  },
  {
    quote: "It feels less like a tool and more like an assistant that actually pays attention. The travel suggestions are incredible.",
    author: "David K.",
    role: "Photographer"
  }
];

export default function SocialProof() {
  return (
    <section id="stories" className="py-32 px-6 bg-surface-container-lowest border-t border-outline-variant/10">
      <div className="max-w-7xl mx-auto">
        
        {/* Editorial Header */}
        <div className="mb-24 md:mb-32 max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="font-label font-bold text-primary uppercase tracking-[0.2em] text-[10px] mb-6 block">
              The Experience
            </span>
            <h2 className="font-headline text-4xl md:text-6xl font-bold tracking-tight text-on-surface leading-[1.1]">
              "It feels less like software, and more like <span className="text-primary italic font-serif font-normal">someone who gets me.</span>"
            </h2>
          </motion.div>
        </div>

        {/* Editorial Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-20 max-w-6xl mx-auto">
          {testimonials.map((testimonial, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-col relative"
            >
              {/* Subtle decorative line */}
              <div className="w-8 h-[1px] bg-primary/30 mb-8"></div>
              
              <p className="font-serif text-2xl md:text-3xl text-on-surface leading-snug mb-8">
                "{testimonial.quote}"
              </p>
              
              <div className="mt-auto flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-surface-container-high flex items-center justify-center text-on-surface-variant font-headline font-bold text-sm">
                  {testimonial.author.charAt(0)}
                </div>
                <div>
                  <p className="font-headline font-bold text-on-surface text-sm">{testimonial.author}</p>
                  <p className="font-label text-[10px] text-on-surface-variant uppercase tracking-wider mt-0.5">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Subtle Stats Footer */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.4 }}
          className="mt-32 pt-12 border-t border-outline-variant/20 flex flex-wrap justify-center gap-12 md:gap-24"
        >
          {[
            { stat: "200k+", label: "Twins Created" },
            { stat: "12M+", label: "Proactive Actions" }
          ].map((item, i) => (
            <div key={i} className="text-center">
              <span className="font-headline text-3xl font-bold text-on-surface block mb-1">{item.stat}</span>
              <span className="font-label text-[10px] font-bold uppercase tracking-widest text-on-surface-variant">{item.label}</span>
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
