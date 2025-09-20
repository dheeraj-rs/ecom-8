'use client';
import { useState, useEffect, useRef } from 'react';
import { Eye, Heart, ArrowRight } from 'lucide-react';

export default function FeaturedWorks() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [activeCategory, setActiveCategory] = useState('all');

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const categories = [
    { id: 'all', label: 'All Works' },
    { id: 'furniture', label: 'Furniture' },
    { id: 'cabinets', label: 'Cabinets' },
    { id: 'artistic', label: 'Artistic' },
    { id: 'custom', label: 'Custom' }
  ];

  const projects = [
    {
      id: 1,
      title: 'Amazon Royal Dining Set',
      category: 'furniture',
      image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      description: 'Handcrafted from sustainable Amazon mahogany with intricate forest-inspired carvings.',
      likes: 247,
      views: 1850
    },
    {
      id: 2,
      title: 'Forest Kitchen Masterpiece',
      category: 'cabinets',
      image: 'https://images.pexels.com/photos/2724749/pexels-photo-2724749.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      description: 'Custom kitchen cabinetry featuring natural wood grains and organic flowing designs.',
      likes: 189,
      views: 1420
    },
    {
      id: 3,
      title: 'Living Tree Coffee Table',
      category: 'artistic',
      image: 'https://images.pexels.com/photos/1571463/pexels-photo-1571463.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      description: 'A stunning piece that celebrates the natural form of the tree with live edge design.',
      likes: 312,
      views: 2100
    },
    {
      id: 4,
      title: 'Heritage Bookshelf',
      category: 'furniture',
      image: 'https://images.pexels.com/photos/2724748/pexels-photo-2724748.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      description: 'Traditional craftsmanship meets modern functionality in this timeless piece.',
      likes: 156,
      views: 980
    },
    {
      id: 5,
      title: 'Amazon Workspace Suite',
      category: 'custom',
      image: 'https://images.pexels.com/photos/667838/pexels-photo-667838.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      description: 'Custom office furniture designed to bring nature\'s tranquility to work spaces.',
      likes: 201,
      views: 1340
    },
    {
      id: 6,
      title: 'Forest Bathroom Vanity',
      category: 'cabinets',
      image: 'https://images.pexels.com/photos/1571468/pexels-photo-1571468.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      description: 'Water-resistant treated wood with natural stone integration for bathroom luxury.',
      likes: 178,
      views: 1120
    }
  ];

  const filteredProjects = activeCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  return (
    <section 
      ref={sectionRef}
      className="py-20 bg-gradient-to-b from-white to-forest-deep/5 relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-earth-warm/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-forest-light/5 rounded-full blur-2xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className={`text-center mb-16 scroll-fade ${isVisible ? 'visible' : ''}`}>
          <span className="inline-block px-4 py-2 bg-wood-medium/10 text-wood-medium rounded-full text-sm font-medium mb-4">
            Featured Creations
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-forest-deep mb-6">
            Masterpieces That Tell
            <span className="block text-wood-medium">Forest Stories</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Each piece is a testament to the harmony between natural beauty and skilled craftsmanship, 
            bringing the essence of the Amazon forest into your living space.
          </p>
        </div>

        {/* Category Filter */}
        <div className={`flex flex-wrap justify-center gap-4 mb-12 scroll-fade ${isVisible ? 'visible' : ''}`} style={{transitionDelay: '0.2s'}}>
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeCategory === category.id
                  ? 'bg-forest-deep text-white shadow-lg scale-105'
                  : 'bg-white text-forest-deep hover:bg-forest-light/10 border border-forest-light/20'
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {filteredProjects.map((project, index) => (
            <div 
              key={project.id}
              className={`group cursor-pointer hover-lift scroll-fade ${isVisible ? 'visible' : ''}`}
              style={{transitionDelay: `${0.4 + index * 0.1}s`}}
            >
              <div className="bg-white rounded-2xl overflow-hidden shadow-lg group-hover:shadow-2xl transition-all duration-300 organic-shadow">
                {/* Image */}
                <div className="relative overflow-hidden">
                  <img 
                    src={project.image}
                    alt={project.title}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-forest-deep/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Hover Actions */}
                  <div className="absolute top-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
                    <button className="w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-colors duration-200">
                      <Heart className="h-5 w-5 text-forest-deep" />
                    </button>
                    <button className="w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-colors duration-200">
                      <Eye className="h-5 w-5 text-forest-deep" />
                    </button>
                  </div>
                  
                  {/* Stats */}
                  <div className="absolute bottom-4 left-4 right-4 flex justify-between items-center opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
                    <div className="flex items-center space-x-4 text-white text-sm">
                      <div className="flex items-center space-x-1">
                        <Heart className="h-4 w-4" />
                        <span>{project.likes}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Eye className="h-4 w-4" />
                        <span>{project.views}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="mb-2">
                    <span className="inline-block px-3 py-1 bg-earth-warm/10 text-earth-warm rounded-full text-xs font-medium capitalize">
                      {project.category}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold text-forest-deep mb-3 group-hover:text-wood-medium transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    {project.description}
                  </p>
                  <button className="flex items-center text-forest-deep font-medium group-hover:text-wood-medium transition-colors duration-300">
                    View Details
                    <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className={`text-center scroll-fade ${isVisible ? 'visible' : ''}`} style={{transitionDelay: '1s'}}>
          <button className="px-8 py-4 bg-forest-deep hover:bg-forest-medium text-white font-semibold rounded-xl transition-all duration-300 hover-lift organic-shadow">
            Explore Complete Gallery
          </button>
        </div>
      </div>
    </section>
  );
}