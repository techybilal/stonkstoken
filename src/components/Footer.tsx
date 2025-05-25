
import React from 'react';
import { Twitter, MessageCircle, Github, Mail } from 'lucide-react';

const Footer = () => {
  const socialLinks = [
    { icon: Twitter, href: '#', label: 'Twitter', color: 'hover:text-blue-400' },
    { icon: MessageCircle, href: '#', label: 'Discord', color: 'hover:text-purple-400' },
    { icon: Github, href: '#', label: 'GitHub', color: 'hover:text-gray-400' },
    { icon: Mail, href: '#', label: 'Email', color: 'hover:text-green-400' },
  ];

  return (
    <footer className="relative bg-black/80 border-t border-cyan-500/30 py-12 px-4">
      {/* Background Effect */}
      <div className="absolute inset-0 bg-gradient-to-t from-purple-900/10 to-transparent"></div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="md:col-span-2">
            <div className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent mb-4">
              STONKS TOKEN
            </div>
            <p className="text-gray-400 mb-6 max-w-md">
              The most revolutionary meme coin that defies gravity, logic, and probably the laws of physics. 
              Always up, even when it's down™
            </p>
            
            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    className={`w-10 h-10 bg-gray-800 hover:bg-gray-700 rounded-full flex items-center justify-center text-gray-400 ${social.color} transition-all duration-300 transform hover:scale-110`}
                    aria-label={social.label}
                  >
                    <IconComponent size={20} />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {['Home', 'About', 'Tokenomics', 'Leaderboard', 'FAQ'].map((item) => (
                <li key={item}>
                  <a 
                    href={`#${item.toLowerCase()}`}
                    className="text-gray-400 hover:text-cyan-400 transition-colors duration-300"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-white font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              {['Whitepaper', 'Smart Contract', 'Audit Report', 'Brand Kit', 'Community'].map((item) => (
                <li key={item}>
                  <a 
                    href="#"
                    className="text-gray-400 hover:text-purple-400 transition-colors duration-300"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-400 text-sm mb-4 md:mb-0">
            Bilalwaris © 2025 STONKS TOKEN. All rights reserved. Not financial advice. DYOR. NFA. 🚀
          </div>
          
          <div className="flex space-x-6 text-sm">
            <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors duration-300">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors duration-300">
              Terms of Service
            </a>
            <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors duration-300">
              Disclaimer
            </a>
          </div>
        </div>

        {/* Animated Disclaimer */}
        <div className="mt-8 text-center">
          <div className="bg-gradient-to-r from-red-900/20 to-orange-900/20 border border-red-500/30 rounded-xl p-4">
            <p className="text-red-400 text-sm animate-pulse">
              ⚠️ WARNING: STNK may cause excessive profits, diamond hands syndrome, and spontaneous moon travel. 
              Side effects include uncontrollable optimism and an inability to sell. Hodl responsibly.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
