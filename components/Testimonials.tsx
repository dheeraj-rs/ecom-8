'use client';
import { useState, useEffect, useRef } from 'react';
import { Star, Quote, ChevronLeft, ChevronRight, User } from 'lucide-react';

export default function Testimonials() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

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

  const testimonials = [
    {
      id: 1,
      name: 'Sarah Martinez',
      role: 'Homeowner',
      location: 'Seattle, WA',
      rating: 5,
      text: 'Rajan transformed our dining room with the most beautiful mahogany table I\'ve ever seen. The craftsmanship is absolutely incredible - every detail shows his 40+ years of experience. The wood grain tells its own story.',
      project: 'Custom Dining Set',
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop'
    },
    {
      id: 2,
      name: 'Michael Chen',
      role: 'Interior Designer',
      location: 'Portland, OR',
      rating: 5,
      text: 'Working with Rajan has been a dream for my clients. His understanding of wood and ability to bring forest elements into modern homes is unmatched. Every piece feels alive with natural energy.',
      project: 'Multiple Custom Projects',
      image: 'https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop'
    },
    {
      id: 3,
      name: 'Emily Rodriguez',
      role: 'Business Owner',
      location: 'San Francisco, CA',
      rating: 5,
      text: 'The kitchen cabinets Rajan created for our restaurant showcase the beauty of sustainable wood perfectly. Customers constantly compliment the natural warmth and organic feel of the space.',
      project: 'Commercial Kitchen Cabinets',
      image: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop'
    },
    {
      id: 4,
      name: 'David Thompson',
      role: 'Architect',
      location: 'Vancouver, BC',
      rating: 5,
      text: 'Rajan\'s work elevates every space we design together. His ability to honor the natural character of wood while meeting contemporary design needs is truly masterful. A true artist.',
      project: 'Residential Built-ins',
      image: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop'
    },
    {
      id: 5,
      name: 'Jennifer Lee',
      role: 'Homeowner',
      location: 'Los Angeles, CA',
      rating: 5,
      text: 'Our home office transformation exceeded all expectations. Rajan created a peaceful workspace that feels like a forest retreat. The attention to detail and sustainable practices make it even more special.',
      project: 'Home Office Suite',
      image: 'https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop'
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, []);

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star 
        key={i} 
        className={`h-5 w-5 ${i < rating ? 'text-earth-warm fill-earth-warm' : 'text-gray-300'}`} 
      />
    ));
  };

  return (
    <section 
      ref={sectionRef}
      className="py-20 relative overflow-hidden"
      style={{
        backgroundImage: `url('https://images.pexels.com/photos/1632790/pexels-photo-1632790.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1280&fit=crop')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-forest-deep/90 via-forest-medium/85 to-forest-deep/90" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className={`text-center mb-16 scroll-fade ${isVisible ? 'visible' : ''}`}>
          <span className="inline-block px-4 py-2 bg-earth-warm/20 text-earth-light rounded-full text-sm font-medium mb-4">
            Client Testimonials
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Stories from Our
            <span className="block text-earth-warm">Happy Clients</span>
          </h2>
          <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
            Four decades of craftsmanship have created lasting relationships and transformed countless homes. 
            Here's what our clients say about their Amazon forest woodworking experience.
          </p>
        </div>

        {/* Testimonial Carousel */}
        <div className={`relative scroll-fade ${isVisible ? 'visible' : ''}`} style={{transitionDelay: '0.2s'}}>
          <div className="bg-white/95 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-2xl">
            <div className="flex flex-col lg:flex-row items-center gap-8">
              {/* Client Photo & Info */}
              <div className="flex-shrink-0 text-center lg:text-left">
                <div className="relative mb-6">
                  <img 
                    src={testimonials[currentSlide].image}
                    alt={testimonials[currentSlide].name}
                    className="w-24 h-24 rounded-full object-cover mx-auto lg:mx-0 shadow-lg"
                  />
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-earth-warm rounded-full flex items-center justify-center">
                    <Quote className="h-4 w-4 text-white" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-forest-deep mb-1">
                  {testimonials[currentSlide].name}
                </h3>
                <p className="text-gray-600 text-sm mb-2">
                  {testimonials[currentSlide].role}
                </p>
                <p className="text-gray-500 text-xs mb-4">
                  {testimonials[currentSlide].location}
                </p>
                <div className="flex justify-center lg:justify-start mb-4">
                  {renderStars(testimonials[currentSlide].rating)}
                </div>
                <div className="inline-block px-3 py-1 bg-forest-light/10 text-forest-deep rounded-full text-xs font-medium">
                  {testimonials[currentSlide].project}
                </div>
              </div>

              {/* Testimonial Content */}
              <div className="flex-1">
                <div className="text-2xl md:text-3xl text-forest-deep leading-relaxed mb-6 italic">
                  "{testimonials[currentSlide].text}"
                </div>
                
                {/* Navigation */}
                <div className="flex items-center justify-between">
                  <div className="flex space-x-2">
                    {testimonials.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentSlide(index)}
                        className={`w-3 h-3 rounded-full transition-all duration-300 ${
                          index === currentSlide 
                            ? 'bg-earth-warm scale-125' 
                            : 'bg-gray-300 hover:bg-gray-400'
                        }`}
                      />
                    ))}
                  </div>
                  
                  <div className="flex space-x-2">
                    <button
                      onClick={prevSlide}
                      className="w-10 h-10 bg-forest-light hover:bg-forest-deep text-white rounded-full flex items-center justify-center transition-colors duration-300"
                    >
                      <ChevronLeft className="h-5 w-5" />
                    </button>
                    <button
                      onClick={nextSlide}
                      className="w-10 h-10 bg-forest-light hover:bg-forest-deep text-white rounded-full flex items-center justify-center transition-colors duration-300"
                    >
                      <ChevronRight className="h-5 w-5" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className={`grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 scroll-fade ${isVisible ? 'visible' : ''}`} style={{transitionDelay: '0.4s'}}>
          {[
            { number: '500+', label: 'Happy Clients' },
            { number: '1000+', label: 'Projects Completed' },
            { number: '40+', label: 'Years Experience' },
            { number: '98%', label: 'Client Satisfaction' }
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-earth-warm mb-2">
                {stat.number}
              </div>
              <div className="text-white/90">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className={`text-center mt-16 scroll-fade ${isVisible ? 'visible' : ''}`} style={{transitionDelay: '0.6s'}}>
          <h3 className="text-2xl font-bold text-white mb-4">
            Ready to Create Your Own Story?
          </h3>
          <p className="text-white/90 mb-6 max-w-2xl mx-auto">
            Join our family of satisfied clients and experience the Amazon forest legacy firsthand.
          </p>
          <button className="px-8 py-4 bg-earth-warm hover:bg-earth-warm/90 text-white font-semibold rounded-xl transition-all duration-300 hover-lift organic-shadow">
            Start Your Project Today
          </button>
        </div>
      </div>
    </section>
  );
}