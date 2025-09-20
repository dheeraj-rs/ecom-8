'use client';
import Link from 'next/link';
import { TreePine, Phone, Mail, MapPin, Facebook, Instagram, Twitter, Linkedin, Heart } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { href: '/', label: 'Home' },
    { href: '/gallery', label: 'Gallery' },
    { href: '/services', label: 'Services' },
    { href: '/about', label: 'About Us' },
    { href: '/custom-orders', label: 'Custom Orders' },
    { href: '/contact', label: 'Contact' }
  ];

  const services = [
    'Custom Furniture',
    'Kitchen Cabinets',
    'Restoration & Repair',
    'Installation Services',
    'Design Consultation',
    'Wood Finishing'
  ];

  return (
    <footer className="bg-gradient-to-b from-forest-deep to-forest-dark text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url('data:image/svg+xml,<svg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><g fill="%23${encodeURIComponent('FFFFFF')}" fill-opacity="0.1"><path d="M30 30c0-11.046-8.954-20-20-20s-20 8.954-20 20 8.954 20 20 20 20-8.954 20-20M60 30c0-11.046-8.954-20-20-20s-20 8.954-20 20 8.954 20 20 20 20-8.954 20-20"/></g></svg>')`,
        }} />
      </div>

      <div className="relative z-10">
        {/* Main Footer Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="lg:col-span-1">
              <Link href="/" className="flex items-center space-x-2 mb-6 group">
                <TreePine className="h-8 w-8 text-earth-warm group-hover:text-earth-light transition-colors duration-300" />
                <span className="text-2xl font-bold">Rajan K K</span>
              </Link>
              <p className="text-white/80 mb-6 leading-relaxed">
                Four decades of Amazon forest craftsmanship, bringing nature's finest gifts 
                into your home through sustainable, masterful woodworking.
              </p>
              
              {/* Contact Info */}
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-earth-warm flex-shrink-0" />
                  <span className="text-white/90">+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-earth-warm flex-shrink-0" />
                  <span className="text-white/90">rajan@amazonwoodcraft.com</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="h-5 w-5 text-earth-warm flex-shrink-0" />
                  <span className="text-white/90">123 Forest Lane, Seattle WA</span>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-xl font-semibold mb-6">Quick Links</h3>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.href}>
                    <Link 
                      href={link.href}
                      className="text-white/80 hover:text-earth-warm transition-colors duration-300 hover:translate-x-1 inline-block"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h3 className="text-xl font-semibold mb-6">Our Services</h3>
              <ul className="space-y-3">
                {services.map((service) => (
                  <li key={service} className="text-white/80">
                    {service}
                  </li>
                ))}
              </ul>
            </div>

            {/* Newsletter & Social */}
            <div>
              <h3 className="text-xl font-semibold mb-6">Stay Connected</h3>
              <p className="text-white/80 mb-4">
                Get updates on new projects, sustainable practices, and craftsmanship tips.
              </p>
              
              {/* Newsletter Signup */}
              <div className="mb-6">
                <div className="flex">
                  <input
                    type="email"
                    placeholder="Your email address"
                    className="flex-1 px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-l-lg text-white placeholder-white/60 focus:outline-none focus:bg-white/20 transition-colors duration-300"
                  />
                  <button className="px-6 py-3 bg-earth-warm hover:bg-earth-light text-white font-medium rounded-r-lg transition-colors duration-300">
                    Subscribe
                  </button>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex space-x-4">
                {[
                  { icon: Facebook, href: '#' },
                  { icon: Instagram, href: '#' },
                  { icon: Twitter, href: '#' },
                  { icon: Linkedin, href: '#' }
                ].map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    className="w-10 h-10 bg-white/10 hover:bg-earth-warm rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                  >
                    <social.icon className="h-5 w-5" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Awards & Certifications */}
        <div className="border-t border-white/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="flex items-center space-x-8 mb-4 md:mb-0">
                <div className="text-center">
                  <div className="text-2xl font-bold text-earth-warm">40+</div>
                  <div className="text-white/70 text-sm">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-earth-warm">500+</div>
                  <div className="text-white/70 text-sm">Happy Clients</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-earth-warm">100%</div>
                  <div className="text-white/70 text-sm">Sustainable Wood</div>
                </div>
              </div>
              
              <div className="flex items-center space-x-4 text-white/70">
                <span className="text-sm">Certified Sustainable Practices</span>
                <span className="w-2 h-2 bg-earth-warm rounded-full"></span>
                <span className="text-sm">Master Craftsman Licensed</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-white/10 bg-forest-deep">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="text-white/70 text-sm mb-2 md:mb-0">
                © {currentYear} Rajan K K Amazon Woodcraft. All rights reserved.
              </div>
              
              <div className="flex items-center text-white/70 text-sm">
                <span>Made with</span>
                <Heart className="h-4 w-4 mx-1 text-earth-warm fill-earth-warm" />
                <span>and sustainable practices</span>
              </div>
            </div>
            
            <div className="mt-4 pt-4 border-t border-white/5 text-center text-white/60 text-xs">
              From the heart of the Amazon forest to your home - where nature meets masterful artistry
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}