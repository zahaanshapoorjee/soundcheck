import React from 'react';
import { Calendar, ExternalLink, Eye, Heart, TrendingUp, Video, Newspaper } from 'lucide-react';
import NebulaBackground from '../components/layout/NebulaBackground';
import post1 from "../assets/posts/post1.jpg"
import post2 from "../assets/posts/post2.jpg"
import post3 from "../assets/posts/post3.jpg"

const Media = () => {
  // TO-DO: FETCH THIS FROM BACKEND, NEED TO DECIDE BETWEEN AWS DATABASE OR GOOGLE SHEET, AWS SEEMS OVERKILL
  
  const featuredPost = {
    id: 1,
    title: 'Faheem Abdullah now exclusively with SoundCheck!',
    excerpt: 'Soundcheck is thrilled to announce the exclusive signing of Faheem Abdullah, a multifaceted artist hailing from Kashmir, India. Renowned as a singer-songwriter, poet and filmmaker, Faheem has captivated audiences worldwide with his unique blend of genres.',
    image: post1,
    date: '2025-07-21',
    views: '25K',
    likes: '1.2K',
    category: 'Awards',
    link: 'https://www.instagram.com/p/DMW5NTxIU9O/'
  };

  const newsFeed = [
    {
      id: 2,
      title: 'Arslan Nizami now exclusively with SoundCheck!',
      excerpt: 'SoundCheck is proud to welcome Arslan Nizami to our roster of groundbreaking talent. A genre-defying singer, songwriter, and composer from India, Arslan is known for his soul-stirring fusion of indie, folk, and semi-classical sounds, paired with evocative storytelling and poetic lyricism.',
      image: post2,
      date: '2025-07-22',
      views: '15K',
      likes: '890',
      category: 'Business',
      link: 'https://www.instagram.com/p/DMW5UiuIKiv/'
    },
    {
      id: 3,
      title: 'Maneet Oberoi now the official legal counsel of SoundCheck',
      excerpt: 'We are excited to announce that Maneet Oberoi now the official legal counsel of SoundCheck',
      image: post3,
      date: '2025-07-22',
      views: '8.5K',
      likes: '456',
      category: 'Studio',
      link: 'https://www.instagram.com/p/DMX4t9tIY0A/'
    },
  ];

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Awards':
        return 'bg-yellow-500 text-black';
      case 'Business':
        return 'bg-green-500 text-white';
      case 'Studio':
        return 'bg-purple-500 text-white';
      case 'Press':
        return 'bg-blue-500 text-white';
      case 'Events':
        return 'bg-red-500 text-white';
      default:
        return 'bg-gray-500 text-white';
    }
  };

  return (
    <div className="min-h-screen pt-16">
      <section className="min-h-screen relative py-20">
        <NebulaBackground variant="red" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 
              className="text-5xl md:text-7xl font-black text-white mb-8"
              style={{ fontFamily: 'Inter, sans-serif', fontWeight: 900 }}
            >
              SoundCheck Media 
            </h1>
            <p 
              className="text-2xl text-red-300 mb-6 font-bold"
              style={{ fontFamily: 'Inter, sans-serif', fontWeight: 700 }}
            >
              All the hottest news, interviews, and behind-the-scenes content!
            </p>
            <p 
              className="text-xl text-gray-300 max-w-4xl mx-auto"
              style={{ fontFamily: 'Inter, sans-serif', fontWeight: 500 }}
            >
              Stay plugged into the SoundCheck universe with exclusive content, breaking news, and stories that matter in the Indian hip hop scene 
            </p>
          </div>

          {/* Featured Post */}
          <div className="mb-20">
            <div className="relative bg-white/10 backdrop-blur-sm rounded-3xl overflow-hidden hover:bg-white/20 transition-all duration-300 border border-red-500/20">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="relative h-80 lg:h-auto">
                  <img
                    src={featuredPost.image}
                    alt={featuredPost.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-6 left-6">
                    <span className="bg-red-600 text-white px-4 py-2 rounded-full font-black text-lg flex items-center space-x-2">
                      <TrendingUp className="w-5 h-5" />
                      <span>FEATURED</span>
                    </span>
                  </div>
                  <div className="absolute top-6 right-6">
                    <span className={`px-3 py-1 rounded-full text-sm font-bold ${getCategoryColor(featuredPost.category)}`}>
                      {featuredPost.category}
                    </span>
                  </div>
                </div>
                
                <div className="p-10 flex flex-col justify-center">
                  <h2 
                    className="text-3xl md:text-4xl font-black text-white mb-6"
                    style={{ fontFamily: 'Inter, sans-serif', fontWeight: 900 }}
                  >
                    {featuredPost.title}
                  </h2>
                  <p 
                    className="text-gray-300 mb-8 leading-relaxed text-lg"
                    style={{ fontFamily: 'Inter, sans-serif', fontWeight: 500 }}
                  >
                    {featuredPost.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between mb-8">
                    <div className="flex items-center space-x-6 text-gray-400">
                      <div className="flex items-center space-x-2">
                        <Calendar className="w-5 h-5" />
                        <span 
                          className="font-bold"
                          style={{ fontFamily: 'Inter, sans-serif', fontWeight: 700 }}
                        >
                          {featuredPost.date}
                        </span>
                      </div>
                      {/* <div className="flex items-center space-x-2">
                        <Eye className="w-5 h-5" />
                        <span 
                          className="font-bold"
                          style={{ fontFamily: 'Inter, sans-serif', fontWeight: 700 }}
                        >
                          {featuredPost.views}
                        </span>
                      </div> */}
                      {/* <div className="flex items-center space-x-2">
                        <Heart className="w-5 h-5" />
                        <span 
                          className="font-bold"
                          style={{ fontFamily: 'Inter, sans-serif', fontWeight: 700 }}
                        >
                          {featuredPost.likes}
                        </span>
                      </div> */}
                    </div>
                  </div>
                  <a href={featuredPost.link} target='_blank'>
                  <button className="bg-gradient-to-r from-red-600 to-orange-600 text-white px-8 py-4 rounded-full font-black text-lg hover:from-red-700 hover:to-orange-700 transition-all duration-300 flex items-center space-x-3 w-fit transform hover:scale-105">
                    <span style={{ fontFamily: 'Inter, sans-serif', fontWeight: 900 }}>Read Full Story</span>
                    <ExternalLink className="w-5 h-5" />
                  </button>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* News Feed */}
          <div>
            <h2 
              className="text-4xl font-black text-white mb-12"
              style={{ fontFamily: 'Inter, sans-serif', fontWeight: 900 }}
            >
              Latest News & Updates 
            </h2>
            
            <div className="space-y-8">
              {newsFeed.map((post) => (
                <a href={post.link} target='_blank'>
                <div
                  key={post.id}
                  className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-all duration-300 cursor-pointer transform hover:scale-[1.02] border border-red-500/20 mb-4"
                >
                  <div className="flex items-start space-x-6">
                    {/* News Image */}
                    <div className="flex-shrink-0">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-48 h-48 object-cover rounded-xl"
                      />
                    </div>
                    
                    {/* News Content */}
                    <div className="flex-1">
                      <div className="flex items-center space-x-4 mb-4">
                        <span className={`px-3 py-1 rounded-full text-sm font-bold ${getCategoryColor(post.category)}`}>
                          {post.category}
                        </span>
                        <div className="flex items-center space-x-4 text-gray-400 text-sm">
                          <div className="flex items-center space-x-1">
                            <Calendar className="w-4 h-4" />
                            <span 
                              className="font-bold"
                              style={{ fontFamily: 'Inter, sans-serif', fontWeight: 700 }}
                            >
                              {post.date}
                            </span>
                          </div>
                          {/* <div className="flex items-center space-x-1">
                            <Eye className="w-4 h-4" />
                            <span 
                              className="font-bold"
                              style={{ fontFamily: 'Inter, sans-serif', fontWeight: 700 }}
                            >
                              {post.views}
                            </span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Heart className="w-4 h-4" />
                            <span 
                              className="font-bold"
                              style={{ fontFamily: 'Inter, sans-serif', fontWeight: 700 }}
                            >
                              {post.likes}
                            </span>
                          </div> */}
                        </div>
                      </div>
                      
                      <h3 
                        className="text-2xl font-black text-white mb-4"
                        style={{ fontFamily: 'Inter, sans-serif', fontWeight: 900 }}
                      >
                        {post.title}
                      </h3>
                      <p 
                        className="text-gray-300 text-lg"
                        style={{ fontFamily: 'Inter, sans-serif', fontWeight: 500 }}
                      >
                        {post.excerpt}
                      </p>
                    </div>
                    
                    {/* External Link Icon */}
                    <div className="flex-shrink-0">
                      <ExternalLink className="w-6 h-6 text-gray-400 hover:text-red-400 transition-colors" />
                    </div>
                  </div>
                </div>
                </a>
              ))}
            </div>
          </div>

          {/* Media Kit CTA */}
          {/* <div className="mt-20 text-center">
            <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-12 border border-red-500/20">
              <div className="flex justify-center mb-6">
                <div className="flex space-x-4">
                  <Video className="w-12 h-12 text-red-400" />
                  <Newspaper className="w-12 h-12 text-red-400" />
                </div>
              </div>
              <h2 
                className="text-4xl font-black text-white mb-6"
                style={{ fontFamily: 'Inter, sans-serif', fontWeight: 900 }}
              >
                Need Press Materials? 📋
              </h2>
              <p 
                className="text-xl text-gray-300 mb-8"
                style={{ fontFamily: 'Inter, sans-serif', fontWeight: 500 }}
              >
                Download our complete media kit with high-res photos, bios, and press releases
              </p>
              <button className="bg-gradient-to-r from-red-600 to-pink-600 text-white px-10 py-4 rounded-full font-black text-lg hover:from-red-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105 shadow-2xl">
                <span style={{ fontFamily: 'Inter, sans-serif', fontWeight: 900 }}>Download Media Kit</span>
              </button>
            </div>
          </div> */}
        </div>
      </section>
    </div>
  );
};

export default Media;