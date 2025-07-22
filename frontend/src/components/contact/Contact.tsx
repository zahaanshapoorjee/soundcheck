import React, { useState } from 'react';
import { Send, MapPin, Phone, Mail, Clock, CheckCircle } from 'lucide-react';

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
      <section id="contact" className="min-h-screen relative overflow-hidden py-20">
        {/* Space-themed multicolor background */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900">
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/80"></div>
        </div>

        <div className="relative z-10 flex items-center justify-center min-h-screen px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto">
            <CheckCircle className="w-20 h-20 text-green-400 mx-auto mb-6" />
            <h2 
              className="text-4xl font-bold text-white mb-6"
              style={{ fontFamily: 'Telegraf, sans-serif' }}
            >
              Message Sent!
            </h2>
            <p 
              className="text-xl text-gray-300 mb-8"
              style={{ fontFamily: 'Telegraf, sans-serif' }}
            >
              Thank you for reaching out. We'll get back to you within 24 hours.
            </p>
            <button
              onClick={() => setIsSubmitted(false)}
              className="bg-white text-black px-8 py-3 rounded-full font-bold hover:bg-gray-100 transition-all duration-300"
            >
              <span style={{ fontFamily: 'Telegraf, sans-serif' }}>Send Another Message</span>
            </button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="min-h-screen relative overflow-hidden py-20">
      {/* Space-themed multicolor background */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900">
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/80"></div>
        {/* Animated stars */}
        <div className="absolute inset-0">
          {[...Array(30)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-white rounded-full animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${2 + Math.random() * 2}s`,
              }}
            />
          ))}
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 
            className="text-4xl md:text-5xl font-bold text-white mb-6"
            style={{ fontFamily: 'Telegraf, sans-serif' }}
          >
            Contact Us
          </h2>
          <p 
            className="text-xl text-gray-300 max-w-3xl mx-auto"
            style={{ fontFamily: 'Telegraf, sans-serif' }}
          >
            Ready to start your journey with SoundCheck? Get in touch with our team.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
            <h3 
              className="text-2xl font-bold text-white mb-6"
              style={{ fontFamily: 'Telegraf, sans-serif' }}
            >
              Send us a message
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label 
                    className="block text-white font-bold mb-2"
                    style={{ fontFamily: 'Telegraf, sans-serif' }}
                  >
                    Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-white/50 transition-colors"
                    placeholder="Your name"
                    style={{ fontFamily: 'Telegraf, sans-serif' }}
                  />
                </div>

                <div>
                  <label 
                    className="block text-white font-bold mb-2"
                    style={{ fontFamily: 'Telegraf, sans-serif' }}
                  >
                    Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-white/50 transition-colors"
                    placeholder="your@email.com"
                    style={{ fontFamily: 'Telegraf, sans-serif' }}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label 
                    className="block text-white font-bold mb-2"
                    style={{ fontFamily: 'Telegraf, sans-serif' }}
                  >
                    Phone
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-white/50 transition-colors"
                    placeholder="+91 98765 43210"
                    style={{ fontFamily: 'Telegraf, sans-serif' }}
                  />
                </div>

                <div>
                  <label 
                    className="block text-white font-bold mb-2"
                    style={{ fontFamily: 'Telegraf, sans-serif' }}
                  >
                    Subject *
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-white/50 transition-colors"
                    placeholder="What's this about?"
                    style={{ fontFamily: 'Telegraf, sans-serif' }}
                  />
                </div>
              </div>

              <div>
                <label 
                  className="block text-white font-bold mb-2"
                  style={{ fontFamily: 'Telegraf, sans-serif' }}
                >
                  Message *
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-white/50 transition-colors resize-none"
                  placeholder="Tell us how we can help you..."
                  style={{ fontFamily: 'Telegraf, sans-serif' }}
                />
              </div>

              <button
                type="submit"
                className="w-full bg-white text-black py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2"
              >
                <Send className="w-5 h-5" />
                <span style={{ fontFamily: 'Telegraf, sans-serif' }}>Send Message</span>
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
              <h3 
                className="text-2xl font-bold text-white mb-6"
                style={{ fontFamily: 'Telegraf, sans-serif' }}
              >
                Get in touch
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <MapPin className="w-6 h-6 text-white mt-1" />
                  <div>
                    <h4 
                      className="text-lg font-bold text-white mb-1"
                      style={{ fontFamily: 'Telegraf, sans-serif' }}
                    >
                      Office Address
                    </h4>
                    <p 
                      className="text-gray-300"
                      style={{ fontFamily: 'Telegraf, sans-serif' }}
                    >
                      123 Music Street, Bandra West<br />
                      Mumbai, Maharashtra 400050
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Phone className="w-6 h-6 text-white mt-1" />
                  <div>
                    <h4 
                      className="text-lg font-bold text-white mb-1"
                      style={{ fontFamily: 'Telegraf, sans-serif' }}
                    >
                      Phone
                    </h4>
                    <p 
                      className="text-gray-300"
                      style={{ fontFamily: 'Telegraf, sans-serif' }}
                    >
                      +91 98765 43210<br />
                      +91 87654 32109
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Mail className="w-6 h-6 text-white mt-1" />
                  <div>
                    <h4 
                      className="text-lg font-bold text-white mb-1"
                      style={{ fontFamily: 'Telegraf, sans-serif' }}
                    >
                      Email
                    </h4>
                    <p 
                      className="text-gray-300"
                      style={{ fontFamily: 'Telegraf, sans-serif' }}
                    >
                      info@soundcheck.in<br />
                      bookings@soundcheck.in
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Clock className="w-6 h-6 text-white mt-1" />
                  <div>
                    <h4 
                      className="text-lg font-bold text-white mb-1"
                      style={{ fontFamily: 'Telegraf, sans-serif' }}
                    >
                      Business Hours
                    </h4>
                    <p 
                      className="text-gray-300"
                      style={{ fontFamily: 'Telegraf, sans-serif' }}
                    >
                      Monday - Friday: 10:00 AM - 8:00 PM<br />
                      Saturday: 10:00 AM - 6:00 PM<br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Contact */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
              <h3 
                className="text-2xl font-bold text-white mb-4"
                style={{ fontFamily: 'Telegraf, sans-serif' }}
              >
                Quick Contact
              </h3>
              <p 
                className="text-gray-300 mb-6"
                style={{ fontFamily: 'Telegraf, sans-serif' }}
              >
                For urgent matters or immediate assistance, reach out directly:
              </p>
              
              <div className="space-y-3">
                <button className="w-full bg-green-600 text-white py-3 rounded-xl font-bold hover:bg-green-700 transition-colors flex items-center justify-center space-x-2">
                  <Phone className="w-5 h-5" />
                  <span style={{ fontFamily: 'Telegraf, sans-serif' }}>Call Now</span>
                </button>
                <button className="w-full bg-blue-600 text-white py-3 rounded-xl font-bold hover:bg-blue-700 transition-colors flex items-center justify-center space-x-2">
                  <Mail className="w-5 h-5" />
                  <span style={{ fontFamily: 'Telegraf, sans-serif' }}>Email Us</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;