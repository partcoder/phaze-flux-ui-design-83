
import React from 'react';
import { Calendar, Users, Building, Mail, Share } from 'lucide-react';
import { toast } from '@/components/ui/use-toast';

const FestsSection = () => {
  const fests = [
    {
      id: 'techfusion2025',
      name: 'TechFusion 2025',
      type: 'Team',
      collab: 'Delhi Public School',
      date: 'March 20-22, 2025',
      deadline: 'March 10, 2025',
      description: 'A three-day tech extravaganza with coding, robotics, and innovation challenges',
      poster: 'https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=400&h=300&fit=crop'
    },
    {
      id: 'innovatetech2025',
      name: 'InnovateTech Summit',
      type: 'Solo',
      collab: 'Ryan International',
      date: 'April 15, 2025',
      deadline: 'April 5, 2025',
      description: 'Individual showcase of innovative tech projects and research presentations',
      poster: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=300&fit=crop'
    },
    {
      id: 'codecarnival2025',
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
    const body = `Hi QuantumGrid Team,\n\nI would like to join ${festName}. Please provide me with registration details and requirements.\n\nThanks!`;
    window.location.href = `mailto:abcd@quantumgrid.tech?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  const handleShareFest = (fest: any) => {
    const url = `${window.location.origin}/fest/${fest.id}`;
    
    if (navigator.clipboard) {
      navigator.clipboard.writeText(url).then(() => {
        toast({
          title: "Link Copied!",
          description: `Share link for ${fest.name} has been copied to clipboard.`,
        });
      });
    } else {
      // Fallback for older browsers
      const textArea = document.createElement('textarea');
      textArea.value = url;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand('copy');
      document.body.removeChild(textArea);
      toast({
        title: "Link Copied!",
        description: `Share link for ${fest.name} has been copied to clipboard.`,
      });
    }
  };

  return (
    <section id="fests" className="py-20 relative z-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent mb-4">
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
              className="glass-morphism-strong interactive-glow group rounded-2xl overflow-hidden hover:scale-105 transition-all duration-500 transform hover:shadow-2xl hover:shadow-red-500/20"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Poster Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={fest.poster}
                  alt={fest.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                <div className="absolute top-4 right-4">
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                    fest.type === 'Team' 
                      ? 'bg-red-500/20 border border-red-500/30 text-red-400'
                      : 'bg-orange-500/20 border border-orange-500/30 text-orange-400'
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
                  <div className="flex items-center text-red-400 text-sm">
                    <Users size={16} className="mr-2" />
                    Apply by: {fest.deadline}
                  </div>
                </div>

                <div className="flex gap-3">
                  <button
                    onClick={() => handleJoinRequest(fest.name)}
                    className="flex-1 flex items-center justify-center gap-2 bg-gradient-to-r from-red-500 to-orange-500 text-white font-medium py-3 rounded-full hover:shadow-lg hover:shadow-red-500/25 transition-all duration-300"
                  >
                    <Mail size={16} />
                    Request to Join
                  </button>
                  <button
                    onClick={() => handleShareFest(fest)}
                    className="flex items-center justify-center gap-2 glass-morphism-strong rounded-full px-4 py-3 font-medium text-white hover:scale-105 transition-all duration-300"
                  >
                    <Share size={16} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FestsSection;
