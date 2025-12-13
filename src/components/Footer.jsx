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
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-lime-500 hover:text-white transition-all duration-300 group">
                <FaFacebookF className="group-hover:scale-110 transition-transform" />
              </a>
              <a href="#" className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-lime-500 hover:text-white transition-all duration-300 group">
                <FaInstagram className="group-hover:scale-110 transition-transform" />
              </a>
              <a href="#" className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-lime-500 hover:text-white transition-all duration-300 group">
                <FaTwitter className="group-hover:scale-110 transition-transform" />
              </a>
              <a href="#" className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-lime-500 hover:text-white transition-all duration-300 group">
                <FaLinkedin className="group-hover:scale-110 transition-transform" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-bold mb-6 border-b-2 border-lime-500 inline-block pb-2">Quick Links</h4>
            <ul className="space-y-3">
              <li><a href="/" className="text-gray-400 hover:text-lime-500 hover:pl-2 transition-all duration-300 block">Home</a></li>
              <li><a href="/about" className="text-gray-400 hover:text-lime-500 hover:pl-2 transition-all duration-300 block">About Us</a></li>
              <li><a href="/services" className="text-gray-400 hover:text-lime-500 hover:pl-2 transition-all duration-300 block">Our Services</a></li>
              <li><a href="/track" className="text-gray-400 hover:text-lime-500 hover:pl-2 transition-all duration-300 block">Track Shipment</a></li>
              <li><a href="/contact" className="text-gray-400 hover:text-lime-500 hover:pl-2 transition-all duration-300 block">Contact Us</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-xl font-bold mb-6 border-b-2 border-lime-500 inline-block pb-2">Our Services</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-lime-500 hover:pl-2 transition-all duration-300 block">Warehouse Management</a></li>
              <li><a href="#" className="text-gray-400 hover:text-lime-500 hover:pl-2 transition-all duration-300 block">Air & Sea Freight</a></li>
              <li><a href="#" className="text-gray-400 hover:text-lime-500 hover:pl-2 transition-all duration-300 block">Ground Transport</a></li>
              <li><a href="#" className="text-gray-400 hover:text-lime-500 hover:pl-2 transition-all duration-300 block">Supply Chain Consulting</a></li>
              <li><a href="#" className="text-gray-400 hover:text-lime-500 hover:pl-2 transition-all duration-300 block">Last-Mile Delivery</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-xl font-bold mb-6 border-b-2 border-lime-500 inline-block pb-2">Get In Touch</h4>
            <ul className="space-y-4 text-gray-400">
              <li className="flex items-start">
                <MdLocationOn className="text-lime-500 text-xl mt-1 mr-3 flex-shrink-0" />
                <span>
                  123 Business Park, Sector 62,<br />
                  Noida, UP 201309, India
                </span>
              </li>
              <li className="flex items-center">
                <MdPhone className="text-lime-500 text-xl mr-3 flex-shrink-0" />
                <span>+91 98765 43210</span>
              </li>
              <li className="flex items-center">
                <MdEmail className="text-lime-500 text-xl mr-3 flex-shrink-0" />
                <span>info@viyomtranlogistics.com</span>
              </li>
              <li className="pt-2">
                <p className="text-sm text-lime-500 font-semibold mb-1">Operating Hours:</p>
                <p className="text-sm">Mon - Sat: 9:00 AM - 7:00 PM</p>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800 bg-slate-950">
        <div className="container mx-auto px-4 py-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} <span className="text-white font-semibold">Viyom Tranlogistics</span>. All rights reserved.
          </p>
          <div className="flex space-x-6 text-sm text-gray-500">
            <a href="#" className="hover:text-lime-500 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-lime-500 transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-lime-500 transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
