import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Music, ChevronDown } from 'lucide-react';
import logo from "../../assets/logos/sc_stamp_logo.png"

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
  ];

  const scServices = [
    { name: 'SC Mgmt', href: '/management', description: 'Artist Management' },
    { name: 'SC Live', href: '/live', description: 'Live Events' },
    { name: 'SC Media', href: '/media', description: 'Media Coverage' },
    // { name: 'SC Records', href: '/records', description: 'Record Label' },
    // { name: 'SC Studio', href: '/studio', description: 'Studio Services' },
  ];

  const additionalItems = [
    { name: 'Submissions', href: '/submissions' },
    { name: 'Contact', href: '/contact' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/95 backdrop-blur-md border-b border-purple-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 group">
          <img className='w-6 h-6 text-purple-400 group-hover:text-purple-300 transition-colors' src = {logo} />
            {/* <Music className="w-6 h-6 text-purple-400 group-hover:text-purple-300 transition-colors" /> */}
            <span className="text-white font-black text-xl tracking-tight group-hover:text-purple-300 transition-colors" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 900 }}>
              SoundCheck
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`font-bold transition-all duration-200 hover:text-purple-400 ${
                  isActive(item.href) ? 'text-purple-400' : 'text-white'
                }`}
                style={{ fontFamily: 'Inter, sans-serif', fontWeight: 700 }}
              >
                {item.name}
              </Link>
            ))}

            {/* SC Services Dropdown */}
            <div className="relative">
              <button
                onMouseEnter={() => setIsDropdownOpen(true)}
                onMouseLeave={() => setIsDropdownOpen(false)}
                className="flex items-center space-x-1 text-white font-bold hover:text-purple-400 transition-colors"
                style={{ fontFamily: 'Inter, sans-serif', fontWeight: 700 }}
              >
                <span>SC Services</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} />
              </button>

              {/* Dropdown Menu */}
              <div
                className={`absolute top-full left-0 mt-2 w-64 bg-black/95 backdrop-blur-md border border-purple-500/20 rounded-xl shadow-2xl transition-all duration-300 ${
                  isDropdownOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'
                }`}
                onMouseEnter={() => setIsDropdownOpen(true)}
                onMouseLeave={() => setIsDropdownOpen(false)}
              >
                <div className="p-2">
                  {scServices.map((service) => (
                    <Link
                      key={service.name}
                      to={service.href}
                      className={`block px-4 py-3 rounded-lg transition-all duration-200 hover:bg-purple-600/20 group ${
                        isActive(service.href) ? 'bg-purple-600/30 text-purple-300' : 'text-white'
                      }`}
                    >
                      <div className="font-bold group-hover:text-purple-300" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 700 }}>
                        {service.name}
                      </div>
                      <div className="text-sm text-gray-400 group-hover:text-purple-400" style={{ fontFamily: 'Inter, sans-serif' }}>
                        {service.description}
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {additionalItems.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`font-bold transition-all duration-200 hover:text-purple-400 ${
                  isActive(item.href) ? 'text-purple-400' : 'text-white'
                }`}
                style={{ fontFamily: 'Inter, sans-serif', fontWeight: 700 }}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white hover:text-purple-400 transition-colors"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-black/95 rounded-lg mt-2 border border-purple-500/20">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`block px-3 py-2 font-bold transition-colors ${
                    isActive(item.href) ? 'text-purple-400' : 'text-white hover:text-purple-400'
                  }`}
                  style={{ fontFamily: 'Inter, sans-serif', fontWeight: 700 }}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              
              <div className="border-t border-purple-500/20 pt-2 mt-2">
                <div className="px-3 py-2 text-purple-400 font-bold text-sm" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 700 }}>
                  SC SERVICES
                </div>
                {scServices.map((service) => (
                  <Link
                    key={service.name}
                    to={service.href}
                    className={`block px-6 py-2 font-bold transition-colors ${
                      isActive(service.href) ? 'text-purple-400' : 'text-white hover:text-purple-400'
                    }`}
                    style={{ fontFamily: 'Inter, sans-serif', fontWeight: 700 }}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {service.name}
                  </Link>
                ))}
              </div>

              {additionalItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`block px-3 py-2 font-bold transition-colors ${
                    isActive(item.href) ? 'text-purple-400' : 'text-white hover:text-purple-400'
                  }`}
                  style={{ fontFamily: 'Inter, sans-serif', fontWeight: 700 }}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;