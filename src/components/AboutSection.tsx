
import React from 'react';

const AboutSection = () => {
  const aboutItems = [
    {
      title: 'Mission Protocol',
      content: 'To forge digital warriors and quantum architects, building an elite network where code becomes weapon and innovation becomes survival.',
    },
    {
      title: 'Vision Matrix',
      content: 'Engineering the next generation of cyber-enhanced leaders through brutal competition, quantum learning, and bleeding-edge development.',
    },
    {
      title: 'Origin Code',
      content: 'Born from digital chaos - each algorithm a step toward domination, each breakthrough a conquest in the endless war for technological supremacy.',
    },
  ];

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Tech background elements */}
      <div className="absolute top-1/4 right-0 w-72 h-72 bg-red-900/8 rounded-full blur-3xl animate-morph"></div>
      <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-red-800/10 rounded-full blur-3xl animate-float"></div>
      
      {/* Circuit overlay */}
      <div className="absolute inset-0 opacity-5">
        <div className="w-full h-full bg-gradient-to-br from-red-900 via-transparent to-red-900"></div>
      </div>
      
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-5xl font-bold bg-gradient-to-r from-red-400 to-red-300 bg-clip-text text-transparent mb-4 tech-border circuit-lines">
            &gt; System Analysis
          </h2>
          <p className="text-red-100/80 text-xl max-w-3xl mx-auto leading-relaxed">
            Decoding the digital DNA of technological warfare and quantum domination
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-10">
          {aboutItems.map((item, index) => (
            <div
              key={item.title}
              className="glass-morphism-strong rounded-lg p-10 liquid-hover interactive-glow group animate-float tech-border circuit-lines relative"
              style={{ animationDelay: `${index * 300}ms` }}
            >
              {/* Tech corner indicators */}
              <div className="absolute top-4 left-4 w-3 h-3 border-t-2 border-l-2 border-red-500/50"></div>
              <div className="absolute top-4 right-4 w-3 h-3 border-t-2 border-r-2 border-red-500/50"></div>
              <div className="absolute bottom-4 left-4 w-3 h-3 border-b-2 border-l-2 border-red-500/50"></div>
              <div className="absolute bottom-4 right-4 w-3 h-3 border-b-2 border-r-2 border-red-500/50"></div>
              
              <h3 className="text-2xl font-bold text-red-400 mb-6 group-hover:text-red-300 transition-colors duration-300 uppercase tracking-wider">
                {item.title}
              </h3>
              <p className="text-red-100/90 leading-relaxed text-lg">
                {item.content}
              </p>
              
              {/* Status indicator */}
              <div className="absolute top-4 right-8 w-2 h-2 bg-red-500/60 rounded-full animate-pulse"></div>
            </div>
          ))}
        </div>
      </div>

      {/* Enhanced tech separator */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-r from-red-900/10 to-red-800/10 opacity-60 blur-2xl"></div>
    </section>
  );
};

export default AboutSection;
