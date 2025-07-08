import React, { useState } from 'react';
import { Calendar, Users, Building, Mail, Share, Shield, Cpu, Copy, Check } from 'lucide-react';
import { toast } from '@/components/ui/use-toast';

const FestsSection = () => {
  const [copiedStates, setCopiedStates] = useState<Record<string, boolean>>({});

  const fests = [
    {
      id: 'techfusion2025',
      name: 'TechFusion 2025',
      type: 'Squad',
      collab: 'Delhi Public School',
      date: 'March 20-22, 2025',
      deadline: 'March 10, 2025',
      description: 'A three-day digital warfare event with code combat, cyber-robotics, and innovation battlegrounds',
      poster: 'https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=400&h=300&fit=crop'
    },
    {
      id: 'innovatetech2025',
      name: 'InnovateTech Summit',
      type: 'Solo',
      collab: 'Ryan International',
      date: 'April 15, 2025',
      deadline: 'April 5, 2025',
      description: 'Individual demonstration of cutting-edge tech weaponry and quantum research protocols',
      poster: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=300&fit=crop'
    },
    {
      id: 'codecarnival2025',
      name: 'CodeCarnival',
      type: 'Squad',
      collab: 'Modern School',
      date: 'May 8-9, 2025',
      deadline: 'April 28, 2025',
      description: 'Competitive programming warfare with algorithm battles and cyber-hackathons',
      poster: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&h=300&fit=crop'
    },
  ];

  const handleJoinRequest = (festName: string) => {
    const subject = `Squad Deployment Request: ${festName}`;
    const body = `QuantumGrid Command,\n\nRequesting deployment authorization for ${festName}. Provide tactical briefing and engagement protocols.\n\nAwaiting orders.`;
    window.location.href = `mailto:abcd@quantumgrid.tech?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  const handleShareFest = async (fest: any) => {
    const shareData = {
      name: fest.name,
      type: fest.type,
      collab: fest.collab,
      date: fest.date,
      deadline: fest.deadline,
      description: fest.description
    };
    
    const shareText = `🚀 WAR CAMPAIGN ALERT 🚀\n\n` +
      `Operation: ${fest.name}\n` +
      `Formation: ${fest.type} Mission\n` +
      `Allied Forces: ${fest.collab}\n` +
      `Battle Date: ${fest.date}\n` +
      `Deployment Deadline: ${fest.deadline}\n\n` +
      `Mission Brief: ${fest.description}\n\n` +
      `Join QuantumGrid at: ${window.location.origin}/#fests\n` +
      `#QuantumGrid #WarCampaign #${fest.type}Mission`;

    try {
      await navigator.clipboard.writeText(shareText);
      setCopiedStates(prev => ({ ...prev, [fest.id]: true }));
      
      toast({
        title: "⚡ Coordinates Acquired",
        description: `Battlefield intel for ${fest.name} uploaded to neural interface.`,
      });
      
      setTimeout(() => {
        setCopiedStates(prev => ({ ...prev, [fest.id]: false }));
      }, 2000);
    } catch (err) {
      console.error('Failed to copy to clipboard:', err);
      
      // Fallback method
      const textArea = document.createElement('textarea');
      textArea.value = shareText;
      textArea.style.position = 'fixed';
      textArea.style.opacity = '0';
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand('copy');
      document.body.removeChild(textArea);
      
      setCopiedStates(prev => ({ ...prev, [fest.id]: true }));
      toast({
        title: "⚡ Coordinates Acquired",
        description: `Battlefield intel for ${fest.name} uploaded to neural interface.`,
      });
      
      setTimeout(() => {
        setCopiedStates(prev => ({ ...prev, [fest.id]: false }));
      }, 2000);
    }
  };

  return (
    <section id="fests" className="py-20 relative z-10">
      {/* Tech background elements */}
      <div className="absolute top-0 right-1/4 w-80 h-80 bg-red-900/6 rounded-full blur-3xl animate-morph"></div>
      <div className="absolute bottom-1/4 left-1/3 w-60 h-60 bg-red-800/8 rounded-full blur-2xl animate-float"></div>
      
      {/* Matrix overlay */}
      <div className="absolute inset-0 opacity-5">
        <div className="w-full h-full bg-gradient-to-br from-red-900 via-transparent to-red-900"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-red-400 to-red-300 bg-clip-text text-transparent mb-4 tech-border circuit-lines">
            &gt; War Campaigns
          </h2>
          <p className="text-red-100/70 text-lg">
            Join collaborative warfare operations and annual digital conquests
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {fests.map((fest, index) => (
            <div
              key={fest.name}
              className="glass-morphism-strong interactive-glow group overflow-hidden hover:scale-105 transition-all duration-500 transform hover:shadow-2xl hover:shadow-red-500/20 tech-border circuit-lines relative"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Smooth corner indicators */}
              <div className="absolute top-2 left-2 w-4 h-4 bg-red-500/50 rounded-full z-10"></div>
              <div className="absolute top-2 right-2 w-4 h-4 bg-red-500/50 rounded-full z-10"></div>
              <div className="absolute bottom-2 left-2 w-4 h-4 bg-red-500/50 rounded-full z-10"></div>
              <div className="absolute bottom-2 right-2 w-4 h-4 bg-red-500/50 rounded-full z-10"></div>
              
              {/* Poster Image with overlay */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={fest.poster}
                  alt={fest.name}
                  className="w-full h-full object-cover filter contrast-125 brightness-75"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-red-900/20 to-transparent"></div>
                <div className="absolute inset-0 bg-red-900/20"></div>
                
                <div className="absolute top-4 right-4">
                  <span className={`px-3 py-1 rounded-full text-sm font-medium backdrop-blur-sm ${
                    fest.type === 'Squad' 
                      ? 'bg-red-500/30 border border-red-500/50 text-red-300'
                      : 'bg-red-600/30 border border-red-600/50 text-red-200'
                  }`}>
                    {fest.type === 'Squad' ? (
                      <>
                        <Shield className="inline-block mr-1" size={14} />
                        {fest.type}
                      </>
                    ) : (
                      <>
                        <Cpu className="inline-block mr-1" size={14} />
                        {fest.type}
                      </>
                    )}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-red-100 mb-3 uppercase tracking-wider">
                  {fest.name}
                </h3>

                <p className="text-red-100/70 mb-4 text-sm">
                  {fest.description}
                </p>

                <div className="space-y-2 mb-6">
                  <div className="flex items-center text-red-100/60 text-sm">
                    <Building size={16} className="mr-2" />
                    Allied with: {fest.collab}
                  </div>
                  <div className="flex items-center text-red-100/60 text-sm">
                    <Calendar size={16} className="mr-2" />
                    {fest.date}
                  </div>
                  <div className="flex items-center text-red-400 text-sm">
                    <Users size={16} className="mr-2" />
                    Deploy by: {fest.deadline}
                  </div>
                </div>

                <div className="flex gap-3">
                  <button
                    onClick={() => handleJoinRequest(fest.name)}
                    className="flex-1 flex items-center justify-center gap-2 bg-gradient-to-r from-red-600 to-red-500 text-white font-medium py-3 rounded-full hover:shadow-lg hover:shadow-red-500/25 transition-all duration-300 tech-border circuit-lines"
                  >
                    <Mail size={16} />
                    DEPLOY
                  </button>
                  <button
                    onClick={() => handleShareFest(fest)}
                    className="flex items-center justify-center gap-2 glass-morphism-strong rounded-full px-4 py-3 font-medium text-red-100 hover:scale-105 transition-all duration-300 tech-border circuit-lines relative overflow-hidden group"
                  >
                    {copiedStates[fest.id] ? (
                      <>
                        <Check size={16} className="text-green-400" />
                        <div className="absolute inset-0 bg-green-500/20 animate-pulse rounded-full"></div>
                      </>
                    ) : (
                      <>
                        <Copy size={16} />
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-red-500/10 to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                      </>
                    )}
                  </button>
                </div>
              </div>
              
              {/* Status indicator */}
              <div className="absolute top-4 left-8 w-2 h-2 bg-red-500/60 rounded-full animate-pulse"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FestsSection;
