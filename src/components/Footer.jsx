import React from 'react';
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedin } from 'react-icons/fa6';
import { MdEmail, MdPhone, MdLocationOn } from 'react-icons/md';

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white font-sans">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          
          {/* Company Info */}
          <div>
            <h3 className="text-3xl font-bold mb-6 text-lime-500">Viyom Tranlogistics</h3>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Your trusted partner for comprehensive supply chain solutions. We bridge the gap between efficiency and reliability, delivering your goods across the globe with precision.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-bold mb-6 border-b-2 border-lime-500 inline-block pb-2">Quick Links</h4>
            <ul className="space-y-3">
              <li><a href="/" className="text-gray-400 hover:text-lime-500 hover:pl-2 transition-all duration-300 block">Home</a></li>
              <li><a href="/about" className="text-gray-400 hover:text-lime-500 hover:pl-2 transition-all duration-300 block">About Us</a></li>
              <li><a href="/services" className="text-gray-400 hover:text-lime-500 hover:pl-2 transition-all duration-300 block">Our Services</a></li>
              <li><a href="/contact" className="text-gray-400 hover:text-lime-500 hover:pl-2 transition-all duration-300 block">Contact Us</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-xl font-bold mb-6 border-b-2 border-lime-500 inline-block pb-2">Our Services</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-lime-500 hover:pl-2 transition-all duration-300 block">Comprehensive Service in Logistics</a></li>
              <li><a href="#" className="text-gray-400 hover:text-lime-500 hover:pl-2 transition-all duration-300 block">Logistics & Transportation Services</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-xl font-bold mb-6 border-b-2 border-lime-500 inline-block pb-2">Get In Touch</h4>
            <ul className="space-y-4 text-gray-400">
              <li className="flex items-start">
                <MdLocationOn className="text-lime-500 text-xl mt-1 mr-3 flex-shrink-0" />
                <span>
                  Plot No. 1052/1732, Khata No. 109/215, Talabeda, Talcher, Angul, Odisha, India - 759100
                </span>
              </li>
              <li className="flex items-center">
                <MdPhone className="text-lime-500 text-xl mr-3 flex-shrink-0" />
                <span><a href="tel:+91 98765 43210" className="text-gray-400 hover:text-lime-500 hover:pl-2 transition-all duration-300 block" >+91 98765 43210</a></span>
              </li>
              <li className="flex items-center">
                <MdEmail className="text-lime-500 text-xl mr-3 flex-shrink-0" />
                <span><a href="mailto:info@viyomtranlogistics.com" className="text-gray-400 hover:text-lime-500 hover:pl-2 transition-all duration-300 block">info@viyomtranlogistics.com</a></span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800 bg-slate-950">
        <div className="container mx-auto px-4 py-6 flex flex-col md:flex-row justify-center items-center">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} <span className="text-white font-semibold">Viyom Tranlogistics</span>. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
