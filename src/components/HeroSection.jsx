import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const HeroSection = () => {
  const [currentBgSlide, setCurrentBgSlide] = useState(0);

  const bgImages = [
    "transportation-best-practices.png",
    "busy-highway.png",
    "cargo-train-platform-.png",
    "industrial-container-cargo-freight.png",
    "export-import-port-atmosphere.png",
  ];

  // Background slider auto-play
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentBgSlide((prev) => (prev + 1) % bgImages.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section
      id="home"
      className="relative overflow-hidden text-white min-h-screen flex items-center"
    >
      {/* BACKGROUND IMAGE SLIDER */}
      <div className="absolute inset-0 z-0">
        {bgImages.map((img, i) => (
          <div
            key={i}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              i === currentBgSlide ? "opacity-100" : "opacity-0"
            }`}
          >
            <img
              src={`/assets/img/${img}`}
              alt={`Logistics Background ${i + 1}`}
              className="w-full h-full object-cover"
            />
            {/* Dark overlay for readability */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#0a4a5c]/85 via-[#0d5a6e]/80 to-[#083a49]/85"></div>
          </div>
        ))}
      </div>

      {/* LEFT SIDE - CREATIVE SVG ILLUSTRATION */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1/3 max-w-lg z-10 opacity-20 lg:opacity-60 hidden lg:block">
        <svg viewBox="0 0 500 700" fill="none" xmlns="http://www.w3.org/2000/svg">
          
          {/* Hexagonal grid pattern */}
          {[0, 1, 2, 3, 4].map((row) => (
            [...Array(4)].map((_, col) => (
              <motion.path
                key={`hex-${row}-${col}`}
                d={`M ${100 + col * 60 + (row % 2) * 30} ${120 + row * 52} 
                    l 20 0 l 10 17 l -10 17 l -20 0 l -10 -17 z`}
                stroke="#c8d82e"
                strokeWidth="1"
                fill="none"
                opacity="0.2"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 0.2, scale: 1 }}
                transition={{ delay: row * 0.1 + col * 0.15, duration: 0.8 }}
              />
            ))
          ))}
          
          {/* Shipping containers stack */}
          <motion.g
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <rect x="50" y="400" width="80" height="45" rx="2" fill="#c8d82e" opacity="0.6"/>
            <rect x="55" y="405" width="70" height="8" fill="#0a4a5c" opacity="0.8"/>
            <line x1="90" y1="413" x2="90" y2="440" stroke="#0a4a5c" strokeWidth="2"/>
            
            <rect x="60" y="350" width="80" height="45" rx="2" fill="#c8d82e" opacity="0.5"/>
            <rect x="65" y="355" width="70" height="8" fill="#0a4a5c" opacity="0.8"/>
            <line x1="100" y1="363" x2="100" y2="390" stroke="#0a4a5c" strokeWidth="2"/>
          </motion.g>
          
          {/* Cargo ship silhouette */}
          <motion.g
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1.5, delay: 0.8 }}
          >
            <path 
              d="M 180 500 L 240 500 L 250 520 L 170 520 Z" 
              fill="#c8d82e" 
              opacity="0.5"
            />
            <rect x="190" y="480" width="15" height="20" fill="#c8d82e" opacity="0.6"/>
            <rect x="210" y="475" width="15" height="25" fill="#c8d82e" opacity="0.7"/>
            <rect x="230" y="470" width="15" height="30" fill="#c8d82e" opacity="0.6"/>
          </motion.g>
          
          {/* Route lines with arrows */}
          <motion.path
            d="M 120 200 Q 200 250, 180 350"
            stroke="#c8d82e"
            strokeWidth="2"
            strokeDasharray="5,5"
            fill="none"
            opacity="0.5"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2, delay: 1, ease: "easeInOut" }}
          />
          <motion.path
            d="M 180 350 L 175 340 M 180 350 L 185 342"
            stroke="#c8d82e"
            strokeWidth="2"
            opacity="0.5"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 0.3, delay: 3 }}
          />
          
          {/* Location pins */}
          <motion.g
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 1.2, type: "spring" }}
          >
            <circle cx="120" cy="200" r="8" fill="#c8d82e"/>
            <path d="M 120 192 Q 120 180, 120 175 L 115 185 L 120 175 L 125 185 Z" fill="#c8d82e"/>
          </motion.g>
          
          <motion.g
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 1.5, type: "spring" }}
          >
            <circle cx="180" cy="350" r="8" fill="#c8d82e"/>
            <path d="M 180 342 Q 180 330, 180 325 L 175 335 L 180 325 L 185 335 Z" fill="#c8d82e"/>
          </motion.g>
          
          {/* Rotating gear */}
          <motion.g
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            style={{ originX: "250px", originY: "250px" }}
          >
            <circle cx="250" cy="250" r="30" stroke="#c8d82e" strokeWidth="3" fill="none" opacity="0.3"/>
            {[0, 45, 90, 135, 180, 225, 270, 315].map((angle) => (
              <rect
                key={angle}
                x="248"
                y="220"
                width="4"
                height="15"
                fill="#c8d82e"
                opacity="0.4"
                transform={`rotate(${angle} 250 250)`}
              />
            ))}
          </motion.g>
          
          {/* Data flow particles */}
          {[...Array(8)].map((_, i) => (
            <motion.circle
              key={`particle-${i}`}
              r="2"
              fill="#c8d82e"
              opacity="0.6"
              animate={{
                x: [50, 250],
                y: [150 + i * 50, 200 + i * 40],
                opacity: [0, 0.6, 0]
              }}
              transition={{
                duration: 3,
                delay: i * 0.5,
                repeat: Infinity,
                ease: "linear"
              }}
            />
          ))}
          
          {/* Abstract speed lines */}
          {[...Array(5)].map((_, i) => (
            <motion.line
              key={`line-${i}`}
              x1="300"
              y1={550 + i * 15}
              x2="400"
              y2={550 + i * 15}
              stroke="#c8d82e"
              strokeWidth="2"
              opacity="0.3"
              initial={{ x1: 300, x2: 300 }}
              animate={{ x1: 300, x2: 400 }}
              transition={{
                duration: 0.8,
                delay: 1.5 + i * 0.1,
                repeat: Infinity,
                repeatDelay: 2
              }}
            />
          ))}
        </svg>
      </div>

      {/* Decorative Blur */}
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-[#c8d82e]/20 rounded-full blur-3xl z-10"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-10 py-20 lg:py-20 relative z-20">
        <div className="flex flex-col items-center justify-center text-center max-w-4xl mx-auto space-y-8">

          {/* MAIN CONTENT - CENTERED */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            className="space-y-6"
          >
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-[#c8d82e] uppercase tracking-[0.25em] text-xs sm:text-sm font-semibold"
            >
              Innovation at Work
            </motion.p>

            <h1 className="text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-extrabold leading-tight">
              Redefining{" "}
              <span className="text-[#c8d82e]">Logistics</span>{" "}
              for the <br className="hidden sm:block" />
              Modern World
            </h1>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-gray-200 text-base sm:text-lg md:text-xl max-w-3xl mx-auto leading-relaxed"
            >
              From Odisha's industrial heart to global destinations, Viyom
              Translogistics delivers speed, reliability, and smart supply-chain solutions.
            </motion.p>

            {/* CTA */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="pt-4"
            >
              <a
                href="#services"
                className="inline-flex items-center gap-3 bg-[#c8d82e] text-[#0a4a5c] px-10 py-5 rounded-xl text-lg font-semibold shadow-lg hover:shadow-2xl hover:-translate-y-1 hover:bg-[#d4e347] transition-all duration-300"
              >
                Explore Services →
              </a>
            </motion.div>
          </motion.div>

          {/* Stats or Features Row */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.8 }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-8 pt-10 w-full max-w-3xl"
          >
            <div className="space-y-2">
              <div className="text-3xl font-bold text-[#c8d82e]">500+</div>
              <div className="text-sm text-gray-300">Clients Served</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-[#c8d82e]">24/7</div>
              <div className="text-sm text-gray-300">Support Available</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-[#c8d82e]">98%</div>
              <div className="text-sm text-gray-300">On-Time Delivery</div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-black/40 to-transparent z-10"></div>
    </section>
  );
};

export default HeroSection;