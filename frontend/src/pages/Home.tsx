import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Play, Users, Award, Globe, Target } from 'lucide-react';
import NebulaBackground from '../components/layout/NebulaBackground';

const Home = () => {
  const stats = [
    { icon: Users, label: 'Artists Managed', value: '50+' },
    { icon: Award, label: 'Awards Won', value: '25+' },
    { icon: Globe, label: 'Global Reach', value: '15+' },
    { icon: Target, label: 'Years Experience', value: '8+' },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="min-h-screen relative overflow-hidden">
        <NebulaBackground variant="multicolor" />

        {/* Content */}
        <div className="relative z-10 flex items-center justify-center min-h-screen px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-6xl mx-auto">
            <h1 
              className="text-6xl md:text-8xl font-black text-white mb-8 leading-tight tracking-tight"
              style={{ fontFamily: 'Inter, sans-serif', fontWeight: 900 }}
            >
              SoundCheck
            </h1>
            <p 
              className="text-3xl md:text-4xl text-purple-300 mb-6 font-bold"
              style={{ fontFamily: 'Inter, sans-serif', fontWeight: 700 }}
            >
              Curating Talent. Crafting Legacies.
            </p>
            <p 
              className="text-xl md:text-2xl text-gray-300 mb-16 max-w-3xl mx-auto leading-relaxed"
              style={{ fontFamily: 'Inter, sans-serif', fontWeight: 500 }}
            >
              Next-generation music agency committed to shaping the future of Indian music. 🔥
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Link 
                to="/management"
                className="group bg-gradient-to-r from-purple-600 to-blue-600 text-white px-10 py-5 rounded-full font-black text-xl hover:from-purple-700 hover:to-blue-700 transition-all duration-300 flex items-center space-x-3 transform hover:scale-105 shadow-2xl"
              >
                <span style={{ fontFamily: 'Inter, sans-serif', fontWeight: 900 }}>Discover Artists</span>
                <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
              </Link>
              <button className="group border-3 border-white text-white px-10 py-5 rounded-full font-black text-xl hover:bg-white hover:text-black transition-all duration-300 flex items-center space-x-3 shadow-2xl">
                <Play className="w-6 h-6" />
                <span style={{ fontFamily: 'Inter, sans-serif', fontWeight: 900 }}>Watch Reel</span>
              </button>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        {/* <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-purple-400 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-purple-400 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div> */}
      </section>

      {/* Quick Stats Section */}
      {/* <section className="py-20 relative">
        <NebulaBackground variant="purple" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 
              className="text-4xl md:text-5xl font-black text-white mb-6"
              style={{ fontFamily: 'Inter, sans-serif', fontWeight: 900 }}
            >
              The Numbers Don't Lie 📊
            </h2>
            <p 
              className="text-xl text-gray-300 max-w-3xl mx-auto"
              style={{ fontFamily: 'Inter, sans-serif', fontWeight: 500 }}
            >
              We're not just managing artists, we're building an empire
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="text-center p-8 bg-white/10 backdrop-blur-sm rounded-2xl hover:bg-white/20 transition-all duration-300 transform hover:scale-105 border border-purple-500/20"
              >
                <stat.icon className="w-16 h-16 text-purple-400 mx-auto mb-6" />
                <div 
                  className="text-4xl font-black text-white mb-2"
                  style={{ fontFamily: 'Inter, sans-serif', fontWeight: 900 }}
                >
                  {stat.value}
                </div>
                <div 
                  className="text-lg text-gray-300 font-bold"
                  style={{ fontFamily: 'Inter, sans-serif', fontWeight: 700 }}
                >
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* CTA Section */}
      {/* <section className="py-20 relative">
        <NebulaBackground variant="blue" />
        
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 
            className="text-5xl md:text-6xl font-black text-white mb-8"
            style={{ fontFamily: 'Inter, sans-serif', fontWeight: 900 }}
          >
            Ready to Level Up? 🚀
          </h2>
          <p 
            className="text-2xl text-gray-300 mb-12"
            style={{ fontFamily: 'Inter, sans-serif', fontWeight: 500 }}
          >
            Join the SoundCheck family and take your music to the next dimension
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link 
              to="/submissions"
              className="bg-gradient-to-r from-green-500 to-blue-500 text-white px-12 py-6 rounded-full font-black text-xl hover:from-green-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105 shadow-2xl"
            >
              <span style={{ fontFamily: 'Inter, sans-serif', fontWeight: 900 }}>Submit Your Music</span>
            </Link>
            <Link 
              to="/contact"
              className="border-3 border-white text-white px-12 py-6 rounded-full font-black text-xl hover:bg-white hover:text-black transition-all duration-300 shadow-2xl"
            >
              <span style={{ fontFamily: 'Inter, sans-serif', fontWeight: 900 }}>Get In Touch</span>
            </Link>
          </div>
        </div>
      </section> */}
    </div>
  );
};

export default Home;