import React from 'react';
import { Target, Users, Award, Globe, Zap, Mic, Music } from 'lucide-react';
import NebulaBackground from '../components/layout/NebulaBackground';

const About = () => {
  const stats = [
    { icon: Users, label: 'Artists Managed', value: '50+' },
    { icon: Award, label: 'Awards Won', value: '25+' },
    { icon: Globe, label: 'Global Reach', value: '15+' },
    { icon: Target, label: 'Years Experience', value: '8+' },
  ];

  const values = [
    {
      icon: Zap,
      title: 'Authentic Desi Vibes',
      description: 'We keep it 100% real with our Indian hip hop roots while pushing global boundaries'
    },
    {
      icon: Mic,
      title: 'Artist-First Mentality',
      description: 'Your creative vision comes first. We amplify your voice, not change it'
    },
    {
      icon: Music,
      title: 'Next-Level Production',
      description: 'From beats to visuals, we deliver content that hits different every single time'
    }
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="min-h-screen relative overflow-hidden py-20">
        <NebulaBackground variant="multicolor" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center mb-20">
            <h1 
              className="text-5xl md:text-7xl font-black text-white mb-8 leading-tight"
              style={{ fontFamily: 'Inter, sans-serif', fontWeight: 900 }}
            >
              About SoundCheck
            </h1>
            <p 
              className="text-2xl text-purple-300 mb-6 font-bold"
              style={{ fontFamily: 'Inter, sans-serif', fontWeight: 700 }}
            >
              We're not just an agency - we're the architects of India's hip hop revolution! 🎤
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
            {/* Image/Gallery */}
            <div className="space-y-8">
              <div className="relative group">
                <img
                  src="https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Hip hop artist performing"
                  className="w-full h-96 object-cover rounded-3xl shadow-2xl group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-purple-900/80 to-transparent rounded-3xl"></div>
                <div className="absolute bottom-6 left-6 text-white">
                  <p className="text-2xl font-black" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 900 }}>
                    LIVE ENERGY 🔥
                  </p>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-6">
                <div className="relative group">
                  <img
                    src="https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg?auto=compress&cs=tinysrgb&w=400"
                    alt="Recording studio"
                    className="w-full h-40 object-cover rounded-2xl group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 to-transparent rounded-2xl"></div>
                </div>
                <div className="relative group">
                  <img
                    src="https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&w=400"
                    alt="Live performance"
                    className="w-full h-40 object-cover rounded-2xl group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-green-900/80 to-transparent rounded-2xl"></div>
                </div>
              </div>
            </div>

            {/* Mission and Story */}
            <div className="text-white">
              <h2 
                className="text-4xl font-black mb-8 leading-tight"
                style={{ fontFamily: 'Inter, sans-serif', fontWeight: 900 }}
              >
                Our Story 📖
              </h2>
              <p 
                className="text-lg text-gray-300 mb-8 leading-relaxed"
                style={{ fontFamily: 'Inter, sans-serif', fontWeight: 500 }}
              >
                We work closely with artists at every stage — from discovery and development to career-building and brand elevation. 
                Our mission is to identify standout talent from across the country, nurture their growth, and position them for long-term success in the evolving music industry.
              </p>
              <p 
                className="text-lg text-gray-300 mb-12 leading-relaxed"
                style={{ fontFamily: 'Inter, sans-serif', fontWeight: 500 }}
              >
                With a focus on authenticity, versatility, and creative integrity, we aim to empower artists not just to perform, but to lead the next wave of Indian music culture. 
                At SoundCheck, our vision for artists isn’t just about record deals, bookings and appearances — it's about building sustainable careers, meaningful artist–audience relationships, and a legacy that lasts.
              </p>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-6 mb-12">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center p-6 bg-white/10 rounded-2xl backdrop-blur-sm border border-purple-500/20 hover:bg-white/20 transition-all duration-300">
                    <stat.icon className="w-12 h-12 text-purple-400 mx-auto mb-4" />
                    <div 
                      className="text-3xl font-black text-white"
                      style={{ fontFamily: 'Inter, sans-serif', fontWeight: 900 }}
                    >
                      {stat.value}
                    </div>
                    <div 
                      className="text-sm text-gray-300 font-bold"
                      style={{ fontFamily: 'Inter, sans-serif', fontWeight: 700 }}
                    >
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Values Section */}
          <div className="mb-20">
            <div className="text-center mb-16">
              <h2 
                className="text-5xl md:text-6xl font-black text-white mb-8"
                style={{ fontFamily: 'Inter, sans-serif', fontWeight: 900 }}
              >
                What We Stand For 💯
              </h2>
              <p 
                className="text-xl text-gray-300 max-w-3xl mx-auto"
                style={{ fontFamily: 'Inter, sans-serif', fontWeight: 500 }}
              >
                These aren't just words - this is our DNA, our culture, our way of life
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {values.map((value, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 hover:bg-white/20 transition-all duration-300 transform hover:scale-105 border border-purple-500/20"
                >
                  <value.icon className="w-16 h-16 text-purple-400 mb-6" />
                  <h3 
                    className="text-2xl font-black text-white mb-4"
                    style={{ fontFamily: 'Inter, sans-serif', fontWeight: 900 }}
                  >
                    {value.title}
                  </h3>
                  <p 
                    className="text-gray-300 leading-relaxed"
                    style={{ fontFamily: 'Inter, sans-serif', fontWeight: 500 }}
                  >
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Team Section */}
          <div className="text-center mb-16">
            <h2 
              className="text-5xl md:text-6xl font-black text-white mb-8"
              style={{ fontFamily: 'Inter, sans-serif', fontWeight: 900 }}
            >
              The Squad Behind the Magic ✨
            </h2>
            <p 
              className="text-2xl text-gray-300 mb-16 max-w-4xl mx-auto"
              style={{ fontFamily: 'Inter, sans-serif', fontWeight: 500 }}
            >
              Our team of industry veterans, creative visionaries, and hip hop heads work 24/7 to make sure our artists shine brighter than anyone else in the game.
            </p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-12 border border-blue-500/20">
            <h3 
              className="text-3xl font-black text-white mb-6"
              style={{ fontFamily: 'Inter, sans-serif', fontWeight: 900 }}
            >
              Want to Join Our Team? 🤝
            </h3>
            <p 
              className="text-lg text-gray-300 mb-8"
              style={{ fontFamily: 'Inter, sans-serif', fontWeight: 500 }}
            >
              We're always looking for passionate individuals who live and breathe hip hop culture
            </p>
            <button className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-10 py-4 rounded-full font-black text-lg hover:from-blue-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105 shadow-2xl">
              <span style={{ fontFamily: 'Inter, sans-serif', fontWeight: 900 }}>View Open Positions</span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;