'use client';
import { useEffect, useRef, useState } from 'react';
import { TreePine, Hammer, Heart, Leaf } from 'lucide-react';

export default function About() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const features = [
    {
      icon: TreePine,
      title: 'Sustainable Sourcing',
      description: 'Every piece starts with responsibly sourced Amazon wood, honoring the forest\'s natural beauty.'
    },
    {
      icon: Hammer,
      title: 'Master Craftsmanship',
      description: '40+ years of expertise ensuring every detail meets the highest standards of quality and artistry.'
    },
    {
      icon: Heart,
      title: 'Passionate Creation',
      description: 'Each project is infused with love, dedication, and deep respect for the natural materials.'
    },
    {
      icon: Leaf,
      title: 'Natural Harmony',
      description: 'Designs that celebrate wood\'s inherent beauty while serving modern lifestyle needs.'
    }
  ];

  return (
    <section 
      ref={sectionRef}
      className="py-20 bg-gradient-to-b from-earth-light/10 to-white relative overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url('data:image/svg+xml,<svg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><g fill="%23${encodeURIComponent('8B4513')}" fill-opacity="0.1"><circle cx="30" cy="30" r="4"/></g></svg>')`,
        }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className={`text-center mb-16 scroll-fade ${isVisible ? 'visible' : ''}`}>
          <span className="inline-block px-4 py-2 bg-forest-deep/10 text-forest-deep rounded-full text-sm font-medium mb-4">
            Our Story
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-forest-deep mb-6">
            From Amazon Forest
            <span className="block text-wood-medium">To Your Home</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Born from a deep connection with nature and refined through decades of dedication, 
            Rajan K K's woodworking legacy represents the perfect harmony between forest wisdom 
            and masterful craftsmanship.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
          {/* Image */}
          <div className={`scroll-fade ${isVisible ? 'visible' : ''}`} style={{transitionDelay: '0.2s'}}>
            <div className="relative group">
              <img 
                src="https://images.pexels.com/photos/5974037/pexels-photo-5974037.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
                alt="Master woodworker Rajan K K in his workshop"
                className="w-full h-[500px] object-cover rounded-2xl shadow-2xl group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-forest-deep/30 to-transparent rounded-2xl" />
              
              {/* Overlay Badge */}
              <div className="absolute bottom-6 left-6 right-6">
                <div className="bg-white/95 backdrop-blur-sm rounded-xl p-4">
                  <h3 className="text-xl font-bold text-forest-deep mb-1">Rajan K K</h3>
                  <p className="text-gray-600">Master Craftsman since 1984</p>
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className={`scroll-fade ${isVisible ? 'visible' : ''}`} style={{transitionDelay: '0.4s'}}>
            <h3 className="text-3xl font-bold text-forest-deep mb-6">
              Where Nature Meets Artistry
            </h3>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Beginning his journey in the heart of the Amazon region, Rajan K K developed 
              a profound understanding of wood as a living material. Each grain tells a story, 
              each knot holds character, and every piece carries the essence of the forest.
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Over four decades, this philosophy has shaped not just furniture, but a legacy 
              of sustainable craftsmanship that honors both tradition and innovation.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-earth-warm rounded-full" />
                <span className="text-gray-700 font-medium">Traditional Amazon woodworking techniques</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-earth-warm rounded-full" />
                <span className="text-gray-700 font-medium">Modern precision and finishing methods</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-earth-warm rounded-full" />
                <span className="text-gray-700 font-medium">Sustainable and eco-conscious practices</span>
              </div>
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className={`text-center group hover-lift scroll-fade ${isVisible ? 'visible' : ''}`}
              style={{transitionDelay: `${0.6 + index * 0.1}s`}}
            >
              <div className="relative mb-6">
                <div className="w-16 h-16 mx-auto bg-gradient-to-br from-forest-light to-forest-deep rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 organic-shadow">
                  <feature.icon className="h-8 w-8 text-white" />
                </div>
                <div className="absolute inset-0 w-16 h-16 mx-auto bg-earth-warm/20 rounded-2xl group-hover:scale-125 transition-transform duration-500 -z-10" />
              </div>
              <h4 className="text-xl font-semibold text-forest-deep mb-3 group-hover:text-wood-medium transition-colors duration-300">
                {feature.title}
              </h4>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}