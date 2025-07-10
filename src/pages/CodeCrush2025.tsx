
import React, { useState, useEffect } from 'react';
import { Calendar, Users, Trophy, Mail, MessageCircle, Code, Zap, Gift, Target, Clock, ChevronRight, Sparkles, Award, FileText, Video, Star } from 'lucide-react';

const CodeCrush2025 = () => {
  const [activeTimelineItem, setActiveTimelineItem] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setActiveTimelineItem((prev) => (prev + 1) % 5);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const timelineData = [
    { 
      date: 'July 23', 
      event: 'Deadline to submit the form',
      icon: <Mail className="w-5 h-5" />,
      color: 'from-cyan-500 to-blue-500',
      status: 'upcoming'
    },
    { 
      date: 'July 25', 
      event: 'Discord Server Link Released by email',
      icon: <MessageCircle className="w-5 h-5" />,
      color: 'from-blue-500 to-purple-500',
      status: 'upcoming'
    },
    { 
      date: 'July 30', 
      event: 'Hackathon Starts (8:00 PM IST)',
      icon: <Zap className="w-5 h-5" />,
      color: 'from-purple-500 to-pink-500',
      status: 'upcoming'
    },
    { 
      date: 'Aug 1', 
      event: 'Hackathon Ends - Submission Deadline (8:00 PM IST)',
      icon: <Clock className="w-5 h-5" />,
      color: 'from-pink-500 to-red-500',
      status: 'upcoming'
    },
    { 
      date: 'Aug 15', 
      event: 'Winners + Feedback Announced (via email)',
      icon: <Trophy className="w-5 h-5" />,
      color: 'from-red-500 to-orange-500',
      status: 'upcoming'
    }
  ];

  const handleRegister = () => {
    window.open('https://forms.google.com', '_blank');
  };

  const handleDiscordLink = () => {
    alert('Discord link will be released on July 25, 2025');
  };

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden relative">
      {/* 3D Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Animated Grid */}
        <div className="absolute inset-0 opacity-20">
          <div 
            className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10 animate-pulse"
            style={{
              backgroundImage: `
                linear-gradient(rgba(0,255,255,0.1) 1px, transparent 1px),
                linear-gradient(90deg, rgba(0,255,255,0.1) 1px, transparent 1px)
              `,
              backgroundSize: '50px 50px'
            }}
          />
        </div>

        {/* Floating 3D Elements */}
        <div className="absolute top-20 left-20 w-32 h-32 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-3xl transform rotate-45 animate-float blur-sm" />
        <div className="absolute top-40 right-32 w-24 h-24 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-2xl transform -rotate-12 animate-float-delayed blur-sm" />
        <div className="absolute bottom-32 left-40 w-40 h-40 bg-gradient-to-br from-pink-500/20 to-red-500/20 rounded-full animate-morph blur-sm" />
        
        {/* Interactive Cursor Glow */}
        <div 
          className="absolute w-96 h-96 bg-gradient-radial from-cyan-500/20 via-purple-500/10 to-transparent rounded-full blur-3xl pointer-events-none transition-all duration-300"
          style={{
            left: mousePosition.x - 192,
            top: mousePosition.y - 192,
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-12">
        {/* Hero Section */}
        <div className={`text-center mb-20 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="relative inline-block mb-8">
            {/* 3D Title Effect */}
            <h1 className="text-8xl md:text-9xl font-black mb-6 relative">
              <span className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent blur-sm">
                CodeCrush 2025
              </span>
              <span className="relative bg-gradient-to-r from-cyan-300 via-purple-300 to-pink-300 bg-clip-text text-transparent">
                CodeCrush 2025
              </span>
              <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500/20 via-purple-500/20 to-pink-500/20 rounded-2xl blur-xl animate-pulse" />
            </h1>
            
            {/* Floating Icons */}
            <div className="absolute -top-8 -left-8 text-4xl animate-float">🔥</div>
            <div className="absolute -top-4 -right-12 text-3xl animate-float-delayed">⚡</div>
            <div className="absolute -bottom-4 left-4 text-3xl animate-bounce">💻</div>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent mb-8">
            Fall in Love with Code
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            A revolutionary 48-hour online global hackathon powered by The QuantumGrid, 
            where innovation meets creativity in the digital realm.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center mb-24">
          <button
            onClick={handleRegister}
            className="group relative px-10 py-5 bg-gradient-to-r from-cyan-600 via-purple-600 to-pink-600 text-white font-bold rounded-2xl hover:scale-105 transition-all duration-300 overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
            <div className="relative z-10 flex items-center gap-3">
              <Mail size={24} />
              <span>🚀 Register Now (Google Form)</span>
            </div>
          </button>
          
          <button
            onClick={handleDiscordLink}
            className="group relative px-10 py-5 border-2 border-cyan-500/50 bg-black/50 backdrop-blur-xl text-cyan-300 font-bold rounded-2xl hover:scale-105 transition-all duration-300 overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="relative z-10 flex items-center gap-3">
              <MessageCircle size={24} />
              <span>🔗 Discord Link → July 25, 2025</span>
            </div>
          </button>
        </div>

        {/* What is CodeCrush - 3D Card */}
        <div className="mb-24">
          <div className="group relative bg-gradient-to-br from-gray-900/80 via-gray-800/80 to-gray-900/80 backdrop-blur-xl rounded-3xl p-8 border border-cyan-500/30 hover:border-purple-500/50 transition-all duration-500 transform hover:scale-[1.02]">
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-purple-500/5 to-pink-500/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            <h3 className="text-4xl font-bold mb-6 flex items-center gap-4">
              <div className="p-3 bg-gradient-to-br from-cyan-500 to-purple-500 rounded-xl">
                <Target size={32} className="text-white" />
              </div>
              <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                What is CodeCrush?
              </span>
            </h3>
            
            <p className="text-lg text-gray-300 leading-relaxed">
              An electrifying 48-hour digital battleground where innovation meets code. 
              Challenge yourself solo or unite with teammates to create groundbreaking solutions 
              around the theme <span className="text-cyan-400 font-semibold">"Innovating Human Experience Through Tech"</span>. 
              This isn't just a hackathon—it's your gateway to the future.
            </p>
          </div>
        </div>

        {/* Interactive 3D Timeline */}
        <div className="mb-24">
          <div className="bg-gradient-to-br from-gray-900/90 via-gray-800/90 to-gray-900/90 backdrop-blur-xl rounded-3xl p-8 border border-cyan-500/30">
            <h3 className="text-4xl font-bold mb-8 flex items-center gap-4">
              <div className="p-3 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl">
                <Calendar size={32} className="text-white" />
              </div>
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Event Timeline
              </span>
            </h3>
            
            <div className="relative">
              {/* 3D Timeline Line */}
              <div className="absolute left-12 top-0 w-1 h-full">
                <div className="absolute inset-0 bg-gradient-to-b from-cyan-500 via-purple-500 to-pink-500 rounded-full" />
                <div className="absolute inset-0 bg-gradient-to-b from-cyan-400 via-purple-400 to-pink-400 rounded-full animate-pulse blur-sm" />
              </div>

              <div className="space-y-8">
                {timelineData.map((item, index) => (
                  <div
                    key={index}
                    className={`flex items-center gap-8 transition-all duration-500 cursor-pointer group ${
                      index === activeTimelineItem ? 'scale-105' : 'hover:scale-102'
                    }`}
                    onClick={() => setActiveTimelineItem(index)}
                  >
                    {/* 3D Timeline Node */}
                    <div className={`relative w-24 h-24 rounded-2xl flex items-center justify-center transition-all duration-500 ${
                      index === activeTimelineItem 
                        ? `bg-gradient-to-br ${item.color} shadow-2xl shadow-purple-500/50` 
                        : 'bg-gray-800/80 group-hover:bg-gray-700/80 border border-gray-600'
                    }`}>
                      <div className={`relative z-10 text-White transition-all duration-500 ${
                        index === activeTimelineItem ? 'scale-125' : ''
                      }`}>
                        {item.icon}
                      </div>
                      {index === activeTimelineItem && (
                        <div className="absolute inset-0 rounded-2xl border-2 border-white/30 animate-ping" />
                      )}
                      <div className="absolute -inset-2 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>

                    {/* Timeline Content */}
                    <div className="flex-1 bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50 group-hover:border-cyan-500/50 transition-all duration-300">
                      <div className="flex items-center justify-between">
                        <div>
                          <h4 className={`font-bold text-2xl mb-2 transition-colors duration-300 ${
                            index === activeTimelineItem ? 'text-cyan-400' : 'text-white'
                          }`}>
                            {item.date}
                          </h4>
                          <p className="text-gray-300 text-lg">{item.event}</p>
                        </div>
                        <ChevronRight 
                          size={24} 
                          className={`text-cyan-400 transition-all duration-300 ${
                            index === activeTimelineItem ? 'translate-x-2 text-purple-400' : 'group-hover:translate-x-1'
                          }`} 
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* How It Works - 3D Cards */}
        <div className="mb-24">
          <div className="bg-gradient-to-br from-gray-900/90 via-gray-800/90 to-gray-900/90 backdrop-blur-xl rounded-3xl p-8 border border-purple-500/30">
            <h3 className="text-4xl font-bold mb-8 flex items-center gap-4">
              <div className="p-3 bg-gradient-to-br from-pink-500 to-red-500 rounded-xl">
                <Code size={32} className="text-white" />
              </div>
              <span className="bg-gradient-to-r from-pink-400 to-red-400 bg-clip-text text-transparent">
                Mission Briefing
              </span>
            </h3>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gray-800/50 rounded-2xl p-6 border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-300 transform hover:scale-105">
                <div className="flex items-center gap-3 mb-4">
                  <Zap className="text-yellow-400" size={24} />
                  <h4 className="text-xl font-bold text-cyan-400">Phase 1: Deployment</h4>
                </div>
                <p className="text-gray-300">
                  On July 30 at 8 PM IST, all participants receive the classified mission briefing 
                  with detailed objectives based on our core theme.
                </p>
              </div>
              
              <div className="bg-gray-800/50 rounded-2xl p-6 border border-gray-700/50 hover:border-purple-500/50 transition-all duration-300 transform hover:scale-105">
                <div className="flex items-center gap-3 mb-4">
                  <Clock className="text-purple-400" size={24} />
                  <h4 className="text-xl font-bold text-purple-400">Phase 2: Execution</h4>
                </div>
                <p className="text-gray-300">
                  48 hours to build, innovate, and create your solution. 
                  Time to turn your vision into reality.
                </p>
              </div>
            </div>
            
            <div className="mt-8 bg-gradient-to-r from-gray-800/80 to-gray-900/80 rounded-2xl p-6 border border-pink-500/30">
              <h4 className="text-xl font-bold text-pink-400 mb-4">Submission Requirements:</h4>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start gap-3">
                  <span className="text-cyan-400 mt-1">▶</span>
                  Working prototype (hosted or zipped)
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-purple-400 mt-1">▶</span>
                  Optional: Pitch video explaining your innovation
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-pink-400 mt-1">▶</span>
                  All communications via Discord exclusively
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Enhanced Prizes Section */}
        <div className="mb-24">
          <div className="bg-gradient-to-br from-yellow-900/30 via-orange-900/30 to-red-900/30 backdrop-blur-xl rounded-3xl p-8 border border-yellow-500/30">
            <h3 className="text-4xl font-bold mb-8 flex items-center gap-4">
              <div className="p-3 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-xl">
                <Trophy size={32} className="text-white" />
              </div>
              <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
                Victory Rewards
              </span>
            </h3>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* For Everyone */}
              <div className="bg-gradient-to-br from-green-900/40 to-emerald-900/40 rounded-2xl p-6 border border-green-500/30 transform hover:scale-105 transition-all duration-300">
                <div className="flex items-center gap-3 mb-4">
                  <Gift className="text-green-400" size={24} />
                  <h4 className="text-xl font-bold text-green-400">All Participants</h4>
                </div>
                <p className="text-gray-300">🏅 Participation Certificate by The QuantumGrid</p>
              </div>
              
              {/* Top 3 Winners */}
              <div className="bg-gradient-to-br from-yellow-900/40 to-orange-900/40 rounded-2xl p-6 border border-yellow-500/30 transform hover:scale-105 transition-all duration-300">
                <div className="flex items-center gap-3 mb-4">
                  <Award className="text-yellow-400" size={24} />
                  <h4 className="text-xl font-bold text-yellow-400">Top 3 Winners</h4>
                </div>
                <ul className="space-y-2 text-gray-300">
                  <li>🥇 Winner Certificates</li>
                  <li>🧠 Personalized project feedback</li>
                  <li>📄 Letter of Recommendation</li>
                </ul>
              </div>
              
              {/* 1st Place Special */}
              <div className="bg-gradient-to-br from-purple-900/40 to-pink-900/40 rounded-2xl p-6 border border-purple-500/30 transform hover:scale-105 transition-all duration-300">
                <div className="flex items-center gap-3 mb-4">
                  <Star className="text-purple-400" size={24} />
                  <h4 className="text-xl font-bold text-purple-400">1st Place Exclusive</h4>
                </div>
                <ul className="space-y-2 text-gray-300">
                  <li>🏆 Recognition Certificate</li>
                  <li>🎯 Scheduled Interview (if agreed)</li>
                  <li>⭐ Special Recognition</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Tools Section */}
        <div className="mb-24">
          <div className="bg-gradient-to-br from-gray-900/90 via-gray-800/90 to-gray-900/90 backdrop-blur-xl rounded-3xl p-8 border border-cyan-500/30">
            <h3 className="text-4xl font-bold mb-8 flex items-center gap-4">
              <div className="p-3 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-xl">
                <Code size={32} className="text-white" />
              </div>
              <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                Arsenal Available
              </span>
            </h3>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gray-800/50 rounded-2xl p-6 border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-300">
                <h4 className="text-xl font-bold text-cyan-400 mb-3">Unlimited Access</h4>
                <ul className="space-y-2 text-gray-300">
                  <li>• Any code/no-code platform</li>
                  <li>• AI APIs and integrations</li>
                  <li>• Web builders & frameworks</li>
                  <li>• Mobile app development tools</li>
                  <li>• Design and prototyping tools</li>
                </ul>
              </div>
              
              <div className="bg-gradient-to-br from-purple-900/40 to-pink-900/40 rounded-2xl p-6 border border-purple-500/30 flex items-center justify-center">
                <div className="text-center">
                  <Sparkles className="text-pink-400 mx-auto mb-4" size={48} />
                  <p className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                    Just Make It Innovative
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Back to Home */}
        <div className="text-center">
          <a
            href="/#competitions"
            className="group inline-flex items-center gap-4 px-10 py-5 bg-gradient-to-r from-gray-800/80 to-gray-900/80 backdrop-blur-xl text-white font-bold rounded-2xl hover:scale-105 transition-all duration-300 border border-gray-700/50 hover:border-cyan-500/50"
          >
            <ChevronRight size={24} className="rotate-180 group-hover:-translate-x-2 transition-transform" />
            <span>Return to Base</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default CodeCrush2025;
