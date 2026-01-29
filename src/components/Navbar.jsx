import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { MdEmail, MdLocationOn, MdPhone, MdClose, MdMenu } from "react-icons/md";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (window.innerWidth >= 1024 && isMobileMenuOpen) {
      setIsMobileMenuOpen(false);
    }
  }, [isMobileMenuOpen]);

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : "unset";
    return () => (document.body.style.overflow = "unset");
  }, [isMobileMenuOpen]);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Contact Us", path: "/contact" },
  ];

  return (
    <>
      {/* ================= TOPBAR ================= */}
      <div
        className={`hidden md:block w-full bg-[#13253d] text-white py-3 transition-all duration-300 ${
          isScrolled ? "opacity-0 -translate-y-full pointer-events-none" : ""
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-4 text-sm">
            <a
              href="mailto:info@viyomtranlogistics.com"
              className="flex items-center gap-2 hover:text-lime-400"
            >
              <MdEmail />
              <span>info@viyomtranlogistics.com</span>
            </a>

            <a
              href="https://www.google.com/maps?q=Plot+No.+1052/1732,+Talabeda,+Talcher,+Angul,+Odisha+759107"
              className="flex items-center gap-2 hover:text-lime-400"
            >
              <MdLocationOn />
              <span className="hidden xl:inline">
                Talabeda, Talcher, Odisha
              </span>
              <span className="xl:hidden">Location</span>
            </a>

            {/* ✅ FIXED PHONE (NO NESTED <a>) */}
            <a
              href="tel:+919876543210"
              className="flex items-center gap-2 hover:text-lime-400"
            >
              <MdPhone />
              <span>+91 9876543210</span>
            </a>
          </div>
        </div>
      </div>

      {/* ================= NAVBAR ================= */}
      <nav
        className={`fixed md:sticky top-0 w-full bg-white z-[1000] transition-all ${
          isScrolled ? "shadow-xl shadow-lime-400/30" : "shadow-md"
        }`}
      >
        <div className="container mx-auto px-4">
          <div
            className={`flex justify-between items-center ${
              isScrolled ? "py-2" : "py-4"
            }`}
          >
            {/* Logo */}
            <Link to="/" className="flex items-center">
              <img
                src="/assets/img/Viyoim-logo.png"   // ✅ FIXED PATH
                alt="Viyom Logo"
                className={isScrolled ? "h-14" : "h-20"}
              />
              <span className="ml-2 font-bold text-[#13253d] text-3xl">
                VIYOM
              </span>
            </Link>

            {/* Desktop Menu */}
            <ul className="hidden lg:flex gap-8">
              {navItems.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.path}
                    className="text-xl font-bold text-gray-700 hover:text-[#148281]"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Mobile Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden bg-[#0a4a5c] text-white p-3 rounded-full"
            >
              {isMobileMenuOpen ? <MdClose size={24} /> : <MdMenu size={24} />}
            </button>
          </div>
        </div>

        {/* ================= MOBILE MENU ================= */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-white shadow-2xl">
            <ul>
              {navItems.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.path}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block px-6 py-4 border-b hover:bg-gray-100"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="p-6 bg-gray-50 space-y-4">
              <a
                href="mailto:info@viyomtranlogistics.com"
                className="flex items-center gap-3"
              >
                <MdEmail />
                <span>info@viyomtranlogistics.com</span>
              </a>

              <a
                href="tel:+919876543210"
                className="flex items-center gap-3"
              >
                <MdPhone />
                <span>+91 9876543210</span>
              </a>
            </div>
          </div>
        )}
      </nav>
    </>
  );
};

export default Header;