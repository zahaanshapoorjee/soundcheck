import React, { useState } from 'react';
import { Mic, Headphones, Settings, Calendar, Phone, Mail, ChevronLeft, ChevronRight, Zap, Star, Award } from 'lucide-react';
import NebulaBackground from '../components/layout/NebulaBackground';

const Studio = () => {
  const [currentImage, setCurrentImage] = useState(0);

  const studioImages = [
    'https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg?auto=compress&cs=tinysrgb&w=800',
    'https://images.pexels.com/photos/164938/pexels-photo-164938.jpeg?auto=compress&cs=tinysrgb&w=800',
    'https://images.pexels.com/photos/1751731/pexels-photo-1751731.jpeg?auto=compress&cs=tinysrgb&w=800',
    'https://images.pexels.com/photos/1644888/pexels-photo-1644888.jpeg?auto=compress&cs=tinysrgb&w=800'
  ];

  const equipment = [
    { name: 'Neumann U87 Microphones', category: 'Recording', icon: Mic, description: 'Industry standard vocal mics' },
    { name: 'SSL 4000 Series Console', category: 'Mixing', icon: Settings, description: 'Legendary mixing board' },
    { name: 'Pro Tools HDX System', category: 'Software', icon: Zap, description: 'Professional DAW setup' },
    { name: 'Yamaha NS-10M Monitors', category: 'Monitoring', icon: Headphones, description: 'Reference speakers' },
    { name: 'Avalon VT-737sp Preamp', category: 'Processing', icon: Star, description: 'Premium tube preamp' },
    { name: 'Lexicon 480L Reverb', category: 'Effects', icon: Award, description: 'Classic digital reverb' },
    { name: 'Akai MPC Live II', category: 'Production', icon: Zap, description: 'Beat making machine' },
    { name: 'Roland Jupiter-8', category: 'Synthesizers', icon: Star, description: 'Vintage analog synth' }
  ];

  const packages = [
    {
      name: 'Basic Recording',
      price: '₹5,000',
      duration: '4 hours',
      includes: ['Studio time', 'Basic mixing', 'Engineer support', 'High-quality recording'],
      popular: false
    },
    {
      name: 'Professional Package',
      price: '₹12,000',
      duration: '8 hours',
      includes: ['Studio time', 'Professional mixing', 'Mastering', 'Producer consultation', 'Vocal coaching'],
      popular: true
    },
    {
      name: 'Full Production',
      price: '₹25,000',
      duration: '2 days',
      includes: ['Full production', 'Mixing & mastering', 'Beat creation', 'Vocal coaching', 'Music video planning'],
      popular: false
    }
  ];

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % studioImages.length);
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + studioImages.length) % studioImages.length);
  };

  return (
    <div className="min-h-screen pt-16">
      <section className="min-h-screen relative py-20">
        <NebulaBackground variant="green" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 
              className="text-5xl md:text-7xl font-black text-white mb-8"
              style={{ fontFamily: 'Inter, sans-serif', fontWeight: 900 }}
            >
              SC Studio 🎛️
            </h1>
            <p 
              className="text-2xl text-green-300 mb-6 font-bold"
              style={{ fontFamily: 'Inter, sans-serif', fontWeight: 700 }}
            >
              Where magic happens and hits are born!
            </p>
            <p 
              className="text-xl text-gray-300 max-w-4xl mx-auto"
              style={{ fontFamily: 'Inter, sans-serif', fontWeight: 500 }}
            >
              Our studio isn't just a recording space - it's a creative sanctuary equipped with the most advanced technology and run by engineers who understand hip hop culture. This is where legends record! 🔥
            </p>
          </div>

          {/* Facility Tour Gallery */}
          <div className="mb-20">
            <h2 
              className="text-4xl font-black text-white mb-12 text-center"
              style={{ fontFamily: 'Inter, sans-serif', fontWeight: 900 }}
            >
              Take a Virtual Tour 📸
            </h2>
            
            <div className="relative">
              <div className="relative h-[500px] rounded-3xl overflow-hidden">
                <img
                  src={studioImages[currentImage]}
                  alt="Studio facility"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                
                <button
                  onClick={prevImage}
                  className="absolute left-6 top-1/2 transform -translate-y-1/2 bg-black/70 text-white p-4 rounded-full hover:bg-black/90 transition-colors"
                >
                  <ChevronLeft className="w-8 h-8" />
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-6 top-1/2 transform -translate-y-1/2 bg-black/70 text-white p-4 rounded-full hover:bg-black/90 transition-colors"
                >
                  <ChevronRight className="w-8 h-8" />
                </button>

                <div className="absolute bottom-8 left-8 right-8 text-center">
                  <p 
                    className="text-2xl font-black text-white"
                    style={{ fontFamily: 'Inter, sans-serif', fontWeight: 900 }}
                  >
                    Studio Room {currentImage + 1} - Where the magic happens ✨
                  </p>
                </div>
              </div>
              
              <div className="flex justify-center space-x-3 mt-8">
                {studioImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImage(index)}
                    className={`w-4 h-4 rounded-full transition-colors ${
                      index === currentImage ? 'bg-green-400' : 'bg-white/30'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20">
            {/* Equipment List */}
            <div>
              <h2 
                className="text-4xl font-black text-white mb-12"
                style={{ fontFamily: 'Inter, sans-serif', fontWeight: 900 }}
              >
                World-Class Equipment 🎚️
              </h2>
              
              <div className="space-y-6">
                {equipment.map((item, index) => (
                  <div
                    key={index}
                    className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/20 transition-all duration-300 border border-green-500/20"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <item.icon className="w-8 h-8 text-green-400" />
                        <div>
                          <h3 
                            className="text-xl font-black text-white"
                            style={{ fontFamily: 'Inter, sans-serif', fontWeight: 900 }}
                          >
                            {item.name}
                          </h3>
                          <p 
                            className="text-green-300 font-bold"
                            style={{ fontFamily: 'Inter, sans-serif', fontWeight: 700 }}
                          >
                            {item.category}
                          </p>
                          <p 
                            className="text-gray-400 text-sm"
                            style={{ fontFamily: 'Inter, sans-serif', fontWeight: 500 }}
                          >
                            {item.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Booking Info */}
            <div>
              <h2 
                className="text-4xl font-black text-white mb-12"
                style={{ fontFamily: 'Inter, sans-serif', fontWeight: 900 }}
              >
                Booking Packages 💰
              </h2>
              
              <div className="space-y-8">
                {packages.map((pkg, index) => (
                  <div
                    key={index}
                    className={`bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-all duration-300 border-2 ${
                      pkg.popular ? 'border-green-400 bg-green-400/10' : 'border-green-500/20'
                    } relative`}
                  >
                    {pkg.popular && (
                      <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                        <span className="bg-green-400 text-black px-4 py-2 rounded-full font-black text-sm">
                          MOST POPULAR 🔥
                        </span>
                      </div>
                    )}
                    
                    <div className="flex items-start justify-between mb-6">
                      <div>
                        <h3 
                          className="text-2xl font-black text-white mb-2"
                          style={{ fontFamily: 'Inter, sans-serif', fontWeight: 900 }}
                        >
                          {pkg.name}
                        </h3>
                        <p 
                          className="text-green-300 font-bold text-lg"
                          style={{ fontFamily: 'Inter, sans-serif', fontWeight: 700 }}
                        >
                          {pkg.duration}
                        </p>
                      </div>
                      <div 
                        className="text-3xl font-black text-green-400"
                        style={{ fontFamily: 'Inter, sans-serif', fontWeight: 900 }}
                      >
                        {pkg.price}
                      </div>
                    </div>
                    
                    <ul className="space-y-3 mb-8">
                      {pkg.includes.map((item, itemIndex) => (
                        <li 
                          key={itemIndex} 
                          className="text-gray-300 flex items-center space-x-3"
                          style={{ fontFamily: 'Inter, sans-serif', fontWeight: 500 }}
                        >
                          <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <button className={`w-full py-4 rounded-xl font-black text-lg transition-all duration-300 transform hover:scale-105 ${
                      pkg.popular 
                        ? 'bg-green-400 text-black hover:bg-green-500' 
                        : 'bg-green-600 text-white hover:bg-green-700'
                    }`}>
                      <span style={{ fontFamily: 'Inter, sans-serif', fontWeight: 900 }}>Book This Package</span>
                    </button>
                  </div>
                ))}
              </div>

              {/* Contact Info */}
              <div className="mt-12 bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-green-500/20">
                <h3 
                  className="text-2xl font-black text-white mb-6"
                  style={{ fontFamily: 'Inter, sans-serif', fontWeight: 900 }}
                >
                  Studio Contact 📞
                </h3>
                
                <div className="space-y-4">
                  <div className="flex items-center space-x-4 text-gray-300">
                    <Phone className="w-6 h-6 text-green-400" />
                    <span 
                      className="font-bold text-lg"
                      style={{ fontFamily: 'Inter, sans-serif', fontWeight: 700 }}
                    >
                      +91 98765 43210
                    </span>
                  </div>
                  <div className="flex items-center space-x-4 text-gray-300">
                    <Mail className="w-6 h-6 text-green-400" />
                    <span 
                      className="font-bold text-lg"
                      style={{ fontFamily: 'Inter, sans-serif', fontWeight: 700 }}
                    >
                      studio@soundcheck.in
                    </span>
                  </div>
                  <div className="flex items-center space-x-4 text-gray-300">
                    <Calendar className="w-6 h-6 text-green-400" />
                    <span 
                      className="font-bold text-lg"
                      style={{ fontFamily: 'Inter, sans-serif', fontWeight: 700 }}
                    >
                      Open 24/7 by appointment
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center">
            <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-12 border border-green-500/20">
              <h2 
                className="text-4xl font-black text-white mb-6"
                style={{ fontFamily: 'Inter, sans-serif', fontWeight: 900 }}
              >
                Ready to Record Your Next Hit? 🎵
              </h2>
              <p 
                className="text-xl text-gray-300 mb-8"
                style={{ fontFamily: 'Inter, sans-serif', fontWeight: 500 }}
              >
                Book your session today and experience the difference that professional equipment and expert engineers make
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <button className="bg-gradient-to-r from-green-600 to-blue-600 text-white px-10 py-4 rounded-full font-black text-lg hover:from-green-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-2xl">
                  <span style={{ fontFamily: 'Inter, sans-serif', fontWeight: 900 }}>Book Studio Time</span>
                </button>
                <button className="border-3 border-white text-white px-10 py-4 rounded-full font-black text-lg hover:bg-white hover:text-black transition-all duration-300 shadow-2xl">
                  <span style={{ fontFamily: 'Inter, sans-serif', fontWeight: 900 }}>Schedule Tour</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Studio;