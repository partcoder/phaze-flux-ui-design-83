
import React from 'react';

const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Tech matrix background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Animated data streams */}
        <div className="absolute top-0 left-1/4 w-0.5 h-full bg-gradient-to-b from-transparent via-red-900/50 to-transparent animate-data-stream"></div>
        <div className="absolute top-0 right-1/3 w-0.5 h-full bg-gradient-to-b from-transparent via-red-800/40 to-transparent animate-data-stream" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-0 left-2/3 w-0.5 h-full bg-gradient-to-b from-transparent via-red-700/30 to-transparent animate-data-stream" style={{ animationDelay: '4s' }}></div>
        
        {/* Morphing tech blobs */}
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-red-900/10 rounded-full blur-3xl animate-morph animate-breathe"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-red-800/8 rounded-full blur-3xl animate-morph animate-breathe" style={{ animationDelay: '3s' }}></div>
        
        {/* Circuit patterns */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-red-950/5 rounded-full blur-3xl animate-breathe"></div>
        <div className="absolute top-1/4 right-1/4 w-32 h-32 bg-red-900/15 rounded-full blur-2xl animate-pulse"></div>
        <div className="absolute bottom-1/4 left-1/3 w-24 h-24 bg-red-800/20 rounded-full blur-xl animate-float"></div>
        
        {/* Tech grid overlay */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-red-900/5 via-transparent to-red-900/5"></div>
        </div>
      </div>

      <div className="relative z-10 text-center max-w-5xl mx-auto px-6">
        {/* Enhanced QuantumGrid logo with glitch effect */}
        <div className="mb-12 relative">
          <h1 className="text-7xl md:text-9xl font-bold mb-6 relative tech-border circuit-lines">
            <span className="font-bold bg-gradient-to-r from-red-400 via-red-300 to-red-500 bg-clip-text text-transparent">
              QuantumGrid
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-red-600 via-red-400 to-red-800 bg-clip-text text-transparent opacity-20 blur-sm animate-pulse">
              QuantumGrid
            </div>
            <div className="absolute inset-0 bg-gradient-to-r from-red-500 via-red-300 to-red-600 bg-clip-text text-transparent opacity-10 animate-glitch">
              QuantumGrid
            </div>
          </h1>
        </div>

        {/* Updated tagline with tech styling */}
        <p className="text-2xl md:text-3xl text-red-100/90 mb-12 font-light tech-border circuit-lines">
          <span className="animate-shimmer">
            Rewriting reality through quantum calculations and digital warfare.
          </span>
        </p>

        {/* Enhanced CTA Button with tech styling */}
        <div className="mb-20">
          <a
            href="#competitions"
            className="inline-block px-12 py-5 glass-morphism-strong text-lg font-semibold text-white hover:scale-105 transition-all duration-500 ripple-effect interactive-red-glow group tech-border circuit-lines"
          >
            <span className="bg-gradient-to-r from-red-400 to-red-300 bg-clip-text text-transparent group-hover:from-red-300 group-hover:to-red-400 transition-all duration-300">
              &gt; Initialize Combat Protocols
            </span>
          </a>
        </div>

        {/* Enhanced Tech Stats with circuit styling */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { label: 'Active Nodes', value: '2+' },
            { label: 'Battle Zones', value: '1+' },
            { label: 'Command Units', value: '1' },
            { label: 'Victories', value: '0' },
          ].map((stat, index) => (
            <div
              key={stat.label}
              className="glass-morphism-strong liquid-hover interactive-glow group animate-float tech-border circuit-lines p-8"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="text-3xl md:text-4xl font-bold text-red-400 mb-3 animate-shimmer">
                {stat.value}
              </div>
              <div className="text-red-100/80 text-sm font-medium uppercase tracking-wider">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Floating tech orbs */}
      <div className="absolute top-20 left-10 w-6 h-6 bg-red-500/40 rounded-full blur-sm animate-float"></div>
      <div className="absolute bottom-32 right-16 w-4 h-4 bg-red-600/50 rounded-full blur-sm animate-float-delayed"></div>
      <div className="absolute top-1/3 left-1/4 w-3 h-3 bg-red-700/45 rounded-full blur-sm animate-pulse"></div>
      
      {/* Matrix code rain effect */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/6 text-red-900/30 text-xs font-mono animate-data-stream">
          01001000 01100101 01101100 01101100 01101111
        </div>
        <div className="absolute top-0 right-1/5 text-red-800/25 text-xs font-mono animate-data-stream" style={{ animationDelay: '1s' }}>
          01010001 01110101 01100001 01101110 01110100
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
