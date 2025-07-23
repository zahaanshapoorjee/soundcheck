import React, { useState } from 'react';
import { Send, MapPin, Phone, Mail, Clock, CheckCircle, Instagram, Twitter, Youtube } from 'lucide-react';
import NebulaBackground from '../components/layout/NebulaBackground';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
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
                Message Sent! 📨
              </h1>
              <p 
                className="text-2xl text-green-300 mb-8 font-bold"
                style={{ fontFamily: 'Inter, sans-serif', fontWeight: 700 }}
              >
                We got your message and we're on it!
              </p>
              <p 
                className="text-xl text-gray-300 mb-12"
                style={{ fontFamily: 'Inter, sans-serif', fontWeight: 500 }}
              >
                Our team will get back to you within 24 hours. If it's urgent, hit us up on our socials! 📱
              </p>
              <button
                onClick={() => setIsSubmitted(false)}
                className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-10 py-4 rounded-full font-black text-lg hover:from-purple-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
              >
                <span style={{ fontFamily: 'Inter, sans-serif', fontWeight: 900 }}>Send Another Message</span>
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

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 
              className="text-5xl md:text-7xl font-black text-white mb-8"
              style={{ fontFamily: 'Inter, sans-serif', fontWeight: 900 }}
            >
              Contact Us 
            </h1>
            <p 
              className="text-2xl text-purple-300 mb-6 font-bold"
              style={{ fontFamily: 'Inter, sans-serif', fontWeight: 700 }}
            >
              Let's build something legendary together!
            </p>
            <p 
              className="text-xl text-gray-300 max-w-4xl mx-auto"
              style={{ fontFamily: 'Inter, sans-serif', fontWeight: 500 }}
            >
              Whether you're an artist, a brand, or just someone who loves hip hop culture - we want to hear from you! Drop us a line and let's make magic happen 
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-10 border border-purple-500/20">
              <h2 
                className="text-3xl font-black text-white mb-8"
                style={{ fontFamily: 'Inter, sans-serif', fontWeight: 900 }}
              >
                Send us a message 
              </h2>
              
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label 
                      className="block text-white font-black mb-3 text-lg"
                      style={{ fontFamily: 'Inter, sans-serif', fontWeight: 900 }}
                    >
                      Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-6 py-4 bg-white/20 border-2 border-white/30 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-purple-400 transition-colors font-bold"
                      placeholder="Your name"
                      style={{ fontFamily: 'Inter, sans-serif', fontWeight: 700 }}
                    />
                  </div>

                  <div>
                    <label 
                      className="block text-white font-black mb-3 text-lg"
                      style={{ fontFamily: 'Inter, sans-serif', fontWeight: 900 }}
                    >
                      Email *
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
                  <div>
                    <label 
                      className="block text-white font-black mb-3 text-lg"
                      style={{ fontFamily: 'Inter, sans-serif', fontWeight: 900 }}
                    >
                      Phone
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-6 py-4 bg-white/20 border-2 border-white/30 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-purple-400 transition-colors font-bold"
                      placeholder="+91 98765 43210"
                      style={{ fontFamily: 'Inter, sans-serif', fontWeight: 700 }}
                    />
                  </div>

                  <div>
                    <label 
                      className="block text-white font-black mb-3 text-lg"
                      style={{ fontFamily: 'Inter, sans-serif', fontWeight: 900 }}
                    >
                      Subject *
                    </label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      className="w-full px-6 py-4 bg-white/20 border-2 border-white/30 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-purple-400 transition-colors font-bold"
                      placeholder="What's this about?"
                      style={{ fontFamily: 'Inter, sans-serif', fontWeight: 700 }}
                    />
                  </div>
                </div>

                <div>
                  <label 
                    className="block text-white font-black mb-3 text-lg"
                    style={{ fontFamily: 'Inter, sans-serif', fontWeight: 900 }}
                  >
                    Message *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="w-full px-6 py-4 bg-white/20 border-2 border-white/30 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-purple-400 transition-colors resize-none font-bold"
                    placeholder="Tell us what's on your mind..."
                    style={{ fontFamily: 'Inter, sans-serif', fontWeight: 700 }}
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white py-5 rounded-xl font-black text-xl hover:from-purple-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-3 shadow-2xl"
                >
                  <Send className="w-6 h-6" />
                  <span style={{ fontFamily: 'Inter, sans-serif', fontWeight: 900 }}>Send Message</span>
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-10 border border-purple-500/20">
                <h2 
                  className="text-3xl font-black text-white mb-8"
                  style={{ fontFamily: 'Inter, sans-serif', fontWeight: 900 }}
                >
                  Get in touch
                </h2>
                
                <div className="space-y-8">
                  <div className="flex items-start space-x-6">
                    <MapPin className="w-8 h-8 text-purple-400 mt-1" />
                    <div>
                      <h3 
                        className="text-xl font-black text-white mb-2"
                        style={{ fontFamily: 'Inter, sans-serif', fontWeight: 900 }}
                      >
                        HQ Address
                      </h3>
                      <p 
                        className="text-gray-300 text-lg"
                        style={{ fontFamily: 'Inter, sans-serif', fontWeight: 500 }}
                      >
                        123 Music Street, Bandra West<br />
                        Mumbai, Maharashtra 400050<br />
                        India 🇮🇳
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-6">
                    <Phone className="w-8 h-8 text-blue-400 mt-1" />
                    <div>
                      <h3 
                        className="text-xl font-black text-white mb-2"
                        style={{ fontFamily: 'Inter, sans-serif', fontWeight: 900 }}
                      >
                        Phone Numbers
                      </h3>
                      <p 
                        className="text-gray-300 text-lg"
                        style={{ fontFamily: 'Inter, sans-serif', fontWeight: 500 }}
                      >
                        Main: +91 98104 07176<br />
                        Studio: +91 98104 07176<br />
                        Bookings: +91 98104 07176
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-6">
                    <Mail className="w-8 h-8 text-green-400 mt-1" />
                    <div>
                      <h3 
                        className="text-xl font-black text-white mb-2"
                        style={{ fontFamily: 'Inter, sans-serif', fontWeight: 900 }}
                      >
                        Email Addresses
                      </h3>
                      <p 
                        className="text-gray-300 text-lg"
                        style={{ fontFamily: 'Inter, sans-serif', fontWeight: 500 }}
                      >
                        General: info@soundcheck.in<br />
                        Bookings: bookings@soundcheck.in<br />
                        Press: media@soundcheck.in
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-6">
                    <Clock className="w-8 h-8 text-orange-400 mt-1" />
                    <div>
                      <h3 
                        className="text-xl font-black text-white mb-2"
                        style={{ fontFamily: 'Inter, sans-serif', fontWeight: 900 }}
                      >
                        Business Hours
                      </h3>
                      <p 
                        className="text-gray-300 text-lg"
                        style={{ fontFamily: 'Inter, sans-serif', fontWeight: 500 }}
                      >
                        Monday - Friday: 10:00 AM - 8:00 PM<br />
                        Saturday: 10:00 AM - 6:00 PM<br />
                        Sunday: Closed (unless there's a show!)
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Media & Quick Contact */}
              <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-10 border border-purple-500/20">
                <h2 
                  className="text-3xl font-black text-white mb-8"
                  style={{ fontFamily: 'Inter, sans-serif', fontWeight: 900 }}
                >
                  Follow the Movement 
                </h2>
                
                <div className="space-y-6">
                  <div className="flex items-center space-x-4 text-gray-300 hover:text-pink-400 transition-colors cursor-pointer">
                    <Instagram className="w-8 h-8" />
                    <span 
                      className="font-bold text-xl"
                      style={{ fontFamily: 'Inter, sans-serif', fontWeight: 700 }}
                    >
                      @soundcheck.co.in
                    </span>
                  </div>
                  <div className="flex items-center space-x-4 text-gray-300 hover:text-blue-400 transition-colors cursor-pointer">
                    <Twitter className="w-8 h-8" />
                    <span 
                      className="font-bold text-xl"
                      style={{ fontFamily: 'Inter, sans-serif', fontWeight: 700 }}
                    >
                      @soundcheck_in
                    </span>
                  </div>
                  <div className="flex items-center space-x-4 text-gray-300 hover:text-red-400 transition-colors cursor-pointer">
                    <Youtube className="w-8 h-8" />
                    <span 
                      className="font-bold text-xl"
                      style={{ fontFamily: 'Inter, sans-serif', fontWeight: 700 }}
                    >
                      SoundCheck Official
                    </span>
                  </div>
                </div>

                <div className="mt-8 pt-8 border-t border-white/20">
                  <h3 
                    className="text-xl font-black text-white mb-6"
                    style={{ fontFamily: 'Inter, sans-serif', fontWeight: 900 }}
                  >
                    Need Immediate Help? 
                  </h3>
                  <div className="space-y-4">
                    <button className="w-full bg-green-600 text-white py-4 rounded-xl font-black text-lg hover:bg-green-700 transition-colors flex items-center justify-center space-x-3">
                      <Phone className="w-6 h-6" />
                      <span style={{ fontFamily: 'Inter, sans-serif', fontWeight: 900 }}>Call Now</span>
                    </button>
                    <button className="w-full bg-blue-600 text-white py-4 rounded-xl font-black text-lg hover:bg-blue-700 transition-colors flex items-center justify-center space-x-3">
                      <Mail className="w-6 h-6" />
                      <span style={{ fontFamily: 'Inter, sans-serif', fontWeight: 900 }}>Email Us</span>
                    </button>
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

export default Contact;