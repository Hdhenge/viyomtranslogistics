import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaInstagram, FaPinterest, FaLinkedin } from 'react-icons/fa';
import { MdEmail, MdLocationOn, MdPhone, MdClose, MdMenu } from 'react-icons/md';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024 && isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isMobileMenuOpen]);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Service', path: '/service' },
    { name: 'Contact Us', path: '/contact' },
  ];

  return (
    <>
      {/* Topbar */}
      <div className={`top-0 left-0 right-0 bg-[#13253d] text-white py-3 z-[998] hidden md:block transition-all duration-300 ${
        isScrolled ? 'opacity-0 -translate-y-full' : 'opacity-100 translate-y-0'
      }`}>
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-between items-center gap-4">
            <div className="flex flex-wrap gap-3 md:gap-4 text-xs md:text-sm">
              <a href="mailto:info@example.com" className="flex items-center gap-1 md:gap-2 hover:text-lime-400 transition">
                <MdEmail className="text-base md:text-lg" />
                <span className="hidden lg:inline">info@example.com</span>
              </a>
              <a href="#" className="flex items-center gap-1 md:gap-2 hover:text-lime-400 transition">
                <MdLocationOn className="text-base md:text-lg" />
                <span className="hidden xl:inline">6391 Elgin St. Celina, 10299</span>
                <span className="xl:hidden">Location</span>
              </a>
              <a href="tel:(629)555-0129" className="flex items-center gap-1 md:gap-2 hover:text-lime-400 transition">
                <MdPhone className="text-base md:text-lg" />
                <span>(629) 555-0129</span>
              </a>
            </div>

            <div className="flex gap-3 md:gap-4">
              <a href="#" className="hover:text-lime-400 transition" aria-label="Facebook">
                <FaFacebook size={16} className="md:w-[18px] md:h-[18px]" />
              </a>
              <a href="#" className="hover:text-lime-400 transition" aria-label="Instagram">
                <FaInstagram size={16} className="md:w-[18px] md:h-[18px]" />
              </a>
              <a href="#" className="hover:text-lime-400 transition" aria-label="Pinterest">
                <FaPinterest size={16} className="md:w-[18px] md:h-[18px]" />
              </a>
              <a href="#" className="hover:text-lime-400 transition" aria-label="LinkedIn">
                <FaLinkedin size={16} className="md:w-[18px] md:h-[18px]" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Navbar */}
      <nav
       className={`fixed md:sticky top-0 left-0 right-0 bg-white z-[1000] transition-all duration-300 ${
    isScrolled ? 'shadow-xl shadow-lime-400/30' : 'md:mt-[0px] shadow-md shadow-lime-400/20'
  }`}
      >
        <div className="container mx-auto px-4">
          <div className={`flex justify-between items-center transition-all duration-300 ${
            isScrolled ? 'py-2 md:py-3' : 'py-3 md:py-4'
          }`}>
            {/* Logo */}
            <Link to="/" className="flex items-center">
              <img
                src="./src/assets/img/logo-YKblOgp74qujKW5L.avif"
                alt="Viyom Logo"
                className={`transition-all duration-300 ${
                  isScrolled ? 'h-10 sm:h-12 md:h-14' : 'h-12 sm:h-16 md:h-20'
                }`}
              />
              <span className={`font-bold text-[#13253d] ml-2 transition-all duration-300 ${
                isScrolled ? 'text-lg sm:text-3xl' : 'text-xl sm:text-5xl'
              }`}>
                VIYOM
              </span>
            </Link>

            {/* Desktop Menu with Hover Effect */}
            <ul className="hidden lg:flex items-center gap-6 xl:gap-8">
              {navItems.map((item, index) => (
                <li key={index}>
                  <Link
                    to={item.path}
                    className="group text-xl text-gray-700 hover:text-[#148281] font-bold transition-colors duration-300"
                  >
                    {item.name}
                    <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-[#148281]"></span>
                  </Link>
                </li>
              ))}
            </ul>

            {/* Hamburger Button */}
            <button
              onClick={toggleMobileMenu}
              className="lg:hidden bg-[#0a4a5c] text-white rounded-full p-2 md:p-3 hover:bg-[#083d4d] transition-all duration-300 relative z-[1001] hover:scale-110"
              aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            >
              {isMobileMenuOpen ? (
                <MdClose className="w-5 h-5 md:w-6 md:h-6" />
              ) : (
                <MdMenu className="w-5 h-5 md:w-6 md:h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Overlay */}
        <div
          className={`lg:hidden fixed inset-0 bg-black transition-all duration-300 ${
            isMobileMenuOpen ? 'bg-opacity-50 visible' : 'bg-opacity-0 invisible'
          }`}
          style={{ 
            top: isScrolled ? '60px' : (window.innerWidth >= 768 ? '128px' : '60px'),
          }}
          onClick={toggleMobileMenu}
        />

        {/* Mobile Menu Drawer */}
        <div
          className={`lg:hidden fixed right-0 w-full sm:w-80 md:w-96 bg-white shadow-2xl z-[998] transform transition-all duration-500 ease-in-out overflow-y-auto ${
            isMobileMenuOpen ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'
          }`}
          style={{
            top: isScrolled 
              ? (window.innerWidth >= 768 ? '80px' : '60px') 
              : (window.innerWidth >= 768 ? '128px' : '60px'),
            height: isScrolled 
              ? (window.innerWidth >= 768 ? 'calc(100vh - 80px)' : 'calc(100vh - 60px)')
              : (window.innerWidth >= 768 ? 'calc(100vh - 128px)' : 'calc(100vh - 60px)'),
            transition: 'top 0.3s ease-in-out, height 0.3s ease-in-out, transform 0.5s ease-in-out, opacity 0.5s ease-in-out'
          }}
        >
          {/* Mobile Social Icons */}
          <div className={`md:hidden border-b border-gray-200 p-4 transform transition-all duration-500 ${
            isMobileMenuOpen ? 'translate-y-0 opacity-100' : '-translate-y-4 opacity-0'
          }`}
          style={{ transitionDelay: isMobileMenuOpen ? '100ms' : '0ms' }}
          >
            <div className="flex justify-center gap-6">
              <a href="#" className="text-[#0a4a5c] hover:text-[#083d4d] transition hover:scale-125 transform" aria-label="Facebook">
                <FaFacebook size={20} />
              </a>
              <a href="#" className="text-[#0a4a5c] hover:text-[#083d4d] transition hover:scale-125 transform" aria-label="Instagram">
                <FaInstagram size={20} />
              </a>
              <a href="#" className="text-[#0a4a5c] hover:text-[#083d4d] transition hover:scale-125 transform" aria-label="Pinterest">
                <FaPinterest size={20} />
              </a>
              <a href="#" className="text-[#0a4a5c] hover:text-[#083d4d] transition hover:scale-125 transform" aria-label="LinkedIn">
                <FaLinkedin size={20} />
              </a>
            </div>
          </div>

          {/* Mobile Navigation */}
          <ul className="py-4">
            {navItems.map((item, index) => (
              <li 
                key={index} 
                className={`border-b border-gray-100 transform transition-all duration-300 ${
                  isMobileMenuOpen 
                    ? 'translate-x-0 opacity-100' 
                    : 'translate-x-8 opacity-0'
                }`}
                style={{ 
                  transitionDelay: isMobileMenuOpen ? `${150 + (index * 75)}ms` : '0ms' 
                }}
              >
                <Link
                  to={item.path}
                  className="flex items-center justify-between px-6 py-4 text-gray-700 hover:bg-gray-50 hover:text-[#0a4a5c] font-medium transition-colors hover:pl-8"
                  onClick={toggleMobileMenu}
                >
                  <span className="text-base md:text-lg">{item.name}</span>
                </Link>
              </li>
            ))}
          </ul>

          {/* Mobile Contact Info */}
          <div 
            className={`md:hidden border-t border-gray-200 p-6 space-y-4 bg-gray-50 transform transition-all duration-500 ${
              isMobileMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
            }`}
            style={{ transitionDelay: isMobileMenuOpen ? '450ms' : '0ms' }}
          >
            <a href="mailto:info@example.com" className="flex items-center gap-3 text-gray-700 hover:text-[#0a4a5c] transition hover:translate-x-2">
              <MdEmail className="text-xl" />
              <span className="text-sm">info@example.com</span>
            </a>
            <a href="#" className="flex items-center gap-3 text-gray-700 hover:text-[#0a4a5c] transition hover:translate-x-2">
              <MdLocationOn className="text-xl" />
              <span className="text-sm">6391 Elgin St. Celina, 10299</span>
            </a>
            <a href="tel:(629)555-0129" className="flex items-center gap-3 text-gray-700 hover:text-[#0a4a5c] transition hover:translate-x-2">
              <MdPhone className="text-xl" />
              <span className="text-sm">(629) 555-0129</span>
            </a>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
