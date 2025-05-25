
import React from 'react';

const TickerTape = () => {
  const tickerData = [
    { symbol: '$STNK', price: '+694.20%', color: 'text-green-400' },
    { symbol: 'DIAMOND', price: '+420.69%', color: 'text-cyan-400' },
    { symbol: 'MOON', price: '+999.99%', color: 'text-green-400' },
    { symbol: 'HODL', price: '+1337.00%', color: 'text-purple-400' },
    { symbol: 'YOLO', price: '+2024.25%', color: 'text-green-400' },
  ];

  return (
    <div className="bg-black/90 border-b border-cyan-500/30 py-2 overflow-hidden">
      <div className="animate-scroll flex whitespace-nowrap">
        {[...Array(3)].map((_, repeatIndex) => (
          <div key={repeatIndex} className="flex space-x-8 mr-8">
            {tickerData.map((item, index) => (
              <div key={index} className="flex items-center space-x-2 text-sm font-mono">
                <span className="text-white font-bold">{item.symbol}</span>
                <span className={`${item.color} font-bold animate-pulse`}>
                  {item.price} 🚀
                </span>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TickerTape;
