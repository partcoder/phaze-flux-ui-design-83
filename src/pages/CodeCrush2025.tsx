
import React from 'react';
import { Calendar, Users, Trophy, Mail, MessageCircle, Code, Zap, Gift, Target, Clock } from 'lucide-react';

const CodeCrush2025 = () => {
  const timelineData = [
    { date: 'July 23', event: 'Deadline to submit the form' },
    { date: 'July 25', event: 'Discord Server Link Released by email' },
    { date: 'July 30', event: 'Hackathon Starts (8:00 PM IST)' },
    { date: 'Aug 1', event: 'Submission Deadline (8:00 PM IST)' },
    { date: 'Aug 6', event: 'Winners + Feedback Announced' }
  ];

  const handleRegister = () => {
    window.open('https://forms.google.com', '_blank');
  };

  const handleDiscordLink = () => {
    alert('Discord link will be released on July 25, 2025');
  };

  return (
    <div className="min-h-screen text-white overflow-x-hidden">
      {/* Tech background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-red-900/10 rounded-full blur-3xl animate-morph"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-red-800/8 rounded-full blur-3xl animate-morph" style={{ animationDelay: '3s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-red-950/5 rounded-full blur-3xl animate-breathe"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-20">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-6xl md:text-7xl font-bold bg-gradient-to-r from-red-400 to-red-300 bg-clip-text text-transparent mb-4 tech-border circuit-lines">
            🔥 CodeCrush 2025
          </h1>
          <h2 className="text-3xl md:text-4xl font-bold text-red-100 mb-6">
            Fall in Love with Code
          </h2>
          <p className="text-xl text-red-100/80 max-w-3xl mx-auto">
            An online global hackathon powered by The QuantumGrid, where creativity meets code.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center mb-20">
          <button
            onClick={handleRegister}
            className="px-8 py-4 bg-gradient-to-r from-red-600 to-red-500 text-white font-semibold rounded-full hover:scale-105 transition-all duration-300 tech-border circuit-lines flex items-center justify-center gap-3"
          >
            <Mail size={20} />
            📝 Register Now (Google Form)
          </button>
          <button
            onClick={handleDiscordLink}
            className="px-8 py-4 glass-morphism-strong text-red-100 font-semibold rounded-full hover:scale-105 transition-all duration-300 tech-border circuit-lines flex items-center justify-center gap-3"
          >
            <MessageCircle size={20} />
            🔗 Discord Link → Releases July 25, 2025
          </button>
        </div>

        {/* What is CodeCrush? */}
        <div className="glass-morphism-strong p-8 rounded-2xl mb-12 tech-border circuit-lines">
          <h3 className="text-3xl font-bold text-red-300 mb-6 flex items-center gap-3">
            <Target size={28} />
            💭 What is CodeCrush?
          </h3>
          <p className="text-red-100/80 text-lg leading-relaxed">
            An online 48-hour challenge where you create something impactful around the theme "Innovating Human Experience Through Tech." Solo or with a team, this is your playground to build, design, and pitch something the world needs.
          </p>
        </div>

        {/* Event Timeline */}
        <div className="glass-morphism-strong p-8 rounded-2xl mb-12 tech-border circuit-lines">
          <h3 className="text-3xl font-bold text-red-300 mb-8 flex items-center gap-3">
            <Calendar size={28} />
            🗓️ Event Timeline
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-red-500/30">
                  <th className="text-left py-3 px-4 text-red-400 font-semibold">Date</th>
                  <th className="text-left py-3 px-4 text-red-400 font-semibold">Event</th>
                </tr>
              </thead>
              <tbody>
                {timelineData.map((item, index) => (
                  <tr key={index} className="border-b border-red-500/20">
                    <td className="py-3 px-4 text-red-300 font-medium">{item.date}</td>
                    <td className="py-3 px-4 text-red-100/80">{item.event}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* How It Works */}
        <div className="glass-morphism-strong p-8 rounded-2xl mb-12 tech-border circuit-lines">
          <h3 className="text-3xl font-bold text-red-300 mb-6 flex items-center gap-3">
            <Code size={28} />
            🧠 How It Works
          </h3>
          <div className="space-y-6">
            <p className="text-red-100/80 text-lg">
              On July 30 at 8 PM IST, all participants will receive the same detailed prompt, based on the core theme.
            </p>
            <p className="text-red-100/80 text-lg">
              You'll have exactly 48 hours to:
            </p>
            <ul className="space-y-3 ml-6">
              <li className="text-red-100/80 flex items-start gap-2">
                <span className="text-red-400 mt-1">•</span>
                Build a solution based on the prompt (brief: ~200 words)
              </li>
              <li className="text-red-100/80 flex items-start gap-2">
                <span className="text-red-400 mt-1">•</span>
                Develop a working prototype
              </li>
              <li className="text-red-100/80 flex items-start gap-2">
                <span className="text-red-400 mt-1">•</span>
                Submit:
                <ul className="ml-4 mt-2 space-y-1">
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 mt-1">◦</span>
                    Final prototype (hosted or zipped)
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 mt-1">◦</span>
                    (Optional) A short pitch video explaining your project
                  </li>
                </ul>
              </li>
            </ul>
            <p className="text-red-100/80 text-lg font-medium">
              All details will be shared exclusively via Discord.
            </p>
          </div>
        </div>

        {/* Prizes */}
        <div className="glass-morphism-strong p-8 rounded-2xl mb-12 tech-border circuit-lines">
          <h3 className="text-3xl font-bold text-red-300 mb-6 flex items-center gap-3">
            <Trophy size={28} />
            🏆 Prizes
          </h3>
          <div className="space-y-4">
            <div className="flex items-center gap-3 text-red-100/80">
              <Gift size={20} className="text-red-400" />
              🏅 Participation Certificate by The QuantumGrid
            </div>
            <div className="flex items-center gap-3 text-red-100/80">
              <Trophy size={20} className="text-red-400" />
              🥇 Winner Certificates for Top 3
            </div>
            <div className="flex items-center gap-3 text-red-100/80">
              <Zap size={20} className="text-red-400" />
              🧠 Personalized project feedback for Top 3
            </div>
          </div>
        </div>

        {/* Registration */}
        <div className="glass-morphism-strong p-8 rounded-2xl mb-12 tech-border circuit-lines">
          <h3 className="text-3xl font-bold text-red-300 mb-6 flex items-center gap-3">
            <Mail size={28} />
            📥 Registration
          </h3>
          <button
            onClick={handleRegister}
            className="px-8 py-4 bg-gradient-to-r from-red-600 to-red-500 text-white font-semibold rounded-full hover:scale-105 transition-all duration-300 tech-border circuit-lines flex items-center gap-3"
          >
            <Mail size={20} />
            📌 Click Here to Register (Google Form)
          </button>
        </div>

        {/* Discord Access */}
        <div className="glass-morphism-strong p-8 rounded-2xl mb-12 tech-border circuit-lines">
          <h3 className="text-3xl font-bold text-red-300 mb-6 flex items-center gap-3">
            <MessageCircle size={28} />
            💬 Discord Access
          </h3>
          <div className="space-y-4">
            <p className="text-red-100/80 text-lg">
              The official CodeCrush 2025 Discord Server goes live on July 25, 2025
            </p>
            <p className="text-red-100/80">Link will be:</p>
            <ul className="space-y-2 ml-6">
              <li className="text-red-100/80 flex items-start gap-2">
                <span className="text-red-400 mt-1">•</span>
                Posted on this site
              </li>
              <li className="text-red-100/80 flex items-start gap-2">
                <span className="text-red-400 mt-1">•</span>
                Sent via email to all registered participants
              </li>
            </ul>
          </div>
        </div>

        {/* Allowed Tools */}
        <div className="glass-morphism-strong p-8 rounded-2xl mb-12 tech-border circuit-lines">
          <h3 className="text-3xl font-bold text-red-300 mb-6 flex items-center gap-3">
            <Code size={28} />
            ⚙️ Allowed Tools
          </h3>
          <div className="space-y-4">
            <div className="flex items-center gap-3 text-red-100/80">
              <span className="text-red-400">•</span>
              Any code/no-code platform
            </div>
            <div className="flex items-center gap-3 text-red-100/80">
              <span className="text-red-400">•</span>
              Use of AI APIs, web builders, mobile app frameworks, design tools etc.
            </div>
            <p className="text-red-300 font-semibold text-lg">
              Just make it innovative.
            </p>
          </div>
        </div>

        {/* Back to competitions */}
        <div className="text-center">
          <a
            href="/#competitions"
            className="inline-block px-8 py-4 glass-morphism-strong text-red-100 font-semibold rounded-full hover:scale-105 transition-all duration-300 tech-border circuit-lines"
          >
            ← Back to Competitions
          </a>
        </div>
      </div>
    </div>
  );
};

export default CodeCrush2025;
