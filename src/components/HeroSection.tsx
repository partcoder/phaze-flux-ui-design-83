
import React from 'react';

const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Enhanced animated background blobs - updated to fiery red colors */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-red-500/15 rounded-full blur-3xl animate-float animate-morph"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-orange-500/15 rounded-full blur-3xl animate-float-delayed animate-morph"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-red-600/8 rounded-full blur-3xl animate-breathe"></div>
        <div className="absolute top-1/4 right-1/4 w-32 h-32 bg-red-500/10 rounded-full blur-2xl animate-pulse"></div>
        <div className="absolute bottom-1/4 left-1/3 w-24 h-24 bg-orange-400/15 rounded-full blur-xl animate-float"></div>
      </div>

      <div className="relative z-10 text-center max-w-5xl mx-auto px-6">
        {/* Enhanced QuantumGrid logo - updated to fiery red colors */}
        <div className="mb-12">
          <h1 className="text-7xl md:text-9xl font-bold mb-6 relative">
            <span className="font-bold bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent mb-4">
              QuantumGrid
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-red-400 via-orange-400 to-red-600 bg-clip-text text-transparent opacity-30 blur-lg animate-pulse">
              QuantumGrid
            </div>
          </h1>
        </div>

        {/* Updated tagline */}
        <p className="text-2xl md:text-3xl text-white/90 mb-12 font-light">
          Igniting the future of technology, one quantum leap at a time.
        </p>

        {/* Enhanced CTA Button - updated to fiery red colors */}
        <div className="mb-20">
          <a
            href="#competitions"
            className="inline-block px-12 liquid-hover interactive-red-glow group py-5 glass-morphism-strong rounded-full text-lg font-semibold text-white hover:scale-105 transition-all duration-500 ripple-effect"
          >
            <span className="bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent ">
              Explore Competitions
            </span>
          </a>
        </div>

        {/* Enhanced Quick Stats - updated hover colors */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 ">
          {[
            { label: 'Total Members', value: '2+' },
            { label: 'Competitions', value: '1+' },
            { label: 'Active Leads', value: '1' },
            { label: 'Comps Won', value: '0' },
          ].map((stat, index) => (
            <div
              key={stat.label}
              className="glass-morphism rounded-3xl p-8 liquid-hover liquid-hover interactive-glow group animate-float"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="text-3xl md:text-4xl font-bold text-red-400 mb-3">
                {stat.value}
              </div>
              <div className="text-white/80 text-sm font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Floating interactive orbs - updated to fiery red colors */}
      <div className="absolute top-20 left-10 w-6 h-6 bg-orange-400/30 rounded-full blur-sm animate-float"></div>
      <div className="absolute bottom-32 right-16 w-4 h-4 bg-red-400/40 rounded-full blur-sm animate-float-delayed"></div>
      <div className="absolute top-1/3 left-1/4 w-3 h-3 bg-red-500/35 rounded-full blur-sm animate-pulse"></div>
    </section>
  );
};

export default HeroSection;
