import React, { useState } from 'react';
import { ExternalLink, Instagram, Twitter, Youtube, Crown, Siren as Fire, Star } from 'lucide-react';
import NebulaBackground from '../components/layout/NebulaBackground';
import arslan_nizami from "../assets/artists/arslan_nizami.jpeg"
import faheem_abdullah from "../assets/artists/faheem_abdullah.jpg"

const Management = () => {
  const [selectedArtist, setSelectedArtist] = useState(null);

  const artists = [
    {
      id: 1,
      name: 'MC Rhythm',
      role: 'Rapper / Producer',
      image: faheem_abdullah,
      bio: 'The king of Mumbai streets! MC Rhythm has been spitting fire bars since day one, with over 2M streams and collaborations with international artists. His unique blend of traditional Indian sounds with modern trap beats is revolutionizing the scene.',
      discography: ['Desi Beats Vol. 1', 'Street Chronicles', 'Mumbai Nights', 'Trap Raaja'],
      social: { instagram: '@mcrhythm', twitter: '@mcrhythm_official', youtube: 'MC Rhythm' },
      status: 'established',
      streams: '404M+'
    },
    {
      id: 2,
      name: 'Arslan Nizami',
      role: 'Rapper / Songwriter',
      image: arslan_nizami,
      bio: 'Breaking barriers and setting new standards! Lyrical Queen is the voice of a generation, addressing social issues while delivering the hardest bars in the game. Her wordplay is unmatched and her message is powerful.',
      discography: ['Queens Rise', 'Unstoppable Force', 'Voice of Change', 'Feminist Bars'],
      social: { instagram: '@lyricalqueen', twitter: '@lyrical_queen', youtube: 'Lyrical Queen' },
      status: 'rising',
      streams: '21M+'
    },
   
  ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'legend':
        return <Crown className="w-5 h-5 text-yellow-400" />;
      case 'established':
        return <Star className="w-5 h-5 text-purple-400" />;
      case 'rising':
        return <Fire className="w-5 h-5 text-orange-400" />;
      default:
        return null;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'legend':
        return 'text-yellow-400 bg-yellow-400/20';
      case 'established':
        return 'text-purple-400 bg-purple-400/20';
      case 'rising':
        return 'text-orange-400 bg-orange-400/20';
      default:
        return 'text-gray-400 bg-gray-400/20';
    }
  };

  return (
    <div className="min-h-screen pt-16">
      <section className="min-h-screen relative py-20">
        <NebulaBackground variant="multicolor" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 
              className="text-5xl md:text-7xl font-black text-white mb-8"
              style={{ fontFamily: 'Inter, sans-serif', fontWeight: 900 }}
            >
              SC Management 👑
            </h1>
            <p 
              className="text-2xl text-purple-300 mb-6 font-bold"
              style={{ fontFamily: 'Inter, sans-serif', fontWeight: 700 }}
            >
              Meet the legends who are redefining Indian hip hop
            </p>
            <p 
              className="text-xl text-gray-300 max-w-4xl mx-auto"
              style={{ fontFamily: 'Inter, sans-serif', fontWeight: 500 }}
            >
              Our roster isn't just a list of artists - it's a family of game-changers, rule-breakers, and culture creators who are taking desi hip hop to the next level 🚀
            </p>
          </div>

          {/* Artist Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {artists.map((artist) => (
              <div
                key={artist.id}
                className="group bg-white/10 backdrop-blur-sm rounded-3xl overflow-hidden hover:bg-white/20 transition-all duration-500 cursor-pointer transform hover:scale-105 border border-purple-500/20 hover:border-purple-400/40"
                onClick={() => setSelectedArtist(artist)}
              >
                <div className="relative">
                  <img
                    src={artist.image}
                    alt={artist.name}
                    className="w-full h-72 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent"></div>
                  
                  {/* Status Badge */}
                  <div className={`absolute top-4 right-4 px-3 py-1 rounded-full text-sm font-bold flex items-center space-x-1 ${getStatusColor(artist.status)}`}>
                    {getStatusIcon(artist.status)}
                    <span style={{ fontFamily: 'Inter, sans-serif', fontWeight: 700 }}>
                      {artist.status.toUpperCase()}
                    </span>
                  </div>

                  {/* Streams Badge */}
                  <div className="absolute top-4 left-4 bg-black/70 text-white px-3 py-1 rounded-full text-sm font-bold">
                    <span style={{ fontFamily: 'Inter, sans-serif', fontWeight: 700 }}>
                      {artist.streams} streams
                    </span>
                  </div>
                  
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 
                      className="text-2xl font-black text-white mb-2"
                      style={{ fontFamily: 'Inter, sans-serif', fontWeight: 900 }}
                    >
                      {artist.name}
                    </h3>
                    <p 
                      className="text-purple-300 font-bold"
                      style={{ fontFamily: 'Inter, sans-serif', fontWeight: 700 }}
                    >
                      {artist.role}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div className="text-center">
            <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-12 border border-purple-500/20">
              <h2 
                className="text-4xl font-black text-white mb-6"
                style={{ fontFamily: 'Inter, sans-serif', fontWeight: 900 }}
              >
                Want to Join This Elite Squad? 🎯
              </h2>
              <p 
                className="text-xl text-gray-300 mb-8"
                style={{ fontFamily: 'Inter, sans-serif', fontWeight: 500 }}
              >
                We're always scouting for the next big thing in Indian hip hop
              </p>
              <button className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-10 py-4 rounded-full font-black text-lg hover:from-purple-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-2xl">
                <span style={{ fontFamily: 'Inter, sans-serif', fontWeight: 900 }}>Submit Your Demo</span>
              </button>
            </div>
          </div>

          {/* Artist Profile Modal */}
          {selectedArtist && (
            <div className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4">
              <div className="bg-gray-900/95 backdrop-blur-md rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto border border-purple-500/30">
                <div className="relative">
                  <img
                    src={selectedArtist.image}
                    alt={selectedArtist.name}
                    className="w-full h-80 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                  <button
                    onClick={() => setSelectedArtist(null)}
                    className="absolute top-6 right-6 bg-black/70 text-white p-3 rounded-full hover:bg-black/90 transition-colors text-2xl font-bold"
                  >
                    ×
                  </button>
                  
                  {/* Status and Streams */}
                  <div className="absolute top-6 left-6 flex space-x-3">
                    <div className={`px-4 py-2 rounded-full text-sm font-bold flex items-center space-x-2 ${getStatusColor(selectedArtist.status)}`}>
                      {getStatusIcon(selectedArtist.status)}
                      <span style={{ fontFamily: 'Inter, sans-serif', fontWeight: 700 }}>
                        {selectedArtist.status.toUpperCase()}
                      </span>
                    </div>
                    <div className="bg-black/70 text-white px-4 py-2 rounded-full text-sm font-bold">
                      <span style={{ fontFamily: 'Inter, sans-serif', fontWeight: 700 }}>
                        {selectedArtist.streams} streams
                      </span>
                    </div>
                  </div>
                </div>
                
                <div className="p-10">
                  <h3 
                    className="text-4xl font-black text-white mb-3"
                    style={{ fontFamily: 'Inter, sans-serif', fontWeight: 900 }}
                  >
                    {selectedArtist.name}
                  </h3>
                  <p 
                    className="text-purple-400 text-xl font-bold mb-8"
                    style={{ fontFamily: 'Inter, sans-serif', fontWeight: 700 }}
                  >
                    {selectedArtist.role}
                  </p>
                  
                  <div className="mb-8">
                    <h4 
                      className="text-2xl font-black text-white mb-4"
                      style={{ fontFamily: 'Inter, sans-serif', fontWeight: 900 }}
                    >
                      The Story 📖
                    </h4>
                    <p 
                      className="text-gray-300 text-lg leading-relaxed"
                      style={{ fontFamily: 'Inter, sans-serif', fontWeight: 500 }}
                    >
                      {selectedArtist.bio}
                    </p>
                  </div>

                  <div className="mb-8">
                    <h4 
                      className="text-2xl font-black text-white mb-4"
                      style={{ fontFamily: 'Inter, sans-serif', fontWeight: 900 }}
                    >
                      Discography 🎵
                    </h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {selectedArtist.discography.map((album, index) => (
                        <div 
                          key={index} 
                          className="bg-white/10 rounded-xl p-4 flex items-center space-x-3 hover:bg-white/20 transition-colors cursor-pointer"
                        >
                          <ExternalLink className="w-5 h-5 text-purple-400" />
                          <span 
                            className="text-gray-300 font-bold"
                            style={{ fontFamily: 'Inter, sans-serif', fontWeight: 700 }}
                          >
                            {album}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 
                      className="text-2xl font-black text-white mb-4"
                      style={{ fontFamily: 'Inter, sans-serif', fontWeight: 900 }}
                    >
                      Follow the Journey 📱
                    </h4>
                    <div className="flex space-x-6">
                      <div className="flex items-center space-x-3 text-gray-300 hover:text-purple-400 transition-colors cursor-pointer">
                        <Instagram className="w-6 h-6" />
                        <span 
                          className="font-bold"
                          style={{ fontFamily: 'Inter, sans-serif', fontWeight: 700 }}
                        >
                          {selectedArtist.social.instagram}
                        </span>
                      </div>
                      <div className="flex items-center space-x-3 text-gray-300 hover:text-blue-400 transition-colors cursor-pointer">
                        <Twitter className="w-6 h-6" />
                        <span 
                          className="font-bold"
                          style={{ fontFamily: 'Inter, sans-serif', fontWeight: 700 }}
                        >
                          {selectedArtist.social.twitter}
                        </span>
                      </div>
                      <div className="flex items-center space-x-3 text-gray-300 hover:text-red-400 transition-colors cursor-pointer">
                        <Youtube className="w-6 h-6" />
                        <span 
                          className="font-bold"
                          style={{ fontFamily: 'Inter, sans-serif', fontWeight: 700 }}
                        >
                          {selectedArtist.social.youtube}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Management;