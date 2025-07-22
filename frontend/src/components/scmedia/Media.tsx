import React from 'react';
import { Calendar, ExternalLink, Eye, Heart } from 'lucide-react';

const Media = () => {
  const featuredPost = {
    id: 1,
    title: 'SoundCheck Artists Dominate Hip Hop Awards 2025',
    excerpt: 'Our roster takes home 8 major awards at the annual Indian Hip Hop Awards, marking a historic night for independent artists.',
    image: 'https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg?auto=compress&cs=tinysrgb&w=800',
    date: '2025-01-15',
    views: '25K',
    likes: '1.2K'
  };

  const newsFeed = [
    {
      id: 2,
      title: 'MC Rhythm Signs Major Label Deal',
      excerpt: 'Rising star MC Rhythm inks distribution deal with Universal Music India.',
      date: '2025-01-12',
      views: '15K',
      likes: '890'
    },
    {
      id: 3,
      title: 'SC Studio Expansion Complete',
      excerpt: 'New state-of-the-art recording facilities now open for bookings.',
      date: '2025-01-10',
      views: '8.5K',
      likes: '456'
    },
    {
      id: 4,
      title: 'Lyrical Queen Featured in Rolling Stone India',
      excerpt: 'Exclusive interview about breaking barriers in Indian hip hop.',
      date: '2025-01-08',
      views: '12K',
      likes: '723'
    },
    {
      id: 5,
      title: 'Mumbai Hip Hop Festival Lineup Announced',
      excerpt: 'SoundCheck artists headline the biggest hip hop festival in India.',
      date: '2025-01-05',
      views: '20K',
      likes: '1.5K'
    },
    {
      id: 6,
      title: 'Beat Master Wins Producer of the Year',
      excerpt: 'Recognition for outstanding contribution to Indian hip hop production.',
      date: '2025-01-03',
      views: '9.2K',
      likes: '567'
    }
  ];

  return (
    <section id="media" className="min-h-screen relative py-20">
      {/* Red to Black gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-red-600 via-red-800 to-black"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 
            className="text-4xl md:text-5xl font-bold text-white mb-6"
            style={{ fontFamily: 'Telegraf, sans-serif' }}
          >
            SC Media
          </h2>
          <p 
            className="text-xl text-gray-300 max-w-3xl mx-auto"
            style={{ fontFamily: 'Telegraf, sans-serif' }}
          >
            Stay updated with the latest news, interviews, and stories from the SoundCheck universe.
          </p>
        </div>

        {/* Featured Post */}
        <div className="mb-16">
          <div className="relative bg-white/10 backdrop-blur-sm rounded-2xl overflow-hidden hover:bg-white/20 transition-all duration-300">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="relative h-64 lg:h-auto">
                <img
                  src={featuredPost.image}
                  alt={featuredPost.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-red-600 text-white px-3 py-1 rounded-full text-sm font-bold">
                    FEATURED
                  </span>
                </div>
              </div>
              
              <div className="p-8 flex flex-col justify-center">
                <h3 
                  className="text-2xl md:text-3xl font-bold text-white mb-4"
                  style={{ fontFamily: 'Telegraf, sans-serif' }}
                >
                  {featuredPost.title}
                </h3>
                <p 
                  className="text-gray-300 mb-6 leading-relaxed"
                  style={{ fontFamily: 'Telegraf, sans-serif' }}
                >
                  {featuredPost.excerpt}
                </p>
                
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-4 text-gray-400 text-sm">
                    <div className="flex items-center space-x-1">
                      <Calendar className="w-4 h-4" />
                      <span style={{ fontFamily: 'Telegraf, sans-serif' }}>{featuredPost.date}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Eye className="w-4 h-4" />
                      <span style={{ fontFamily: 'Telegraf, sans-serif' }}>{featuredPost.views}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Heart className="w-4 h-4" />
                      <span style={{ fontFamily: 'Telegraf, sans-serif' }}>{featuredPost.likes}</span>
                    </div>
                  </div>
                </div>
                
                <button className="bg-white text-black px-6 py-3 rounded-full font-bold hover:bg-gray-100 transition-all duration-300 flex items-center space-x-2 w-fit">
                  <span style={{ fontFamily: 'Telegraf, sans-serif' }}>Read Full Story</span>
                  <ExternalLink className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* News Feed */}
        <div>
          <h3 
            className="text-3xl font-bold text-white mb-8"
            style={{ fontFamily: 'Telegraf, sans-serif' }}
          >
            Latest News
          </h3>
          
          <div className="space-y-6">
            {newsFeed.map((post) => (
              <div
                key={post.id}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300 cursor-pointer"
              >
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <h4 
                      className="text-xl font-bold text-white mb-2"
                      style={{ fontFamily: 'Telegraf, sans-serif' }}
                    >
                      {post.title}
                    </h4>
                    <p 
                      className="text-gray-300 mb-4"
                      style={{ fontFamily: 'Telegraf, sans-serif' }}
                    >
                      {post.excerpt}
                    </p>
                    
                    <div className="flex items-center space-x-4 text-gray-400 text-sm">
                      <div className="flex items-center space-x-1">
                        <Calendar className="w-4 h-4" />
                        <span style={{ fontFamily: 'Telegraf, sans-serif' }}>{post.date}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Eye className="w-4 h-4" />
                        <span style={{ fontFamily: 'Telegraf, sans-serif' }}>{post.views}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Heart className="w-4 h-4" />
                        <span style={{ fontFamily: 'Telegraf, sans-serif' }}>{post.likes}</span>
                      </div>
                    </div>
                  </div>
                  
                  <ExternalLink className="w-5 h-5 text-gray-400 hover:text-white transition-colors ml-4" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Media;