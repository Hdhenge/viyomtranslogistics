import React, { useState } from 'react';
import { MdPhone, MdEmail, MdLocationOn, MdAccessTime } from 'react-icons/md';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Add your form submission logic here
  };

  return (
    <section className="bg-white py-16 px-4 sm:px-6 lg:px-8" id="contact">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Contact Info */}
          <div>
            <p className="text-sm text-lime-500 uppercase tracking-wide font-semibold mb-3">
              GET IN TOUCH
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Let's Start a Conversation
            </h2>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Have questions about your shipment or need a custom logistics solution? The Viyom Tranlogistics team is ready to assist you. Reach out to us for reliable and efficient support.
            </p>

            {/* Contact Details */}
            <div className="space-y-6">
              {/* Phone */}
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-lime-100 rounded-lg flex items-center justify-center">
                    <MdPhone className="w-6 h-6 text-lime-600" />
                  </div>
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-semibold text-gray-900 mb-1">Phone</h4>
                  <p className="text-gray-600"><a href="tel:+91 98765 43210">+91 98765 43210</a></p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-lime-100 rounded-lg flex items-center justify-center">
                    <MdEmail className="w-6 h-6 text-lime-600" />
                  </div>
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-semibold text-gray-900 mb-1">Email</h4>
                  <p className="text-gray-600"><a href="mailto:info@viyomtranlogistics.com">info@viyomtranlogistics.com</a></p>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-lime-100 rounded-lg flex items-center justify-center">
                    <MdLocationOn className="w-6 h-6 text-lime-600" />
                  </div>
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-semibold text-gray-900 mb-1">Office</h4>
                  <p className="text-gray-600">
                     Plot No. 1052/1732, Khata No. 109/215, Talabeda,<br /> Talcher, Angul, Odisha, India - 759100
                  </p>
                </div>
              </div>

              {/* Working Hours */}
              {/* <div className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-lime-100 rounded-lg flex items-center justify-center">
                    <MdAccessTime className="w-6 h-6 text-lime-600" />
                  </div>
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-semibold text-gray-900 mb-1">Working Hours</h4>
                  <p className="text-gray-600">Mon - Sat: 9:00 AM - 7:00 PM</p>
                  <p className="text-gray-600">Sunday: Closed</p>
                </div>
              </div> */}
            </div>
          </div>

          {/* Right Side - Contact Form */}
          <div className="bg-gray-50 rounded-2xl p-8 shadow-sm border border-gray-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Send Us a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-lime-500 focus:border-transparent transition-all duration-200"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your.email@example.com"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-lime-500 focus:border-transparent transition-all duration-200"
                  required
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+91 98765 43210"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-lime-500 focus:border-transparent transition-all duration-200"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your logistics needs..."
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-lime-500 focus:border-transparent resize-none transition-all duration-200"
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-lime-500 hover:bg-lime-600 text-white font-semibold py-3 rounded-lg transition-colors duration-200 shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
