
import React from 'react';
import { FileText, TrendingUp, Users } from 'lucide-react';

const About = () => {
  const roadmapItems = [
    { phase: "Phase 1", title: "Launch & Memes", status: "completed", date: "Q1 2024" },
    { phase: "Phase 2", title: "Community Building", status: "completed", date: "Q2 2024" },
    { phase: "Phase 3", title: "Moon Mission", status: "current", date: "Q3 2024" },
    { phase: "Phase 4", title: "Beyond Universe", status: "upcoming", date: "Q4 2024" },
    { phase: "Phase 5", title: "Infinite Stonks", status: "upcoming", date: "∞" },
  ];

  return (
    <section id="about" className="py-20 px-4 relative">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent mb-4">
            About STNK
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            The most sophisticated meme coin technology ever created (not really, but we sound cool)
          </p>
        </div>

        {/* Satirical Whitepaper */}
        <div className="grid md:grid-cols-2 gap-12 mb-20">
          <div className="bg-gradient-to-br from-purple-900/20 to-black border border-purple-500/30 rounded-2xl p-8 hover:border-purple-400/50 transition-all duration-300">
            <div className="flex items-center mb-6">
              <FileText className="text-purple-400 mr-3" size={32} />
              <h3 className="text-2xl font-bold text-purple-400">Whitepaper 2.0</h3>
            </div>
            <div className="space-y-4 text-gray-300">
              <p className="text-lg font-semibold text-cyan-400">Executive Summary:</p>
              <p>STNK revolutionizes the concept of "going up" by implementing advanced meme technology that ensures our charts only know one direction: 📈</p>
              <p>Our proprietary "Diamond Hands Algorithm" prevents any selling, making every holder a winner (terms and conditions may apply in parallel universes).</p>
              <div className="mt-6">
                <button className="text-purple-400 hover:text-purple-300 underline">
                  Read Full Whitepaper →
                </button>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-cyan-900/20 to-black border border-cyan-500/30 rounded-2xl p-8 hover:border-cyan-400/50 transition-all duration-300">
            <div className="flex items-center mb-6">
              <Users className="text-cyan-400 mr-3" size={32} />
              <h3 className="text-2xl font-bold text-cyan-400">Community</h3>
            </div>
            <div className="space-y-4 text-gray-300">
              <p>Join thousands of apes who believe in the power of artificial scarcity and digital bragging rights.</p>
              <div className="grid grid-cols-2 gap-4 mt-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-400">69K+</div>
                  <div className="text-sm text-gray-400">Discord Members</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-400">420K+</div>
                  <div className="text-sm text-gray-400">Twitter Followers</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Roadmap */}
        <div className="bg-black/50 backdrop-blur-md border border-cyan-500/30 rounded-2xl p-8">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent mb-4">
              Roadmap to the Moon
            </h3>
            <p className="text-gray-400">Our scientifically proven path to inevitable success</p>
          </div>

          <div className="relative">
            {/* Roadmap Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-green-500 via-cyan-500 to-purple-500"></div>

            <div className="space-y-8">
              {roadmapItems.map((item, index) => (
                <div key={index} className="relative flex items-center">
                  <div className={`w-16 h-16 rounded-full border-4 flex items-center justify-center relative z-10 ${
                    item.status === 'completed' 
                      ? 'bg-green-500 border-green-400' 
                      : item.status === 'current'
                      ? 'bg-cyan-500 border-cyan-400 animate-pulse'
                      : 'bg-gray-700 border-gray-600'
                  }`}>
                    {item.status === 'completed' ? '✓' : item.status === 'current' ? '🚀' : '⏳'}
                  </div>
                  <div className="ml-8 flex-1">
                    <div className="bg-black/70 border border-gray-700 rounded-xl p-6 hover:border-cyan-500/50 transition-all duration-300">
                      <div className="flex justify-between items-center">
                        <div>
                          <h4 className="text-xl font-bold text-white mb-2">{item.phase}: {item.title}</h4>
                          <p className="text-gray-400">Scheduled for {item.date}</p>
                        </div>
                        <TrendingUp className={`${
                          item.status === 'completed' ? 'text-green-400' : 
                          item.status === 'current' ? 'text-cyan-400' : 'text-gray-500'
                        }`} size={24} />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
