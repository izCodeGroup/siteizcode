import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Code2, Menu, X } from 'lucide-react';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-900 border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <Code2 className="h-8 w-8 text-indigo-400" />
              <span className="ml-2 text-2xl font-bold text-white">IzCode</span>
            </Link>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            <Link to="/" className="text-gray-300 hover:text-indigo-400 px-3 py-2 text-sm font-medium">Home</Link>
            <Link to="/services" className="text-gray-300 hover:text-indigo-400 px-3 py-2 text-sm font-medium">Services</Link>
            <Link to="/about" className="text-gray-300 hover:text-indigo-400 px-3 py-2 text-sm font-medium">About</Link>
            <Link to="/portfolio" className="text-gray-300 hover:text-indigo-400 px-3 py-2 text-sm font-medium">Portfolio</Link>
            <Link to="/contact" className="bg-indigo-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-indigo-700">Contact</Link>
          </div>
          
          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-300 hover:text-indigo-400 focus:outline-none">
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -10 }} 
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="md:hidden bg-gray-900 border-t border-gray-800 px-4 py-2"
        >
          <Link to="/" className="block text-gray-300 hover:text-indigo-400 py-2">Home</Link>
          <Link to="/services" className="block text-gray-300 hover:text-indigo-400 py-2">Services</Link>
          <Link to="/about" className="block text-gray-300 hover:text-indigo-400 py-2">About</Link>
          <Link to="/portfolio" className="block text-gray-300 hover:text-indigo-400 py-2">Portfolio</Link>
          <Link to="/contact" className="block bg-indigo-600 text-white text-center px-4 py-2 rounded-md hover:bg-indigo-700">Contact</Link>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;
