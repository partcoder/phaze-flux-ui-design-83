
import React from 'react';

const AboutSection = () => {
  const aboutItems = [
    {
      title: 'Mission',
      content: 'To foster innovation and technical excellence among students, creating a vibrant community where tech enthusiasts can learn, compete, and grow together.',
    },
    {
      title: 'Vision',
      content: 'Building the next generation of tech leaders through collaborative learning, competitive programming, and cutting-edge project development.',
    },
    {
      title: 'Origin of QuantumGrid',
      content: 'Born from the idea that every breakthrough happens in phases - each step building upon the last, creating momentum toward technological mastery.',
    },
  ];

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background decorative elements - updated to fiery red colors */}
      <div className="absolute top-1/4 right-0 w-72 h-72 bg-red-500/8 rounded-full blur-3xl animate-morph"></div>
      <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-orange-500/10 rounded-full blur-3xl animate-float"></div>
      
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-5xl font-bold bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent mb-4">
            About QuantumGrid
          </h2>
          <p className="text-white/80 text-xl max-w-3xl mx-auto leading-relaxed">
            Discover what drives our passion for technology and innovation
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-10">
          {aboutItems.map((item, index) => (
            <div
              key={item.title}
              className="glass-morphism-strong rounded-3xl p-10 liquid-hover interactive-glow group animate-float"
              style={{ animationDelay: `${index * 300}ms` }}
            >
              <h3 className="text-2xl font-bold text-red-400 mb-6 group-hover:text-orange-300 transition-colors duration-300">
                {item.title}
              </h3>
              <p className="text-white/90 leading-relaxed text-lg">
                {item.content}
              </p>
              
              {/* Decorative element - updated to fiery red colors */}
              <div className="absolute top-4 right-4 w-3 h-3 bg-red-400/30 rounded-full animate-pulse opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          ))}
        </div>
      </div>

      {/* Enhanced parallax wave separator - updated to fiery red colors */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-r from-red-600/15 to-orange-600/15 opacity-60 blur-2xl rounded-t-full"></div>
    </section>
  );
};

export default AboutSection;
