import React from 'react';
import { Github, Linkedin, Mail, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold text-white mb-4">izcode</h3>
            <p className="text-gray-400">Transformando ideias em realidade digital através de soluções inovadoras em desenvolvimento web e design.</p>
          </div>
          <div>
            <h3 className="text-xl font-bold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="/services" className="text-gray-400 hover:text-indigo-400">Services</a></li>
              <li><a href="/portfolio" className="text-gray-400 hover:text-indigo-400">Portfolio</a></li>
              <li><a href="/about" className="text-gray-400 hover:text-indigo-400">About Us</a></li>
              <li><a href="/contact" className="text-gray-400 hover:text-indigo-400">Contact</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold text-white mb-4">Contact Us</h3>
            <div className="space-y-4">
              <a href="tel:+1234567890" className="flex items-center text-gray-400 hover:text-indigo-400">
                <Phone className="h-5 w-5 mr-2" />
                <span>+1 (234) 567-890</span>
              </a>
              <a href="mailto:contact@izcode.com" className="flex items-center text-gray-400 hover:text-indigo-400">
                <Mail className="h-5 w-5 mr-2" />
                <span>contact@izcode.com</span>
              </a>
              <div className="flex space-x-4 mt-4">
                <a href="https://github.com" className="text-gray-400 hover:text-indigo-400">
                  <Github className="h-6 w-6" />
                </a>
                <a href="https://linkedin.com" className="text-gray-400 hover:text-indigo-400">
                  <Linkedin className="h-6 w-6" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} izcode. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;