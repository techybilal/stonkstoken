
import React from 'react';
import { TrendingUp, Zap } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center py-20 px-4">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto text-center">
        {/* Stonks Character */}
        <div className="mb-8 relative">
          <div className="w-64 h-64 mx-auto bg-gradient-to-b from-cyan-400/20 to-purple-600/20 rounded-full flex items-center justify-center border border-cyan-500/30 shadow-2xl relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 via-transparent to-purple-500/20 animate-spin-slow"></div>
            <div className="relative text-8xl z-10">📈</div>
            <div className="absolute inset-0 border-2 border-cyan-400/50 rounded-full animate-ping"></div>
          </div>
          <div className="absolute -top-4 -right-4 text-2xl animate-bounce">🚀</div>
          <div className="absolute -bottom-4 -left-4 text-2xl animate-bounce delay-500">💎</div>
        </div>

        {/* Main Title */}
        <div className="mb-6">
          <h1 className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-cyan-400 via-purple-500 to-cyan-400 bg-clip-text text-transparent mb-4 animate-pulse">
            STONKS TOKEN
          </h1>
          <div className="text-2xl md:text-3xl text-gray-300 font-mono mb-4">
            $STNK
          </div>
        </div>

        {/* Slogan */}
        <div className="mb-8">
          <p className="text-xl md:text-2xl text-cyan-400 mb-2 font-semibold">
            "Always Up, Even When It's Down™"
          </p>
          <p className="text-gray-400 text-lg">
            The only cryptocurrency that defies gravity and logic
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <button className="bg-gradient-to-r from-green-500 to-cyan-500 hover:from-green-400 hover:to-cyan-400 text-black font-bold px-8 py-4 rounded-full text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-green-500/50 flex items-center space-x-2">
            <TrendingUp size={20} />
            <span>BUY $STNK NOW</span>
          </button>
          <button className="border-2 border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-white font-bold px-8 py-4 rounded-full text-lg transition-all duration-300 transform hover:scale-105 flex items-center space-x-2">
            <Zap size={20} />
            <span>View Chart</span>
          </button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <div className="bg-black/50 backdrop-blur-md border border-cyan-500/30 rounded-xl p-6 text-center hover:border-cyan-400/50 transition-all duration-300">
            <div className="text-3xl font-bold text-green-400 mb-2">+694.20%</div>
            <div className="text-gray-400">24h Change</div>
          </div>
          <div className="bg-black/50 backdrop-blur-md border border-purple-500/30 rounded-xl p-6 text-center hover:border-purple-400/50 transition-all duration-300">
            <div className="text-3xl font-bold text-purple-400 mb-2">69,420</div>
            <div className="text-gray-400">Holders</div>
          </div>
          <div className="bg-black/50 backdrop-blur-md border border-cyan-500/30 rounded-xl p-6 text-center hover:border-cyan-400/50 transition-all duration-300">
            <div className="text-3xl font-bold text-cyan-400 mb-2">∞</div>
            <div className="text-gray-400">Market Cap</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
