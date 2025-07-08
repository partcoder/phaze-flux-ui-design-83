
import React, { useState } from 'react';
import { Calendar, Users, Tag, Mail, Share } from 'lucide-react';
import { toast } from '@/components/ui/use-toast';

const CompetitionsSection = () => {
  const [activeTab, setActiveTab] = useState('interschool');
  const [selectedGrade, setSelectedGrade] = useState('all');
  const [selectedType, setSelectedType] = useState('all');

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

  // Filter competitions based on selected grade and type
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
    const subject = `Request to participate in ${compName}`;
    const body = `Hi QuantumGrid Team,\n\nI would like to participate in ${compName}. Please provide me with more details.\n\nThanks!`;
    window.location.href = `mailto:abcd@quantumgrid.tech?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  const handleShareCompetition = (comp: any) => {
    const url = `${window.location.origin}/competition/${comp.id}`;
    
    if (navigator.share) {
      navigator.share({
        title: comp.name,
        text: `Check out ${comp.name} - ${comp.description}`,
        url: url,
      });
    } else {
      navigator.clipboard.writeText(url);
      toast({
        title: "Link Copied!",
        description: `Share link for ${comp.name} has been copied to clipboard.`,
      });
    }
  };

  const filteredCompetitions = filterCompetitions(competitions[activeTab]);

  return (
    <section id="competitions" className="py-24 relative overflow-hidden">
      {/* Background decorative elements - updated to fiery red colors */}
      <div className="absolute top-0 right-1/4 w-80 h-80 bg-red-500/8 rounded-full blur-3xl animate-morph"></div>
      <div className="absolute bottom-1/4 left-1/3 w-60 h-60 bg-orange-500/10 rounded-full blur-2xl animate-float"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-5xl font-bold bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent mb-4">
            Competitions
          </h2>
          <p className="text-white/80 text-xl">
            Join exciting tech competitions and showcase your skills
          </p>
        </div>

        {/* Enhanced Toggle Tabs - updated to fiery red colors */}
        <div className="flex justify-center mb-16">
          <div className="glass-morphism-strong rounded-full p-3">
            <button
              onClick={() => setActiveTab('interschool')}
              className={`px-8 py-4 rounded-full font-medium transition-all duration-500 ripple-effect ${
                activeTab === 'interschool'
                  ? 'bg-gradient-to-r from-red-500 to-orange-500 text-white shadow-lg'
                  : 'text-white/70 hover:text-white hover:bg-white/10'
              }`}
            >
              Interschool
            </button>
            <button
              onClick={() => setActiveTab('global')}
              className={`px-8 py-4 rounded-full font-medium transition-all duration-500 ripple-effect ${
                activeTab === 'global'
                  ? 'bg-gradient-to-r from-red-500 to-orange-500 text-white shadow-lg'
                  : 'text-white/70 hover:text-white hover:bg-white/10'
              }`}
            >
              Global / Online
            </button>
          </div>
        </div>

        {/* Enhanced Filters - updated focus colors */}
        <div className="flex flex-wrap justify-center gap-6 mb-16">
          <select
            value={selectedGrade}
            onChange={(e) => setSelectedGrade(e.target.value)}
            className="glass-morphism rounded-2xl px-6 py-3 text-white border-0 focus:ring-2 focus:ring-red-400"
          >
            <option value="all" className="text-black">All Grades</option>
            <option value="9-10" className="text-black">Grades 9-10</option>
            <option value="11-12" className="text-black">Grades 11-12</option>
          </select>
          <select
            value={selectedType}
            onChange={(e) => setSelectedType(e.target.value)}
            className="glass-morphism rounded-2xl px-6 py-3 text-white border-0 focus:ring-2 focus:ring-red-400"
          >
            <option value="all" className="text-black">All Types</option>
            <option value="Hackathon" className="text-black">Hackathon</option>
            <option value="Quiz" className="text-black">Quiz</option>
            <option value="Development" className="text-black">Development</option>
            <option value="Programming" className="text-black">Programming</option>
            <option value="Case Study" className="text-black">Case Study</option>
          </select>
        </div>

        {/* Enhanced Competition Cards - updated to fiery red colors */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {filteredCompetitions.length > 0 ? (
            filteredCompetitions.map((comp, index) => (
              <div
                key={comp.name}
                className="glass-morphism-strong interactive-glow group rounded-3xl p-8 liquid-hover group relative overflow-hidden animate-float"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="flex items-center justify-between mb-6">
                  <span className="px-4 py-2 glass-morphism rounded-full text-red-400 text-sm font-medium group-hover:text-orange-400 transition-all duration-300">
                    {comp.type}
                  </span>
                  <span className="px-4 py-2 glass-morphism rounded-full text-orange-400 text-sm font-medium group-hover:text-red-400 transition-all duration-300">
                    {comp.domain}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-orange-400 transition-colors duration-300">
                  {comp.name}
                </h3>

                <p className="text-white/80 mb-4 text-sm leading-relaxed">
                  {comp.description}
                </p>

                <p className="text-white/40 text-xs mb-6 italic">
                  Hosted by: {comp.hostedBy}
                </p>

                <div className="space-y-3 mb-8">
                  <div className="flex items-center text-white/70 text-sm">
                    <Users size={16} className="mr-3 text-red-400" />
                    Grades {comp.grades}
                  </div>
                  <div className="flex items-center text-white/70 text-sm">
                    <Calendar size={16} className="mr-3 text-orange-400" />
                    {comp.date}
                  </div>
                  <div className="flex items-center text-red-400 text-sm">
                    <Tag size={16} className="mr-3" />
                    Deadline: {comp.deadline}
                  </div>
                </div>

                <div className="flex gap-3">
                  <button
                    onClick={() => handleEmailParticipation(comp.name)}
                    className="flex-1 interactive-glow group flex items-center justify-center gap-3 glass-morphism-strong rounded-2xl py-4 font-medium text-white hover:scale-105 transition-all duration-300 ripple-effect group-hover:bg-gradient-to-r group-hover:from-red-500/20 group-hover:to-orange-500/20"
                  >
                    <Mail size={18} />
                    Join
                  </button>
                  <button
                    onClick={() => handleShareCompetition(comp)}
                    className="interactive-glow group flex items-center justify-center gap-3 glass-morphism-strong rounded-2xl px-4 py-4 font-medium text-white hover:scale-105 transition-all duration-300 ripple-effect group-hover:bg-gradient-to-r group-hover:from-orange-500/20 group-hover:to-red-500/20"
                  >
                    <Share size={18} />
                  </button>
                </div>

                {/* Decorative corner element - updated to fiery red colors */}
                <div className="absolute top-2 right-2 w-2 h-2 bg-red-400/40 rounded-full animate-pulse opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            ))
          ) : (
            <div className="col-span-full text-center py-12">
              <p className="text-white/60 text-lg">No competitions match your current filters.</p>
              <p className="text-white/40 text-sm mt-2">Try adjusting your grade or type selection.</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default CompetitionsSection;
