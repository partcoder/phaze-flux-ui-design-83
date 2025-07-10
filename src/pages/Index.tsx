
import React from 'react';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import CompetitionsSection from '../components/CompetitionsSection';
import FestsSection from '../components/FestsSection';
import CouncilSection from '../components/CouncilSection';
import ContactSection from '../components/ContactSection';

const Index = () => {
  return (
    <div className="min-h-screen text-white overflow-x-hidden">
      <Navbar />
      <div className="pt-20">
        <HeroSection />
        <AboutSection />
        <CompetitionsSection />
        <FestsSection />
        <CouncilSection />
        <ContactSection />
      </div>
      
      {/* Footer */}
      <footer className="py-8 text-center border-t border-white/10">
        <div className="max-w-4xl mx-auto px-6">
          <p className="text-white/60 mb-2">
            2022 QuantumGrid. Rewriting the tech narrative, one phase at a time.
          </p>
          <p className="text-white/40 text-sm">
            Made with ❤️ by the QuantumGrid community
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
