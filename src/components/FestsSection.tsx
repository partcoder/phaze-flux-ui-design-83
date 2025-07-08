
import React from 'react';
import { Calendar, Users, Building, Mail } from 'lucide-react';

const FestsSection = () => {
  const fests = [
    {
      name: 'TechFusion 2025',
      type: 'Team',
      collab: 'Delhi Public School',
      date: 'March 20-22, 2025',
      deadline: 'March 10, 2025',
      description: 'A three-day tech extravaganza with coding, robotics, and innovation challenges',
      poster: 'https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=400&h=300&fit=crop'
    },
    {
      name: 'InnovateTech Summit',
      type: 'Solo',
      collab: 'Ryan International',
      date: 'April 15, 2025',
      deadline: 'April 5, 2025',
      description: 'Individual showcase of innovative tech projects and research presentations',
      poster: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=300&fit=crop'
    },
    {
      name: 'CodeCarnival',
      type: 'Team',
      collab: 'Modern School',
      date: 'May 8-9, 2025',
      deadline: 'April 28, 2025',
      description: 'Competitive programming festival with algorithm challenges and hackathons',
      poster: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&h=300&fit=crop'
    },
  ];

  const handleJoinRequest = (festName: string) => {
    const subject = `Request to participate in ${festName}`;
    const body = `Hi pHaze Team,\n\nI would like to join ${festName}. Please provide me with registration details and requirements.\n\nThanks!`;
    window.location.href = `mailto:abcd@phaze.tech?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <section id="fests" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent mb-4">
            Tech Fests
          </h2>
          <p className="text-white/70 text-lg">
            Join collaborative events and annual tech festivals
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {fests.map((fest, index) => (
            <div
              key={fest.name}
              className="backdrop-blur-md interactive-glow group bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:bg-white/10 transition-all duration-500 transform hover:scale-105 hover:shadow-2xl hover:shadow-emerald-500/10"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Poster Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={fest.poster}
                  alt={fest.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute top-4 right-4">
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                    fest.type === 'Team' 
                      ? 'bg-emerald-500/20 border border-emerald-500/30 text-emerald-400'
                      : 'bg-teal-500/20 border border-teal-500/30 text-teal-400'
                  }`}>
                    {fest.type}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-3">
                  {fest.name}
                </h3>

                <p className="text-white/70 mb-4 text-sm">
                  {fest.description}
                </p>

                <div className="space-y-2 mb-6">
                  <div className="flex items-center text-white/60 text-sm">
                    <Building size={16} className="mr-2" />
                    Collab with: {fest.collab}
                  </div>
                  <div className="flex items-center text-white/60 text-sm">
                    <Calendar size={16} className="mr-2" />
                    {fest.date}
                  </div>
                  <div className="flex items-center text-emerald-400 text-sm">
                    <Users size={16} className="mr-2" />
                    Apply by: {fest.deadline}
                  </div>
                </div>

                <button
                  onClick={() => handleJoinRequest(fest.name)}
                  className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-emerald-500 to-teal-500 text-white font-medium py-3 rounded-full hover:shadow-lg hover:shadow-emerald-500/25 transition-all duration-300"
                >
                  <Mail size={16} />
                  Request to Join
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FestsSection;
