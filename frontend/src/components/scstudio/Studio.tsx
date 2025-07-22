import React, { useState } from 'react';
import { Mic, Headphones, Settings, Calendar, Phone, Mail, ChevronLeft, ChevronRight } from 'lucide-react';

const Studio = () => {
  const [currentImage, setCurrentImage] = useState(0);

  const studioImages = [
    'https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg?auto=compress&cs=tinysrgb&w=800',
    'https://images.pexels.com/photos/164938/pexels-photo-164938.jpeg?auto=compress&cs=tinysrgb&w=800',
    'https://images.pexels.com/photos/1751731/pexels-photo-1751731.jpeg?auto=compress&cs=tinysrgb&w=800',
    'https://images.pexels.com/photos/1644888/pexels-photo-1644888.jpeg?auto=compress&cs=tinysrgb&w=800'
  ];

  const equipment = [
    { name: 'Neumann U87 Microphones', category: 'Recording' },
    { name: 'SSL 4000 Series Console', category: 'Mixing' },
    { name: 'Pro Tools HDX System', category: 'Software' },
    { name: 'Yamaha NS-10M Monitors', category: 'Monitoring' },
    { name: 'Avalon VT-737sp Preamp', category: 'Processing' },
    { name: 'Lexicon 480L Reverb', category: 'Effects' },
    { name: 'Akai MPC Live II', category: 'Production' },
    { name: 'Roland Jupiter-8', category: 'Synthesizers' }
  ];

  const packages = [
    {
      name: 'Basic Recording',
      price: '₹5,000',
      duration: '4 hours',
      includes: ['Studio time', 'Basic mixing', 'Engineer support']
    },
    {
      name: 'Professional Package',
      price: '₹12,000',
      duration: '8 hours',
      includes: ['Studio time', 'Professional mixing', 'Mastering', 'Producer consultation']
    },
    {
      name: 'Full Production',
      price: '₹25,000',
      duration: '2 days',
      includes: ['Full production', 'Mixing & mastering', 'Beat creation', 'Vocal coaching']
    }
  ];

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % studioImages.length);
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + studioImages.length) % studioImages.length);
  };

  return (
    <section id="studio" className="min-h-screen relative py-20">
      {/* Green to Black gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-green-600 via-green-800 to-black"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 
            className="text-4xl md:text-5xl font-bold text-white mb-6"
            style={{ fontFamily: 'Telegraf, sans-serif' }}
          >
            SC Studio
          </h2>
          <p 
            className="text-xl text-gray-300 max-w-3xl mx-auto"
            style={{ fontFamily: 'Telegraf, sans-serif' }}
          >
            State-of-the-art recording facilities equipped with industry-leading technology for professional music production.
          </p>
        </div>

        {/* Facility Tour Gallery */}
        <div className="mb-16">
          <h3 
            className="text-3xl font-bold text-white mb-8 text-center"
            style={{ fontFamily: 'Telegraf, sans-serif' }}
          >
            Facility Tour
          </h3>
          
          <div className="relative">
            <div className="relative h-96 rounded-2xl overflow-hidden">
              <img
                src={studioImages[currentImage]}
                alt="Studio facility"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              
              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-3 rounded-full hover:bg-black/70 transition-colors"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-3 rounded-full hover:bg-black/70 transition-colors"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>
            
            <div className="flex justify-center space-x-2 mt-6">
              {studioImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImage(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentImage ? 'bg-white' : 'bg-white/30'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Equipment List */}
          <div>
            <h3 
              className="text-3xl font-bold text-white mb-8"
              style={{ fontFamily: 'Telegraf, sans-serif' }}
            >
              Professional Equipment
            </h3>
            
            <div className="space-y-4">
              {equipment.map((item, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-4 hover:bg-white/20 transition-all duration-300"
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 
                        className="text-lg font-bold text-white"
                        style={{ fontFamily: 'Telegraf, sans-serif' }}
                      >
                        {item.name}
                      </h4>
                      <p 
                        className="text-gray-300 text-sm"
                        style={{ fontFamily: 'Telegraf, sans-serif' }}
                      >
                        {item.category}
                      </p>
                    </div>
                    <Settings className="w-6 h-6 text-green-400" />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Booking Info */}
          <div>
            <h3 
              className="text-3xl font-bold text-white mb-8"
              style={{ fontFamily: 'Telegraf, sans-serif' }}
            >
              Booking Packages
            </h3>
            
            <div className="space-y-6">
              {packages.map((pkg, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h4 
                        className="text-xl font-bold text-white mb-2"
                        style={{ fontFamily: 'Telegraf, sans-serif' }}
                      >
                        {pkg.name}
                      </h4>
                      <p 
                        className="text-gray-300"
                        style={{ fontFamily: 'Telegraf, sans-serif' }}
                      >
                        {pkg.duration}
                      </p>
                    </div>
                    <div 
                      className="text-2xl font-bold text-green-400"
                      style={{ fontFamily: 'Telegraf, sans-serif' }}
                    >
                      {pkg.price}
                    </div>
                  </div>
                  
                  <ul className="space-y-2 mb-4">
                    {pkg.includes.map((item, itemIndex) => (
                      <li 
                        key={itemIndex} 
                        className="text-gray-300 flex items-center space-x-2"
                        style={{ fontFamily: 'Telegraf, sans-serif' }}
                      >
                        <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <button className="w-full bg-green-600 text-white py-3 rounded-xl font-bold hover:bg-green-700 transition-colors">
                    <span style={{ fontFamily: 'Telegraf, sans-serif' }}>Book Now</span>
                  </button>
                </div>
              ))}
            </div>

            {/* Contact Info */}
            <div className="mt-8 bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <h4 
                className="text-xl font-bold text-white mb-4"
                style={{ fontFamily: 'Telegraf, sans-serif' }}
              >
                Studio Contact
              </h4>
              
              <div className="space-y-3">
                <div className="flex items-center space-x-3 text-gray-300">
                  <Phone className="w-5 h-5" />
                  <span style={{ fontFamily: 'Telegraf, sans-serif' }}>+91 98765 43210</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-300">
                  <Mail className="w-5 h-5" />
                  <span style={{ fontFamily: 'Telegraf, sans-serif' }}>studio@soundcheck.in</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-300">
                  <Calendar className="w-5 h-5" />
                  <span style={{ fontFamily: 'Telegraf, sans-serif' }}>Open 24/7 by appointment</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Studio;