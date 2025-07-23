import React, { useState } from 'react';
import { Calendar, MapPin, Clock, Users, TrendingUp, DollarSign, ChevronLeft, ChevronRight, Ticket, Zap } from 'lucide-react';
import NebulaBackground from '../components/layout/NebulaBackground';

const Live = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const upcomingShows = [
    {
      id: 1,
      title: 'Mumbai Hip Hop Festival 2025',
      date: '2025-02-15',
      venue: 'NSCI Dome, Mumbai',
      time: '7:00 PM',
      artists: ['MC Rhythm', 'Lyrical Queen', 'Flow King'],
      image: 'https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg?auto=compress&cs=tinysrgb&w=800',
      price: '₹1,500 - ₹5,000',
      status: 'selling-fast'
    },
    {
      id: 2,
      title: 'Delhi Underground Cypher',
      date: '2025-02-28',
      venue: 'Pragati Maidan, Delhi',
      time: '8:00 PM',
      artists: ['Beat Master', 'Desi Bars', 'Trap Queen'],
      image: 'https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&w=800',
      price: '₹1,200 - ₹4,000',
      status: 'available'
    },
    {
      id: 3,
      title: 'Bangalore Beats Bonanza',
      date: '2025-03-10',
      venue: 'Palace Grounds, Bangalore',
      time: '6:30 PM',
      artists: ['MC Rhythm', 'Beat Master', 'Flow King'],
      image: 'https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg?auto=compress&cs=tinysrgb&w=800',
      price: '₹1,800 - ₹6,000',
      status: 'sold-out'
    }
  ];

  const networkStats = [
    { icon: Users, label: 'Event Attendees', value: '50K+', description: 'Total audience reached', color: 'text-purple-400' },
    { icon: TrendingUp, label: 'Growth Rate', value: '150%', description: 'Year over year', color: 'text-blue-400' },
    { icon: DollarSign, label: 'Investment', value: '₹2Cr+', description: 'In artist development', color: 'text-green-400' },
    { icon: Calendar, label: 'Events', value: '25+', description: 'Successfully organized', color: 'text-orange-400' }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % upcomingShows.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + upcomingShows.length) % upcomingShows.length);
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'selling-fast':
        return <span className="bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-bold flex items-center space-x-1">
          <Zap className="w-4 h-4" />
          <span>SELLING FAST</span>
        </span>;
      case 'sold-out':
        return <span className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold">SOLD OUT</span>;
      case 'available':
        return <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-bold">AVAILABLE</span>;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen pt-16">
      <section className="min-h-screen relative py-20">
        <NebulaBackground variant="purple" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 
              className="text-5xl md:text-7xl font-black text-white mb-8"
              style={{ fontFamily: 'Inter, sans-serif', fontWeight: 900 }}
            >
              SoundCheck Live 
            </h1>
            <p 
              className="text-2xl text-purple-300 mb-6 font-bold"
              style={{ fontFamily: 'Inter, sans-serif', fontWeight: 700 }}
            >
              Where legends are born and crowds go absolutely WILD!
            </p>
            <p 
              className="text-xl text-gray-300 max-w-4xl mx-auto"
              style={{ fontFamily: 'Inter, sans-serif', fontWeight: 500 }}
            >
              We don't just organize events - we create experiences that people talk about for years. From intimate cyphers to massive festivals, SC Live brings the heat! 
            </p>
          </div>

          {/* Upcoming Shows Slider */}
          <div className="mb-20">
            <h2 
              className="text-4xl font-black text-white mb-12 text-center"
              style={{ fontFamily: 'Inter, sans-serif', fontWeight: 900 }}
            >
              Upcoming Shows That'll Blow Your Mind 
            </h2>
            
            <div className="relative">
              <div className="overflow-hidden rounded-3xl">
                <div 
                  className="flex transition-transform duration-500 ease-in-out"
                  style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                >
                  {upcomingShows.map((show) => (
                    <div key={show.id} className="w-full flex-shrink-0">
                      <div className="relative h-[500px] bg-cover bg-center rounded-3xl overflow-hidden">
                        <img
                          src={show.image}
                          alt={show.title}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent"></div>
                        
                        <div className="absolute top-8 left-8 right-8 flex justify-between items-start">
                          {getStatusBadge(show.status)}
                          <div className="bg-black/70 text-white px-4 py-2 rounded-full font-bold">
                            <span style={{ fontFamily: 'Inter, sans-serif', fontWeight: 700 }}>
                              {show.price}
                            </span>
                          </div>
                        </div>
                        
                        <div className="absolute bottom-8 left-8 right-8">
                          <h3 
                            className="text-4xl font-black text-white mb-6"
                            style={{ fontFamily: 'Inter, sans-serif', fontWeight: 900 }}
                          >
                            {show.title}
                          </h3>
                          
                          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                            <div className="flex items-center space-x-3 text-gray-300">
                              <Calendar className="w-6 h-6 text-purple-400" />
                              <span 
                                className="font-bold text-lg"
                                style={{ fontFamily: 'Inter, sans-serif', fontWeight: 700 }}
                              >
                                {show.date}
                              </span>
                            </div>
                            <div className="flex items-center space-x-3 text-gray-300">
                              <MapPin className="w-6 h-6 text-purple-400" />
                              <span 
                                className="font-bold text-lg"
                                style={{ fontFamily: 'Inter, sans-serif', fontWeight: 700 }}
                              >
                                {show.venue}
                              </span>
                            </div>
                            <div className="flex items-center space-x-3 text-gray-300">
                              <Clock className="w-6 h-6 text-purple-400" />
                              <span 
                                className="font-bold text-lg"
                                style={{ fontFamily: 'Inter, sans-serif', fontWeight: 700 }}
                              >
                                {show.time}
                              </span>
                            </div>
                          </div>
                          
                          <div className="mb-6">
                            <p 
                              className="text-gray-300 mb-3 text-lg font-bold"
                              style={{ fontFamily: 'Inter, sans-serif', fontWeight: 700 }}
                            >
                              Featured Artists:
                            </p>
                            <div className="flex flex-wrap gap-3">
                              {show.artists.map((artist, index) => (
                                <span
                                  key={index}
                                  className="bg-purple-600/80 text-white px-4 py-2 rounded-full font-bold text-lg"
                                  style={{ fontFamily: 'Inter, sans-serif', fontWeight: 700 }}
                                >
                                  {artist}
                                </span>
                              ))}
                            </div>
                          </div>
                          
                          <button 
                            className={`flex items-center space-x-3 px-8 py-4 rounded-full font-black text-lg transition-all duration-300 transform hover:scale-105 ${
                              show.status === 'sold-out' 
                                ? 'bg-gray-600 text-gray-300 cursor-not-allowed' 
                                : 'bg-gradient-to-r from-purple-600 to-blue-600 text-white hover:from-purple-700 hover:to-blue-700'
                            }`}
                            disabled={show.status === 'sold-out'}
                          >
                            <Ticket className="w-5 h-5" />
                            <span style={{ fontFamily: 'Inter, sans-serif', fontWeight: 900 }}>
                              {show.status === 'sold-out' ? 'SOLD OUT' : 'Get Tickets'}
                            </span>
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
                className="absolute left-6 top-1/2 transform -translate-y-1/2 bg-black/70 text-white p-4 rounded-full hover:bg-black/90 transition-colors"
              >
                <ChevronLeft className="w-8 h-8" />
              </button>
              <button
                onClick={nextSlide}
                className="absolute right-6 top-1/2 transform -translate-y-1/2 bg-black/70 text-white p-4 rounded-full hover:bg-black/90 transition-colors"
              >
                <ChevronRight className="w-8 h-8" />
              </button>

              {/* Slide indicators */}
              <div className="flex justify-center space-x-3 mt-8">
                {upcomingShows.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`w-4 h-4 rounded-full transition-colors ${
                      index === currentSlide ? 'bg-purple-400' : 'bg-white/30'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Network & Investment Summary */}
          <div>
            <h2 
              className="text-4xl font-black text-white mb-12 text-center"
              style={{ fontFamily: 'Inter, sans-serif', fontWeight: 900 }}
            >
              The Numbers That Prove We're Killing It 
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {networkStats.map((stat, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 text-center hover:bg-white/20 transition-all duration-300 transform hover:scale-105 border border-purple-500/20"
                >
                  <stat.icon className={`w-16 h-16 mx-auto mb-6 ${stat.color}`} />
                  <div 
                    className="text-4xl font-black text-white mb-3"
                    style={{ fontFamily: 'Inter, sans-serif', fontWeight: 900 }}
                  >
                    {stat.value}
                  </div>
                  <div 
                    className="text-xl text-gray-300 mb-2 font-bold"
                    style={{ fontFamily: 'Inter, sans-serif', fontWeight: 700 }}
                  >
                    {stat.label}
                  </div>
                  <div 
                    className="text-sm text-gray-400"
                    style={{ fontFamily: 'Inter, sans-serif', fontWeight: 500 }}
                  >
                    {stat.description}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Live;