import React, { useEffect, useRef, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { MdClose, MdEmail, MdLocationOn, MdMenu, MdPhone } from "react-icons/md";

const navItems = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Services", path: "/services" },
  { name: "Contact Us", path: "/contact" },
];

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const mobileMenuRef = useRef(null);
  const mobileToggleRef = useRef(null);
  const shouldReduceMotion = useReducedMotion();

  const closeMobileMenu = () => setIsMobileMenuOpen(false);
  const toggleMobileMenu = () => setIsMobileMenuOpen((prev) => !prev);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        closeMobileMenu();
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (window.innerWidth < 1024 && isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  useEffect(() => {
    if (!isMobileMenuOpen) return;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        closeMobileMenu();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isMobileMenuOpen]);

  useEffect(() => {
    if (!isMobileMenuOpen) return;

    const handleOutsideClick = (event) => {
      const clickedInsideMenu = mobileMenuRef.current?.contains(event.target);
      const clickedToggle = mobileToggleRef.current?.contains(event.target);
      if (!clickedInsideMenu && !clickedToggle) {
        closeMobileMenu();
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);
    return () => document.removeEventListener("mousedown", handleOutsideClick);
  }, [isMobileMenuOpen]);

  const topBarMotion = shouldReduceMotion
    ? {}
    : {
        animate: { y: isScrolled ? "-100%" : "0%", opacity: isScrolled ? 0 : 1 },
        transition: { duration: 0.26, ease: "easeInOut" },
      };

  const navMotion = shouldReduceMotion
    ? {}
    : {
        animate: { boxShadow: isScrolled ? "0 12px 24px rgba(20,130,129,0.18)" : "0 4px 10px rgba(0,0,0,0.08)" },
        transition: { duration: 0.26, ease: "easeInOut" },
      };

  const menuPanelVariants = shouldReduceMotion
    ? {
        hidden: { opacity: 0 },
        visible: { opacity: 1 },
        exit: { opacity: 0 },
      }
    : {
        hidden: { x: "100%", opacity: 1 },
        visible: { x: 0, opacity: 1, transition: { type: "spring", stiffness: 280, damping: 30 } },
        exit: { x: "100%", opacity: 1, transition: { duration: 0.22, ease: "easeInOut" } },
      };

  const itemVariants = shouldReduceMotion
    ? {
        hidden: { opacity: 0 },
        visible: { opacity: 1 },
      }
    : {
        hidden: { opacity: 0, x: 16 },
        visible: (index) => ({
          opacity: 1,
          x: 0,
          transition: { duration: 0.22, delay: 0.06 + index * 0.04, ease: "easeOut" },
        }),
      };

  return (
    <>
      <motion.div
        className={`hidden lg:block w-full bg-[#13253d] text-white py-3 fixed top-0 left-0 right-0 z-[1100] ${
          isScrolled ? "pointer-events-none" : ""
        }`}
        {...topBarMotion}
      >
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-4 text-sm">
            <a href="mailto:info@viyomtranlogistics.com" className="flex items-center gap-2 hover:text-lime-400">
              <MdEmail />
              <span>info@viyomtranlogistics.com</span>
            </a>
            <a
              href="https://www.google.com/maps?q=Plot+No.+1052/1732,+Talabeda,+Talcher,+Angul,+Odisha+759107"
              className="flex items-center gap-2 hover:text-lime-400"
            >
              <MdLocationOn />
              <span className="hidden xl:inline">Talabeda, Talcher, Odisha</span>
              <span className="xl:hidden">Location</span>
            </a>
            <a href="tel:+919876543210" className="flex items-center gap-2 hover:text-lime-400">
              <MdPhone />
              <span>+91 9876543210</span>
            </a>
          </div>
        </div>
      </motion.div>

      <motion.nav
        className={`fixed top-0 ${isScrolled ? "lg:top-0" : "lg:top-[48px]"} left-0 right-0 w-full bg-white z-[1000] transition-[top,padding] duration-300 lg:w-auto ${
          isScrolled ? "shadow-xl shadow-lime-400/30" : "shadow-md"
        }`}
        {...navMotion}
      >
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center py-3">
            <Link to="/" className="flex items-center transition-opacity duration-200">
              <img src="/assets/img/Viyoim-logo.png" alt="Viyom Logo" className="h-12 lg:h-16 transition-all duration-300" />
              <span className="ml-2 font-bold text-[#13253d] text-xl lg:text-3xl">VIYOM</span>
            </Link>

            <ul className="hidden lg:flex gap-8">
              {navItems.map((item) => (
                <li key={item.name}>
                  <NavLink
                    to={item.path}
                    className={({ isActive }) =>
                      `group relative text-xl font-bold transition-colors duration-200 ${
                        isActive ? "text-[#148281]" : "text-gray-700 hover:text-[#148281]"
                      }`
                    }
                  >
                    {item.name}
                    <span className="absolute left-1/2 -bottom-1 h-0.5 w-0 -translate-x-1/2 bg-[#148281] transition-all duration-300 group-hover:w-full group-focus-visible:w-full" />
                  </NavLink>
                </li>
              ))}
            </ul>

            <motion.button
              ref={mobileToggleRef}
              type="button"
              onClick={toggleMobileMenu}
              whileTap={shouldReduceMotion ? undefined : { scale: 0.97 }}
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-nav-menu"
              aria-label={isMobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
              className="lg:hidden bg-[#0a4a5c] text-white p-3 rounded-full focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#148281]"
            >
              <motion.span
                key={isMobileMenuOpen ? "close" : "menu"}
                initial={shouldReduceMotion ? false : { rotate: -90, opacity: 0 }}
                animate={shouldReduceMotion ? {} : { rotate: 0, opacity: 1 }}
                exit={shouldReduceMotion ? {} : { rotate: 90, opacity: 0 }}
                transition={{ duration: 0.18 }}
                className="block"
              >
                {isMobileMenuOpen ? <MdClose size={24} /> : <MdMenu size={24} />}
              </motion.span>
            </motion.button>
          </div>
        </div>

        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              className="fixed inset-0 top-[70px] z-[999] lg:hidden"
              initial={shouldReduceMotion ? false : { opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2, ease: "easeInOut" }}
            >
              <button
                type="button"
                className="absolute inset-0 h-full w-full bg-black/40"
                onClick={closeMobileMenu}
                aria-label="Close navigation backdrop"
              />

              <motion.div
                id="mobile-nav-menu"
                ref={mobileMenuRef}
                className="relative ml-auto h-full w-full max-w-md overflow-y-auto bg-white shadow-2xl"
                variants={menuPanelVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
              >
                <ul>
                  {navItems.map((item, index) => (
                    <motion.li key={item.name} variants={itemVariants} initial="hidden" animate="visible" custom={index}>
                      <NavLink
                        to={item.path}
                        onClick={closeMobileMenu}
                        className={({ isActive }) =>
                          `block px-6 py-4 border-b transition-colors duration-200 ${
                            isActive ? "bg-[#148281]/10 text-[#148281] font-semibold" : "hover:bg-gray-100"
                          }`
                        }
                      >
                        {item.name}
                      </NavLink>
                    </motion.li>
                  ))}
                </ul>

                <div className="p-6 bg-gray-50 space-y-4">
                  <motion.a
                    href="mailto:info@viyomtranlogistics.com"
                    className="flex items-center gap-3 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#148281]"
                    variants={itemVariants}
                    initial="hidden"
                    animate="visible"
                    custom={4}
                  >
                    <MdEmail />
                    <span>info@viyomtranlogistics.com</span>
                  </motion.a>

                  <motion.a
                    href="tel:+919876543210"
                    className="flex items-center gap-3 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#148281]"
                    variants={itemVariants}
                    initial="hidden"
                    animate="visible"
                    custom={5}
                  >
                    <MdPhone />
                    <span>+91 9876543210</span>
                  </motion.a>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </>
  );
};

export default Header;
