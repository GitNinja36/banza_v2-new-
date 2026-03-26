/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import HowItWorks from './components/HowItWorks';
import ExperienceLayer from './components/ExperienceLayer';
import MeetTwin from './components/MeetTwin';
import WhyDifferent from './components/WhyDifferent';
import Trust from './components/Trust';
import SocialProof from './components/SocialProof';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-surface text-on-surface font-body selection:bg-primary-container/30">
      <Navbar />
      <main>
        <Hero />
        <HowItWorks />
        <ExperienceLayer />
        <MeetTwin />
        <WhyDifferent />
        <Trust />
        <SocialProof />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}

