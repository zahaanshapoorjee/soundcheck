import React from 'react';
import { Music, Instagram, Twitter, Youtube, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Music className="w-8 h-8 text-white" />
              <span className="text-2xl font-bold" style={{ fontFamily: 'Telegraf, sans-serif' }}>
                SoundCheck
              </span>
            </div>
            <p className="text-gray-400 mb-4" style={{ fontFamily: 'Telegraf, sans-serif' }}>
              Curating Talent. Crafting Legacies.
            </p>
            <p className="text-gray-400 text-sm" style={{ fontFamily: 'Telegraf, sans-serif' }}>
              India's premier talent management company for hip hop artists.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4" style={{ fontFamily: 'Telegraf, sans-serif' }}>
              Quick Links
            </h3>
            <ul className="space-y-2">
              {['About Us', 'SC Mgmt', 'SC Live', 'SC Media'].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase().replace(' ', '')}`}
                    className="text-gray-400 hover:text-white transition-colors"
                    style={{ fontFamily: 'Telegraf, sans-serif' }}
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Social */}
          <div>
            <h3 className="text-lg font-bold mb-4" style={{ fontFamily: 'Telegraf, sans-serif' }}>
              Connect
            </h3>
            <div className="flex space-x-4 mb-4">
              <Instagram className="w-6 h-6 text-gray-400 hover:text-white cursor-pointer transition-colors" />
              <Twitter className="w-6 h-6 text-gray-400 hover:text-white cursor-pointer transition-colors" />
              <Youtube className="w-6 h-6 text-gray-400 hover:text-white cursor-pointer transition-colors" />
              <Mail className="w-6 h-6 text-gray-400 hover:text-white cursor-pointer transition-colors" />
            </div>
            <p className="text-gray-400 text-sm" style={{ fontFamily: 'Telegraf, sans-serif' }}>
              info@soundcheck.in
            </p>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm" style={{ fontFamily: 'Telegraf, sans-serif' }}>
             Website developed by  <a target='_blank' href='https://inquireai.in/'>Inquire AI</a><br/> 
            © 2025 SoundCheck. All rights reserved. 
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;