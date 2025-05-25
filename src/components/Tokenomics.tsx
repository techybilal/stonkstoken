
import React from 'react';
import { PieChart, Lock, Users, Rocket } from 'lucide-react';

const Tokenomics = () => {
  const tokenomicsData = [
    { label: 'Community Rewards', percentage: 40, color: 'from-green-400 to-green-600', icon: Users },
    { label: 'Liquidity Pool', percentage: 30, color: 'from-cyan-400 to-cyan-600', icon: Lock },
    { label: 'Development', percentage: 20, color: 'from-purple-400 to-purple-600', icon: Rocket },
    { label: 'Marketing', percentage: 10, color: 'from-pink-400 to-pink-600', icon: PieChart },
  ];

  return (
    <section id="tokenomics" className="py-20 px-4 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/3 left-1/5 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/3 right-1/5 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-green-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent mb-4">
            Tokenomics
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Revolutionary distribution model that guarantees everyone wins (in a parallel universe)
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Holographic Pie Chart */}
          <div className="relative">
            <div className="w-80 h-80 mx-auto relative">
              {/* Holographic Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 via-purple-500/20 to-green-500/20 rounded-full blur-xl animate-pulse"></div>
              
              {/* Main Chart Container */}
              <div className="relative w-full h-full bg-black/50 backdrop-blur-md border-2 border-cyan-500/30 rounded-full flex items-center justify-center overflow-hidden">
                {/* Animated Ring Effects */}
                <div className="absolute inset-4 border-2 border-cyan-400/30 rounded-full animate-spin-slow"></div>
                <div className="absolute inset-8 border border-purple-400/30 rounded-full animate-spin-reverse"></div>
                
                {/* Center Content */}
                <div className="relative z-10 text-center">
                  <div className="text-4xl mb-2">💎</div>
                  <div className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                    $STNK
                  </div>
                  <div className="text-sm text-gray-400">1B Supply</div>
                </div>

                {/* Visual Segments */}
                <div className="absolute inset-12 rounded-full border-4 border-green-500/50 opacity-80"></div>
                <div className="absolute inset-16 rounded-full border-4 border-cyan-500/50 opacity-60"></div>
                <div className="absolute inset-20 rounded-full border-4 border-purple-500/50 opacity-40"></div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 text-2xl animate-bounce">🚀</div>
              <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 text-2xl animate-bounce delay-500">📈</div>
              <div className="absolute top-1/2 -left-4 transform -translate-y-1/2 text-2xl animate-bounce delay-1000">💰</div>
              <div className="absolute top-1/2 -right-4 transform -translate-y-1/2 text-2xl animate-bounce delay-1500">⭐</div>
            </div>
          </div>

          {/* Tokenomics Breakdown */}
          <div className="space-y-6">
            {tokenomicsData.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <div key={index} className="bg-black/50 backdrop-blur-md border border-gray-700 rounded-xl p-6 hover:border-cyan-500/50 transition-all duration-300 transform hover:scale-105">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div className={`w-12 h-12 bg-gradient-to-br ${item.color} rounded-lg flex items-center justify-center`}>
                        <IconComponent className="text-white" size={24} />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-white">{item.label}</h3>
                        <p className="text-gray-400 text-sm">Strategic allocation</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className={`text-3xl font-bold bg-gradient-to-r ${item.color} bg-clip-text text-transparent`}>
                        {item.percentage}%
                      </div>
                    </div>
                  </div>
                  
                  {/* Progress Bar */}
                  <div className="mt-4">
                    <div className="w-full bg-gray-800 rounded-full h-2">
                      <div 
                        className={`h-2 bg-gradient-to-r ${item.color} rounded-full transition-all duration-1000 ease-out animate-pulse`}
                        style={{ width: `${item.percentage}%` }}
                      ></div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Token Stats */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="bg-gradient-to-br from-green-900/30 to-black border border-green-500/30 rounded-xl p-6 text-center hover:border-green-400/50 transition-all duration-300">
            <div className="text-3xl font-bold text-green-400 mb-2">1B</div>
            <div className="text-gray-400">Total Supply</div>
          </div>
          <div className="bg-gradient-to-br from-cyan-900/30 to-black border border-cyan-500/30 rounded-xl p-6 text-center hover:border-cyan-400/50 transition-all duration-300">
            <div className="text-3xl font-bold text-cyan-400 mb-2">0%</div>
            <div className="text-gray-400">Tax on Transfers</div>
          </div>
          <div className="bg-gradient-to-br from-purple-900/30 to-black border border-purple-500/30 rounded-xl p-6 text-center hover:border-purple-400/50 transition-all duration-300">
            <div className="text-3xl font-bold text-purple-400 mb-2">🔥</div>
            <div className="text-gray-400">Deflationary</div>
          </div>
          <div className="bg-gradient-to-br from-pink-900/30 to-black border border-pink-500/30 rounded-xl p-6 text-center hover:border-pink-400/50 transition-all duration-300">
            <div className="text-3xl font-bold text-pink-400 mb-2">∞</div>
            <div className="text-gray-400">Potential Gains</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Tokenomics;
