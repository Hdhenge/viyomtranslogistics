import React from 'react';
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedin } from 'react-icons/fa6';

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">Viyom Tranlogistics</h3>
            <p className="text-gray-400 mb-4">
              Your trusted partner for logistics and transportation solutions worldwide.
            </p>
            <div className="flex gap-3">
              <a href="#" className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors">
                <FaFacebookF />
              </a>
              <a href="#" className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors">
                <FaInstagram />
              </a>
              <a href="#" className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors">
                <FaTwitter />
              </a>
              <a href="#" className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors">
                <FaLinkedin />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-xl font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#home" className="text-gray-400 hover:text-white transition-colors">Home</a></li>
              <li><a href="#about" className="text-gray-400 hover:text-white transition-colors">About Us</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-white transition-colors">Services</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-bold mb-4">Services</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Air Freight</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Sea Freight</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Road Transport</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Warehousing</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-bold mb-4">Contact Info</h4>
            <ul className="space-y-3 text-gray-400">
              <li>6391 Elgin St. Celina, 10299</li>
              <li>+889 3404 236</li>
              <li>info@example.com</li>
              <li>Sunday - Friday: 9 am - 8 pm</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 py-6">
          <p className="text-center text-gray-400">
            © 2025 Viyom Tranlogistics. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;