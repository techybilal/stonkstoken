
import React, { useState } from 'react';
import { Wallet, CheckCircle, AlertCircle, Zap } from 'lucide-react';

const WalletConnect = () => {
  const [isConnected, setIsConnected] = useState(false);
  const [isConnecting, setIsConnecting] = useState(false);
  const [walletAddress, setWalletAddress] = useState('');
  const [balance, setBalance] = useState('0');

  const handleConnect = async () => {
    setIsConnecting(true);
    
    // Simulate wallet connection
    setTimeout(() => {
      setIsConnected(true);
      setIsConnecting(false);
      setWalletAddress('0x420...6969');
      setBalance('42,069.69');
    }, 2000);
  };

  const handleDisconnect = () => {
    setIsConnected(false);
    setWalletAddress('');
    setBalance('0');
  };

  return (
    <section id="wallet" className="py-20 px-4 relative">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent mb-4">
            Connect Wallet
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Link your MetaMask to join the STNK revolution and see your inevitable gains
          </p>
        </div>

        <div className="bg-black/50 backdrop-blur-md border border-cyan-500/30 rounded-2xl p-8 text-center">
          {!isConnected ? (
            <div>
              <div className="w-32 h-32 mx-auto mb-8 bg-gradient-to-br from-purple-500/20 to-cyan-500/20 rounded-full flex items-center justify-center border-2 border-cyan-500/30">
                <Wallet className="text-cyan-400" size={48} />
              </div>
              
              <h3 className="text-2xl font-bold text-white mb-4">Connect Your Wallet</h3>
              <p className="text-gray-400 mb-8 max-w-md mx-auto">
                Connect your MetaMask wallet to view your STNK balance and join the community of diamond hands
              </p>

              <button
                onClick={handleConnect}
                disabled={isConnecting}
                className={`bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-500 hover:to-cyan-500 text-white font-bold px-8 py-4 rounded-full text-lg transition-all duration-300 transform hover:scale-105 flex items-center space-x-3 mx-auto ${
                  isConnecting ? 'opacity-50 cursor-not-allowed' : ''
                }`}
              >
                {isConnecting ? (
                  <>
                    <div className="animate-spin w-5 h-5 border-2 border-white border-t-transparent rounded-full"></div>
                    <span>Connecting...</span>
                  </>
                ) : (
                  <>
                    <Wallet size={20} />
                    <span>Connect MetaMask</span>
                  </>
                )}
              </button>

              <div className="mt-8 text-sm text-gray-500">
                Don't have MetaMask? <a href="#" className="text-cyan-400 hover:text-cyan-300 underline">Download here</a>
              </div>
            </div>
          ) : (
            <div>
              <div className="w-32 h-32 mx-auto mb-8 bg-gradient-to-br from-green-500/20 to-cyan-500/20 rounded-full flex items-center justify-center border-2 border-green-500/50 relative">
                <CheckCircle className="text-green-400" size={48} />
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-green-500 rounded-full animate-ping"></div>
              </div>

              <h3 className="text-2xl font-bold text-green-400 mb-2">Wallet Connected! 🎉</h3>
              <p className="text-gray-400 mb-6">Welcome to the STNK ecosystem</p>

              {/* Wallet Info */}
              <div className="bg-gray-900/50 border border-green-500/30 rounded-xl p-6 mb-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <div className="text-sm text-gray-400 mb-1">Wallet Address</div>
                    <div className="font-mono text-white">{walletAddress}</div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-400 mb-1">STNK Balance</div>
                    <div className="text-2xl font-bold text-green-400">{balance} STNK</div>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
                <button className="bg-gradient-to-r from-green-500 to-cyan-500 hover:from-green-400 hover:to-cyan-400 text-black font-bold px-6 py-3 rounded-full transition-all duration-300 transform hover:scale-105 flex items-center space-x-2">
                  <Zap size={16} />
                  <span>Buy More STNK</span>
                </button>
                <button 
                  onClick={handleDisconnect}
                  className="border-2 border-red-500 text-red-400 hover:bg-red-500 hover:text-white font-bold px-6 py-3 rounded-full transition-all duration-300 transform hover:scale-105"
                >
                  Disconnect
                </button>
              </div>

              {/* Portfolio Stats */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-black/50 border border-cyan-500/30 rounded-lg p-4">
                  <div className="text-lg font-bold text-cyan-400">+420.69%</div>
                  <div className="text-sm text-gray-400">Portfolio Gain</div>
                </div>
                <div className="bg-black/50 border border-purple-500/30 rounded-lg p-4">
                  <div className="text-lg font-bold text-purple-400">$13,370</div>
                  <div className="text-sm text-gray-400">USD Value</div>
                </div>
                <div className="bg-black/50 border border-green-500/30 rounded-lg p-4">
                  <div className="text-lg font-bold text-green-400">Diamond</div>
                  <div className="text-sm text-gray-400">Hand Status</div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Security Notice */}
        <div className="mt-8 bg-amber-900/20 border border-amber-500/30 rounded-xl p-6 flex items-start space-x-4">
          <AlertCircle className="text-amber-400 flex-shrink-0 mt-1" size={24} />
          <div>
            <h4 className="text-amber-400 font-semibold mb-2">Security Notice</h4>
            <p className="text-gray-300 text-sm">
              Always verify you're on the official STNK website before connecting your wallet. 
              We will never ask for your private keys or seed phrases.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WalletConnect;
