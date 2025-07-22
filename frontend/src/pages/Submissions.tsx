import React, { useState } from 'react';
import { Upload, Send, CheckCircle, Music, Zap, Star } from 'lucide-react';
import NebulaBackground from '../components/layout/NebulaBackground';

const Submissions = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    submissionType: '',
    message: '',
    socialLinks: '',
    experience: ''
  });
  const [file, setFile] = useState(null);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const submissionTypes = [
    { value: 'mgmt', label: 'Artist Management', description: 'Ready to take your career to the next level?' },
    { value: 'live', label: 'Live Events', description: 'Want to perform at our shows?' },
    { value: 'media', label: 'Media Coverage', description: 'Got a story worth telling?' },
    { value: 'records', label: 'Record Label', description: 'Ready for SC Records?' },
    { value: 'studio', label: 'Studio Booking', description: 'Need professional recording?' }
  ];

  const tips = [
    {
      icon: Music,
      title: 'Quality Over Quantity',
      description: 'Send us your BEST 2-3 tracks, not your entire catalog'
    },
    {
      icon: Zap,
      title: 'Be Authentic',
      description: 'We want to hear YOUR unique voice and style'
    },
    {
      icon: Star,
      title: 'Tell Your Story',
      description: 'Help us understand your journey and vision'
    }
  ];

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitted(true);
    }, 1000);
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen pt-16">
        <section className="min-h-screen relative overflow-hidden">
          <NebulaBackground variant="multicolor" />

          <div className="relative z-10 flex items-center justify-center min-h-screen px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto">
              <CheckCircle className="w-24 h-24 text-green-400 mx-auto mb-8" />
              <h1 
                className="text-5xl md:text-6xl font-black text-white mb-8"
                style={{ fontFamily: 'Inter, sans-serif', fontWeight: 900 }}
              >
                Submission Received! 🎉
              </h1>
              <p 
                className="text-2xl text-green-300 mb-8 font-bold"
                style={{ fontFamily: 'Inter, sans-serif', fontWeight: 700 }}
              >
                Your demo is now in our hands!
              </p>
              <p 
                className="text-xl text-gray-300 mb-12"
                style={{ fontFamily: 'Inter, sans-serif', fontWeight: 500 }}
              >
                Our A&R team will review your submission and get back to you within 48 hours. If we're feeling it, expect a call! 📞
              </p>
              <button
                onClick={() => setIsSubmitted(false)}
                className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-10 py-4 rounded-full font-black text-lg hover:from-purple-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
              >
                <span style={{ fontFamily: 'Inter, sans-serif', fontWeight: 900 }}>Submit Another</span>
              </button>
            </div>
          </div>
        </section>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-16">
      <section className="min-h-screen relative overflow-hidden py-20">
        <NebulaBackground variant="multicolor" />

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 
              className="text-5xl md:text-7xl font-black text-white mb-8"
              style={{ fontFamily: 'Inter, sans-serif', fontWeight: 900 }}
            >
              Submissions 🚀
            </h1>
            <p 
              className="text-2xl text-purple-300 mb-6 font-bold"
              style={{ fontFamily: 'Inter, sans-serif', fontWeight: 700 }}
            >
              Ready to join the SoundCheck family?
            </p>
            <p 
              className="text-xl text-gray-300 max-w-4xl mx-auto"
              style={{ fontFamily: 'Inter, sans-serif', fontWeight: 500 }}
            >
              This is your shot! Send us your best work and let's see if you've got what it takes to be part of India's most elite hip hop collective 🎯
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Tips Section */}
            <div className="lg:col-span-1">
              <h2 
                className="text-3xl font-black text-white mb-8"
                style={{ fontFamily: 'Inter, sans-serif', fontWeight: 900 }}
              >
                Pro Tips 💡
              </h2>
              
              <div className="space-y-6">
                {tips.map((tip, index) => (
                  <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-purple-500/20">
                    <tip.icon className="w-12 h-12 text-purple-400 mb-4" />
                    <h3 
                      className="text-xl font-black text-white mb-3"
                      style={{ fontFamily: 'Inter, sans-serif', fontWeight: 900 }}
                    >
                      {tip.title}
                    </h3>
                    <p 
                      className="text-gray-300"
                      style={{ fontFamily: 'Inter, sans-serif', fontWeight: 500 }}
                    >
                      {tip.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Form Section */}
            <div className="lg:col-span-2">
              <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-10 border border-purple-500/20">
                <h2 
                  className="text-3xl font-black text-white mb-8"
                  style={{ fontFamily: 'Inter, sans-serif', fontWeight: 900 }}
                >
                  Submit Your Demo 🎵
                </h2>
                
                <form onSubmit={handleSubmit} className="space-y-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Name */}
                    <div>
                      <label 
                        className="block text-white font-black mb-3 text-lg"
                        style={{ fontFamily: 'Inter, sans-serif', fontWeight: 900 }}
                      >
                        Artist Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-6 py-4 bg-white/20 border-2 border-white/30 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-purple-400 transition-colors font-bold"
                        placeholder="Your stage name"
                        style={{ fontFamily: 'Inter, sans-serif', fontWeight: 700 }}
                      />
                    </div>

                    {/* Email */}
                    <div>
                      <label 
                        className="block text-white font-black mb-3 text-lg"
                        style={{ fontFamily: 'Inter, sans-serif', fontWeight: 900 }}
                      >
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-6 py-4 bg-white/20 border-2 border-white/30 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-purple-400 transition-colors font-bold"
                        placeholder="your@email.com"
                        style={{ fontFamily: 'Inter, sans-serif', fontWeight: 700 }}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Phone */}
                    <div>
                      <label 
                        className="block text-white font-black mb-3 text-lg"
                        style={{ fontFamily: 'Inter, sans-serif', fontWeight: 900 }}
                      >
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        required
                        className="w-full px-6 py-4 bg-white/20 border-2 border-white/30 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-purple-400 transition-colors font-bold"
                        placeholder="+91 98765 43210"
                        style={{ fontFamily: 'Inter, sans-serif', fontWeight: 700 }}
                      />
                    </div>

                    {/* Submission Type */}
                    <div>
                      <label 
                        className="block text-white font-black mb-3 text-lg"
                        style={{ fontFamily: 'Inter, sans-serif', fontWeight: 900 }}
                      >
                        What Are You Looking For? *
                      </label>
                      <select
                        name="submissionType"
                        value={formData.submissionType}
                        onChange={handleInputChange}
                        required
                        className="w-full px-6 py-4 bg-white/20 border-2 border-white/30 rounded-xl text-white focus:outline-none focus:border-purple-400 transition-colors font-bold"
                        style={{ fontFamily: 'Inter, sans-serif', fontWeight: 700 }}
                      >
                        <option value="" className="bg-gray-900">Select what you need</option>
                        {submissionTypes.map((type) => (
                          <option key={type.value} value={type.value} className="bg-gray-900">
                            {type.label}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Social Links */}
                  <div>
                    <label 
                      className="block text-white font-black mb-3 text-lg"
                      style={{ fontFamily: 'Inter, sans-serif', fontWeight: 900 }}
                    >
                      Social Media Links
                    </label>
                    <input
                      type="text"
                      name="socialLinks"
                      value={formData.socialLinks}
                      onChange={handleInputChange}
                      className="w-full px-6 py-4 bg-white/20 border-2 border-white/30 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-purple-400 transition-colors font-bold"
                      placeholder="Instagram, YouTube, Spotify links (comma separated)"
                      style={{ fontFamily: 'Inter, sans-serif', fontWeight: 700 }}
                    />
                  </div>

                  {/* Experience */}
                  <div>
                    <label 
                      className="block text-white font-black mb-3 text-lg"
                      style={{ fontFamily: 'Inter, sans-serif', fontWeight: 900 }}
                    >
                      Your Hip Hop Journey
                    </label>
                    <textarea
                      name="experience"
                      value={formData.experience}
                      onChange={handleInputChange}
                      rows={4}
                      className="w-full px-6 py-4 bg-white/20 border-2 border-white/30 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-purple-400 transition-colors resize-none font-bold"
                      placeholder="Tell us about your experience, achievements, and what makes you special..."
                      style={{ fontFamily: 'Inter, sans-serif', fontWeight: 700 }}
                    />
                  </div>

                  {/* Message */}
                  <div>
                    <label 
                      className="block text-white font-black mb-3 text-lg"
                      style={{ fontFamily: 'Inter, sans-serif', fontWeight: 900 }}
                    >
                      Why SoundCheck?
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={4}
                      className="w-full px-6 py-4 bg-white/20 border-2 border-white/30 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-purple-400 transition-colors resize-none font-bold"
                      placeholder="Why do you want to work with us? What's your vision?"
                      style={{ fontFamily: 'Inter, sans-serif', fontWeight: 700 }}
                    />
                  </div>

                  {/* File Upload */}
                  <div>
                    <label 
                      className="block text-white font-black mb-3 text-lg"
                      style={{ fontFamily: 'Inter, sans-serif', fontWeight: 900 }}
                    >
                      Upload Your Best Work 🎵
                    </label>
                    <div className="relative">
                      <input
                        type="file"
                        onChange={handleFileChange}
                        accept="audio/*,video/*,.pdf,.doc,.docx"
                        className="hidden"
                        id="file-upload"
                      />
                      <label
                        htmlFor="file-upload"
                        className="flex items-center justify-center w-full px-6 py-12 bg-white/20 border-3 border-dashed border-purple-400/50 rounded-2xl cursor-pointer hover:bg-white/30 transition-colors"
                      >
                        <div className="text-center">
                          <Upload className="w-16 h-16 text-purple-400 mx-auto mb-6" />
                          <p 
                            className="text-white font-black mb-3 text-xl"
                            style={{ fontFamily: 'Inter, sans-serif', fontWeight: 900 }}
                          >
                            {file ? file.name : 'Drop your fire tracks here! 🔥'}
                          </p>
                          <p 
                            className="text-gray-400 font-bold"
                            style={{ fontFamily: 'Inter, sans-serif', fontWeight: 700 }}
                          >
                            Audio, Video, PDF, DOC (Max 50MB)
                          </p>
                        </div>
                      </label>
                    </div>
                  </div>

                  {/* Submit Button */}
                  <div className="text-center pt-8">
                    <button
                      type="submit"
                      className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-16 py-5 rounded-full font-black text-xl hover:from-purple-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 flex items-center space-x-3 mx-auto shadow-2xl"
                    >
                      <Send className="w-6 h-6" />
                      <span style={{ fontFamily: 'Inter, sans-serif', fontWeight: 900 }}>Submit My Demo</span>
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Submissions;