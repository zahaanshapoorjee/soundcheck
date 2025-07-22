import React, { useState } from 'react';
import { Upload, Send, CheckCircle } from 'lucide-react';

const Submissions = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    submissionType: '',
    message: ''
  });
  const [file, setFile] = useState(null);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const submissionTypes = [
    { value: 'mgmt', label: 'Artist Management' },
    { value: 'live', label: 'Live Events' },
    { value: 'media', label: 'Media Coverage' },
    { value: 'records', label: 'Record Label' },
    { value: 'studio', label: 'Studio Booking' }
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
      <section id="submissions" className="min-h-screen relative overflow-hidden py-20">
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
              Submission Received!
            </h2>
            <p 
              className="text-xl text-gray-300 mb-8"
              style={{ fontFamily: 'Telegraf, sans-serif' }}
            >
              Thank you for your submission. Our team will review it and get back to you within 48 hours.
            </p>
            <button
              onClick={() => setIsSubmitted(false)}
              className="bg-white text-black px-8 py-3 rounded-full font-bold hover:bg-gray-100 transition-all duration-300"
            >
              <span style={{ fontFamily: 'Telegraf, sans-serif' }}>Submit Another</span>
            </button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="submissions" className="min-h-screen relative overflow-hidden py-20">
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

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 
            className="text-4xl md:text-5xl font-bold text-white mb-6"
            style={{ fontFamily: 'Telegraf, sans-serif' }}
          >
            Submissions
          </h2>
          <p 
            className="text-xl text-gray-300 max-w-3xl mx-auto"
            style={{ fontFamily: 'Telegraf, sans-serif' }}
          >
            Ready to take your career to the next level? Submit your work and join the SoundCheck family.
          </p>
        </div>

        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 md:p-12">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Name */}
              <div>
                <label 
                  className="block text-white font-bold mb-2"
                  style={{ fontFamily: 'Telegraf, sans-serif' }}
                >
                  Full Name *
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-white/50 transition-colors"
                  placeholder="Enter your full name"
                  style={{ fontFamily: 'Telegraf, sans-serif' }}
                />
              </div>

              {/* Email */}
              <div>
                <label 
                  className="block text-white font-bold mb-2"
                  style={{ fontFamily: 'Telegraf, sans-serif' }}
                >
                  Email Address *
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

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Phone */}
              <div>
                <label 
                  className="block text-white font-bold mb-2"
                  style={{ fontFamily: 'Telegraf, sans-serif' }}
                >
                  Phone Number *
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-white/50 transition-colors"
                  placeholder="+91 98765 43210"
                  style={{ fontFamily: 'Telegraf, sans-serif' }}
                />
              </div>

              {/* Submission Type */}
              <div>
                <label 
                  className="block text-white font-bold mb-2"
                  style={{ fontFamily: 'Telegraf, sans-serif' }}
                >
                  Submission Type *
                </label>
                <select
                  name="submissionType"
                  value={formData.submissionType}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-xl text-white focus:outline-none focus:border-white/50 transition-colors"
                  style={{ fontFamily: 'Telegraf, sans-serif' }}
                >
                  <option value="" className="bg-gray-900">Select submission type</option>
                  {submissionTypes.map((type) => (
                    <option key={type.value} value={type.value} className="bg-gray-900">
                      {type.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Message */}
            <div>
              <label 
                className="block text-white font-bold mb-2"
                style={{ fontFamily: 'Telegraf, sans-serif' }}
              >
                Tell us about yourself
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                rows={4}
                className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-white/50 transition-colors resize-none"
                placeholder="Share your story, achievements, and what makes you unique..."
                style={{ fontFamily: 'Telegraf, sans-serif' }}
              />
            </div>

            {/* File Upload */}
            <div>
              <label 
                className="block text-white font-bold mb-2"
                style={{ fontFamily: 'Telegraf, sans-serif' }}
              >
                Upload Your Work
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
                  className="flex items-center justify-center w-full px-4 py-8 bg-white/20 border-2 border-dashed border-white/30 rounded-xl cursor-pointer hover:bg-white/30 transition-colors"
                >
                  <div className="text-center">
                    <Upload className="w-12 h-12 text-white mx-auto mb-4" />
                    <p 
                      className="text-white font-bold mb-2"
                      style={{ fontFamily: 'Telegraf, sans-serif' }}
                    >
                      {file ? file.name : 'Click to upload or drag and drop'}
                    </p>
                    <p 
                      className="text-gray-400 text-sm"
                      style={{ fontFamily: 'Telegraf, sans-serif' }}
                    >
                      Audio, Video, PDF, DOC (Max 50MB)
                    </p>
                  </div>
                </label>
              </div>
            </div>

            {/* Submit Button */}
            <div className="text-center pt-6">
              <button
                type="submit"
                className="bg-white text-black px-12 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 flex items-center space-x-2 mx-auto"
              >
                <Send className="w-5 h-5" />
                <span style={{ fontFamily: 'Telegraf, sans-serif' }}>Submit Application</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Submissions;