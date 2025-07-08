
import React, { useState, useEffect } from 'react';
import { Calendar, Users, Trophy, Mail, MessageCircle, Code, Zap, Gift, Target, Clock, ChevronRight, Sparkles } from 'lucide-react';

const CodeCrush2025 = () => {
  const [activeTimelineItem, setActiveTimelineItem] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setActiveTimelineItem((prev) => (prev + 1) % 5);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const timelineData = [
    { 
      date: 'July 23', 
      event: 'Deadline to submit the form',
      icon: <Mail className="w-5 h-5" />,
      color: 'from-red-500 to-orange-500'
    },
    { 
      date: 'July 25', 
      event: 'Discord Server Link Released by email',
      icon: <MessageCircle className="w-5 h-5" />,
      color: 'from-orange-500 to-yellow-500'
    },
    { 
      date: 'July 30', 
      event: 'Hackathon Starts (8:00 PM IST)',
      icon: <Zap className="w-5 h-5" />,
      color: 'from-yellow-500 to-red-500'
    },
    { 
      date: 'Aug 1', 
      event: 'Hackathon Ends - Submission Deadline (8:00 PM IST)',
      icon: <Clock className="w-5 h-5" />,
      color: 'from-red-500 to-pink-500'
    },
    { 
      date: 'Aug 15', 
      event: 'Winners + Feedback Announced (via email)',
      icon: <Trophy className="w-5 h-5" />,
      color: 'from-pink-500 to-red-500'
    }
  ];

  const handleRegister = () => {
    window.open('https://forms.google.com', '_blank');
  };

  const handleDiscordLink = () => {
    alert('Discord link will be released on July 25, 2025');
  };

  return (
    <div className="min-h-screen text-white overflow-x-hidden relative">
      {/* Enhanced tech background with more layers */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-red-900/10 rounded-full blur-3xl animate-morph"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-red-800/8 rounded-full blur-3xl animate-morph" style={{ animationDelay: '3s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-red-950/5 rounded-full blur-3xl animate-breathe"></div>
        
        {/* Animated grid overlay */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-[linear-gradient(90deg,transparent_24px,rgba(139,0,0,0.3)_25px,rgba(139,0,0,0.3)_26px,transparent_27px,transparent_74px,rgba(139,0,0,0.3)_75px,rgba(139,0,0,0.3)_76px,transparent_77px),linear-gradient(rgba(139,0,0,0.3)_24px,transparent_25px,transparent_26px,rgba(139,0,0,0.3)_27px,rgba(139,0,0,0.3)_74px,transparent_75px,transparent_76px,rgba(139,0,0,0.3)_77px)] bg-[length:100px_100px] animate-pulse"></div>
        </div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-20">
        {/* Enhanced Header with power effects */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="relative inline-block">
            <h1 className="text-6xl md:text-7xl font-bold bg-gradient-to-r from-red-400 via-orange-400 to-red-300 bg-clip-text text-transparent mb-4 tech-border circuit-lines relative">
              🔥 CodeCrush 2025
              <div className="absolute -inset-1 bg-gradient-to-r from-red-600 via-orange-600 to-red-600 rounded-lg blur opacity-30 animate-pulse"></div>
            </h1>
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-red-400/10 to-transparent animate-shimmer"></div>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-red-100 mb-6 animate-float">
            Fall in Love with Code
          </h2>
          <p className="text-xl text-red-100/80 max-w-3xl mx-auto animate-fade-in">
            An online global hackathon powered by The QuantumGrid, where creativity meets code.
          </p>
        </div>

        {/* Enhanced Action Buttons with power effects */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center mb-20">
          <button
            onClick={handleRegister}
            className="group relative px-8 py-4 bg-gradient-to-r from-red-600 to-red-500 text-white font-semibold rounded-full hover:scale-105 transition-all duration-300 tech-border circuit-lines flex items-center justify-center gap-3 overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-red-400 to-orange-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
            <Mail size={20} className="relative z-10" />
            <span className="relative z-10">📝 Register Now (Google Form)</span>
          </button>
          <button
            onClick={handleDiscordLink}
            className="group relative px-8 py-4 glass-morphism-strong text-red-100 font-semibold rounded-full hover:scale-105 transition-all duration-300 tech-border circuit-lines flex items-center justify-center gap-3 overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-red-600/20 to-orange-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <MessageCircle size={20} className="relative z-10" />
            <span className="relative z-10">🔗 Discord Link → Releases July 25, 2025</span>
          </button>
        </div>

        {/* Enhanced What is CodeCrush section */}
        <div className="glass-morphism-strong p-8 rounded-2xl mb-12 tech-border circuit-lines group hover:shadow-2xl hover:shadow-red-500/20 transition-all duration-500">
          <div className="absolute inset-0 bg-gradient-to-r from-red-500/5 to-orange-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          <h3 className="text-3xl font-bold text-red-300 mb-6 flex items-center gap-3 relative z-10">
            <Target size={28} className="animate-pulse" />
            💭 What is CodeCrush?
            <Sparkles size={20} className="text-yellow-400 animate-pulse" />
          </h3>
          <p className="text-red-100/80 text-lg leading-relaxed relative z-10">
            An online 48-hour challenge where you create something impactful around the theme "Innovating Human Experience Through Tech." Solo or with a team, this is your playground to build, design, and pitch something the world needs.
          </p>
        </div>

        {/* Interactive Animated Timeline */}
        <div className="glass-morphism-strong p-8 rounded-2xl mb-12 tech-border circuit-lines relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-red-500/5 to-orange-500/5 rounded-2xl"></div>
          <h3 className="text-3xl font-bold text-red-300 mb-8 flex items-center gap-3 relative z-10">
            <Calendar size={28} className="animate-pulse" />
            🗓️ Event Timeline
            <div className="ml-auto flex gap-2">
              {timelineData.map((_, index) => (
                <div
                  key={index}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === activeTimelineItem ? 'bg-red-400 scale-125' : 'bg-red-800'
                  }`}
                />
              ))}
            </div>
          </h3>
          
          <div className="relative">
            {/* Glowing connection line */}
            <div className="absolute left-8 top-0 w-1 h-full bg-gradient-to-b from-red-500 via-orange-500 to-red-500 rounded-full shadow-lg shadow-red-500/50">
              <div className="absolute inset-0 bg-gradient-to-b from-red-400 via-orange-400 to-red-400 rounded-full animate-pulse"></div>
              <div 
                className="absolute w-full bg-gradient-to-b from-yellow-400 via-orange-400 to-red-400 rounded-full transition-all duration-1000 shadow-lg shadow-orange-500/50"
                style={{ 
                  height: `${((activeTimelineItem + 1) / timelineData.length) * 100}%`,
                  top: 0
                }}
              />
            </div>

            {/* Timeline items */}
            <div className="space-y-6 relative z-10">
              {timelineData.map((item, index) => (
                <div
                  key={index}
                  className={`flex items-center gap-6 transition-all duration-500 cursor-pointer group ${
                    index === activeTimelineItem ? 'scale-105' : 'hover:scale-102'
                  }`}
                  onClick={() => setActiveTimelineItem(index)}
                >
                  {/* Timeline node */}
                  <div className={`relative w-16 h-16 rounded-full flex items-center justify-center transition-all duration-500 ${
                    index === activeTimelineItem 
                      ? `bg-gradient-to-r ${item.color} shadow-lg shadow-red-500/50` 
                      : 'bg-red-800/50 group-hover:bg-red-700/50'
                  }`}>
                    <div className={`absolute inset-0 rounded-full transition-all duration-500 ${
                      index === activeTimelineItem 
                        ? 'bg-gradient-to-r from-white/20 to-transparent animate-pulse' 
                        : ''
                    }`}></div>
                    <div className="relative z-10 text-white">
                      {item.icon}
                    </div>
                    {index === activeTimelineItem && (
                      <div className="absolute inset-0 rounded-full border-2 border-white/30 animate-ping"></div>
                    )}
                  </div>

                  {/* Timeline content */}
                  <div className="flex-1 glass-morphism p-4 rounded-xl group-hover:bg-red-900/20 transition-all duration-300">
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className={`font-bold text-lg transition-colors duration-300 ${
                          index === activeTimelineItem ? 'text-orange-300' : 'text-red-300'
                        }`}>
                          {item.date}
                        </h4>
                        <p className="text-red-100/80 mt-1">{item.event}</p>
                      </div>
                      <ChevronRight 
                        size={20} 
                        className={`text-red-400 transition-all duration-300 ${
                          index === activeTimelineItem ? 'translate-x-2 text-orange-400' : 'group-hover:translate-x-1'
                        }`} 
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Enhanced How It Works with interactive elements */}
        <div className="glass-morphism-strong p-8 rounded-2xl mb-12 tech-border circuit-lines group hover:shadow-2xl hover:shadow-red-500/20 transition-all duration-500">
          <h3 className="text-3xl font-bold text-red-300 mb-6 flex items-center gap-3">
            <Code size={28} className="animate-pulse" />
            🧠 How It Works
          </h3>
          <div className="space-y-6">
            <div className="p-4 glass-morphism rounded-xl hover:bg-red-900/20 transition-all duration-300 group/item">
              <p className="text-red-100/80 text-lg flex items-center gap-3">
                <Zap size={16} className="text-yellow-400 group-hover/item:animate-pulse" />
                On July 30 at 8 PM IST, all participants will receive the same detailed prompt, based on the core theme.
              </p>
            </div>
            <div className="p-4 glass-morphism rounded-xl hover:bg-red-900/20 transition-all duration-300">
              <p className="text-red-100/80 text-lg mb-4">You'll have exactly 48 hours to:</p>
              <ul className="space-y-3 ml-6">
                <li className="text-red-100/80 flex items-start gap-2 group/item hover:text-red-200 transition-colors">
                  <span className="text-red-400 mt-1 group-hover/item:text-orange-400">•</span>
                  Build a solution based on the prompt (brief: ~200 words)
                </li>
                <li className="text-red-100/80 flex items-start gap-2 group/item hover:text-red-200 transition-colors">
                  <span className="text-red-400 mt-1 group-hover/item:text-orange-400">•</span>
                  Develop a working prototype
                </li>
                <li className="text-red-100/80 flex items-start gap-2 group/item hover:text-red-200 transition-colors">
                  <span className="text-red-400 mt-1 group-hover/item:text-orange-400">•</span>
                  Submit:
                  <ul className="ml-4 mt-2 space-y-1">
                    <li className="flex items-start gap-2 group/subitem hover:text-red-200 transition-colors">
                      <span className="text-red-500 mt-1 group-hover/subitem:text-yellow-400">◦</span>
                      Final prototype (hosted or zipped)
                    </li>
                    <li className="flex items-start gap-2 group/subitem hover:text-red-200 transition-colors">
                      <span className="text-red-500 mt-1 group-hover/subitem:text-yellow-400">◦</span>
                      (Optional) A short pitch video explaining your project
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
            <div className="p-4 glass-morphism rounded-xl bg-gradient-to-r from-red-900/20 to-orange-900/20 border border-red-500/30">
              <p className="text-red-100/80 text-lg font-medium flex items-center gap-3">
                <MessageCircle size={20} className="text-red-400 animate-pulse" />
                All details will be shared exclusively via Discord.
              </p>
            </div>
          </div>
        </div>

        {/* Enhanced Prizes section */}
        <div className="glass-morphism-strong p-8 rounded-2xl mb-12 tech-border circuit-lines group hover:shadow-2xl hover:shadow-yellow-500/20 transition-all duration-500">
          <h3 className="text-3xl font-bold text-red-300 mb-6 flex items-center gap-3">
            <Trophy size={28} className="animate-pulse text-yellow-400" />
            🏆 Prizes
          </h3>
          <div className="space-y-4">
            {[
              { icon: Gift, text: "🏅 Participation Certificate by The QuantumGrid", color: "text-green-400" },
              { icon: Trophy, text: "🥇 Winner Certificates for Top 3", color: "text-yellow-400" },
              { icon: Zap, text: "🧠 Personalized project feedback for Top 3", color: "text-blue-400" }
            ].map((prize, index) => (
              <div key={index} className="flex items-center gap-3 text-red-100/80 p-3 glass-morphism rounded-lg hover:bg-red-900/20 transition-all duration-300 group/prize">
                <prize.icon size={20} className={`${prize.color} group-hover/prize:animate-pulse`} />
                <span className="group-hover/prize:text-red-200 transition-colors">{prize.text}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Enhanced Registration section */}
        <div className="glass-morphism-strong p-8 rounded-2xl mb-12 tech-border circuit-lines text-center">
          <h3 className="text-3xl font-bold text-red-300 mb-6 flex items-center justify-center gap-3">
            <Mail size={28} className="animate-pulse" />
            📥 Registration
          </h3>
          <button
            onClick={handleRegister}
            className="group relative px-8 py-4 bg-gradient-to-r from-red-600 to-red-500 text-white font-semibold rounded-full hover:scale-105 transition-all duration-300 tech-border circuit-lines flex items-center gap-3 mx-auto overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-red-400 to-orange-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
            <Mail size={20} className="relative z-10" />
            <span className="relative z-10">📌 Click Here to Register (Google Form)</span>
          </button>
        </div>

        {/* Enhanced Discord Access section */}
        <div className="glass-morphism-strong p-8 rounded-2xl mb-12 tech-border circuit-lines">
          <h3 className="text-3xl font-bold text-red-300 mb-6 flex items-center gap-3">
            <MessageCircle size={28} className="animate-pulse" />
            💬 Discord Access
          </h3>
          <div className="space-y-4">
            <div className="p-4 glass-morphism rounded-xl bg-gradient-to-r from-blue-900/20 to-purple-900/20 border border-blue-500/30">
              <p className="text-red-100/80 text-lg">
                The official CodeCrush 2025 Discord Server goes live on July 25, 2025
              </p>
            </div>
            <p className="text-red-100/80">Link will be:</p>
            <ul className="space-y-2 ml-6">
              <li className="text-red-100/80 flex items-start gap-2 group hover:text-red-200 transition-colors">
                <span className="text-red-400 mt-1 group-hover:text-orange-400">•</span>
                Posted on this site
              </li>
              <li className="text-red-100/80 flex items-start gap-2 group hover:text-red-200 transition-colors">
                <span className="text-red-400 mt-1 group-hover:text-orange-400">•</span>
                Sent via email to all registered participants
              </li>
            </ul>
          </div>
        </div>

        {/* Enhanced Allowed Tools section */}
        <div className="glass-morphism-strong p-8 rounded-2xl mb-12 tech-border circuit-lines">
          <h3 className="text-3xl font-bold text-red-300 mb-6 flex items-center gap-3">
            <Code size={28} className="animate-pulse" />
            ⚙️ Allowed Tools
          </h3>
          <div className="space-y-4">
            {[
              "Any code/no-code platform",
              "Use of AI APIs, web builders, mobile app frameworks, design tools etc."
            ].map((tool, index) => (
              <div key={index} className="flex items-center gap-3 text-red-100/80 p-3 glass-morphism rounded-lg hover:bg-red-900/20 transition-all duration-300 group">
                <span className="text-red-400 group-hover:text-orange-400">•</span>
                <span className="group-hover:text-red-200 transition-colors">{tool}</span>
              </div>
            ))}
            <div className="p-4 glass-morphism rounded-xl bg-gradient-to-r from-red-900/30 to-orange-900/30 border border-red-500/50 text-center">
              <p className="text-red-300 font-semibold text-lg animate-pulse">
                Just make it innovative.
              </p>
            </div>
          </div>
        </div>

        {/* Enhanced Back to competitions */}
        <div className="text-center">
          <a
            href="/#competitions"
            className="group inline-flex items-center gap-3 px-8 py-4 glass-morphism-strong text-red-100 font-semibold rounded-full hover:scale-105 transition-all duration-300 tech-border circuit-lines relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-red-600/20 to-orange-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <ChevronRight size={20} className="rotate-180 group-hover:-translate-x-2 transition-transform relative z-10" />
            <span className="relative z-10">Back to Competitions</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default CodeCrush2025;
