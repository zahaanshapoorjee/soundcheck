import React from 'react';
import { Target, Users, Award, Globe } from 'lucide-react';

const About = () => {
  const stats = [
    { icon: Users, label: 'Artists Managed', value: '50+' },
    { icon: Award, label: 'Awards Won', value: '25+' },
    { icon: Globe, label: 'Global Reach', value: '15+' },
    { icon: Target, label: 'Years Experience', value: '8+' },
  ];

  return (
    <section id="about" className="min-h-screen relative overflow-hidden py-20">
      {/* Space-themed multicolor background */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900">
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/80"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image/Gallery */}
          <div className="space-y-6">
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Hip hop artist performing"
                className="w-full h-96 object-cover rounded-2xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-2xl"></div>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <img
                src="https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg?auto=compress&cs=tinysrgb&w=400"
                alt="Recording studio"
                className="w-full h-32 object-cover rounded-xl"
              />
              <img
                src="https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&w=400"
                alt="Live performance"
                className="w-full h-32 object-cover rounded-xl"
              />
            </div>
          </div>

          {/* Mission and Story */}
          <div className="text-white">
            <h2 
              className="text-4xl md:text-5xl font-bold mb-6"
              style={{ fontFamily: 'Telegraf, sans-serif' }}
            >
              About SoundCheck
            </h2>
            <p 
              className="text-lg text-gray-300 mb-6 leading-relaxed"
              style={{ fontFamily: 'Telegraf, sans-serif' }}
            >
              Founded with a vision to revolutionize the Indian hip hop scene, SoundCheck has been at the forefront of discovering, nurturing, and promoting exceptional talent across the country.
            </p>
            <p 
              className="text-lg text-gray-300 mb-8 leading-relaxed"
              style={{ fontFamily: 'Telegraf, sans-serif' }}
            >
              Our comprehensive approach combines artist management, live events, media production, record label services, and state-of-the-art studio facilities to provide a complete ecosystem for artistic growth.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-6 mb-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center p-4 bg-white/10 rounded-xl backdrop-blur-sm">
                  <stat.icon className="w-8 h-8 text-white mx-auto mb-2" />
                  <div 
                    className="text-2xl font-bold text-white"
                    style={{ fontFamily: 'Telegraf, sans-serif' }}
                  >
                    {stat.value}
                  </div>
                  <div 
                    className="text-sm text-gray-300"
                    style={{ fontFamily: 'Telegraf, sans-serif' }}
                  >
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            <button className="bg-white text-black px-8 py-3 rounded-full font-bold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105">
              <span style={{ fontFamily: 'Telegraf, sans-serif' }}>Learn More</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;