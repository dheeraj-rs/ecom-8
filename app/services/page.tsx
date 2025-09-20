'use client';
import { useState } from 'react';
import { Check, ArrowRight, Hammer, Home, PaintBucket, Wrench, Clock, DollarSign, Users, Award } from 'lucide-react';

export default function Services() {
  const [selectedService, setSelectedService] = useState<string | null>(null);

  const mainServices = [
    {
      id: 'custom-furniture',
      icon: Home,
      title: 'Custom Furniture',
      description: 'Bespoke furniture pieces designed to your exact specifications and lifestyle needs.',
      features: ['Dining Tables & Chairs', 'Bedroom Sets', 'Living Room Furniture', 'Office Desks', 'Storage Solutions'],
      pricing: 'Starting from $1,200',
      timeline: '3-6 weeks',
      popular: true,
      image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop'
    },
    {
      id: 'kitchen-cabinets',
      icon: PaintBucket,
      title: 'Kitchen Cabinets',
      description: 'Complete kitchen transformations with custom cabinetry and storage solutions.',
      features: ['Full Kitchen Design', 'Island Cabinets', 'Pantry Systems', 'Hardware Installation', 'Countertop Integration'],
      pricing: 'Starting from $8,500',
      timeline: '4-8 weeks',
      popular: false,
      image: 'https://images.pexels.com/photos/2724749/pexels-photo-2724749.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop'
    },
    {
      id: 'restoration',
      icon: Hammer,
      title: 'Restoration & Repair',
      description: 'Breathe new life into your cherished furniture pieces with expert restoration.',
      features: ['Antique Restoration', 'Refinishing', 'Structural Repairs', 'Hardware Replacement', 'Color Matching'],
      pricing: 'Starting from $350',
      timeline: '1-3 weeks',
      popular: false,
      image: 'https://images.pexels.com/photos/5974037/pexels-photo-5974037.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop'
    },
    {
      id: 'installation',
      icon: Wrench,
      title: 'Installation Services',
      description: 'Professional installation and setup of all woodwork pieces in your home.',
      features: ['On-site Installation', 'Assembly Services', 'Mounting & Hanging', 'Final Adjustments', 'Cleanup'],
      pricing: 'Starting from $150',
      timeline: '1-2 days',
      popular: false,
      image: 'https://images.pexels.com/photos/1571468/pexels-photo-1571468.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop'
    }
  ];

  const readyMadeItems = [
    {
      name: 'Amazon Coffee Tables',
      price: '$450-$850',
      description: 'Live-edge coffee tables showcasing natural wood beauty',
      image: 'https://images.pexels.com/photos/1571463/pexels-photo-1571463.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
      inStock: 3,
      materials: ['Mahogany', 'Cedar', 'Teak']
    },
    {
      name: 'Handcrafted Dining Chairs',
      price: '$180-$320',
      description: 'Ergonomic chairs with traditional joinery techniques',
      image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
      inStock: 8,
      materials: ['Oak', 'Walnut', 'Cherry']
    },
    {
      name: 'Heritage Bookshelves',
      price: '$650-$1200',
      description: 'Traditional bookshelves with adjustable shelving',
      image: 'https://images.pexels.com/photos/2724748/pexels-photo-2724748.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
      inStock: 2,
      materials: ['Oak', 'Mahogany']
    },
    {
      name: 'Elegant Side Tables',
      price: '$280-$480',
      description: 'Versatile accent tables for any room',
      image: 'https://images.pexels.com/photos/1571468/pexels-photo-1571468.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
      inStock: 5,
      materials: ['Cedar', 'Walnut', 'Teak']
    },
    {
      name: 'Executive Desks',
      price: '$1200-$2400',
      description: 'Professional desks with built-in storage',
      image: 'https://images.pexels.com/photos/667838/pexels-photo-667838.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
      inStock: 1,
      materials: ['Walnut', 'Oak']
    },
    {
      name: 'Storage Benches',
      price: '$320-$580',
      description: 'Multi-functional seating with hidden storage',
      image: 'https://images.pexels.com/photos/1571463/pexels-photo-1571463.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
      inStock: 4,
      materials: ['Cedar', 'Oak', 'Pine']
    }
  ];

  const processSteps = [
    {
      step: 1,
      title: 'Initial Consultation',
      description: 'Free consultation to discuss your vision, needs, and budget',
      duration: '1 hour'
    },
    {
      step: 2,
      title: 'Design & Planning',
      description: 'Detailed design creation with material selection and timeline',
      duration: '3-5 days'
    },
    {
      step: 3,
      title: 'Material Sourcing',
      description: 'Sustainable wood sourcing and preparation',
      duration: '1-2 weeks'
    },
    {
      step: 4,
      title: 'Craftsmanship',
      description: 'Expert handcrafting with regular progress updates',
      duration: '2-6 weeks'
    },
    {
      step: 5,
      title: 'Finishing & Delivery',
      description: 'Final finishing, quality check, and professional installation',
      duration: '3-5 days'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-green-900 to-green-800 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20" />
        <div 
          className="absolute inset-0 parallax-bg opacity-30"
          style={{
            backgroundImage: `url('https://images.pexels.com/photos/1632790/pexels-photo-1632790.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1280&fit=crop')`,
          }}
        />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Our
              <span className="block text-orange-400">Services</span>
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
              From concept to completion, we offer comprehensive woodworking services 
              that bring your vision to life with unmatched quality and attention to detail.
            </p>
          </div>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Professional Woodworking Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Four decades of expertise in creating beautiful, sustainable furniture and woodwork
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {mainServices.map((service, index) => (
              <div 
                key={service.id}
                className={`relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover-lift group cursor-pointer ${
                  selectedService === service.id ? 'ring-2 ring-green-500' : ''
                }`}
                onClick={() => setSelectedService(selectedService === service.id ? null : service.id)}
              >
                {service.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-orange-500 text-white text-xs font-bold px-4 py-1 rounded-full">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="flex items-start space-x-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-gradient-to-br from-green-600 to-green-800 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <service.icon className="h-8 w-8 text-white" />
                    </div>
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="text-2xl font-semibold text-gray-900 mb-3 group-hover:text-green-800 transition-colors duration-300">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      {service.description}
                    </p>
                    
                    <div className="flex items-center space-x-6 text-sm text-gray-500 mb-4">
                      <div className="flex items-center space-x-1">
                        <DollarSign className="h-4 w-4" />
                        <span>{service.pricing}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Clock className="h-4 w-4" />
                        <span>{service.timeline}</span>
                      </div>
                    </div>
                    
                    {selectedService === service.id && (
                      <div className="mt-6 p-4 bg-green-50 rounded-lg">
                        <h4 className="font-semibold text-green-800 mb-3">What's Included:</h4>
                        <div className="grid grid-cols-1 gap-2">
                          {service.features.map((feature, idx) => (
                            <div key={idx} className="flex items-center space-x-2">
                              <Check className="h-4 w-4 text-green-600 flex-shrink-0" />
                              <span className="text-gray-700 text-sm">{feature}</span>
                            </div>
                          ))}
                        </div>
                        <div className="mt-4 flex space-x-3">
                          <button className="px-6 py-2 bg-green-800 text-white font-semibold rounded-lg hover:bg-green-900 transition-colors duration-300">
                            Get Quote
                          </button>
                          <button className="px-6 py-2 border border-green-800 text-green-800 font-semibold rounded-lg hover:bg-green-50 transition-colors duration-300">
                            Learn More
                          </button>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gradient-to-r from-green-50 to-orange-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Our Craftsmanship Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From initial consultation to final installation, every step is carefully planned and executed
            </p>
          </div>

          <div className="relative">
            {/* Process Line */}
            <div className="absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-green-600 to-orange-500 transform -translate-y-1/2 hidden lg:block" />
            
            <div className="grid lg:grid-cols-5 gap-8">
              {processSteps.map((step, index) => (
                <div key={step.step} className="relative text-center">
                  <div className="relative z-10 mb-6">
                    <div className="w-16 h-16 mx-auto bg-white border-4 border-green-600 rounded-full flex items-center justify-center shadow-lg">
                      <span className="text-2xl font-bold text-green-800">{step.step}</span>
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{step.title}</h3>
                  <p className="text-gray-600 mb-2">{step.description}</p>
                  <span className="text-sm text-orange-600 font-medium">{step.duration}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Ready-Made Items */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Ready-Made Collection
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Immediate availability items crafted with the same attention to detail, 
              perfect for those who need beautiful furniture right away.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {readyMadeItems.map((item, index) => (
              <div key={index} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover-lift group">
                <div className="relative overflow-hidden">
                  <img 
                    src={item.image}
                    alt={item.name}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4">
                    <span className="bg-green-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                      {item.inStock} in stock
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-green-800 transition-colors duration-300">
                    {item.name}
                  </h3>
                  <p className="text-gray-600 mb-4">{item.description}</p>
                  
                  <div className="mb-4">
                    <div className="text-2xl font-bold text-orange-600 mb-2">{item.price}</div>
                    <div className="flex flex-wrap gap-1">
                      {item.materials.map((material, idx) => (
                        <span key={idx} className="px-2 py-1 bg-gray-100 text-gray-600 rounded text-xs">
                          {material}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex space-x-2">
                    <button className="flex-1 bg-green-800 hover:bg-green-900 text-white py-3 rounded-lg transition-colors duration-300 font-semibold">
                      Buy Now
                    </button>
                    <button className="px-4 py-3 border border-green-800 text-green-800 rounded-lg hover:bg-green-50 transition-colors duration-300">
                      <ArrowRight className="h-5 w-5" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-r from-green-900 to-green-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="flex items-center justify-center mb-4">
                <Users className="h-8 w-8 text-orange-400 mr-2" />
                <span className="text-4xl font-bold">500+</span>
              </div>
              <p className="text-white/90">Happy Clients</p>
            </div>
            <div>
              <div className="flex items-center justify-center mb-4">
                <Award className="h-8 w-8 text-orange-400 mr-2" />
                <span className="text-4xl font-bold">1000+</span>
              </div>
              <p className="text-white/90">Projects Completed</p>
            </div>
            <div>
              <div className="flex items-center justify-center mb-4">
                <Clock className="h-8 w-8 text-orange-400 mr-2" />
                <span className="text-4xl font-bold">40+</span>
              </div>
              <p className="text-white/90">Years Experience</p>
            </div>
            <div>
              <div className="flex items-center justify-center mb-4">
                <Check className="h-8 w-8 text-orange-400 mr-2" />
                <span className="text-4xl font-bold">98%</span>
              </div>
              <p className="text-white/90">Satisfaction Rate</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-gradient-to-r from-green-800 to-green-900 rounded-3xl p-12 text-white">
            <h2 className="text-3xl font-bold mb-6">Ready to Start Your Project?</h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Let's discuss your vision and create something extraordinary together. 
              Every masterpiece begins with a conversation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-orange-600 hover:bg-orange-700 text-white font-semibold rounded-xl transition-all duration-300 hover-lift">
                Get Free Consultation
              </button>
              <button className="px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-xl backdrop-blur-sm transition-all duration-300 border border-white/20 flex items-center justify-center">
                View Portfolio
                <ArrowRight className="h-5 w-5 ml-2" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}