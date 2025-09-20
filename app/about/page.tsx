'use client';
import { useState, useEffect, useRef } from 'react';
import { TreePine, Hammer, Heart, Leaf, Award, Users, Calendar, Star, ArrowRight } from 'lucide-react';

export default function About() {
  const [activeTab, setActiveTab] = useState('story');
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

  const milestones = [
    {
      year: '1984',
      title: 'The Beginning',
      description: 'Started woodworking journey in the heart of Amazon region, learning traditional techniques from local masters.',
      image: 'https://images.pexels.com/photos/5974037/pexels-photo-5974037.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop'
    },
    {
      year: '1990',
      title: 'First Workshop',
      description: 'Established first professional workshop, focusing on sustainable practices and quality craftsmanship.',
      image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop'
    },
    {
      year: '2000',
      title: 'Recognition',
      description: 'Received first major award for excellence in traditional woodworking and sustainable practices.',
      image: 'https://images.pexels.com/photos/2724749/pexels-photo-2724749.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop'
    },
    {
      year: '2010',
      title: 'Expansion',
      description: 'Expanded operations to serve clients across the Pacific Northwest while maintaining artisanal quality.',
      image: 'https://images.pexels.com/photos/1571463/pexels-photo-1571463.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop'
    },
    {
      year: '2020',
      title: 'Legacy',
      description: 'Celebrated 35+ years of craftsmanship with over 1000 completed projects and 500+ satisfied clients.',
      image: 'https://images.pexels.com/photos/2724748/pexels-photo-2724748.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop'
    }
  ];

  const values = [
    {
      icon: TreePine,
      title: 'Sustainability',
      description: 'Every piece of wood is responsibly sourced, honoring the forest and ensuring future generations can enjoy nature\'s gifts.',
      color: 'from-green-600 to-green-800'
    },
    {
      icon: Hammer,
      title: 'Craftsmanship',
      description: 'Four decades of expertise ensuring every detail meets the highest standards of quality and artistry.',
      color: 'from-orange-600 to-orange-800'
    },
    {
      icon: Heart,
      title: 'Passion',
      description: 'Each project is infused with love, dedication, and deep respect for the natural materials we work with.',
      color: 'from-red-600 to-red-800'
    },
    {
      icon: Leaf,
      title: 'Harmony',
      description: 'Creating designs that celebrate wood\'s inherent beauty while serving modern lifestyle needs.',
      color: 'from-emerald-600 to-emerald-800'
    }
  ];

  const achievements = [
    {
      icon: Award,
      title: 'Master Craftsman Certification',
      year: '2005',
      description: 'Certified by the International Woodworking Association'
    },
    {
      icon: TreePine,
      title: 'Sustainable Practices Award',
      year: '2015',
      description: 'Recognized for outstanding commitment to environmental responsibility'
    },
    {
      icon: Users,
      title: 'Client Excellence Award',
      year: '2020',
      description: 'Awarded for maintaining 98% client satisfaction over 35+ years'
    },
    {
      icon: Star,
      title: 'Artisan of the Year',
      year: '2022',
      description: 'Regional recognition for exceptional craftsmanship and innovation'
    }
  ];

  const teamMembers = [
    {
      name: 'Rajan K K',
      role: 'Master Craftsman & Founder',
      experience: '40+ years',
      specialty: 'Traditional Amazon woodworking techniques',
      image: 'https://images.pexels.com/photos/5974037/pexels-photo-5974037.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop',
      bio: 'Born and raised in the Amazon region, Rajan developed a deep connection with wood from an early age. His journey began as an apprentice to local masters, learning traditional techniques passed down through generations.'
    },
    {
      name: 'Maria Santos',
      role: 'Design Specialist',
      experience: '15+ years',
      specialty: 'Modern design integration',
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop',
      bio: 'Maria brings contemporary design sensibilities to traditional craftsmanship, ensuring each piece meets modern aesthetic and functional requirements while honoring natural beauty.'
    },
    {
      name: 'Carlos Rivera',
      role: 'Finishing Expert',
      experience: '12+ years',
      specialty: 'Natural wood finishing',
      image: 'https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop',
      bio: 'Carlos specializes in bringing out the natural beauty of wood through expert finishing techniques, using eco-friendly products that enhance rather than mask the wood\'s character.'
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
              <span className="block text-orange-400">Story</span>
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
              Four decades of Amazon forest craftsmanship, where traditional techniques 
              meet modern excellence in sustainable woodworking.
            </p>
          </div>
        </div>
      </section>

      {/* Navigation Tabs */}
      <section className="py-8 bg-white border-b sticky top-16 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {[
              { id: 'story', label: 'Our Story' },
              { id: 'values', label: 'Our Values' },
              { id: 'timeline', label: 'Timeline' },
              { id: 'team', label: 'Meet the Team' },
              { id: 'achievements', label: 'Achievements' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  activeTab === tab.id
                    ? 'bg-green-800 text-white shadow-lg scale-105'
                    : 'bg-gray-100 text-gray-700 hover:bg-green-100 hover:text-green-800'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      {activeTab === 'story' && (
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
              <div>
                <h2 className="text-4xl font-bold text-gray-900 mb-6">
                  From Amazon Forest to Your Home
                </h2>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  Born from a deep connection with nature and refined through decades of dedication, 
                  Rajan K K's woodworking legacy represents the perfect harmony between forest wisdom 
                  and masterful craftsmanship.
                </p>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  Beginning his journey in the heart of the Amazon region, Rajan K K developed 
                  a profound understanding of wood as a living material. Each grain tells a story, 
                  each knot holds character, and every piece carries the essence of the forest.
                </p>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  Over four decades, this philosophy has shaped not just furniture, but a legacy 
                  of sustainable craftsmanship that honors both tradition and innovation.
                </p>
                
                <div className="grid grid-cols-3 gap-6 mb-8">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-green-800 mb-2">40+</div>
                    <div className="text-gray-600">Years Experience</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-green-800 mb-2">500+</div>
                    <div className="text-gray-600">Happy Clients</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-green-800 mb-2">1000+</div>
                    <div className="text-gray-600">Projects</div>
                  </div>
                </div>
              </div>

              <div className="relative">
                <img 
                  src="https://images.pexels.com/photos/5974037/pexels-photo-5974037.jpeg?auto=compress&cs=tinysrgb&w=600&h=500&fit=crop"
                  alt="Rajan K K in his workshop"
                  className="w-full h-[500px] object-cover rounded-2xl shadow-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-green-900/30 to-transparent rounded-2xl" />
                
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="bg-white/95 backdrop-blur-sm rounded-xl p-4">
                    <h3 className="text-xl font-bold text-gray-900 mb-1">Rajan K K</h3>
                    <p className="text-gray-600">Master Craftsman since 1984</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Philosophy */}
            <div className="bg-gradient-to-r from-green-50 to-orange-50 rounded-3xl p-12">
              <div className="text-center mb-8">
                <h3 className="text-3xl font-bold text-gray-900 mb-4">Our Philosophy</h3>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  "Every piece of wood has a soul, a story to tell. Our role is not to impose our will, 
                  but to listen, understand, and help that story unfold in its most beautiful form."
                </p>
                <div className="mt-4 text-gray-500">- Rajan K K, Master Craftsman</div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Values Section */}
      {activeTab === 'values' && (
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Core Values</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                These principles guide every decision we make and every piece we create
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {values.map((value, index) => (
                <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover-lift group">
                  <div className="flex items-start space-x-6">
                    <div className={`w-16 h-16 bg-gradient-to-br ${value.color} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                      <value.icon className="h-8 w-8 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-semibold text-gray-900 mb-4 group-hover:text-green-800 transition-colors duration-300">
                        {value.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {value.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Timeline Section */}
      {activeTab === 'timeline' && (
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Journey</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Four decades of growth, learning, and creating beautiful woodwork
              </p>
            </div>

            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-green-600 to-orange-500 hidden lg:block" />
              
              <div className="space-y-12">
                {milestones.map((milestone, index) => (
                  <div key={index} className={`flex items-center ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}>
                    <div className="lg:w-1/2 lg:px-8">
                      <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover-lift">
                        <div className="flex items-center mb-4">
                          <div className="w-12 h-12 bg-gradient-to-br from-green-600 to-green-800 rounded-full flex items-center justify-center text-white font-bold text-lg mr-4">
                            {milestone.year.slice(-2)}
                          </div>
                          <div>
                            <h3 className="text-xl font-semibold text-gray-900">{milestone.title}</h3>
                            <div className="text-green-600 font-medium">{milestone.year}</div>
                          </div>
                        </div>
                        <p className="text-gray-600 leading-relaxed">
                          {milestone.description}
                        </p>
                      </div>
                    </div>
                    
                    <div className="lg:w-1/2 lg:px-8 mt-6 lg:mt-0">
                      <img 
                        src={milestone.image}
                        alt={milestone.title}
                        className="w-full h-64 object-cover rounded-2xl shadow-lg"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Team Section */}
      {activeTab === 'team' && (
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Meet Our Team</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Passionate craftspeople dedicated to creating exceptional woodwork
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              {teamMembers.map((member, index) => (
                <div key={index} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover-lift group">
                  <div className="relative">
                    <img 
                      src={member.image}
                      alt={member.name}
                      className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4 text-white">
                      <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                      <p className="text-white/90 text-sm">{member.role}</p>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <div className="flex justify-between items-center mb-4">
                      <span className="text-green-600 font-medium">{member.experience}</span>
                      <span className="px-3 py-1 bg-orange-100 text-orange-800 rounded-full text-sm">
                        {member.specialty}
                      </span>
                    </div>
                    <p className="text-gray-600 leading-relaxed">
                      {member.bio}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Achievements Section */}
      {activeTab === 'achievements' && (
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Recognition & Awards</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our commitment to excellence has been recognized by industry leaders and clients alike
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-16">
              {achievements.map((achievement, index) => (
                <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover-lift group">
                  <div className="flex items-start space-x-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-orange-600 to-orange-800 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <achievement.icon className="h-8 w-8 text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="text-xl font-semibold text-gray-900 group-hover:text-green-800 transition-colors duration-300">
                          {achievement.title}
                        </h3>
                        <span className="text-orange-600 font-bold">{achievement.year}</span>
                      </div>
                      <p className="text-gray-600 leading-relaxed">
                        {achievement.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Certifications */}
            <div className="bg-gradient-to-r from-green-50 to-orange-50 rounded-3xl p-12">
              <div className="text-center mb-8">
                <h3 className="text-3xl font-bold text-gray-900 mb-4">Certifications & Memberships</h3>
                <p className="text-xl text-gray-600">
                  Professional affiliations that ensure the highest standards
                </p>
              </div>
              
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Award className="h-8 w-8 text-white" />
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">Master Craftsman</h4>
                  <p className="text-gray-600 text-sm">International Woodworking Association</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <TreePine className="h-8 w-8 text-white" />
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">Sustainable Practices</h4>
                  <p className="text-gray-600 text-sm">Forest Stewardship Council</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="h-8 w-8 text-white" />
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">Professional Member</h4>
                  <p className="text-gray-600 text-sm">American Woodworking Guild</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-green-900 to-green-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Experience the Amazon Forest Legacy</h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Join our family of satisfied clients and discover how four decades of craftsmanship 
            can transform your space with sustainable, beautiful woodwork.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-orange-600 hover:bg-orange-700 text-white font-semibold rounded-xl transition-all duration-300 hover-lift">
              Start Your Project
            </button>
            <button className="px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-xl backdrop-blur-sm transition-all duration-300 border border-white/20 flex items-center justify-center">
              View Our Work
              <ArrowRight className="h-5 w-5 ml-2" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}