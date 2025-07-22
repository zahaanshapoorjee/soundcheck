import React, { useState, useEffect } from 'react';
import { Music, Clock, Star } from 'lucide-react';

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

  return (
    <section id="records" className="min-h-screen relative py-20">
      {/* Blue to Black gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-600 via-blue-800 to-black"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 
            className="text-4xl md:text-5xl font-bold text-white mb-6"
            style={{ fontFamily: 'Telegraf, sans-serif' }}
          >
            SC Records
          </h2>
          <p 
            className="text-xl text-gray-300 max-w-3xl mx-auto mb-16"
            style={{ fontFamily: 'Telegraf, sans-serif' }}
          >
            Our independent record label is launching soon to give artists complete creative control and fair revenue sharing.
          </p>

          {/* Coming Soon Teaser */}
          <div className="max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-12 mb-12">
              <div className="flex justify-center mb-8">
                <div className="relative">
                  <div className="w-32 h-32 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center">
                    <Music className="w-16 h-16 text-white" />
                  </div>
                  <div className="absolute inset-0 bg-blue-400 rounded-full animate-ping opacity-20"></div>
                </div>
              </div>

              <h3 
                className="text-3xl md:text-4xl font-bold text-white mb-6"
                style={{ fontFamily: 'Telegraf, sans-serif' }}
              >
                Something Big is Coming
              </h3>
              
              <p 
                className="text-lg text-gray-300 mb-12 max-w-2xl mx-auto"
                style={{ fontFamily: 'Telegraf, sans-serif' }}
              >
                SC Records will revolutionize how Indian hip hop artists release and monetize their music. 
                Get ready for a new era of independent music distribution.
              </p>

              {/* Countdown Timer */}
              <div className="mb-12">
                <h4 
                  className="text-2xl font-bold text-white mb-6"
                  style={{ fontFamily: 'Telegraf, sans-serif' }}
                >
                  Launch Countdown
                </h4>
                
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto">
                  {[
                    { label: 'Days', value: timeLeft.days },
                    { label: 'Hours', value: timeLeft.hours },
                    { label: 'Minutes', value: timeLeft.minutes },
                    { label: 'Seconds', value: timeLeft.seconds }
                  ].map((item, index) => (
                    <div key={index} className="bg-white/20 rounded-xl p-4">
                      <div 
                        className="text-3xl md:text-4xl font-bold text-white"
                        style={{ fontFamily: 'Telegraf, sans-serif' }}
                      >
                        {item.value.toString().padStart(2, '0')}
                      </div>
                      <div 
                        className="text-gray-300 text-sm uppercase tracking-wide"
                        style={{ fontFamily: 'Telegraf, sans-serif' }}
                      >
                        {item.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Features Preview */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                {[
                  {
                    icon: Star,
                    title: 'Artist-First',
                    description: 'Fair revenue splits and creative freedom'
                  },
                  {
                    icon: Clock,
                    title: 'Fast Distribution',
                    description: 'Get your music on all platforms quickly'
                  },
                  {
                    icon: Music,
                    title: 'Quality Focus',
                    description: 'Curated releases with marketing support'
                  }
                ].map((feature, index) => (
                  <div key={index} className="text-center">
                    <feature.icon className="w-12 h-12 text-blue-400 mx-auto mb-4" />
                    <h5 
                      className="text-lg font-bold text-white mb-2"
                      style={{ fontFamily: 'Telegraf, sans-serif' }}
                    >
                      {feature.title}
                    </h5>
                    <p 
                      className="text-gray-300 text-sm"
                      style={{ fontFamily: 'Telegraf, sans-serif' }}
                    >
                      {feature.description}
                    </p>
                  </div>
                ))}
              </div>

              <button className="bg-white text-black px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105">
                <span style={{ fontFamily: 'Telegraf, sans-serif' }}>Notify Me at Launch</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Records;