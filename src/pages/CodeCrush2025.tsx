
import React, { useState, useEffect, useRef } from 'react';
import { Calendar, Users, Trophy, Mail, MessageCircle, Code, Zap, Gift, Target, Clock, ChevronRight, Sparkles, Award, FileText, Video, Star, Terminal, Cpu, Database, Server, Shield, Hexagon } from 'lucide-react';

const CodeCrush2025 = () => {
  const [activeTimelineItem, setActiveTimelineItem] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [scrollY, setScrollY] = useState(0);
  const [glitchActive, setGlitchActive] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setActiveTimelineItem((prev) => (prev + 1) % 5);
    }, 4000);
    
    const glitchInterval = setInterval(() => {
      setGlitchActive(true);
      setTimeout(() => setGlitchActive(false), 200);
    }, 8000);

    return () => {
      clearInterval(interval);
      clearInterval(glitchInterval);
    };
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const timelineData = [
    { 
      date: 'July 23', 
      event: 'Registration Deadline - Submit Forms',
      icon: <Mail className="w-6 h-6" />,
      color: 'from-red-500 to-orange-500',
      status: 'upcoming',
      terminal: '> registration.exe --deadline'
    },
    { 
      date: 'July 25', 
      event: 'Discord Server Access Granted',
      icon: <MessageCircle className="w-6 h-6" />,
      color: 'from-orange-500 to-yellow-500',
      status: 'upcoming',
      terminal: '> discord.connect --server-link'
    },
    { 
      date: 'July 30', 
      event: 'Hackathon Initialize (8:00 PM IST)',
      icon: <Zap className="w-6 h-6" />,
      color: 'from-yellow-500 to-red-500',
      status: 'upcoming',
      terminal: '> hackathon.start --time=20:00'
    },
    { 
      date: 'Aug 1', 
      event: 'System Shutdown - Final Submissions (8:00 PM IST)',
      icon: <Clock className="w-6 h-6" />,
      color: 'from-red-500 to-pink-500',
      status: 'upcoming',
      terminal: '> submit.final --deadline=20:00'
    },
    { 
      date: 'Aug 15', 
      event: 'Results.exe - Winners Announced (Email)',
      icon: <Trophy className="w-6 h-6" />,
      color: 'from-pink-500 to-red-500',
      status: 'upcoming',
      terminal: '> announce.winners --method=email'
    }
  ];

  const handleRegister = () => {
    window.open('https://forms.google.com', '_blank');
  };

  const handleDiscordLink = () => {
    alert('Discord access will be granted on July 25, 2025');
  };

  // Generate matrix rain effect
  const MatrixRain = () => {
    return (
      <div className="fixed inset-0 pointer-events-none z-0 opacity-20">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute text-red-500/30 font-mono text-xs animate-data-stream"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`
            }}
          >
            {Math.random().toString(36).substring(2, 15)}
          </div>
        ))}
      </div>
    );
  };

  return (
    <div ref={containerRef} className="min-h-screen bg-black text-white overflow-hidden relative">
      <MatrixRain />
      
      {/* Parallax 3D Background */}
      <div className="fixed inset-0 overflow-hidden z-0">
        {/* Animated Hexagon Grid */}
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            transform: `translate(${scrollY * 0.1}px, ${scrollY * 0.05}px)`,
            backgroundImage: `
              radial-gradient(circle at 25% 25%, rgba(220, 38, 127, 0.3) 0%, transparent 50%),
              radial-gradient(circle at 75% 75%, rgba(239, 68, 68, 0.2) 0%, transparent 50%),
              url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23dc2626' fill-opacity='0.1'%3E%3Cpath d='M30 0l25.98 15v30L30 60 4.02 45V15z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")
            `,
            backgroundSize: '60px 60px'
          }}
        />

        {/* Floating 3D Tech Elements */}
        <div 
          className="absolute top-1/4 left-1/4 w-20 h-20 opacity-20"
          style={{ transform: `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px) rotateX(${scrollY * 0.1}deg)` }}
        >
          <Hexagon className="w-full h-full text-red-500 animate-spin" style={{ animationDuration: '20s' }} />
        </div>
        
        <div 
          className="absolute top-3/4 right-1/4 w-16 h-16 opacity-15"
          style={{ transform: `translate(${mousePosition.x * -0.03}px, ${mousePosition.y * 0.03}px) rotateY(${scrollY * 0.15}deg)` }}
        >
          <Cpu className="w-full h-full text-orange-500 animate-pulse" />
        </div>

        <div 
          className="absolute bottom-1/4 left-1/3 w-24 h-24 opacity-10"
          style={{ transform: `translate(${mousePosition.x * 0.01}px, ${mousePosition.y * -0.02}px) rotate(${scrollY * 0.05}deg)` }}
        >
          <Database className="w-full h-full text-red-400 animate-bounce" style={{ animationDuration: '3s' }} />
        </div>

        {/* Interactive Cursor Lava Glow */}
        <div 
          className="absolute w-96 h-96 bg-gradient-radial from-red-500/30 via-orange-500/15 to-transparent rounded-full blur-3xl pointer-events-none transition-all duration-300"
          style={{
            left: mousePosition.x - 192,
            top: mousePosition.y - 192,
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-12">
        {/* Hero Terminal Section */}
        <div className={`mb-20 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {/* Terminal Header */}
          <div className="glass-morphism-strong p-6 mb-8 border border-red-500/30">
            <div className="flex items-center gap-4 mb-4">
              <div className="flex gap-2">
                <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
                <div className="w-3 h-3 bg-orange-500 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
              </div>
              <Terminal className="w-5 h-5 text-red-400" />
              <span className="font-mono text-red-400">quantumgrid@hackathon:~$</span>
            </div>
            <div className="font-mono text-sm text-gray-300 space-y-1">
              <div className="flex items-center gap-2">
                <span className="text-red-400">></span>
                <span>initializing_codecrush_2025.exe...</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-orange-400">></span>
                <span>loading_innovation_protocols...</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-yellow-400">></span>
                <span>system_ready: true</span>
              </div>
            </div>
          </div>

          {/* 3D Glitch Title */}
          <div className="text-center mb-12 relative">
            <h1 className={`text-6xl md:text-8xl font-black mb-6 relative ${glitchActive ? 'animate-glitch' : ''}`}>
              <span className="absolute inset-0 text-red-400 opacity-80 blur-sm">
                CodeCrush 2025
              </span>
              <span className="absolute inset-0 text-orange-400 opacity-60 blur-md">
                CodeCrush 2025
              </span>
              <span className="relative text-transparent bg-gradient-to-r from-red-500 via-orange-500 to-red-500 bg-clip-text animate-gradient">
                CodeCrush 2025
              </span>
              {glitchActive && (
                <>
                  <span className="absolute inset-0 text-red-500 transform translate-x-1 opacity-80">
                    CodeCrush 2025
                  </span>
                  <span className="absolute inset-0 text-cyan-500 transform -translate-x-1 opacity-60">
                    CodeCrush 2025
                  </span>
                </>
              )}
            </h1>
            
            {/* Floating Tech Icons */}
            <div className="absolute -top-12 -left-8 text-4xl animate-float">
              <Code className="w-8 h-8 text-red-500" />
            </div>
            <div className="absolute -top-8 -right-12 text-3xl animate-float-delayed">
              <Zap className="w-6 h-6 text-orange-500" />
            </div>
            <div className="absolute -bottom-8 left-4 text-3xl animate-bounce">
              <Server className="w-6 h-6 text-red-400" />
            </div>
          </div>
          
          <div className="text-center space-y-6">
            <h2 className="text-3xl md:text-5xl font-bold">
              <span className="text-red-400 font-mono">system.execute(</span>
              <span className="bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">
                "Fall in Love with Code"
              </span>
              <span className="text-red-400 font-mono">)</span>
            </h2>
            <div className="glass-morphism p-6 max-w-4xl mx-auto border border-red-500/20">
              <p className="text-lg text-gray-300 font-mono">
                <span className="text-red-400">/*</span> A revolutionary 48-hour neural network hackathon <span className="text-red-400">*/</span><br/>
                <span className="text-orange-400">powered_by:</span> The QuantumGrid<br/>
                <span className="text-red-400">where</span> innovation.meets(creativity) <span className="text-orange-400">in</span> digital_realm;
              </p>
            </div>
          </div>
        </div>

        {/* Terminal Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center mb-24">
          <button
            onClick={handleRegister}
            className="group relative px-8 py-4 bg-gradient-to-r from-red-600 via-orange-600 to-red-600 text-white font-mono font-bold rounded-lg hover:scale-105 transition-all duration-300 overflow-hidden border border-red-500/50 interactive-red-glow"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-red-400 via-orange-400 to-red-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="relative z-10 flex items-center gap-3">
              <Terminal size={20} />
              <span>./register.sh --execute</span>
            </div>
          </button>
          
          <button
            onClick={handleDiscordLink}
            className="group relative px-8 py-4 border-2 border-red-500/50 bg-black/80 backdrop-blur-xl text-red-300 font-mono font-bold rounded-lg hover:scale-105 transition-all duration-300 overflow-hidden interactive-red-glow"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-red-500/20 to-orange-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="relative z-10 flex items-center gap-3">
              <MessageCircle size={20} />
              <span>discord.connect(july_25)</span>
            </div>
          </button>
        </div>

        {/* What is CodeCrush - Terminal Style */}
        <div className="mb-24">
          <div className="glass-morphism-strong p-8 border border-red-500/30 tech-border">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-gradient-to-br from-red-500 to-orange-500 rounded-lg">
                <Target size={32} className="text-white" />
              </div>
              <h3 className="text-3xl font-bold font-mono">
                <span className="text-red-400">query:</span> 
                <span className="text-white ml-2">what_is_codecrush()</span>
              </h3>
            </div>
            
            <div className="bg-black/60 rounded-lg p-6 border border-red-500/20 font-mono">
              <div className="text-red-400 mb-2">// System Analysis</div>
              <div className="text-gray-300 space-y-2">
                <div><span className="text-orange-400">duration:</span> 48_hours_of_pure_adrenaline;</div>
                <div><span className="text-red-400">mode:</span> solo || team_collaboration;</div>
                <div><span className="text-orange-400">theme:</span> "Innovating Human Experience Through Tech";</div>
                <div><span className="text-red-400">objective:</span> create_revolutionary_solutions();</div>
                <div className="text-yellow-400 mt-4">// This isn't just a hackathon—it's your gateway to the matrix</div>
              </div>
            </div>
          </div>
        </div>

        {/* 3D Interactive Timeline */}
        <div className="mb-24">
          <div className="glass-morphism-strong p-8 border border-red-500/30">
            <div className="flex items-center gap-4 mb-8">
              <div className="p-3 bg-gradient-to-br from-orange-500 to-red-500 rounded-lg">
                <Calendar size={32} className="text-white" />
              </div>
              <h3 className="text-3xl font-bold font-mono text-red-400">
                event_timeline.json
              </h3>
            </div>
            
            <div className="relative">
              {/* 3D Timeline Core */}
              <div className="absolute left-16 top-0 w-1 h-full">
                <div className="absolute inset-0 bg-gradient-to-b from-red-500 via-orange-500 to-red-500 rounded-full animate-pulse" />
                <div className="absolute inset-0 bg-gradient-to-b from-red-400 via-orange-400 to-red-400 rounded-full blur-sm" />
              </div>

              <div className="space-y-8">
                {timelineData.map((item, index) => (
                  <div
                    key={index}
                    className={`flex items-center gap-8 transition-all duration-500 cursor-pointer group ${
                      index === activeTimelineItem ? 'scale-105 translate-x-2' : 'hover:scale-102'
                    }`}
                    onClick={() => setActiveTimelineItem(index)}
                  >
                    {/* 3D Timeline Node */}
                    <div className={`relative w-32 h-20 rounded-xl flex flex-col items-center justify-center transition-all duration-500 border-2 ${
                      index === activeTimelineItem 
                        ? `bg-gradient-to-br ${item.color} shadow-2xl shadow-red-500/50 border-red-300` 
                        : 'bg-gray-900/80 border-red-500/30 hover:border-red-400/50'
                    }`}>
                      <div className={`relative z-10 transition-all duration-500 ${
                        index === activeTimelineItem ? 'scale-125 text-white' : 'text-red-400'
                      }`}>
                        {item.icon}
                      </div>
                      <div className="text-xs font-mono mt-1 text-center text-white">
                        {item.date}
                      </div>
                      {index === activeTimelineItem && (
                        <div className="absolute inset-0 rounded-xl border-2 border-white/30 animate-ping" />
                      )}
                    </div>

                    {/* Timeline Content */}
                    <div className="flex-1 glass-morphism p-6 border border-red-500/30 group-hover:border-orange-500/50 transition-all duration-300 interactive-red-glow">
                      <div className="space-y-3">
                        <div className="font-mono text-xs text-red-400">
                          {item.terminal}
                        </div>
                        <h4 className={`font-bold text-xl transition-colors duration-300 ${
                          index === activeTimelineItem ? 'text-orange-400' : 'text-white'
                        }`}>
                          {item.event}
                        </h4>
                        <div className="flex items-center justify-between">
                          <div className="text-gray-400 font-mono text-sm">
                            status: {item.status}
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
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Mission Briefing - 3D Cards */}
        <div className="mb-24">
          <div className="glass-morphism-strong p-8 border border-red-500/30">
            <div className="flex items-center gap-4 mb-8">
              <div className="p-3 bg-gradient-to-br from-red-500 to-orange-500 rounded-lg">
                <Shield size={32} className="text-white" />
              </div>
              <h3 className="text-3xl font-bold font-mono text-red-400">
                mission_briefing.exe
              </h3>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="glass-morphism p-6 border border-red-500/30 hover:border-orange-500/50 transition-all duration-300 transform hover:scale-105 interactive-red-glow">
                <div className="flex items-center gap-3 mb-4">
                  <Zap className="text-orange-400" size={24} />
                  <h4 className="text-xl font-bold font-mono text-red-400">Phase_01: Deploy</h4>
                </div>
                <div className="font-mono text-sm text-gray-300 space-y-2">
                  <div><span className="text-red-400">date:</span> July 30, 20:00 IST</div>
                  <div><span className="text-orange-400">action:</span> receive_classified_briefing()</div>
                  <div><span className="text-red-400">payload:</span> detailed_mission_objectives</div>
                </div>
              </div>
              
              <div className="glass-morphism p-6 border border-red-500/30 hover:border-orange-500/50 transition-all duration-300 transform hover:scale-105 interactive-red-glow">
                <div className="flex items-center gap-3 mb-4">
                  <Clock className="text-red-400" size={24} />
                  <h4 className="text-xl font-bold font-mono text-orange-400">Phase_02: Execute</h4>
                </div>
                <div className="font-mono text-sm text-gray-300 space-y-2">
                  <div><span className="text-orange-400">duration:</span> 48_hours_countdown</div>
                  <div><span className="text-red-400">mission:</span> build.innovate.create()</div>
                  <div><span className="text-orange-400">result:</span> vision_to_reality.transform()</div>
                </div>
              </div>
            </div>
            
            <div className="mt-8 bg-black/60 rounded-lg p-6 border border-red-500/20">
              <h4 className="text-xl font-bold font-mono text-orange-400 mb-4">submission_requirements.config:</h4>
              <div className="space-y-3 font-mono text-sm">
                <div className="flex items-start gap-3">
                  <span className="text-red-400">></span>
                  <span className="text-gray-300">prototype: {"{working_demo || zipped_source}"}</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-orange-400">></span>
                  <span className="text-gray-300">pitch_video: optional_but_recommended</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-red-400">></span>
                  <span className="text-gray-300">communication_protocol: discord_exclusive</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Prizes Terminal */}
        <div className="mb-24">
          <div className="glass-morphism-strong p-8 border border-yellow-500/30">
            <div className="flex items-center gap-4 mb-8">
              <div className="p-3 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-lg">
                <Trophy size={32} className="text-white" />
              </div>
              <h3 className="text-3xl font-bold font-mono text-yellow-400">
                rewards_system.json
              </h3>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* All Participants */}
              <div className="bg-gradient-to-br from-green-900/40 to-emerald-900/40 rounded-lg p-6 border border-green-500/30 transform hover:scale-105 transition-all duration-300 interactive-glow">
                <div className="flex items-center gap-3 mb-4">
                  <Gift className="text-green-400" size={24} />
                  <h4 className="text-lg font-bold font-mono text-green-400">all_participants</h4>
                </div>
                <div className="font-mono text-xs text-gray-300 space-y-1">
                  <div><span className="text-green-400">certificate:</span> participation_verified</div>
                  <div><span className="text-green-400">issuer:</span> QuantumGrid_Official</div>
                </div>
              </div>
              
              {/* Top 3 Winners */}
              <div className="bg-gradient-to-br from-yellow-900/40 to-orange-900/40 rounded-lg p-6 border border-yellow-500/30 transform hover:scale-105 transition-all duration-300 interactive-orange-glow">
                <div className="flex items-center gap-3 mb-4">
                  <Award className="text-yellow-400" size={24} />
                  <h4 className="text-lg font-bold font-mono text-yellow-400">top_3_winners</h4>
                </div>
                <div className="font-mono text-xs text-gray-300 space-y-1">
                  <div><span className="text-yellow-400">certificates:</span> winner_status</div>
                  <div><span className="text-orange-400">feedback:</span> personalized_review</div>
                  <div><span className="text-yellow-400">recommendation:</span> letter_of_rec</div>
                </div>
              </div>
              
              {/* 1st Place Exclusive */}
              <div className="bg-gradient-to-br from-red-900/40 to-pink-900/40 rounded-lg p-6 border border-red-500/30 transform hover:scale-105 transition-all duration-300 interactive-red-glow">
                <div className="flex items-center gap-3 mb-4">
                  <Star className="text-red-400" size={24} />
                  <h4 className="text-lg font-bold font-mono text-red-400">champion_tier</h4>
                </div>
                <div className="font-mono text-xs text-gray-300 space-y-1">
                  <div><span className="text-red-400">certificate:</span> recognition_award</div>
                  <div><span className="text-pink-400">interview:</span> scheduled_if_agreed</div>
                  <div><span className="text-red-400">status:</span> hall_of_fame</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Arsenal Available */}
        <div className="mb-24">
          <div className="glass-morphism-strong p-8 border border-cyan-500/30">
            <div className="flex items-center gap-4 mb-8">
              <div className="p-3 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-lg">
                <Code size={32} className="text-white" />
              </div>
              <h3 className="text-3xl font-bold font-mono text-cyan-400">
                tech_arsenal.config
              </h3>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="glass-morphism p-6 border border-cyan-500/30 hover:border-blue-500/50 transition-all duration-300">
                <h4 className="text-xl font-bold font-mono text-cyan-400 mb-3">unlimited_access.granted</h4>
                <div className="font-mono text-sm text-gray-300 space-y-2">
                  <div><span className="text-cyan-400">platforms:</span> any_code || no_code</div>
                  <div><span className="text-blue-400">apis:</span> ai_integrations.enabled</div>
                  <div><span className="text-cyan-400">frameworks:</span> web_builders.all</div>
                  <div><span className="text-blue-400">mobile:</span> app_dev_tools.available</div>
                  <div><span className="text-cyan-400">design:</span> prototyping_suite.active</div>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-purple-900/40 to-pink-900/40 rounded-lg p-6 border border-purple-500/30 flex items-center justify-center">
                <div className="text-center">
                  <Sparkles className="text-pink-400 mx-auto mb-4" size={48} />
                  <p className="text-2xl font-bold font-mono bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                    just.make.it.innovative()
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Terminal Exit */}
        <div className="text-center">
          <a
            href="/#competitions"
            className="group inline-flex items-center gap-4 px-8 py-4 glass-morphism text-white font-mono font-bold rounded-lg hover:scale-105 transition-all duration-300 border border-red-500/50 hover:border-orange-500/50 interactive-red-glow"
          >
            <ChevronRight size={20} className="rotate-180 group-hover:-translate-x-2 transition-transform" />
            <span>cd ../home && exit</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default CodeCrush2025;
