
import React, { useState, useEffect } from 'react';

const Hero: React.FC = () => {
  const [rotate, setRotate] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      const { clientX, clientY } = e;
      const x = (clientX / innerWidth - 0.5) * 20; // Rotate up to 10 degrees
      const y = -(clientY / innerHeight - 0.5) * 10; // Rotate up to 5 degrees
      setRotate({ x: y, y: x });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const handleExploreClick = () => {
    document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="container mx-auto py-20 md:py-32 flex flex-col lg:flex-row items-center text-center lg:text-left">
      <div className="lg:w-1/2 z-10">
        <h1 className="font-orbitron font-black text-4xl md:text-5xl lg:text-6xl text-white uppercase tracking-wider">
          Feel The Pulse
        </h1>
        <h2 className="font-orbitron font-bold text-3xl md:text-4xl lg:text-5xl text-cyan-400 uppercase tracking-wide neon-glow-cyan drop-shadow-lg">
          Of The Drift
        </h2>
        <p className="mt-6 max-w-xl mx-auto lg:mx-0 text-gray-300 text-lg md:text-xl">
          Discover elite 1/10 scale RC drift cars, engineered for ultimate performance and style. Your journey to sideways glory starts here.
        </p>
        <div className="mt-8 flex gap-4 justify-center lg:justify-start">
          <button 
            onClick={handleExploreClick}
            className="bg-cyan-500 text-white font-bold py-3 px-8 rounded-lg hover:bg-cyan-400 transition-all duration-300 transform hover:scale-105 active:scale-95 neon-glow-cyan">
            Explore Models
          </button>
          <button className="border-2 border-fuchsia-500 text-fuchsia-500 font-bold py-3 px-8 rounded-lg hover:bg-fuchsia-500 hover:text-white transition-all duration-300 transform hover:scale-105 active:scale-95 neon-glow-fuchsia">
            Build Your Own
          </button>
        </div>
      </div>
      <div className="lg:w-1/2 mt-12 lg:mt-0" style={{ perspective: '1000px' }}>
        <div 
          className="relative transition-transform duration-300 ease-out"
          style={{ transform: `rotateX(${rotate.x}deg) rotateY(${rotate.y}deg)`, transformStyle: 'preserve-3d' }}
        >
          <img 
            src="https://picsum.photos/seed/hero-car/800/600" 
            alt="Featured RC Drift Car" 
            className="rounded-lg shadow-2xl shadow-cyan-500/20"
          />
          <div 
            className="absolute -bottom-4 -right-4 -top-4 -left-4 border-2 border-fuchsia-500/50 rounded-lg"
            style={{ transform: 'translateZ(-20px)' }}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
