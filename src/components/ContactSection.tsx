
import React, { useState } from 'react';
import { Mail, Github, Instagram, Send } from 'lucide-react';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    competitionShare: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = formData.subject || 'Contact from QuantumGrid Website';
    const body = `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}\n\n${formData.competitionShare ? `Competition to Share:\n${formData.competitionShare}` : ''}`;
    window.location.href = `mailto:contact@quantumgrid.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <section id="contact" className="py-20 relative overflow-hidden">
      {/* Animated floating orb - updated to red colors */}
      <div className="absolute top-1/4 right-1/4 w-32 h-32 bg-red-500/20 rounded-full blur-xl animate-bounce"></div>
      <div className="absolute bottom-1/4 left-1/4 w-24 h-24 bg-orange-500/20 rounded-full blur-xl animate-pulse"></div>

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent mb-4">
            Get In Touch
          </h2>
          <p className="text-white/70 text-lg">
            Ready to join the QuantumGrid community? Let's connect!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="backdrop-blur-md bg-white/5 border border-white/10 rounded-2xl p-8">
            <form onSubmit={handleSubmit} className="space-y-6 ">
              <div>
                <label className="block text-white/80 mb-2 font-medium ">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full bg-white/10 border border-white/20 rounded-[20px] px-4 py-3 text-white placeholder-white/50 focus:border-red-400 focus:outline-none transition-colors"
                  placeholder="Your name"
                  required
                />
              </div>

              <div>
                <label className="block text-white/80 mb-2 font-medium">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full bg-white/10 border border-white/20 rounded-[20px] px-4 py-3 text-white placeholder-white/50 focus:border-red-400 focus:outline-none transition-colors"
                  placeholder="your.email@example.com"
                  required
                />
              </div>

              <div>
                <label className="block text-white/80 mb-2 font-medium">Subject</label>
                <select
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  className="w-full bg-white/10 border border-white/20 rounded-[20px] px-4 py-3 text-white focus:border-red-400 focus:outline-none transition-colors"
                >
                  <option value="" className='text-black'>Select a subject</option>
                  <option value="General Inquiry" className='text-black'>General Inquiry</option>
                  <option value="Competition Submission" className='text-black'>Competition Submission</option>
                  <option value="Collaboration" className='text-black'>Collaboration</option>
                  <option value="Membership Application" className='text-black'>Membership Application</option>
                </select>
              </div>

              <div>
                <label className="block text-white/80 mb-2 font-medium">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={4}
                  className="w-full bg-white/10 border border-white/20 rounded-[20px] px-4 py-3 text-white placeholder-white/50 focus:border-red-400 focus:outline-none transition-colors resize-none"
                  placeholder="Tell us what's on your mind..."
                  required
                />
              </div>

              <div>
                <label className="block text-white/80 mb-2 font-medium">Got a competition idea? (Optional)</label>
                <textarea
                  name="competitionShare"
                  value={formData.competitionShare}
                  onChange={handleInputChange}
                  rows={3}
                  className="w-full bg-white/10 border border-white/20 rounded-[20px] px-4 py-3 text-white placeholder-white/50 focus:border-red-400 focus:outline-none transition-colors resize-none"
                  placeholder="Share details about a competition you'd like us to feature..."
                />
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-red-500 to-orange-500 text-white font-semibold py-3 rounded-full hover:shadow-lg hover:shadow-red-500/25 transition-all duration-300 transform hover:scale-105"
              >
                <Send size={20} />
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Info & Socials */}
          <div className="space-y-8">
            <div className="backdrop-blur-md bg-white/5 border border-white/10 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-orange-400 mb-6">Connect With Us</h3>
              
              <div className="space-y-4">
                <a
                  href="mailto:contact@quantumgrid.com"
                  className="flex items-center gap-4 text-white/80 hover:text-orange-400 transition-colors group"
                >
                  <div className="p-3 bg-red-500/20 rounded-lg group-hover:bg-red-500/30 transition-colors">
                    <Mail size={20} />
                  </div>
                  <div>
                    <p className="font-medium">Email</p>
                    <p className="text-sm text-white/60">new info soon...</p>
                  </div>
                </a>

                <a
                  href="https://instagram.com/quantumgrid"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 text-white/80 hover:text-red-400 transition-colors group"
                >
                  <div className="p-3 bg-red-500/20 rounded-lg group-hover:bg-red-500/30 transition-colors">
                    <Instagram size={20} />
                  </div>
                  <div>
                    <p className="font-medium">Instagram</p>
                    <p className="text-sm text-white/60">coming soon...</p>
                  </div>
                </a>

                <a
                  href="https://github.com/quantumgrid"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 text-white/80 hover:text-gray-300 transition-colors group"
                >
                  <div className="p-3 bg-gray-500/20 rounded-lg group-hover:bg-gray-500/30 transition-colors">
                    <Github size={20} />
                  </div>
                  <div>
                    <p className="font-medium">GitHub</p>
                    <p className="text-sm text-white/60">coming soon...</p>
                  </div>
                </a>
              </div>
            </div>

            <div className="backdrop-blur-md bg-white/5 border border-white/10 rounded-2xl p-8">
              <h3 className="text-xl font-bold text-orange-400 mb-4">Apply as Member</h3>
              <p className="text-white/70 mb-4">
                Recruitment windows open periodically. Join our community of tech enthusiasts!
              </p>
              <button
                onClick={() => window.location.href = 'mailto:recruitment@quantumgrid.com?subject=Membership Application'}
                className="w-full bg-gradient-to-r from-red-500 to-orange-500 text-white font-medium py-3 rounded-full hover:shadow-lg hover:shadow-red-500/25 transition-all duration-300"
              >
                Apply for Membership
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
