
import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import TickerTape from '../components/TickerTape';
import About from '../components/About';
import Tokenomics from '../components/Tokenomics';
import Leaderboard from '../components/Leaderboard';
import WalletConnect from '../components/WalletConnect';
import FAQ from '../components/FAQ';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      <div className="bg-gradient-to-br from-purple-900/20 via-black to-cyan-900/20 min-h-screen">
        <TickerTape />
        <Navbar />
        <Hero />
        <About />
        <Tokenomics />
        <Leaderboard />
        <WalletConnect />
        <FAQ />
        <Footer />
      </div>
    </div>
  );
};

export default Index;
