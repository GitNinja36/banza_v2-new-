import { motion } from 'motion/react';
import { Logo } from './Logo';

export default function Footer() {
  return (
    <footer className="bg-surface-container-lowest pt-32 pb-12 px-6 border-t border-outline-variant/10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-16 mb-24">
        
        <div className="max-w-md">
          <div className="text-4xl mb-8"><Logo /></div>
          <p className="text-on-surface-variant font-serif text-xl leading-relaxed">
            The personal AI that learns your taste, anticipates your needs, and respects your privacy.
          </p>
        </div>
        
        <div className="flex gap-16 md:gap-24">
          <div>
            <h4 className="font-label font-bold text-[10px] uppercase tracking-[0.2em] text-on-surface mb-8">Explore</h4>
            <ul className="space-y-4 font-body text-sm text-on-surface-variant">
              <li><motion.a whileHover={{ x: 4, color: 'var(--color-primary)' }} href="#how-it-works" className="inline-block transition-colors">How it works</motion.a></li>
              <li><motion.a whileHover={{ x: 4, color: 'var(--color-primary)' }} href="#experience" className="inline-block transition-colors">Experience</motion.a></li>
              <li><motion.a whileHover={{ x: 4, color: 'var(--color-primary)' }} href="#twin" className="inline-block transition-colors">Meet Twin</motion.a></li>
              <li><motion.a whileHover={{ x: 4, color: 'var(--color-primary)' }} href="#trust" className="inline-block transition-colors">Privacy</motion.a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-label font-bold text-[10px] uppercase tracking-[0.2em] text-on-surface mb-8">Connect</h4>
            <ul className="space-y-4 font-body text-sm text-on-surface-variant">
              <li><motion.a whileHover={{ x: 4, color: 'var(--color-primary)' }} href="#" className="inline-block transition-colors">Twitter</motion.a></li>
              <li><motion.a whileHover={{ x: 4, color: 'var(--color-primary)' }} href="#" className="inline-block transition-colors">Instagram</motion.a></li>
              <li><motion.a whileHover={{ x: 4, color: 'var(--color-primary)' }} href="#" className="inline-block transition-colors">Manifesto</motion.a></li>
              <li><motion.a whileHover={{ x: 4, color: 'var(--color-primary)' }} href="#" className="inline-block transition-colors">Contact</motion.a></li>
            </ul>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto pt-8 border-t border-outline-variant/10 flex flex-col md:flex-row justify-between items-center gap-6">
        <p className="text-[10px] font-label uppercase tracking-widest text-on-surface-variant/60">
          © {new Date().getFullYear()} Banza Inc.
        </p>
        <div className="flex gap-8 text-[10px] font-label uppercase tracking-widest text-on-surface-variant/60">
          <motion.a whileHover={{ color: 'var(--color-primary)' }} href="#" className="transition-colors">Privacy</motion.a>
          <motion.a whileHover={{ color: 'var(--color-primary)' }} href="#" className="transition-colors">Terms</motion.a>
        </div>
      </div>
    </footer>
  );
}
