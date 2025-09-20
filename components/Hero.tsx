'use client';
import { useState, useEffect } from 'react';
import { ChevronDown, Award, Users, Calendar } from 'lucide-react';

export default function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const scrollToNext = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth'
    });
  };

  return (
    <section className="relative h-screen overflow-hidden">
      {/* Parallax Background */}
      <div 
        className="absolute inset-0 parallax-bg"
        style={{
          backgroundImage: `url('https://images.pexels.com/photos/1632790/pexels-photo-1632790.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1280&fit=crop')`,
          transform: `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px)`,
        }}
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-green-900/80 via-green-800/60 to-transparent" />
      
      {/* Floating Elements */}
      <div className="absolute top-1/4 right-1/4 w-4 h-4 bg-orange-400/30 rounded-full float-animation" />
      <div className="absolute top-3/4 left-1/3 w-6 h-6 bg-orange-600/20 rounded-full float-animation" style={{animationDelay: '2s'}} />
      <div className="absolute top-1/2 right-1/3 w-3 h-3 bg-green-600/40 rounded-full float-animation" style={{animationDelay: '4s'}} />

      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="mb-8">
              <span className="inline-block px-4 py-2 bg-orange-400/20 text-orange-200 rounded-full text-sm font-medium backdrop-blur-sm">
                From Forest to Masterpiece
              </span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Master
              <span className="block text-orange-400">Woodworker</span>
              <span className="block text-3xl md:text-4xl font-medium text-white/90">
                Amazon Legacy
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed">
              Four decades of crafting nature's finest gifts into timeless furniture. 
              Where Amazon forest meets masterful artistry.
            </p>
            
            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 mb-10">
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <Calendar className="h-6 w-6 text-orange-400 mr-2" />
                  <span className="text-3xl font-bold text-white">40+</span>
                </div>
                <p className="text-white/80 text-sm">Years Experience</p>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <Users className="h-6 w-6 text-orange-400 mr-2" />
                  <span className="text-3xl font-bold text-white">500+</span>
                </div>
                <p className="text-white/80 text-sm">Happy Clients</p>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <Award className="h-6 w-6 text-orange-400 mr-2" />
                  <span className="text-3xl font-bold text-white">1000+</span>
                </div>
                <p className="text-white/80 text-sm">Projects</p>
              </div>
            </div>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="px-8 py-4 bg-orange-600 hover:bg-orange-700 text-white font-semibold rounded-xl transition-all duration-300 hover-lift organic-shadow">
                Explore Gallery
              </button>
              <button className="px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-xl backdrop-blur-sm transition-all duration-300 border border-white/20">
                Custom Order
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <button 
        onClick={scrollToNext}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/70 hover:text-white transition-colors duration-300 animate-bounce"
      >
        <ChevronDown className="h-8 w-8" />
      </button>
    </section>
  );
}