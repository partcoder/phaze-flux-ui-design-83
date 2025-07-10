
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
      terminal: '&gt; registration.exe --deadline'
    },
    { 
      date: 'July 25', 
      event: 'Discord Server Access Granted',
      icon: <MessageCircle className="w-6 h-6" />,
      color: 'from-orange-500 to-yellow-500',
      status: 'upcoming',
      terminal: '&gt; discord.connect --server-link'
    },
    { 
      date: 'July 30', 
      event: 'Hackathon Initialize (8:00 PM IST)',
      icon: <Zap className="w-6 h-6" />,
      color: 'from-yellow-500 to-red-500',
      status: 'upcoming',
      terminal: '&gt; hackathon.start --time=20:00'
    },
    { 
      date: 'Aug 1', 
      event: 'System Shutdown - Final Submissions (8:00 PM IST)',
      icon: <Clock className="w-6 h-6" />,
      color: 'from-red-500 to-pink-500',
      status: 'upcoming',
      terminal: '&gt; submit.final --deadline=20:00'
    },
    { 
      date: 'Aug 15', 
      event: 'Results.exe - Winners Announced (Email)',
      icon: <Trophy className="w-6 h-6" />,
      color: 'from-pink-500 to-red-500',
      status: 'upcoming',
      terminal: '&gt; announce.winners --method=email'
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
      
      {/* Enhanced Parallax 3D Background */}
      <div className="fixed inset-0 overflow-hidden z-0">
        {/* Multi-layer Animated Hexagon Grid */}
        <div 
          className="absolute inset-0 opacity-15"
          style={{
            transform: `translate3d(${scrollY * 0.1}px, ${scrollY * 0.05}px, 0) rotateX(${scrollY * 0.02}deg)`,
            backgroundImage: `
              radial-gradient(circle at 25% 25%, rgba(220, 38, 127, 0.4) 0%, transparent 50%),
              radial-gradient(circle at 75% 75%, rgba(239, 68, 68, 0.3) 0%, transparent 50%),
              url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23dc2626' fill-opacity='0.15'%3E%3Cpath d='M30 0l25.98 15v30L30 60 4.02 45V15z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")
            `,
            backgroundSize: '60px 60px'
          }}
        />

        {/* Secondary parallax layer */}
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            transform: `translate3d(${scrollY * -0.05}px, ${scrollY * 0.03}px, 0) rotateY(${scrollY * 0.01}deg)`,
            backgroundImage: `
              url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23b91c1c' fill-opacity='0.08'%3E%3Cpath d='M40 0l34.64 20v40L40 80 5.36 60V20z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")
            `,
            backgroundSize: '80px 80px'
          }}
        />

        {/* Enhanced Floating 3D Tech Elements */}
        <div 
          className="absolute top-1/4 left-1/4 w-24 h-24 opacity-25"
          style={{ 
            transform: `translate3d(${mousePosition.x * 0.03}px, ${mousePosition.y * 0.02}px, 0) rotateX(${scrollY * 0.1}deg) rotateZ(${scrollY * 0.05}deg)`,
            filter: 'drop-shadow(0 0 20px rgba(220, 38, 127, 0.5))'
          }}
        >
          <Hexagon className="w-full h-full text-red-500 animate-spin" style={{ animationDuration: '15s' }} />
        </div>
        
        <div 
          className="absolute top-1/2 right-1/4 w-20 h-20 opacity-20"
          style={{ 
            transform: `translate3d(${mousePosition.x * -0.04}px, ${mousePosition.y * 0.03}px, 0) rotateY(${scrollY * 0.15}deg) rotateX(${scrollY * 0.08}deg)`,
            filter: 'drop-shadow(0 0 15px rgba(239, 68, 68, 0.4))'
          }}
        >
          <Cpu className="w-full h-full text-orange-500 animate-pulse" />
        </div>

        <div 
          className="absolute bottom-1/3 left-1/3 w-28 h-28 opacity-15"
          style={{ 
            transform: `translate3d(${mousePosition.x * 0.02}px, ${mousePosition.y * -0.02}px, 0) rotate(${scrollY * 0.1}deg) scale(${1 + Math.sin(scrollY * 0.01) * 0.1})`,
            filter: 'drop-shadow(0 0 25px rgba(185, 28, 28, 0.3))'
          }}
        >
          <Database className="w-full h-full text-red-400 animate-bounce" style={{ animationDuration: '4s' }} />
        </div>

        <div 
          className="absolute top-1/6 right-1/6 w-16 h-16 opacity-18"
          style={{ 
            transform: `translate3d(${mousePosition.x * -0.02}px, ${mousePosition.y * -0.03}px, 0) rotateZ(${scrollY * -0.08}deg)`,
            filter: 'drop-shadow(0 0 18px rgba(220, 38, 127, 0.4))'
          }}
        >
          <Server className="w-full h-full text-pink-500 animate-pulse" style={{ animationDelay: '1s' }} />
        </div>

        {/* Enhanced Interactive Cursor Lava Glow */}
        <div 
          className="absolute w-[500px] h-[500px] bg-gradient-radial from-red-500/40 via-orange-500/20 to-transparent rounded-full blur-3xl pointer-events-none transition-all duration-500"
          style={{
            left: mousePosition.x - 250,
            top: mousePosition.y - 250,
            transform: `scale(${1 + Math.sin(Date.now() * 0.002) * 0.1})`,
            filter: 'blur(60px)',
          }}
        />
        
        {/* Additional smaller glow */}
        <div 
          className="absolute w-96 h-96 bg-gradient-radial from-red-400/30 via-pink-500/15 to-transparent rounded-full blur-2xl pointer-events-none"
          style={{
            left: mousePosition.x - 192,
            top: mousePosition.y - 192,
            transform: `scale(${0.8 + Math.cos(Date.now() * 0.003) * 0.2})`,
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-12">
        {/* Enhanced Hero Terminal Section */}
        <div className={`mb-20 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {/* Enhanced Terminal Header */}
          <div className="glass-morphism-strong p-8 mb-12 border border-red-500/40 shadow-2xl shadow-red-500/20">
            <div className="flex items-center gap-4 mb-6">
              <div className="flex gap-2">
                <div className="w-4 h-4 bg-red-500 rounded-full animate-pulse shadow-lg shadow-red-500/50"></div>
                <div className="w-4 h-4 bg-orange-500 rounded-full animate-pulse shadow-lg shadow-orange-500/50" style={{ animationDelay: '0.5s' }}></div>
                <div className="w-4 h-4 bg-yellow-500 rounded-full animate-pulse shadow-lg shadow-yellow-500/50" style={{ animationDelay: '1s' }}></div>
              </div>
              <Terminal className="w-6 h-6 text-red-400" />
              <span className="font-mono text-red-400 text-lg">quantumgrid@hackathon:~$</span>
            </div>
            <div className="font-mono text-base text-gray-300 space-y-2">
              <div className="flex items-center gap-2">
                <span className="text-red-400">&gt;</span>
                <span>initializing_codecrush_2025.exe...</span>
                <div className="ml-auto text-green-400">✓</div>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-orange-400">&gt;</span>
                <span>loading_innovation_protocols...</span>
                <div className="ml-auto text-green-400">✓</div>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-yellow-400">&gt;</span>
                <span>system_ready: true</span>
                <div className="ml-auto text-green-400">✓</div>
              </div>
              <div className="flex items-center gap-2 text-red-400 animate-pulse">
                <span>&gt;</span>
                <span>awaiting_your_input...</span>
                <div className="w-2 h-4 bg-red-400 animate-pulse ml-1"></div>
              </div>
            </div>
          </div>

          {/* Enhanced 3D Glitch Title with Better Visibility */}
          <div className="text-center mb-16 relative">
            {/* Background glow for better visibility */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-6xl md:text-8xl font-black opacity-20 blur-2xl bg-gradient-to-r from-red-500 via-orange-500 to-red-500 bg-clip-text text-transparent">
                CodeCrush 2025
              </div>
            </div>
            
            <h1 
              className={`text-6xl md:text-8xl font-black mb-8 relative ${glitchActive ? 'animate-glitch' : ''}`}
              style={{
                transform: `perspective(1000px) rotateX(${scrollY * 0.02}deg) rotateY(${Math.sin(scrollY * 0.01) * 2}deg)`,
                textShadow: `
                  0 0 20px rgba(220, 38, 127, 0.8),
                  0 0 40px rgba(239, 68, 68, 0.6),
                  0 0 60px rgba(185, 28, 28, 0.4),
                  2px 2px 0px rgba(0, 0, 0, 0.8)
                `
              }}
            >
              {/* Multiple shadow layers for depth */}
              <span className="absolute inset-0 text-red-400 opacity-60 blur-sm transform translate-x-1 translate-y-1">
                CodeCrush 2025
              </span>
              <span className="absolute inset-0 text-orange-400 opacity-40 blur-md transform translate-x-2 translate-y-2">
                CodeCrush 2025
              </span>
              <span className="absolute inset-0 text-pink-400 opacity-30 blur-lg transform translate-x-3 translate-y-3">
                CodeCrush 2025
              </span>
              
              {/* Main text with better contrast */}
              <span className="relative text-white bg-gradient-to-r from-red-500 via-orange-500 to-red-500 bg-clip-text animate-gradient">
                CodeCrush 2025
              </span>
              
              {glitchActive && (
                <>
                  <span className="absolute inset-0 text-red-500 transform translate-x-2 opacity-80">
                    CodeCrush 2025
                  </span>
                  <span className="absolute inset-0 text-cyan-500 transform -translate-x-2 opacity-60">
                    CodeCrush 2025
                  </span>
                </>
              )}
            </h1>
            
            {/* Enhanced Floating Tech Icons with 3D transforms */}
            <div 
              className="absolute -top-16 -left-12 text-5xl animate-float"
              style={{ 
                transform: `translate3d(${mousePosition.x * 0.01}px, ${mousePosition.y * 0.01}px, 0) rotateZ(${scrollY * 0.05}deg)`,
                filter: 'drop-shadow(0 0 10px rgba(220, 38, 127, 0.8))'
              }}
            >
              <Code className="w-10 h-10 text-red-500" />
            </div>
            <div 
              className="absolute -top-12 -right-16 text-4xl animate-float-delayed"
              style={{ 
                transform: `translate3d(${mousePosition.x * -0.01}px, ${mousePosition.y * 0.01}px, 0) rotateZ(${scrollY * -0.03}deg)`,
                filter: 'drop-shadow(0 0 8px rgba(239, 68, 68, 0.8))'
              }}
            >
              <Zap className="w-8 h-8 text-orange-500" />
            </div>
            <div 
              className="absolute -bottom-12 left-8 text-4xl animate-bounce"
              style={{ 
                transform: `translate3d(${mousePosition.x * 0.005}px, ${mousePosition.y * -0.005}px, 0)`,
                filter: 'drop-shadow(0 0 12px rgba(185, 28, 28, 0.8))'
              }}
            >
              <Server className="w-8 h-8 text-red-400" />
            </div>
            <div 
              className="absolute -bottom-8 -right-4 text-3xl animate-pulse"
              style={{ 
                transform: `translate3d(${mousePosition.x * -0.008}px, ${mousePosition.y * 0.008}px, 0) rotateZ(${scrollY * 0.02}deg)`,
                filter: 'drop-shadow(0 0 6px rgba(220, 38, 127, 0.6))'
              }}
            >
              <Shield className="w-6 h-6 text-pink-500" />
            </div>
          </div>
          
          <div className="text-center space-y-8">
            <h2 className="text-3xl md:text-5xl font-bold">
              <span className="text-red-400 font-mono">system.execute(</span>
              <span className="bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">
                "Fall in Love with Code"
              </span>
              <span className="text-red-400 font-mono">)</span>
            </h2>
            <div className="glass-morphism p-8 max-w-4xl mx-auto border border-red-500/30 shadow-2xl shadow-red-500/10">
              <p className="text-xl text-gray-300 font-mono leading-relaxed">
                <span className="text-red-400">/*</span> A revolutionary 48-hour neural network hackathon <span className="text-red-400">*/</span><br/>
                <span className="text-orange-400">powered_by:</span> The QuantumGrid<br/>
                <span className="text-red-400">where</span> innovation.meets(creativity) <span className="text-orange-400">in</span> digital_realm;
              </p>
            </div>
          </div>
        </div>

        {/* Enhanced Terminal Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-8 justify-center mb-32">
          <button
            onClick={handleRegister}
            className="group relative px-10 py-5 bg-gradient-to-r from-red-600 via-orange-600 to-red-600 text-white font-mono font-bold text-lg rounded-lg hover:scale-110 transition-all duration-500 overflow-hidden border border-red-500/50 interactive-red-glow shadow-2xl shadow-red-500/30"
            style={{ transform: 'perspective(1000px) rotateX(5deg)' }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-red-400 via-orange-400 to-red-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="relative z-10 flex items-center gap-4">
              <Terminal size={24} />
              <span>./register.sh --execute</span>
            </div>
          </button>
          
          <button
            onClick={handleDiscordLink}
            className="group relative px-10 py-5 border-2 border-red-500/60 bg-black/90 backdrop-blur-xl text-red-300 font-mono font-bold text-lg rounded-lg hover:scale-110 transition-all duration-500 overflow-hidden interactive-red-glow shadow-2xl shadow-red-500/20"
            style={{ transform: 'perspective(1000px) rotateX(5deg)' }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-red-500/30 to-orange-500/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="relative z-10 flex items-center gap-4">
              <MessageCircle size={24} />
              <span>discord.connect(july_25)</span>
            </div>
          </button>
        </div>

        {/* What is CodeCrush - Enhanced Terminal Style */}
        <div className="mb-32">
          <div className="glass-morphism-strong p-10 border border-red-500/40 tech-border shadow-2xl shadow-red-500/20">
            <div className="flex items-center gap-6 mb-8">
              <div className="p-4 bg-gradient-to-br from-red-500 to-orange-500 rounded-xl shadow-lg shadow-red-500/50">
                <Target size={40} className="text-white" />
              </div>
              <h3 className="text-4xl font-bold font-mono">
                <span className="text-red-400">query:</span> 
                <span className="text-white ml-3">what_is_codecrush()</span>
              </h3>
            </div>
            
            <div className="bg-black/80 rounded-xl p-8 border border-red-500/30 font-mono shadow-inner">
              <div className="text-red-400 mb-4 text-lg">// System Analysis</div>
              <div className="text-gray-300 space-y-3 text-lg">
                <div><span className="text-orange-400">duration:</span> 48_hours_of_pure_adrenaline;</div>
                <div><span className="text-red-400">mode:</span> solo || team_collaboration;</div>
                <div><span className="text-orange-400">theme:</span> "Innovating Human Experience Through Tech";</div>
                <div><span className="text-red-400">objective:</span> create_revolutionary_solutions();</div>
                <div className="text-yellow-400 mt-6 text-xl">// This isn't just a hackathon—it's your gateway to the matrix</div>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced 3D Interactive Timeline */}
        <div className="mb-32">
          <div className="glass-morphism-strong p-10 border border-red-500/40">
            <div className="flex items-center gap-6 mb-12">
              <div className="p-4 bg-gradient-to-br from-orange-500 to-red-500 rounded-xl shadow-lg shadow-orange-500/50">
                <Calendar size={40} className="text-white" />
              </div>
              <h3 className="text-4xl font-bold font-mono text-red-400">
                event_timeline.json
              </h3>
            </div>
            
            <div className="relative">
              {/* Enhanced 3D Timeline Core */}
              <div className="absolute left-20 top-0 w-2 h-full">
                <div className="absolute inset-0 bg-gradient-to-b from-red-500 via-orange-500 to-red-500 rounded-full animate-pulse shadow-lg shadow-red-500/50" />
                <div className="absolute inset-0 bg-gradient-to-b from-red-400 via-orange-400 to-red-400 rounded-full blur-sm" />
                <div className="absolute inset-0 bg-gradient-to-b from-red-300 via-orange-300 to-red-300 rounded-full blur-md opacity-50" />
              </div>

              <div className="space-y-12">
                {timelineData.map((item, index) => (
                  <div
                    key={index}
                    className={`flex items-center gap-10 transition-all duration-700 cursor-pointer group ${
                      index === activeTimelineItem ? 'scale-105 translate-x-4' : 'hover:scale-102'
                    }`}
                    onClick={() => setActiveTimelineItem(index)}
                    style={{
                      transform: `perspective(1000px) rotateX(${index === activeTimelineItem ? '2deg' : '0deg'})`
                    }}
                  >
                    {/* Enhanced 3D Timeline Node */}
                    <div className={`relative w-40 h-24 rounded-2xl flex flex-col items-center justify-center transition-all duration-700 border-2 shadow-2xl ${
                      index === activeTimelineItem 
                        ? `bg-gradient-to-br ${item.color} shadow-red-500/60 border-red-300 scale-110` 
                        : 'bg-gray-900/90 border-red-500/40 hover:border-red-400/60 shadow-red-500/20'
                    }`}>
                      <div className={`relative z-10 transition-all duration-500 ${
                        index === activeTimelineItem ? 'scale-125 text-white' : 'text-red-400'
                      }`}>
                        {item.icon}
                      </div>
                      <div className="text-sm font-mono mt-2 text-center text-white font-bold">
                        {item.date}
                      </div>
                      {index === activeTimelineItem && (
                        <>
                          <div className="absolute inset-0 rounded-2xl border-2 border-white/40 animate-ping" />
                          <div className="absolute inset-0 rounded-2xl border border-white/20 animate-pulse" />
                        </>
                      )}
                    </div>

                    {/* Enhanced Timeline Content */}
                    <div className="flex-1 glass-morphism p-8 border border-red-500/40 group-hover:border-orange-500/60 transition-all duration-500 interactive-red-glow shadow-xl shadow-red-500/10">
                      <div className="space-y-4">
                        <div className="font-mono text-sm text-red-400 bg-black/40 p-2 rounded">
                          {item.terminal}
                        </div>
                        <h4 className={`font-bold text-2xl transition-colors duration-300 ${
                          index === activeTimelineItem ? 'text-orange-400' : 'text-white'
                        }`}>
                          {item.event}
                        </h4>
                        <div className="flex items-center justify-between">
                          <div className="text-gray-400 font-mono text-base">
                            status: <span className="text-yellow-400">{item.status}</span>
                          </div>
                          <ChevronRight 
                            size={24} 
                            className={`text-red-400 transition-all duration-300 ${
                              index === activeTimelineItem ? 'translate-x-3 text-orange-400 scale-125' : 'group-hover:translate-x-2'
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

        {/* Mission Briefing - Enhanced 3D Cards */}
        <div className="mb-32">
          <div className="glass-morphism-strong p-10 border border-red-500/40">
            <div className="flex items-center gap-6 mb-12">
              <div className="p-4 bg-gradient-to-br from-red-500 to-orange-500 rounded-xl shadow-lg shadow-red-500/50">
                <Shield size={40} className="text-white" />
              </div>
              <h3 className="text-4xl font-bold font-mono text-red-400">
                mission_briefing.exe
              </h3>
            </div>
            
            <div className="grid md:grid-cols-2 gap-10">
              <div 
                className="glass-morphism p-8 border border-red-500/40 hover:border-orange-500/60 transition-all duration-500 transform hover:scale-110 interactive-red-glow shadow-xl shadow-red-500/20"
                style={{ transform: 'perspective(1000px) rotateY(-5deg)' }}
              >
                <div className="flex items-center gap-4 mb-6">
                  <Zap className="text-orange-400" size={32} />
                  <h4 className="text-2xl font-bold font-mono text-red-400">Phase_01: Deploy</h4>
                </div>
                <div className="font-mono text-base text-gray-300 space-y-3">
                  <div><span className="text-red-400">date:</span> July 30, 20:00 IST</div>
                  <div><span className="text-orange-400">action:</span> receive_classified_briefing()</div>
                  <div><span className="text-red-400">payload:</span> detailed_mission_objectives</div>
                </div>
              </div>
              
              <div 
                className="glass-morphism p-8 border border-red-500/40 hover:border-orange-500/60 transition-all duration-500 transform hover:scale-110 interactive-red-glow shadow-xl shadow-red-500/20"
                style={{ transform: 'perspective(1000px) rotateY(5deg)' }}
              >
                <div className="flex items-center gap-4 mb-6">
                  <Clock className="text-red-400" size={32} />
                  <h4 className="text-2xl font-bold font-mono text-orange-400">Phase_02: Execute</h4>
                </div>
                <div className="font-mono text-base text-gray-300 space-y-3">
                  <div><span className="text-orange-400">duration:</span> 48_hours_countdown</div>
                  <div><span className="text-red-400">mission:</span> build.innovate.create()</div>
                  <div><span className="text-orange-400">result:</span> vision_to_reality.transform()</div>
                </div>
              </div>
            </div>
            
            <div className="mt-12 bg-black/80 rounded-xl p-8 border border-red-500/30 shadow-inner">
              <h4 className="text-2xl font-bold font-mono text-orange-400 mb-6">submission_requirements.config:</h4>
              <div className="space-y-4 font-mono text-base">
                <div className="flex items-start gap-4">
                  <span className="text-red-400">&gt;</span>
                  <span className="text-gray-300">prototype: {"{working_demo || zipped_source}"}</span>
                </div>
                <div className="flex items-start gap-4">
                  <span className="text-orange-400">&gt;</span>
                  <span className="text-gray-300">pitch_video: optional_but_recommended</span>
                </div>
                <div className="flex items-start gap-4">
                  <span className="text-red-400">&gt;</span>
                  <span className="text-gray-300">communication_protocol: discord_exclusive</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Prizes Terminal */}
        <div className="mb-32">
          <div className="glass-morphism-strong p-10 border border-yellow-500/40">
            <div className="flex items-center gap-6 mb-12">
              <div className="p-4 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-xl shadow-lg shadow-yellow-500/50">
                <Trophy size={40} className="text-white" />
              </div>
              <h3 className="text-4xl font-bold font-mono text-yellow-400">
                rewards_system.json
              </h3>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* All Participants */}
              <div className="bg-gradient-to-br from-green-900/50 to-emerald-900/50 rounded-xl p-8 border border-green-500/40 transform hover:scale-110 transition-all duration-500 interactive-glow shadow-xl shadow-green-500/20">
                <div className="flex items-center gap-4 mb-6">
                  <Gift className="text-green-400" size={32} />
                  <h4 className="text-xl font-bold font-mono text-green-400">all_participants</h4>
                </div>
                <div className="font-mono text-sm text-gray-300 space-y-2">
                  <div><span className="text-green-400">certificate:</span> participation_verified</div>
                  <div><span className="text-green-400">issuer:</span> QuantumGrid_Official</div>
                </div>
              </div>
              
              {/* Top 3 Winners */}
              <div className="bg-gradient-to-br from-yellow-900/50 to-orange-900/50 rounded-xl p-8 border border-yellow-500/40 transform hover:scale-110 transition-all duration-500 interactive-orange-glow shadow-xl shadow-yellow-500/20">
                <div className="flex items-center gap-4 mb-6">
                  <Award className="text-yellow-400" size={32} />
                  <h4 className="text-xl font-bold font-mono text-yellow-400">top_3_winners</h4>
                </div>
                <div className="font-mono text-sm text-gray-300 space-y-2">
                  <div><span className="text-yellow-400">certificates:</span> winner_status</div>
                  <div><span className="text-orange-400">feedback:</span> personalized_review</div>
                  <div><span className="text-yellow-400">recommendation:</span> letter_of_rec</div>
                </div>
              </div>
              
              {/* 1st Place Exclusive */}
              <div className="bg-gradient-to-br from-red-900/50 to-pink-900/50 rounded-xl p-8 border border-red-500/40 transform hover:scale-110 transition-all duration-500 interactive-red-glow shadow-xl shadow-red-500/20">
                <div className="flex items-center gap-4 mb-6">
                  <Star className="text-red-400" size={32} />
                  <h4 className="text-xl font-bold font-mono text-red-400">champion_tier</h4>
                </div>
                <div className="font-mono text-sm text-gray-300 space-y-2">
                  <div><span className="text-red-400">certificate:</span> recognition_award</div>
                  <div><span className="text-pink-400">interview:</span> scheduled_if_agreed</div>
                  <div><span className="text-red-400">recommendation:</span> letter_provided</div>
                  <div><span className="text-red-400">status:</span> hall_of_fame</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Arsenal Available */}
        <div className="mb-32">
          <div className="glass-morphism-strong p-10 border border-cyan-500/40">
            <div className="flex items-center gap-6 mb-12">
              <div className="p-4 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-xl shadow-lg shadow-cyan-500/50">
                <Code size={40} className="text-white" />
              </div>
              <h3 className="text-4xl font-bold font-mono text-cyan-400">
                tech_arsenal.config
              </h3>
            </div>
            
            <div className="grid md:grid-cols-2 gap-10">
              <div className="glass-morphism p-8 border border-cyan-500/40 hover:border-blue-500/60 transition-all duration-500 shadow-xl shadow-cyan-500/10">
                <h4 className="text-2xl font-bold font-mono text-cyan-400 mb-6">unlimited_access.granted</h4>
                <div className="font-mono text-base text-gray-300 space-y-3">
                  <div><span className="text-cyan-400">platforms:</span> any_code || no_code</div>
                  <div><span className="text-blue-400">apis:</span> ai_integrations.enabled</div>
                  <div><span className="text-cyan-400">frameworks:</span> web_builders.all</div>
                  <div><span className="text-blue-400">mobile:</span> app_dev_tools.available</div>
                  <div><span className="text-cyan-400">design:</span> prototyping_suite.active</div>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-purple-900/50 to-pink-900/50 rounded-xl p-8 border border-purple-500/40 flex items-center justify-center shadow-xl shadow-purple-500/20">
                <div className="text-center">
                  <Sparkles className="text-pink-400 mx-auto mb-6" size={64} />
                  <p className="text-3xl font-bold font-mono bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                    just.make.it.innovative()
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Terminal Exit */}
        <div className="text-center">
          <a
            href="/#competitions"
            className="group inline-flex items-center gap-6 px-12 py-6 glass-morphism text-white font-mono font-bold text-xl rounded-xl hover:scale-110 transition-all duration-500 border border-red-500/60 hover:border-orange-500/60 interactive-red-glow shadow-2xl shadow-red-500/20"
            style={{ transform: 'perspective(1000px) rotateX(5deg)' }}
          >
            <ChevronRight size={24} className="rotate-180 group-hover:-translate-x-3 transition-transform duration-500" />
            <span>cd ../home && exit</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default CodeCrush2025;
