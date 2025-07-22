import React, { useState, useEffect } from 'react';
import { Music, Clock, Star, Disc, Headphones, Award } from 'lucide-react';
import NebulaBackground from '../components/layout/NebulaBackground';

const Records = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const targetDate = new Date('2025-06-01T00:00:00').getTime();

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000)
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const features = [
    {
      icon: Star,
      title: 'Artist-First Philosophy',
      description: 'Fair revenue splits, complete creative control, and transparent contracts. Your music, your rules! 💯'
    },
    {
      icon: Clock,
      title: 'Lightning-Fast Distribution',
      description: 'Get your tracks on Spotify, Apple Music, and 150+ platforms in under 24 hours. No cap! ⚡'
    },
    {
      icon: Music,
      title: 'Quality Over Everything',
      description: 'Curated releases with full marketing support, playlist placements, and industry connections 🎯'
    },
    {
      icon: Award,
      title: 'Global Reach',
      description: 'From Mumbai to Miami, we make sure your music reaches every corner of the planet 🌍'
    }
  ];

  return (
    <div className="min-h-screen pt-16">
      <section className="min-h-screen relative py-20">
        <NebulaBackground variant="blue" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 
              className="text-5xl md:text-7xl font-black text-white mb-8"
              style={{ fontFamily: 'Inter, sans-serif', fontWeight: 900 }}
            >
              SC Records 💿
            </h1>
            <p 
              className="text-2xl text-blue-300 mb-6 font-bold"
              style={{ fontFamily: 'Inter, sans-serif', fontWeight: 700 }}
            >
              The future of independent music is coming...
            </p>
            <p 
              className="text-xl text-gray-300 max-w-4xl mx-auto mb-16"
              style={{ fontFamily: 'Inter, sans-serif', fontWeight: 500 }}
            >
              We're building something REVOLUTIONARY! An independent record label that puts artists first, pays fair, and gives you complete creative freedom. This is about to change the game forever! 🚀
            </p>

            {/* Coming Soon Teaser */}
            <div className="max-w-5xl mx-auto">
              <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-16 mb-16 border border-blue-500/20">
                <div className="flex justify-center mb-12">
                  <div className="relative">
                    <div className="w-40 h-40 bg-gradient-to-br from-blue-400 via-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                      <Disc className="w-20 h-20 text-white animate-spin" style={{ animationDuration: '3s' }} />
                    </div>
                    <div className="absolute inset-0 bg-blue-400 rounded-full animate-ping opacity-20"></div>
                    <div className="absolute inset-0 bg-purple-500 rounded-full animate-ping opacity-15" style={{ animationDelay: '1s' }}></div>
                  </div>
                </div>

                <h2 
                  className="text-4xl md:text-5xl font-black text-white mb-8"
                  style={{ fontFamily: 'Inter, sans-serif', fontWeight: 900 }}
                >
                  Something MASSIVE is Dropping! 🎵
                </h2>
                
                <p 
                  className="text-2xl text-gray-300 mb-16 max-w-3xl mx-auto leading-relaxed"
                  style={{ fontFamily: 'Inter, sans-serif', fontWeight: 500 }}
                >
                  SC Records is about to flip the entire music industry on its head! We're talking fair deals, instant payouts, global distribution, and marketing that actually works. Get ready for the revolution! 🔥
                </p>

                {/* Countdown Timer */}
                <div className="mb-16">
                  <h3 
                    className="text-3xl font-black text-white mb-8"
                    style={{ fontFamily: 'Inter, sans-serif', fontWeight: 900 }}
                  >
                    Launch Countdown ⏰
                  </h3>
                  
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
                    {[
                      { label: 'Days', value: timeLeft.days },
                      { label: 'Hours', value: timeLeft.hours },
                      { label: 'Minutes', value: timeLeft.minutes },
                      { label: 'Seconds', value: timeLeft.seconds }
                    ].map((item, index) => (
                      <div key={index} className="bg-white/20 rounded-2xl p-6 border border-blue-400/30">
                        <div 
                          className="text-4xl md:text-5xl font-black text-white"
                          style={{ fontFamily: 'Inter, sans-serif', fontWeight: 900 }}
                        >
                          {item.value.toString().padStart(2, '0')}
                        </div>
                        <div 
                          className="text-blue-300 font-bold uppercase tracking-wide"
                          style={{ fontFamily: 'Inter, sans-serif', fontWeight: 700 }}
                        >
                          {item.label}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Features Preview */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
                  {features.map((feature, index) => (
                    <div key={index} className="text-center bg-white/10 rounded-2xl p-6 hover:bg-white/20 transition-all duration-300 border border-blue-400/20">
                      <feature.icon className="w-16 h-16 text-blue-400 mx-auto mb-6" />
                      <h4 
                        className="text-xl font-black text-white mb-4"
                        style={{ fontFamily: 'Inter, sans-serif', fontWeight: 900 }}
                      >
                        {feature.title}
                      </h4>
                      <p 
                        className="text-gray-300"
                        style={{ fontFamily: 'Inter, sans-serif', fontWeight: 500 }}
                      >
                        {feature.description}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="flex flex-col sm:flex-row gap-6 justify-center">
                  <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-12 py-5 rounded-full font-black text-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-2xl flex items-center space-x-3">
                    <Headphones className="w-6 h-6" />
                    <span style={{ fontFamily: 'Inter, sans-serif', fontWeight: 900 }}>Notify Me at Launch</span>
                  </button>
                  <button className="border-3 border-white text-white px-12 py-5 rounded-full font-black text-xl hover:bg-white hover:text-black transition-all duration-300 shadow-2xl">
                    <span style={{ fontFamily: 'Inter, sans-serif', fontWeight: 900 }}>Early Access List</span>
                  </button>
                </div>
              </div>

              {/* What to Expect */}
              <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-12 border border-blue-500/20">
                <h3 
                  className="text-4xl font-black text-white mb-8"
                  style={{ fontFamily: 'Inter, sans-serif', fontWeight: 900 }}
                >
                  What Makes SC Records Different? 🤔
                </h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
                  <div>
                    <h4 
                      className="text-2xl font-black text-blue-400 mb-4"
                      style={{ fontFamily: 'Inter, sans-serif', fontWeight: 900 }}
                    >
                      For Artists, By Artists 🎤
                    </h4>
                    <p 
                      className="text-gray-300 text-lg leading-relaxed"
                      style={{ fontFamily: 'Inter, sans-serif', fontWeight: 500 }}
                    >
                      We're not some corporate machine trying to squeeze every penny. We're artists who understand the struggle and want to create a platform that actually serves creators.
                    </p>
                  </div>
                  
                  <div>
                    <h4 
                      className="text-2xl font-black text-purple-400 mb-4"
                      style={{ fontFamily: 'Inter, sans-serif', fontWeight: 900 }}
                    >
                      Technology That Works 💻
                    </h4>
                    <p 
                      className="text-gray-300 text-lg leading-relaxed"
                      style={{ fontFamily: 'Inter, sans-serif', fontWeight: 500 }}
                    >
                      Real-time analytics, instant payouts, AI-powered playlist pitching, and marketing tools that actually help you grow your fanbase.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Records;