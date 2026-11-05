import { useState, useEffect, useRef } from 'react';
import Hero from './components/Hero';
import Stats from './components/Stats';
import Features from './components/Features';
import TokenEfficiency from './components/TokenEfficiency';
import Benchmarks from './components/Benchmarks';
import VaultContents from './components/VaultContents';
import Install from './components/Install';
import Footer from './components/Footer';
import Navbar from './components/Navbar';

export default function App() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#0a0a1a] text-white overflow-x-hidden">
      <Navbar scrollY={scrollY} />
      <Hero />
      <Stats />
      <Features />
      <TokenEfficiency />
      <Benchmarks />
      <VaultContents />
      <Install />
      <Footer />
    </div>
  );
}
