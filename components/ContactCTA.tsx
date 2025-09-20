'use client';
import { useState, useEffect, useRef } from 'react';
import { Phone, Mail, MapPin, Clock, ArrowRight, TreePine } from 'lucide-react';

export default function ContactCTA() {
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

  const contactMethods = [
    {
      icon: Phone,
      title: 'Call Us',
      detail: '+1 (555) 123-4567',
      description: 'Speak directly with Rajan',
      action: 'Call Now'
    },
    {
      icon: Mail,
      title: 'Email Us',
      detail: 'rajan@amazonwoodcraft.com',
      description: 'Get a detailed response',
      action: 'Send Email'
    },
    {
      icon: MapPin,
      title: 'Visit Workshop',
      detail: '123 Forest Lane, Seattle WA',
      description: 'See craftsmanship in action',
      action: 'Get Directions'
    },
    {
      icon: Clock,
      title: 'Workshop Hours',
      detail: 'Mon-Fri: 8am-6pm',
      description: 'Weekends by appointment',
      action: 'Schedule Visit'
    }
  ];

  return (
    <section 
      ref={sectionRef}
      className="py-20 bg-gradient-to-b from-white to-forest-deep/5 relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-earth-warm/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-forest-light/5 rounded-full blur-3xl" />
      
      {/* Floating Tree Icons */}
      <TreePine className="absolute top-20 right-20 h-8 w-8 text-forest-light/20 float-animation" />
      <TreePine className="absolute bottom-32 left-16 h-6 w-6 text-earth-warm/20 float-animation" style={{animationDelay: '2s'}} />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className={`text-center mb-16 scroll-fade ${isVisible ? 'visible' : ''}`}>
          <span className="inline-block px-4 py-2 bg-forest-deep/10 text-forest-deep rounded-full text-sm font-medium mb-4">
            Let's Connect
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-forest-deep mb-6">
            Ready to Bring Your
            <span className="block text-wood-medium">Vision to Life?</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Every masterpiece begins with a conversation. Let's discuss your project and 
            discover how four decades of Amazon forest craftsmanship can transform your space.
          </p>
        </div>

        {/* Main CTA Card */}
        <div className={`bg-white rounded-3xl p-8 md:p-12 shadow-2xl mb-16 scroll-fade ${isVisible ? 'visible' : ''}`} style={{transitionDelay: '0.2s'}}>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div>
              <h3 className="text-3xl font-bold text-forest-deep mb-6">
                Start Your Custom Project Today
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Whether you're dreaming of a stunning dining table, complete kitchen transformation, 
                or unique artistic piece, our consultation process helps bring your vision into reality 
                with the natural beauty of Amazon forest wood.
              </p>
              
              {/* Process Steps */}
              <div className="space-y-4 mb-8">
                {[
                  'Free initial consultation and design discussion',
                  'Material selection and sustainable sourcing options',
                  'Detailed project timeline and transparent pricing',
                  'Expert craftsmanship with regular progress updates'
                ].map((step, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-forest-light rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-white text-xs font-bold">{index + 1}</span>
                    </div>
                    <span className="text-gray-700">{step}</span>
                  </div>
                ))}
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="px-8 py-4 bg-forest-deep hover:bg-forest-medium text-white font-semibold rounded-xl transition-all duration-300 hover-lift organic-shadow flex items-center justify-center">
                  Free Consultation
                  <ArrowRight className="h-5 w-5 ml-2" />
                </button>
                <button className="px-8 py-4 bg-earth-warm/10 hover:bg-earth-warm/20 text-forest-deep font-semibold rounded-xl transition-all duration-300 border border-earth-warm/20">
                  View Gallery
                </button>
              </div>
            </div>

            {/* Right Image */}
            <div className="relative">
              <img 
                src="https://images.pexels.com/photos/5974037/pexels-photo-5974037.jpeg?auto=compress&cs=tinysrgb&w=600&h=500&fit=crop"
                alt="Rajan K K in his workshop"
                className="w-full h-[400px] object-cover rounded-2xl shadow-lg"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-forest-deep/30 to-transparent rounded-2xl" />
              
              {/* Floating Badge */}
              <div className="absolute bottom-6 left-6 right-6">
                <div className="bg-white/95 backdrop-blur-sm rounded-xl p-4 text-center">
                  <div className="text-2xl font-bold text-forest-deep">40+ Years</div>
                  <div className="text-sm text-gray-600">Master Craftsmanship</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Methods Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {contactMethods.map((method, index) => (
            <div 
              key={index}
              className={`bg-white rounded-2xl p-6 text-center hover:shadow-xl transition-all duration-300 hover-lift group scroll-fade ${isVisible ? 'visible' : ''}`}
              style={{transitionDelay: `${0.4 + index * 0.1}s`}}
            >
              <div className="w-16 h-16 mx-auto bg-gradient-to-br from-forest-light to-forest-deep rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <method.icon className="h-8 w-8 text-white" />
              </div>
              <h4 className="text-xl font-semibold text-forest-deep mb-2 group-hover:text-wood-medium transition-colors duration-300">
                {method.title}
              </h4>
              <div className="text-lg font-medium text-gray-800 mb-1">
                {method.detail}
              </div>
              <p className="text-gray-600 text-sm mb-4">
                {method.description}
              </p>
              <button className="w-full bg-forest-light/10 hover:bg-forest-light hover:text-white text-forest-deep font-medium py-2 rounded-lg transition-all duration-300 text-sm">
                {method.action}
              </button>
            </div>
          ))}
        </div>

        {/* Final CTA */}
        <div className={`text-center mt-16 scroll-fade ${isVisible ? 'visible' : ''}`} style={{transitionDelay: '0.8s'}}>
          <div className="bg-gradient-to-r from-forest-deep to-forest-light rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              Experience the Amazon Forest Legacy
            </h3>
            <p className="text-white/90 mb-6 max-w-2xl mx-auto">
              Join hundreds of satisfied clients who have transformed their homes with 
              sustainable, masterfully crafted furniture that tells nature's story.
            </p>
            <button className="px-8 py-4 bg-earth-warm hover:bg-earth-warm/90 text-white font-semibold rounded-xl transition-all duration-300 hover-lift organic-shadow">
              Begin Your Journey
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}