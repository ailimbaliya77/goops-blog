import React from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom';

function Header() {

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
      setIsMenuOpen(!isMenuOpen);
    };

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex items-center justify-between py-4">
        <div className="flex items-center space-x-2">
          <span className="font-bold text-2xl text-orange-700">GoopsBlog</span>
        </div>
        
        {/* Mobile menu button */}
        <div className="md:hidden">
          <button 
            onClick={toggleMenu}
            className="text-black hover:text-gray-200 focus:outline-none"
          >
            <svg className="w-6 h-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
              {isMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12"></path>
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16"></path>
              )}
            </svg>
          </button>
        </div>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-4">
          <Link to="/" className="hover:text-gray-200 px-3 py-2 rounded-md hover:bg-orange-700 transition">Home</Link>
          <Link to="/fitness" className="hover:text-gray-200 px-3 py-2 rounded-md hover:bg-orange-700 transition">Fitness</Link>
          <Link to="/beauty-fashion" className="hover:text-gray-200 px-3 py-2 rounded-md hover:bg-orange-700 transition">Beauty & Fashion</Link>
          <Link to="/cooking" className="hover:text-gray-200 px-3 py-2 rounded-md hover:bg-orange-700 transition">Cooking</Link>
          <Link to="/Life style" className="hover:text-gray-200 px-3 py-2 rounded-md hover:bg-orange-700 transition">Life style</Link>
          <Link to="/travel" className="hover:text-gray-200 px-3 py-2 rounded-md hover:bg-orange-700 transition">Travel</Link>
          <Link to="/tech" className="hover:text-gray-200 px-3 py-2 rounded-md hover:bg-orange-700 transition">Tech</Link>
        </nav>
      </div>
      
      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden py-3 border-t border-blue-700">
          <div className="flex flex-col space-y-2">
            <Link to="/" className="block px-3 py-2 rounded-md hover:bg-orange-700 transition" onClick={toggleMenu}>Home</Link>
            <Link to="/fitness" className="block px-3 py-2 rounded-md hover:bg-orange-700 transition" onClick={toggleMenu}>Fitness</Link>
            <Link to="/beauty-fashion" className="block px-3 py-2 rounded-md hover:bg-orange-700 transition" onClick={toggleMenu}>Beauty & Fashion</Link>
            <Link to="/cooking" className="block px-3 py-2 rounded-md hover:bg-orange-700 transition" onClick={toggleMenu}>Cooking</Link>
            <Link to="/Life style" className="block px-3 py-2 rounded-md hover:bg-orange-700 transition" onClick={toggleMenu}>Life style</Link>
            <Link to="/travel" className="block px-3 py-2 rounded-md hover:bg-orange-700 transition" onClick={toggleMenu}>Travel</Link>
            <Link to="/tech" className="block px-3 py-2 rounded-md hover:bg-orange-700 transition" onClick={toggleMenu}>Tech</Link>
          </div>
        </div>
      )}
    </div>
  </header>
  )
}

export default Header
