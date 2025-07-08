import React, { useState } from 'react';
import { Calendar, Users, Tag, Mail, Share, Terminal, Zap, Copy, Check } from 'lucide-react';
import { toast } from '@/components/ui/use-toast';

const CompetitionsSection = () => {
  const [activeTab, setActiveTab] = useState('interschool');
  const [selectedGrade, setSelectedGrade] = useState('all');
  const [selectedType, setSelectedType] = useState('all');
  const [copiedStates, setCopiedStates] = useState<Record<string, boolean>>({});

  const competitions = {
    interschool: [
      {
        id: 'codecrush2024',
        name: 'CodeCrush 2024',
        type: 'Hackathon',
        grades: '11-12',
        date: 'Dec 15, 2024',
        deadline: 'Dec 10, 2024',
        domain: 'AI/ML',
        description: 'Build AI solutions for real-world problems',
        hostedBy: 'Oscorp Inc.'
      },
      {
        id: 'techquizmaster',
        name: 'TechQuiz Master',
        type: 'Quiz',
        grades: '9-10',
        date: 'Jan 20, 2025',
        deadline: 'Jan 15, 2025',
        domain: 'General Tech',
        description: 'Test your tech knowledge across domains',
        hostedBy: 'Wayne Enterprises'
      },
      {
        id: 'webdevchallenge',
        name: 'WebDev Challenge',
        type: 'Development',
        grades: '11-12',
        date: 'Feb 5, 2025',
        deadline: 'Jan 30, 2025',
        domain: 'Web Development',
        description: 'Create stunning web applications',
        hostedBy: 'Stark Industries'
      },
      {
        id: 'votechhackathon',
        name: 'Votech Hackathon',
        type: 'Hackathon',
        grades: '11-12',
        date: 'Feb 5, 2025',
        deadline: 'Jan 30, 2025',
        domain: 'AI/ML',
        description: 'Create stunning web applications',
        hostedBy: 'LexCorp'
      },
      {
        id: 'incorpstudy',
        name: 'Incorp study',
        type: 'Case Study',
        grades: '11-12',
        date: 'Feb 5, 2025',
        deadline: 'Jan 30, 2025',
        domain: 'AI/ML',
        description: 'Create stunning web applications',
        hostedBy: 'Queen Industries'
      },
      {
        id: 'osbornchallenge',
        name: 'Osborn Challenge',
        type: 'Programming',
        grades: '9-12',
        date: 'Feb 5, 2025',
        deadline: 'Jan 30, 2025',
        domain: 'AI/ML',
        description: 'Create stunning web applications',
        hostedBy: 'Osborn Industries'
      },
    ],
    global: [
      {
        id: 'internationalcodinglolympics',
        name: 'International Coding Olympics',
        type: 'Programming',
        grades: '9-12',
        date: 'Mar 15, 2025',
        deadline: 'Mar 1, 2025',
        domain: 'Algorithms',
        description: 'Compete with coders worldwide',
        hostedBy: 'Global Tech Foundation'
      },
      {
        id: 'globalaichallenge',
        name: 'Global AI Challenge',
        type: 'Case Study',
        grades: '10-12',
        date: 'Apr 10, 2025',
        deadline: 'Mar 25, 2025',
        domain: 'AI/ML',
        description: 'Solve AI problems for global impact',
        hostedBy: 'International AI Consortium'
      },
    ]
  };

  const filterCompetitions = (comps) => {
    return comps.filter(comp => {
      const gradeMatch = selectedGrade === 'all' || comp.grades === selectedGrade || 
                        (selectedGrade === '9-10' && (comp.grades.includes('9') || comp.grades.includes('10'))) ||
                        (selectedGrade === '11-12' && (comp.grades.includes('11') || comp.grades.includes('12'))) ||
                        (comp.grades === '9-12' && (selectedGrade === '9-10' || selectedGrade === '11-12'));
      
      const typeMatch = selectedType === 'all' || comp.type === selectedType;
      
      return gradeMatch && typeMatch;
    });
  };

  const handleEmailParticipation = (compName: string) => {
    const subject = `Combat Request: ${compName}`;
    const body = `Greetings QuantumGrid Command,\n\nI request deployment to ${compName}. Provide tactical briefing and engagement protocols.\n\nAwaiting orders.`;
    window.location.href = `mailto:abcd@quantumgrid.tech?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  const handleShareCompetition = async (comp: any) => {
    const shareData = {
      name: comp.name,
      type: comp.type,
      domain: comp.domain,
      date: comp.date,
      deadline: comp.deadline,
      description: comp.description,
      hostedBy: comp.hostedBy
    };
    
    const shareText = `🔥 COMBAT ZONE ALERT 🔥\n\n` +
      `Mission: ${comp.name}\n` +
      `Classification: ${comp.type} | ${comp.domain}\n` +
      `Deployment Date: ${comp.date}\n` +
      `Registration Deadline: ${comp.deadline}\n` +
      `Command: ${comp.hostedBy}\n\n` +
      `Description: ${comp.description}\n\n` +
      `Join QuantumGrid at: ${window.location.origin}/#competitions\n` +
      `#QuantumGrid #TechWarfare #${comp.type.replace(/\s+/g, '')}`;

    try {
      await navigator.clipboard.writeText(shareText);
      setCopiedStates(prev => ({ ...prev, [comp.id]: true }));
      
      toast({
        title: "⚡ Link Acquired",
        description: `Combat zone intel for ${comp.name} uploaded to neural interface.`,
      });
      
      setTimeout(() => {
        setCopiedStates(prev => ({ ...prev, [comp.id]: false }));
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
      
      setCopiedStates(prev => ({ ...prev, [comp.id]: true }));
      toast({
        title: "⚡ Link Acquired",
        description: `Combat zone intel for ${comp.name} uploaded to neural interface.`,
      });
      
      setTimeout(() => {
        setCopiedStates(prev => ({ ...prev, [comp.id]: false }));
      }, 2000);
    }
  };

  const filteredCompetitions = filterCompetitions(competitions[activeTab]);

  return (
    <section id="competitions" className="py-24 relative overflow-hidden z-10">
      <div className="absolute top-0 right-1/4 w-80 h-80 bg-red-900/6 rounded-full blur-3xl animate-morph"></div>
      <div className="absolute bottom-1/4 left-1/3 w-60 h-60 bg-red-800/8 rounded-full blur-2xl animate-float"></div>
      
      <div className="absolute inset-0 opacity-5">
        <div className="w-full h-full bg-gradient-to-br from-red-900 via-transparent to-red-900"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-5xl font-bold bg-gradient-to-r from-red-400 to-red-300 bg-clip-text text-transparent mb-4 tech-border circuit-lines">
            &gt; Combat Zones
          </h2>
          <p className="text-red-100/80 text-xl">
            Select your battlefield and prove your digital superiority
          </p>
        </div>

        <div className="flex justify-center mb-16">
          <div className="glass-morphism-strong p-3 tech-border circuit-lines">
            <button
              onClick={() => setActiveTab('interschool')}
              className={`px-8 py-4 rounded-full font-medium transition-all duration-500 ripple-effect relative ${
                activeTab === 'interschool'
                  ? 'bg-gradient-to-r from-red-600 to-red-500 text-white shadow-lg shadow-red-500/25'
                  : 'text-red-100/70 hover:text-red-100 hover:bg-red-900/20'
              }`}
            >
              <Terminal className="inline-block mr-2" size={18} />
              Local Network
            </button>
            <button
              onClick={() => setActiveTab('global')}
              className={`px-8 py-4 rounded-full font-medium transition-all duration-500 ripple-effect relative ${
                activeTab === 'global'
                  ? 'bg-gradient-to-r from-red-600 to-red-500 text-white shadow-lg shadow-red-500/25'
                  : 'text-red-100/70 hover:text-red-100 hover:bg-red-900/20'
              }`}
            >
              <Zap className="inline-block mr-2" size={18} />
              Global Grid
            </button>
          </div>
        </div>

        <div className="flex flex-wrap justify-center gap-6 mb-16">
          <select
            value={selectedGrade}
            onChange={(e) => setSelectedGrade(e.target.value)}
            className="glass-morphism-strong rounded-2xl px-6 py-3 text-red-100 border-0 focus:ring-2 focus:ring-red-500 tech-border circuit-lines"
          >
            <option value="all" className="text-black">All Threat Levels</option>
            <option value="9-10" className="text-black">Levels 9-10</option>
            <option value="11-12" className="text-black">Levels 11-12</option>
          </select>
          <select
            value={selectedType}
            onChange={(e) => setSelectedType(e.target.value)}
            className="glass-morphism-strong rounded-2xl px-6 py-3 text-red-100 border-0 focus:ring-2 focus:ring-red-500 tech-border circuit-lines"
          >
            <option value="all" className="text-black">All Combat Types</option>
            <option value="Hackathon" className="text-black">Cyber Assault</option>
            <option value="Quiz" className="text-black">Intel Gathering</option>
            <option value="Development" className="text-black">System Build</option>
            <option value="Programming" className="text-black">Code Combat</option>
            <option value="Case Study" className="text-black">Strategic Analysis</option>
          </select>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {filteredCompetitions.length > 0 ? (
            filteredCompetitions.map((comp, index) => (
              <div
                key={comp.name}
                className="glass-morphism-strong interactive-glow group liquid-hover relative overflow-hidden animate-float tech-border circuit-lines p-8"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="absolute top-2 left-2 w-4 h-4 bg-red-500/50 rounded-full"></div>
                <div className="absolute top-2 right-2 w-4 h-4 bg-red-500/50 rounded-full"></div>
                <div className="absolute bottom-2 left-2 w-4 h-4 bg-red-500/50 rounded-full"></div>
                <div className="absolute bottom-2 right-2 w-4 h-4 bg-red-500/50 rounded-full"></div>
                
                <div className="flex items-center justify-between mb-6">
                  <span className="px-4 py-2 glass-morphism rounded-full text-red-400 text-sm font-medium group-hover:text-red-300 transition-all duration-300 uppercase tracking-wider">
                    {comp.type}
                  </span>
                  <span className="px-4 py-2 glass-morphism rounded-full text-red-300 text-sm font-medium group-hover:text-red-400 transition-all duration-300 uppercase tracking-wider">
                    {comp.domain}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-red-100 mb-4 group-hover:text-red-300 transition-colors duration-300 uppercase tracking-wider">
                  {comp.name}
                </h3>

                <p className="text-red-100/80 mb-4 text-sm leading-relaxed">
                  {comp.description}
                </p>

                <p className="text-red-100/40 text-xs mb-6 italic">
                  Command: {comp.hostedBy}
                </p>

                <div className="space-y-3 mb-8">
                  <div className="flex items-center text-red-100/70 text-sm">
                    <Users size={16} className="mr-3 text-red-400" />
                    Clearance {comp.grades}
                  </div>
                  <div className="flex items-center text-red-100/70 text-sm">
                    <Calendar size={16} className="mr-3 text-red-300" />
                    {comp.date}
                  </div>
                  <div className="flex items-center text-red-400 text-sm">
                    <Tag size={16} className="mr-3" />
                    Deploy by: {comp.deadline}
                  </div>
                </div>

                <div className="flex gap-3">
                  <button
                    onClick={() => handleEmailParticipation(comp.name)}
                    className="flex-1 interactive-glow group flex items-center justify-center gap-3 glass-morphism-strong rounded-full py-4 font-medium text-red-100 hover:scale-105 transition-all duration-300 ripple-effect group-hover:bg-gradient-to-r group-hover:from-red-600/20 group-hover:to-red-500/20 tech-border circuit-lines"
                  >
                    <Mail size={18} />
                    DEPLOY
                  </button>
                  <button
                    onClick={() => handleShareCompetition(comp)}
                    className="interactive-glow group flex items-center justify-center gap-3 glass-morphism-strong rounded-full px-4 py-4 font-medium text-red-100 hover:scale-105 transition-all duration-300 ripple-effect group-hover:bg-gradient-to-r group-hover:from-red-500/20 group-hover:to-red-600/20 tech-border circuit-lines relative overflow-hidden"
                  >
                    {copiedStates[comp.id] ? (
                      <>
                        <Check size={18} className="text-green-400" />
                        <div className="absolute inset-0 bg-green-500/20 animate-pulse rounded-full"></div>
                      </>
                    ) : (
                      <>
                        <Copy size={18} />
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-red-500/10 to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                      </>
                    )}
                  </button>
                </div>

                <div className="absolute top-4 right-8 w-2 h-2 bg-red-500/60 rounded-full animate-pulse"></div>
              </div>
            ))
          ) : (
            <div className="col-span-full text-center py-12">
              <p className="text-red-100/60 text-lg">No combat zones match current parameters.</p>
              <p className="text-red-100/40 text-sm mt-2">Adjust threat level or combat type selection.</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default CompetitionsSection;
