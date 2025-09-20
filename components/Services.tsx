'use client';
import { useState, useEffect, useRef } from 'react';
import { Check, ArrowRight, Hammer, Home, PaintBucket, Wrench } from 'lucide-react';

export default function Services() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

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

  const services = [
    {
      icon: Home,
      title: 'Custom Furniture',
      description: 'Bespoke furniture pieces designed to your exact specifications and lifestyle needs.',
      features: ['Dining Tables & Chairs', 'Bedroom Sets', 'Living Room Furniture', 'Office Desks'],
      pricing: 'Starting from $1,200',
      timeline: '3-6 weeks',
      popular: true
    },
    {
      icon: PaintBucket,
      title: 'Kitchen Cabinets',
      description: 'Complete kitchen transformations with custom cabinetry and storage solutions.',
      features: ['Full Kitchen Design', 'Island Cabinets', 'Pantry Systems', 'Hardware Installation'],
      pricing: 'Starting from $8,500',
      timeline: '4-8 weeks',
      popular: false
    },
    {
      icon: Hammer,
      title: 'Restoration & Repair',
      description: 'Breathe new life into your cherished furniture pieces with expert restoration.',
      features: ['Antique Restoration', 'Refinishing', 'Structural Repairs', 'Hardware Replacement'],
      pricing: 'Starting from $350',
      timeline: '1-3 weeks',
      popular: false
    },
    {
      icon: Wrench,
      title: 'Installation Services',
      description: 'Professional installation and setup of all woodwork pieces in your home.',
      features: ['On-site Installation', 'Assembly Services', 'Mounting & Hanging', 'Final Adjustments'],
      pricing: 'Starting from $150',
      timeline: '1-2 days',
      popular: false
    }
  ];

  const readyMadeItems = [
    { name: 'Coffee Tables', price: '$450-$850', image: 'https://images.pexels.com/photos/1571463/pexels-photo-1571463.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop' },
    { name: 'Dining Chairs', price: '$180-$320', image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop' },
    { name: 'Bookshelves', price: '$650-$1200', image: 'https://images.pexels.com/photos/2724748/pexels-photo-2724748.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop' },
    { name: 'Side Tables', price: '$280-$480', image: 'https://images.pexels.com/photos/1571468/pexels-photo-1571468.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop' }
  ];

  return (
    <section 
      ref={sectionRef}
      className="py-20 bg-gradient-to-b from-forest-deep/5 to-white relative overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url('data:image/svg+xml,<svg width="80" height="80" viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><g fill="%23${encodeURIComponent('0D4F3C')}" fill-opacity="0.1"><path d="M40 40c0-11.046-8.954-20-20-20s-20 8.954-20 20 8.954 20 20 20 20-8.954 20-20M80 40c0-11.046-8.954-20-20-20s-20 8.954-20 20 8.954 20 20 20 20-8.954 20-20M0 40c0-11.046 8.954-20 20-20s20 8.954 20 20-8.954 20-20 20S0 51.046 0 40M40 0c0-11.046 8.954-20 20-20s20 8.954 20 20-8.954 20-20 20S40 11.046 40 0M40 80c0-11.046 8.954-20 20-20s20 8.954 20 20-8.954 20-20 20-20-8.954-20-20"/></g></svg>')`,
        }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className={`text-center mb-16 scroll-fade ${isVisible ? 'visible' : ''}`}>
          <span className="inline-block px-4 py-2 bg-forest-light/10 text-forest-deep rounded-full text-sm font-medium mb-4">
            Our Services
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-forest-deep mb-6">
            Craftsmanship
            <span className="block text-wood-medium">Services</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            From concept to completion, we offer comprehensive woodworking services 
            that bring your vision to life with unmatched quality and attention to detail.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {services.map((service, index) => (
            <div 
              key={index}
              className={`relative bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover-lift group scroll-fade ${isVisible ? 'visible' : ''}`}
              style={{transitionDelay: `${0.2 + index * 0.1}s`}}
            >
              {service.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <span className="bg-earth-warm text-white text-xs font-bold px-4 py-1 rounded-full">
                    Most Popular
                  </span>
                </div>
              )}
              
              <div className="text-center mb-6">
                <div className="w-16 h-16 mx-auto bg-gradient-to-br from-forest-light to-forest-deep rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-forest-deep mb-2 group-hover:text-wood-medium transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>

              <div className="space-y-3 mb-6">
                {service.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center space-x-2">
                    <Check className="h-4 w-4 text-forest-light flex-shrink-0" />
                    <span className="text-gray-600 text-sm">{feature}</span>
                  </div>
                ))}
              </div>

              <div className="border-t pt-4">
                <div className="text-center mb-4">
                  <div className="text-2xl font-bold text-forest-deep">{service.pricing}</div>
                  <div className="text-sm text-gray-500">{service.timeline}</div>
                </div>
                <button className="w-full bg-forest-deep hover:bg-forest-medium text-white font-semibold py-3 rounded-xl transition-colors duration-300 group-hover:scale-105">
                  Get Quote
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Ready-Made Items Section */}
        <div className={`scroll-fade ${isVisible ? 'visible' : ''}`} style={{transitionDelay: '0.8s'}}>
          <div className="bg-gradient-to-r from-earth-light/10 to-wood-light/10 rounded-3xl p-8 mb-12">
            <div className="text-center mb-8">
              <h3 className="text-3xl font-bold text-forest-deep mb-4">Ready-Made Collection</h3>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Immediate availability items crafted with the same attention to detail, 
                perfect for those who need beautiful furniture right away.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {readyMadeItems.map((item, index) => (
                <div 
                  key={index}
                  className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover-lift group"
                >
                  <img 
                    src={item.image}
                    alt={item.name}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="p-4">
                    <h4 className="font-semibold text-forest-deep mb-2 group-hover:text-wood-medium transition-colors duration-300">
                      {item.name}
                    </h4>
                    <div className="text-lg font-bold text-earth-warm mb-3">{item.price}</div>
                    <button className="w-full bg-forest-light hover:bg-forest-deep text-white py-2 rounded-lg transition-colors duration-300 text-sm">
                      View Details
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className={`text-center scroll-fade ${isVisible ? 'visible' : ''}`} style={{transitionDelay: '1s'}}>
          <div className="bg-forest-deep rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Ready to Start Your Project?</h3>
            <p className="text-white/90 mb-6 max-w-2xl mx-auto">
              Let's discuss your vision and create something extraordinary together. 
              Every project begins with a conversation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-earth-warm hover:bg-earth-warm/90 text-white font-semibold rounded-xl transition-all duration-300 hover-lift">
                Get Free Consultation
              </button>
              <button className="px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-xl backdrop-blur-sm transition-all duration-300 border border-white/20 flex items-center justify-center">
                View Portfolio
                <ArrowRight className="h-5 w-5 ml-2" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}