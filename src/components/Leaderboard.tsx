
import React from 'react';
import { Trophy, Crown, Medal } from 'lucide-react';

const Leaderboard = () => {
  const topHolders = [
    { 
      rank: 1, 
      address: '0x420...6969', 
      balance: '69,420,000', 
      percentage: '6.94%',
      avatar: '👑',
      nickname: 'Diamond King',
      badge: Crown,
      badgeColor: 'text-yellow-400'
    },
    { 
      rank: 2, 
      address: '0x1337...8888', 
      balance: '42,069,000', 
      percentage: '4.21%',
      avatar: '💎',
      nickname: 'Hodl Master',
      badge: Trophy,
      badgeColor: 'text-cyan-400'
    },
    { 
      rank: 3, 
      address: '0x999...4444', 
      balance: '31,415,926', 
      percentage: '3.14%',
      avatar: '🚀',
      nickname: 'Moon Walker',
      badge: Medal,
      badgeColor: 'text-orange-400'
    },
    { 
      rank: 4, 
      address: '0xAAA...BBBB', 
      balance: '25,000,000', 
      percentage: '2.50%',
      avatar: '🦍',
      nickname: 'Ape Strong',
      badge: null,
      badgeColor: ''
    },
    { 
      rank: 5, 
      address: '0x111...2222', 
      balance: '20,000,000', 
      percentage: '2.00%',
      avatar: '🎯',
      nickname: 'Sniper',
      badge: null,
      badgeColor: ''
    },
  ];

  return (
    <section id="leaderboard" className="py-20 px-4 relative">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-yellow-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent mb-4">
            Leaderboard
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Hall of fame for the biggest diamond hands in the STNK universe
          </p>
        </div>

        {/* Top 3 Podium */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {topHolders.slice(0, 3).map((holder, index) => {
            const BadgeIcon = holder.badge;
            const positions = ['md:order-2', 'md:order-1', 'md:order-3'];
            const sizes = ['h-55', 'h-55', 'h-55'];
            
            return (
              <div key={holder.rank} className={`${positions[index]} text-center`}>
                <div className={`bg-gradient-to-b from-gray-800 to-black border-2 ${
                  index === 0 ? 'border-yellow-500' : 
                  index === 1 ? 'border-cyan-500' : 'border-orange-500'
                } rounded-2xl p-6 ${sizes[index]} flex flex-col justify-between hover:scale-105 transition-all duration-300`}>
                  
                  <div>
                    {BadgeIcon && (
                      <BadgeIcon className={`${holder.badgeColor} mx-auto mb-2`} size={32} />
                    )}
                    <div className="text-4xl mb-2">{holder.avatar}</div>
                    <h3 className="font-bold text-white mb-1">{holder.nickname}</h3>
                    <p className="text-gray-400 text-sm font-mono">{holder.address}</p>
                  </div>
                  
                  <div>
                    <div className={`text-2xl font-bold ${
                      index === 0 ? 'text-yellow-400' : 
                      index === 1 ? 'text-cyan-400' : 'text-orange-400'
                    } mb-1`}>
                      {holder.balance} STNK
                    </div>
                    <div className="text-gray-400 text-sm">{holder.percentage}</div>
                  </div>
                </div>
                
                {/* Rank Badge */}
                <div className={`w-8 h-8 ${
                  index === 0 ? 'bg-yellow-500' : 
                  index === 1 ? 'bg-cyan-500' : 'bg-orange-500'
                } rounded-full flex items-center justify-center text-black font-bold text-lg -mt-4 mx-auto`}>
                  {holder.rank}
                </div>
              </div>
            );
          })}
        </div>

        {/* Extended Leaderboard */}
        <div className="bg-black/50 backdrop-blur-md border border-cyan-500/30 rounded-2xl overflow-hidden">
          <div className="bg-gradient-to-r from-cyan-600/20 to-purple-600/20 p-6 border-b border-gray-700">
            <h3 className="text-2xl font-bold text-white flex items-center">
              <Trophy className="text-yellow-400 mr-3" size={28} />
              Top STNK Holders
            </h3>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-900/50">
                <tr className="text-left text-gray-400">
                  <th className="p-4">Rank</th>
                  <th className="p-4">Holder</th>
                  <th className="p-4">Address</th>
                  <th className="p-4">Balance</th>
                  <th className="p-4">%</th>
                </tr>
              </thead>
              <tbody>
                {topHolders.map((holder, index) => (
                  <tr key={holder.rank} className="border-b border-gray-800 hover:bg-gray-900/30 transition-all duration-300">
                    <td className="p-4">
                      <div className="flex items-center">
                        <span className={`font-bold ${
                          index < 3 ? 
                            index === 0 ? 'text-yellow-400' : 
                            index === 1 ? 'text-cyan-400' : 'text-orange-400'
                          : 'text-gray-400'
                        }`}>
                          #{holder.rank}
                        </span>
                        {holder.badge && (
                          <holder.badge className={`${holder.badgeColor} ml-2`} size={16} />
                        )}
                      </div>
                    </td>
                    <td className="p-4">
                      <div className="flex items-center space-x-3">
                        <span className="text-2xl">{holder.avatar}</span>
                        <span className="font-semibold text-white">{holder.nickname}</span>
                      </div>
                    </td>
                    <td className="p-4">
                      <span className="font-mono text-gray-400">{holder.address}</span>
                    </td>
                    <td className="p-4">
                      <span className="font-bold text-green-400">{holder.balance} STNK</span>
                    </td>
                    <td className="p-4">
                      <span className="text-cyan-400 font-semibold">{holder.percentage}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          <div className="bg-gradient-to-br from-green-900/30 to-black border border-green-500/30 rounded-xl p-6 text-center">
            <div className="text-3xl font-bold text-green-400 mb-2">69,420</div>
            <div className="text-gray-400">Total Holders</div>
          </div>
          <div className="bg-gradient-to-br from-purple-900/30 to-black border border-purple-500/30 rounded-xl p-6 text-center">
            <div className="text-3xl font-bold text-purple-400 mb-2">94.20%</div>
            <div className="text-gray-400">Tokens in Circulation</div>
          </div>
          <div className="bg-gradient-to-br from-cyan-900/30 to-black border border-cyan-500/30 rounded-xl p-6 text-center">
            <div className="text-3xl font-bold text-cyan-400 mb-2">∞ Years</div>
            <div className="text-gray-400">Average Hold Time</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Leaderboard;
