import { motion, useScroll, useMotionValueEvent } from 'motion/react';
import { Menu, X } from 'lucide-react';
import { Logo } from './Logo';
import { useState } from 'react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 50);
  });

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-surface/90 backdrop-blur-xl shadow-[0_4px_20px_rgba(28,28,25,0.04)]' : 'bg-transparent'
        }`}
    >
      <nav className="flex justify-between items-center w-full px-6 py-4 max-w-7xl mx-auto">
        <motion.div
          whileHover={{ scale: 1.02 }}
          className="text-3xl cursor-pointer"
          onClick={() => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
            setMobileMenuOpen(false);
          }}
        >
          <Logo />
        </motion.div>

        <div className="hidden md:flex items-center space-x-15 font-label font-medium">
          <button onClick={() => scrollTo('how-it-works')} className="text-on-surface/70 hover:text-primary transition-colors duration-300">How It Works</button>
          <button onClick={() => scrollTo('experience')} className="text-on-surface/70 hover:text-primary transition-colors duration-300">What it Does</button>
          <button onClick={() => scrollTo('why-banza')} className="text-on-surface/70 hover:text-primary transition-colors duration-300">What's Personal AI</button>
        </div>

        <div className="hidden md:flex items-center">
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => scrollTo('download')}
            className="bg-primary text-white px-6 py-2.5 rounded-full font-label font-bold tracking-wider uppercase text-xs shadow-sm hover:shadow-md transition-all"
          >
            Get Banza
          </motion.button>
        </div>

        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden text-on-surface p-2 z-50 relative"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute top-full left-0 w-full bg-surface/95 backdrop-blur-xl shadow-lg border-t border-outline-variant/10 flex flex-col items-center py-8 space-y-6 md:hidden"
        >
          <button onClick={() => scrollTo('how-it-works')} className="text-on-surface font-medium text-lg">How It Works</button>
          <button onClick={() => scrollTo('experience')} className="text-on-surface font-medium text-lg">What it Does</button>
          <button onClick={() => scrollTo('why-banza')} className="text-on-surface font-medium text-lg">What's Personal AI</button>
          <button
            onClick={() => scrollTo('download')}
            className="bg-primary text-white px-8 py-3 rounded-full font-label font-bold tracking-wider uppercase text-sm shadow-sm mt-4"
          >
            Get Banza
          </button>
        </motion.div>
      )}
    </motion.header>
  );
}
