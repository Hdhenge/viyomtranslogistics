import React, { useState } from 'react';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
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
    <div className="bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-sm text-gray-500 uppercase tracking-wide mb-2">CONTACT US</p>
          <h1 className="text-4xl font-bold text-gray-900">Get in Touch</h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-sm">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-lime-500"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Your E-Mail"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-lime-500"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-lime-500"
                />
                <input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-lime-500"
                />
              </div>

              <textarea
                name="message"
                placeholder="Message here..."
                rows="6"
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-lime-500 mb-4"
              ></textarea>

              <button
                type="submit"
                className="w-full bg-lime-400 hover:bg-lime-500 text-gray-800 font-semibold py-3 rounded-md transition duration-200"
              >
                Submit Now
              </button>
            </form>
          </div>

          {/* Contact Info Sidebar */}
          <div className="bg-white p-8 rounded-lg shadow-sm h-fit">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Contact Info</h2>
            <p className="text-sm text-gray-600 mb-6">
              We are dedicated to delivering excellence in every shipment. Whether you have a question about our services, need a customized freight quote, or want to track your cargo, our team is here to assist you 24/7.
            </p>

            {/* Phone */}
            <div className="mb-6">
              <div className="flex items-center mb-2">
                <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center mr-3">
                  <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <h3 className="font-semibold text-gray-900">Phone</h3>
              </div>
              <p className="text-sm text-gray-600 ml-11">95552 33768</p>
              <p className="text-sm text-gray-600 ml-11">0123-123-3456</p>
            </div>

            {/* Email */}
            <div className="mb-6">
              <div className="flex items-center mb-2">
                <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center mr-3">
                  <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="font-semibold text-gray-900">Email</h3>
              </div>
              <p className="text-sm text-gray-600 ml-11">Company@gmail.com</p>
              <p className="text-sm text-gray-600 ml-11">info@viyomtranslogistics.com</p>
            </div>

            {/* Location */}
            <div>
              <div className="flex items-center mb-2">
                <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center mr-3">
                  <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h3 className="font-semibold text-gray-900">Location</h3>
              </div>
              <p className="text-sm text-gray-600 ml-11">
                Plot No. 1052/1732, Khata No. 109/215,
                Talabeda, Talcher, Angul,
                Odisha, India - 759100
              </p>
            </div>
          </div>
        </div>

        {/* Map Section */}
        <div className="mt-8 rounded-lg overflow-hidden shadow-sm">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3726.0600700635223!2d85.21424107502918!3d20.950102680679578!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a18b500727551a1%3A0xa6aa8dee76255d14!2sTalcher%2CAngul!5e0!3m2!1sen!2sin!4v1765354174102!5m2!1sen!2sin"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            className="grayscale"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
