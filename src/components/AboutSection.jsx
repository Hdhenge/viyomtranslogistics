import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Check, Award } from 'lucide-react';

const AboutSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const [imageRef, imageInView] = useInView({
    triggerOnce: true,
    threshold: 0.2
  });

  // Updated features specific to Viyom Translogistics
  const features = [
    "Customer satisfaction is our top priority",
    "Real-time tracking for every shipment",
    "Safe, secure, and on-time delivery",
    "Cost-effective supply chain solutions"
  ];

  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const fadeInLeft = {
    hidden: { opacity: 0, x: -80 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  const fadeInRight = {
    hidden: { opacity: 0, x: 80 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const badgeVariant = {
    hidden: { opacity: 0, scale: 0.8, y: 50 },
    visible: { 
      opacity: 1, 
      scale: 1, 
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
        delay: 0.5
      }
    }
  };

  return (
    <section className="py-12 md:py-20 lg:py-24 bg-gray-50">
      <div className="container mx-auto px-4 lg:px-8">
        
        {/* Main Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          
          {/* Left Side - Image with Badge */}
          <motion.div
            ref={imageRef}
            variants={fadeInLeft}
            initial="hidden"
            animate={imageInView ? "visible" : "hidden"}
            className="relative order-2 lg:order-1"
          >
            {/* Main Image Container */}
            <motion.div 
              className="relative"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              {/* Image with rounded corners and lime border accent */}
              <div className="relative rounded-3xl overflow-hidden shadow-xl">
                {/* Lime/yellow accent border */}
                <div className="absolute top-0 right-0 w-full h-full border-4 border-transparent rounded-3xl"
                     style={{ 
                       borderRightColor: '#d4e157', 
                       borderTopColor: '#d4e157',
                       borderTopRightRadius: '1.5rem'
                     }}>
                </div>
                
                {/* Placeholder for your actual image */}
                <div className="aspect-[4/3] bg-gray-200">
                  <img 
                    src="/img/about/about-1.png" // Replace with actual Viyom image (e.g., warehouse or truck)
                    alt="Viyom Logistics Operations" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Stats/Award Badge */}
              <motion.div
                variants={badgeVariant}
                initial="hidden"
                animate={imageInView ? "visible" : "hidden"}
                whileHover={{ scale: 1.05 }}
                className="absolute -bottom-8 left-4 md:left-8 
                           bg-[#0a2540] text-white 
                           px-6 md:px-8 py-5 md:py-6 
                           rounded-2xl shadow-2xl
                           z-10"
              >
                <div className="flex items-center gap-4">
                  {/* Icon with circular background */}
                  <motion.div
                    animate={{ rotate: [0, 360] }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className="w-14 h-14 md:w-16 md:h-16 
                               bg-[#c5d63f]/20 rounded-full 
                               flex items-center justify-center flex-shrink-0"
                  >
                    <Award className="w-8 h-8 md:w-10 md:h-10 text-[#c5d63f]" />
                  </motion.div>
                  
                  <div>
                    <div className="text-3xl md:text-4xl font-bold tracking-tight">
                      15+
                    </div>
                    <div className="text-sm text-gray-300 font-medium">
                      Years Team Exp.
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Right Side - Content */}
          <motion.div
            ref={ref}
            variants={fadeInRight}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="order-1 lg:order-2"
          >
            {/* About Us Label */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="mb-4"
            >
              <span className="text-[#1e40af] font-bold text-sm md:text-base tracking-[0.2em] uppercase">
                ABOUT VIYOM TRANSLOGISTICS
              </span>
            </motion.div>

            {/* Main Heading */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.5rem] 
                         font-bold text-gray-900 leading-tight mb-6"
            >
              Streamlined Solutions For Seamless Deliveries
            </motion.h2>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-gray-600 text-base md:text-lg leading-relaxed mb-8 md:mb-10"
            >
              At Viyom Translogistics, we don't just move goods; we move businesses forward. 
              From our headquarters in Odisha to destinations across the globe, we replace 
              complexity with clarity, ensuring your cargo reaches its destination safely 
              and on time.
            </motion.p>

            {/* Feature List with Checkmarks - 2 columns */}
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8 md:mb-10"
            >
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  className="flex items-start gap-3 group"
                >
                  {/* Checkmark Circle */}
                  <div className="flex-shrink-0 w-6 h-6 md:w-7 md:h-7 
                                  rounded-full bg-[#1e40af] 
                                  flex items-center justify-center
                                  group-hover:scale-110 transition-transform duration-300">
                    <Check className="w-4 h-4 md:w-5 md:h-5 text-white stroke-[3]" />
                  </div>
                  
                  {/* Feature Text */}
                  <span className="text-gray-800 text-sm md:text-base font-medium leading-relaxed pt-0.5">
                    {feature}
                  </span>
                </motion.div>
              ))}
            </motion.div>

            {/* Learn More Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <motion.button
                whileHover={{ scale: 1.02, x: 5 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center gap-3 
                           bg-[#0a2540] text-white
                           px-8 md:px-10 py-4 
                           rounded-xl 
                           font-semibold text-base md:text-lg
                           shadow-lg hover:shadow-xl hover:bg-[#1e40af]
                           transition-all duration-300
                           group"
              >
                Learn More
                <motion.span
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                  className="text-xl font-bold"
                >
                  →
                </motion.span>
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
