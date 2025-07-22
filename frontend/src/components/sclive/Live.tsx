import React, { useState } from 'react';
import { Calendar, MapPin, Clock, Users, TrendingUp, DollarSign, ChevronLeft, ChevronRight } from 'lucide-react';

const Live = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const upcomingShows = [
    {
      id: 1,
      title: 'Mumbai Hip Hop Festival',
      date: '2025-02-15',
      venue: 'NSCI Dome, Mumbai',
      time: '7:00 PM',
      artists: ['MC Rhythm', 'Lyrical Queen', 'Flow King'],
      image: 'https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      id: 2,
      title: 'Delhi Underground',
      date: '2025-02-28',
      venue: 'Pragati Maidan, Delhi',
      time: '8:00 PM',
      artists: ['Beat Master', 'Desi Bars', 'Trap Queen'],
      image: 'https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      id: 3,
      title: 'Bangalore Beats',
      date: '2025-03-10',
      venue: 'Palace Grounds, Bangalore',
      time: '6:30 PM',
      artists: ['MC Rhythm', 'Beat Master', 'Flow King'],
      image: 'https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg?auto=compress&cs=tinysrgb&w=800'
    }
  ];

  const networkStats = [
    { icon: Users, label: 'Event Attendees', value: '50K+', description: 'Total audience reached' },
    { icon: TrendingUp, label: 'Growth Rate', value: '150%', description: 'Year over year' },
    { icon: DollarSign, label: 'Investment', value: '₹2Cr+', description: 'In artist development' },
    { icon: Calendar, label: 'Events', value: '25+', description: 'Successfully organized' }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % upcomingShows.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + upcomingShows.length) % upcomingShows.length);
  };

  return (
    <section id="live" className="min-h-screen relative py-20">
      {/* Purple to Black gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-purple-600 via-purple-800 to-black"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 
            className="text-4xl md:text-5xl font-bold text-white mb-6"
            style={{ fontFamily: 'Telegraf, sans-serif' }}
          >
            SC Live
          </h2>
          <p 
            className="text-xl text-gray-300 max-w-3xl mx-auto"
            style={{ fontFamily: 'Telegraf, sans-serif' }}
          >
            Bringing the best of Indian hip hop to stages across the country with unforgettable live experiences.
          </p>
        </div>

        {/* Upcoming Shows Slider */}
        <div className="mb-20">
          <h3 
            className="text-3xl font-bold text-white mb-8 text-center"
            style={{ fontFamily: 'Telegraf, sans-serif' }}
          >
            Upcoming IPS Shows
          </h3>
          
          <div className="relative">
            <div className="overflow-hidden rounded-2xl">
              <div 
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {upcomingShows.map((show) => (
                  <div key={show.id} className="w-full flex-shrink-0">
                    <div className="relative h-96 bg-cover bg-center rounded-2xl overflow-hidden">
                      <img
                        src={show.image}
                        alt={show.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                      
                      <div className="absolute bottom-8 left-8 right-8">
                        <h4 
                          className="text-3xl font-bold text-white mb-4"
                          style={{ fontFamily: 'Telegraf, sans-serif' }}
                        >
                          {show.title}
                        </h4>
                        
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                          <div className="flex items-center space-x-2 text-gray-300">
                            <Calendar className="w-5 h-5" />
                            <span style={{ fontFamily: 'Telegraf, sans-serif' }}>{show.date}</span>
                          </div>
                          <div className="flex items-center space-x-2 text-gray-300">
                            <MapPin className="w-5 h-5" />
                            <span style={{ fontFamily: 'Telegraf, sans-serif' }}>{show.venue}</span>
                          </div>
                          <div className="flex items-center space-x-2 text-gray-300">
                            <Clock className="w-5 h-5" />
                            <span style={{ fontFamily: 'Telegraf, sans-serif' }}>{show.time}</span>
                          </div>
                        </div>
                        
                        <div className="mb-4">
                          <p 
                            className="text-gray-300 mb-2"
                            style={{ fontFamily: 'Telegraf, sans-serif' }}
                          >
                            Featured Artists:
                          </p>
                          <div className="flex flex-wrap gap-2">
                            {show.artists.map((artist, index) => (
                              <span
                                key={index}
                                className="bg-white/20 text-white px-3 py-1 rounded-full text-sm"
                                style={{ fontFamily: 'Telegraf, sans-serif' }}
                              >
                                {artist}
                              </span>
                            ))}
                          </div>
                        </div>
                        
                        <button className="bg-white text-black px-6 py-3 rounded-full font-bold hover:bg-gray-100 transition-all duration-300">
                          <span style={{ fontFamily: 'Telegraf, sans-serif' }}>Get Tickets</span>
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation buttons */}
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-3 rounded-full hover:bg-black/70 transition-colors"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-3 rounded-full hover:bg-black/70 transition-colors"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Slide indicators */}
            <div className="flex justify-center space-x-2 mt-6">
              {upcomingShows.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentSlide ? 'bg-white' : 'bg-white/30'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Network & Investment Summary */}
        <div>
          <h3 
            className="text-3xl font-bold text-white mb-8 text-center"
            style={{ fontFamily: 'Telegraf, sans-serif' }}
          >
            Network & Investment Impact
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {networkStats.map((stat, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center hover:bg-white/20 transition-all duration-300"
              >
                <stat.icon className="w-12 h-12 text-white mx-auto mb-4" />
                <div 
                  className="text-3xl font-bold text-white mb-2"
                  style={{ fontFamily: 'Telegraf, sans-serif' }}
                >
                  {stat.value}
                </div>
                <div 
                  className="text-lg text-gray-300 mb-2"
                  style={{ fontFamily: 'Telegraf, sans-serif' }}
                >
                  {stat.label}
                </div>
                <div 
                  className="text-sm text-gray-400"
                  style={{ fontFamily: 'Telegraf, sans-serif' }}
                >
                  {stat.description}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Live;