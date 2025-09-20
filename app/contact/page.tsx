'use client';
import { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send, MessageSquare, Calendar, Award } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    projectType: '',
    urgency: 'normal'
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Contact form submitted:', formData);
    alert('Thank you for your message! We\'ll get back to you within 24 hours.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: '',
      projectType: '',
      urgency: 'normal'
    });
  };

  const contactMethods = [
    {
      icon: Phone,
      title: 'Call Us',
      detail: '+1 (555) 123-4567',
      description: 'Speak directly with Rajan',
      availability: 'Mon-Fri: 8am-6pm PST',
      action: 'Call Now',
      color: 'from-green-600 to-green-800'
    },
    {
      icon: Mail,
      title: 'Email Us',
      detail: 'rajan@amazonwoodcraft.com',
      description: 'Get a detailed response',
      availability: 'Response within 24 hours',
      action: 'Send Email',
      color: 'from-blue-600 to-blue-800'
    },
    {
      icon: MapPin,
      title: 'Visit Workshop',
      detail: '123 Forest Lane, Seattle WA 98101',
      description: 'See craftsmanship in action',
      availability: 'By appointment only',
      action: 'Get Directions',
      color: 'from-orange-600 to-orange-800'
    },
    {
      icon: Calendar,
      title: 'Schedule Consultation',
      detail: 'Free 1-hour consultation',
      description: 'Discuss your project in detail',
      availability: 'Available 7 days a week',
      action: 'Book Now',
      color: 'from-purple-600 to-purple-800'
    }
  ];

  const workshopHours = [
    { day: 'Monday - Friday', hours: '8:00 AM - 6:00 PM' },
    { day: 'Saturday', hours: '9:00 AM - 4:00 PM' },
    { day: 'Sunday', hours: 'By Appointment Only' }
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
              Get In
              <span className="block text-orange-400">Touch</span>
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
              Ready to bring your woodworking vision to life? Let's start a conversation about 
              your project and discover how four decades of Amazon forest craftsmanship can transform your space.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Multiple Ways to Connect</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose the method that works best for you. We're here to help bring your vision to life.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {contactMethods.map((method, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover-lift group text-center">
                <div className={`w-16 h-16 mx-auto bg-gradient-to-br ${method.color} rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <method.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-green-800 transition-colors duration-300">
                  {method.title}
                </h3>
                <div className="text-lg font-medium text-gray-800 mb-2">
                  {method.detail}
                </div>
                <p className="text-gray-600 text-sm mb-2">
                  {method.description}
                </p>
                <p className="text-gray-500 text-xs mb-4">
                  {method.availability}
                </p>
                <button className="w-full bg-green-800 hover:bg-green-900 text-white font-semibold py-3 rounded-lg transition-colors duration-300">
                  {method.action}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div className="bg-white rounded-3xl p-8 shadow-xl">
              <div className="mb-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Send Us a Message</h2>
                <p className="text-gray-600">
                  Fill out the form below and we'll get back to you within 24 hours. 
                  For urgent matters, please call us directly.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Full Name *</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Email Address *</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      placeholder="(555) 123-4567"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Project Type</label>
                    <select
                      name="projectType"
                      value={formData.projectType}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    >
                      <option value="">Select project type</option>
                      <option value="custom-furniture">Custom Furniture</option>
                      <option value="kitchen-cabinets">Kitchen Cabinets</option>
                      <option value="restoration">Restoration & Repair</option>
                      <option value="consultation">Design Consultation</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Subject *</label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    placeholder="Brief description of your inquiry"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Message *</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    placeholder="Tell us about your project, timeline, budget, or any questions you have..."
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Urgency</label>
                  <select
                    name="urgency"
                    value={formData.urgency}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  >
                    <option value="normal">Normal - Response within 24 hours</option>
                    <option value="urgent">Urgent - Response within 4 hours</option>
                    <option value="asap">ASAP - Please call me</option>
                  </select>
                </div>

                <button
                  type="submit"
                  className="w-full bg-green-800 hover:bg-green-900 text-white font-semibold py-4 rounded-lg transition-colors duration-300 flex items-center justify-center"
                >
                  Send Message
                  <Send className="h-5 w-5 ml-2" />
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              {/* Workshop Info */}
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Workshop Information</h3>
                
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <MapPin className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Address</h4>
                      <p className="text-gray-600">123 Forest Lane<br />Seattle, WA 98101</p>
                      <button className="text-green-600 hover:text-green-800 text-sm font-medium mt-1">
                        Get Directions →
                      </button>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <Phone className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Phone</h4>
                      <p className="text-gray-600">+1 (555) 123-4567</p>
                      <p className="text-sm text-gray-500">Direct line to Rajan</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <Mail className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Email</h4>
                      <p className="text-gray-600">rajan@amazonwoodcraft.com</p>
                      <p className="text-sm text-gray-500">Response within 24 hours</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Workshop Hours */}
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <Clock className="h-6 w-6 text-green-600 mr-2" />
                  Workshop Hours
                </h3>
                
                <div className="space-y-3">
                  {workshopHours.map((schedule, index) => (
                    <div key={index} className="flex justify-between items-center py-2 border-b border-gray-100 last:border-b-0">
                      <span className="font-medium text-gray-900">{schedule.day}</span>
                      <span className="text-gray-600">{schedule.hours}</span>
                    </div>
                  ))}
                </div>
                
                <div className="mt-6 p-4 bg-green-50 rounded-lg">
                  <p className="text-green-800 text-sm">
                    <strong>Note:</strong> Workshop visits are by appointment only to ensure we can give you our full attention 
                    and showcase our current projects safely.
                  </p>
                </div>
              </div>

              {/* Why Choose Us */}
              <div className="bg-gradient-to-br from-green-800 to-green-900 rounded-2xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-6">Why Choose Amazon Woodcraft?</h3>
                
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Award className="h-5 w-5 text-orange-400 flex-shrink-0" />
                    <span>40+ years of master craftsmanship</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Award className="h-5 w-5 text-orange-400 flex-shrink-0" />
                    <span>100% sustainable Amazon forest materials</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Award className="h-5 w-5 text-orange-400 flex-shrink-0" />
                    <span>500+ satisfied clients</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Award className="h-5 w-5 text-orange-400 flex-shrink-0" />
                    <span>Lifetime craftsmanship guarantee</span>
                  </div>
                </div>
                
                <div className="mt-6 pt-6 border-t border-white/20">
                  <p className="text-white/90 text-sm italic">
                    "Every piece tells a story of the forest, crafted with respect for nature and dedication to excellence."
                  </p>
                  <p className="text-orange-300 text-sm mt-2">- Rajan K K, Master Craftsman</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Find Our Workshop</h2>
            <p className="text-xl text-gray-600">
              Located in the heart of Seattle, our workshop welcomes visitors by appointment
            </p>
          </div>

          <div className="bg-gray-200 rounded-2xl h-96 flex items-center justify-center">
            <div className="text-center">
              <MapPin className="h-16 w-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-700 mb-2">Interactive Map</h3>
              <p className="text-gray-600 mb-4">123 Forest Lane, Seattle, WA 98101</p>
              <button className="px-6 py-3 bg-green-800 text-white font-semibold rounded-lg hover:bg-green-900 transition-colors duration-300">
                Get Directions
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}