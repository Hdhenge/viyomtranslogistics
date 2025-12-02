import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Play } from 'lucide-react'; // Install: npm i lucide-react

const HeroSection = () => {
  return (
    <section id="home" className="relative bg-gradient-to-br from-[#0a4a5c] via-[#0d5a6e] to-[#0a4a5c] text-white py-20 lg:py-15 overflow-hidden">
      {/* Background Pattern Overlay */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(255,255,255,.05) 35px, rgba(255,255,255,.05) 70px)`
        }}></div>
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
          {/* Left Content */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/2 space-y-6"
          >
            {/* Eyebrow Text */}
            <motion.p 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-[#c8d82e] uppercase tracking-[0.2em] text-sm font-semibold"
            >
              Innovation at Work
            </motion.p>

            {/* Main Heading */}
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight"
            >
              Fast Furious{' '}
              <span className="text-[#c8d82e]">Transport All of</span>{' '}
              The Logistics
            </motion.h1>

            {/* Description */}
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-gray-200 text-base md:text-lg max-w-xl leading-relaxed"
            >
              We have been operating for over a decade, providing top-notch services to our clients and building a strong track record
            </motion.p>

            {/* CTA Buttons */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-col sm:flex-row items-start sm:items-center gap-4 pt-4"
            >
              <button className="group bg-[#c8d82e] text-[#0a4a5c] px-8 py-4 rounded-lg font-semibold hover:bg-[#d4e345] transition-all duration-300 flex items-center gap-2 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
                All Project
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              
              <button className="group flex items-center gap-3 text-white hover:text-[#c8d82e] transition-colors duration-300">
                <div className="w-14 h-14 rounded-full border-2 border-white bg-white/10 backdrop-blur-sm flex items-center justify-center group-hover:border-[#c8d82e] group-hover:bg-[#c8d82e]/20 transition-all duration-300">
                  <Play className="w-6 h-6 ml-1" fill="currentColor" />
                </div>
                <span className="font-semibold text-base">See How It Works</span>
              </button>
            </motion.div>
          </motion.div>

          {/* Right Image Section */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:w-1/2 relative"
          >
            <div className="relative">
              
              {/* Image Container */}
              <div className=" overflow-hidden p-1">
                <img 
                  src="src/assets/img/hero-area-img.png" 
                  alt="Logistics - Air, Sea and Land Transport" 
                  className="w-full h-auto rounded-[1.8rem] object-cover"
                />
              </div>
 
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Wave Decoration (Optional) */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white/5 to-transparent"></div>
    </section>
  );
};

export default HeroSection;
