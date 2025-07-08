
import React, { useState } from 'react';
import { Crown, Star, Users } from 'lucide-react';

const CouncilSection = () => {
  const [filter, setFilter] = useState('all');

  const councilMembers = {
    founders: [
      {
        name: 'Arnav',
        role: 'Founder',
        batch: '',
        avatar: 'https://i.ibb.co/NdvsVz7j/Whats-App-Image-2025-06-26-at-11-04-27-PM.jpg',
        bio: 'Visionary leader who started pHaze to revolutionize tech education'
      },
      {
        name: 'Anshdeep',
        role: 'Founder',
        batch: '',
        avatar: 'https://i.ibb.co/6JDVc2CR/503603127-17880705345343427-2343097195392687639-n.jpg',
        bio: 'Visionary leader who started pHaze to revolutionize tech education'
      },
    ],
    leadership: [
      {
        name: 'Arnav Thakur',
        role: 'Executive Head',
        batch: '2025-26',
        avatar: 'https://i.ibb.co/NdvsVz7j/Whats-App-Image-2025-06-26-at-11-04-27-PM.jpg',
        bio: 'Leading pHaze towards new horizons of innovation'
      },
      {
        name: 'Anshdeep',
        role: 'Executive Head',
        batch: '2025-26',
        avatar: 'https://i.ibb.co/6JDVc2CR/503603127-17880705345343427-2343097195392687639-n.jpg',
        bio: 'Strategic planner and innovation catalyst'
      }
    ],
    leads: [
      {
        name: 'Maya Patel',
        role: 'Tech Lead',
        batch: '2025-26',
        avatar: '',
        bio: 'Full-stack developer and architecture expert'
      },
      {
        name: 'James Wilson',
        role: 'Design Lead',
        batch: '2025-26',
        avatar: '',
        bio: 'UI/UX specialist crafting beautiful experiences'
      },

      {
        name: 'Ryan Thompson',
        role: 'Networking Lead',
        batch: '2026-27',
        avatar: '',
        bio: 'Building connections with industry and institutions'
      }
    ],
    core: [
      { name: 'Emma Rodriguez', role: 'Core Member', batch: '2026' },
      { name: 'Kai Nakamura', role: 'Core Member', batch: '2027' },
      { name: 'Olivia Singh', role: 'Core Member', batch: '2026' },
      { name: 'Marcus Johnson', role: 'Core Member', batch: '2027' },
      { name: 'Priya Sharma', role: 'Core Member', batch: '2026' },
      { name: 'Lucas Chen', role: 'Core Member', batch: '2027' }
    ],
    pseudo: [
      { name: 'Alice Cooper', role: 'Pseudo Member', batch: '2027' },
      { name: 'Tom Brady', role: 'Pseudo Member', batch: '2028' },
      { name: 'Nina Williams', role: 'Pseudo Member', batch: '2027' }
    ]
  };

  const getRoleIcon = (role: string) => {
    if (role.includes('Founder')) return <Crown className="text-yellow-400" size={20} />;
    if (role.includes('President') || role.includes('Executive')) return <Star className="text-teal-400" size={20} />;
    if (role.includes('Lead')) return <Star className="text-green-400" size={20} />;
    return <Users className="text-gray-400" size={16} />;
  };

  return (
    <section id="council" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent mb-4">
            Council 2025-26
          </h2>
          <p className="text-white/70 text-lg">
            Meet the amazing team driving pHaze forward
          </p>
        </div>

        {/* Filter */}
        <div className="flex justify-center mb-12">
          <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-full p-2">
            {['all', 'leadership', 'leads', 'core'].map((filterType) => (
              <button
                key={filterType}
                onClick={() => setFilter(filterType)}
                className={`px-4 py-2 rounded-full font-medium transition-all duration-300 capitalize ${
                  filter === filterType
                    ? 'bg-blue-500 text-white shadow-lg'
                    : 'text-white/70 hover:text-white'
                }`}
              >
                {filterType}
              </button>
            ))}
          </div>
        </div>

        {/* Founder */}
        {(filter === 'all' || filter === 'leadership') && (
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-yellow-400 mb-8 text-center">Founders</h3>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {councilMembers.founders.map((member, index) => (
                <div
                  key={member.name}
                  className="backdrop-blur-md bg-white/10 interactive-gold-glow group border border-white/20 rounded-2xl p-6 hover:bg-white/20 transition-all duration-500 transform hover:scale-105"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="text-center">
                    <div className="relative mb-4">
                      <img
                        src={member.avatar}
                        alt={member.name}
                        className="w-20 h-20 rounded-full mx-auto border-4 border-yellow-400/50"
                      />
                      <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2">
                        {getRoleIcon(member.role)}
                      </div>
                    </div>
                    <h4 className="text-lg font-bold text-white mb-1">{member.name}</h4>
                    <p className="text-yellow-400 font-medium mb-1">{member.role}</p>
                    <p className="text-white/60 text-sm mb-3">Founded pHaze in 2025 {member.batch}</p>
                    <p className="text-white/70 text-sm">{member.bio}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
        {/* Leadership */}
        {(filter === 'all' || filter === 'leadership') && (
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-teal-400 mb-8 text-center">Leadership</h3>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {councilMembers.leadership.map((member, index) => (
                <div
                  key={member.name}
                  className="backdrop-blur-md bg-white/10 interactive-blue-glow border border-white/20 rounded-2xl p-6 hover:bg-white/20 transition-all duration-500 transform hover:scale-105"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="text-center">
                    <div className="relative mb-4">
                      <img
                        src={member.avatar}
                        alt={member.name}
                        className="w-20 h-20 rounded-full mx-auto border-4 border-blue-400/50"
                      />
                      <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2">
                        {getRoleIcon(member.role)}
                      </div>
                    </div>
                    <h4 className="text-lg font-bold text-white mb-1">{member.name}</h4>
                    <p className="text-cyan-400 font-medium mb-1">{member.role}</p>
                    <p className="text-white/60 text-sm mb-3">Batch {member.batch}</p>
                    <p className="text-white/70 text-sm">{member.bio}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Leads */}
        {(filter === 'all' || filter === 'leads') && (
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-green-400 mb-8 text-center">Department Leads</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-20">
              {councilMembers.leads.map((member, index) => (
                <div
                  key={member.name}
                  className="backdrop-blur-md bg-white/5 border border-white/10 rounded-xl p-4 hover:bg-white/10 transition-all duration-500 transform hover:scale-105"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="text-center">
                    <div className="relative mb-3">
                      <img
                        src={member.avatar}
                        alt={member.name}
                        className="w-16 h-16 rounded-full mx-auto border-2 border-cyan-400/50"
                      />
                      <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2">
                        {getRoleIcon(member.role)}
                      </div>
                    </div>
                    <h4 className="text-md font-bold text-white mb-1">{member.name}</h4>
                    <p className="text-green-400 text-sm font-medium mb-1">{member.role}</p>
                    <p className="text-white/60 text-xs mb-2">Batch {member.batch}</p>
                    <p className="text-white/70 text-xs">{member.bio}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Core Members */}
        {(filter === 'all' || filter === 'core') && (
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-green-400 mb-8 text-center">Core Members</h3>
            <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-4">
              {councilMembers.core.map((member, index) => (
                <div
                  key={member.name}
                  className="backdrop-blur-md bg-white/5 border border-white/10 rounded-lg p-3 hover:bg-white/10 transition-all duration-300 text-center"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-gray-400 to-gray-600 rounded-full mx-auto mb-2 flex items-center justify-center">
                    <span className="text-white font-bold text-sm">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <h4 className="text-sm font-medium text-white mb-1">{member.name}</h4>
                  <p className="text-white/60 text-xs">Batch {member.batch}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Pseudo Members */}
        {filter === 'all' && (
          <div>
            <h3 className="text-2xl font-bold text-gray-400 mb-8 text-center">Pseudo Members</h3>
            <div className="grid md:grid-cols-3 gap-4 max-w-2xl mx-auto">
              {councilMembers.pseudo.map((member, index) => (
                <div
                  key={member.name}
                  className="backdrop-blur-md bg-white/5 border border-white/10 rounded-lg p-3 hover:bg-white/10 transition-all duration-300 text-center opacity-70"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="w-10 h-10 bg-gradient-to-br from-gray-500 to-gray-700 rounded-full mx-auto mb-2 flex items-center justify-center">
                    <span className="text-white font-bold text-xs">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <h4 className="text-sm font-medium text-white mb-1">{member.name}</h4>
                  <p className="text-gray-400 text-xs mb-1">{member.role}</p>
                  <p className="text-white/40 text-xs">Batch {member.batch}</p>
                  <span className="text-xs text-red-400">No powers</span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default CouncilSection;
