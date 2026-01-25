import React from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-gradient-to-br from-[#0a4a5c] via-[#0d5a6e] to-[#083a49] text-white"
    >
      {/* Decorative Blur */}
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-[#c8d82e]/20 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-10 py-20 lg:py-20 relative z-10">
        <div className="flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-20">

          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9 }}
            className="lg:w-1/2 text-center lg:text-left space-y-6"
          >
            <p className="text-[#c8d82e] uppercase tracking-[0.25em] text-xs sm:text-sm font-semibold">
              Innovation at Work
            </p>

            <h1 className="text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-extrabold leading-tight">
              Redefining{" "}
              <span className="text-[#c8d82e]">Logistics</span> for the <br className="hidden sm:block" />
              Modern World
            </h1>

            <p className="text-gray-200 text-sm sm:text-base md:text-lg max-w-xl mx-auto lg:mx-0 leading-relaxed">
              From Odisha’s industrial heart to global destinations, Viyom
              Translogistics delivers speed, reliability, and smart supply-chain
              solutions.
            </p>

            {/* CTA */}
            <div className="pt-4">
              <a
                href="/services"
                className="inline-flex items-center gap-3 bg-[#c8d82e] text-[#0a4a5c] px-8 py-4 rounded-xl font-semibold shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all"
              >
                Explore Services →
              </a>
            </div>
          </motion.div>

          {/* RIGHT IMAGE CAROUSEL */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="lg:w-1/2 w-full"
          >
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="relative rounded-2xl overflow-hidden shadow-2xl"
            >
              <Swiper
                modules={[Autoplay]}
                autoplay={{ delay: 2800, disableOnInteraction: false }}
                loop
                className="rounded-2xl"
              >
                {[
                  "transportation-best-practices.png",
                  "busy-highway.png",
                  "cargo-train-platform-.png",
                  "industrial-container-cargo-freight.png",
                  "export-import-port-atmosphere.png",
                  "export-import-port-atmosphere.png",
                ].map((img, i) => (
                  <SwiperSlide key={i}>
                    <div className="relative">
                      <img
                        src={`/assets/img/${img}`}
                        alt="Logistics Service"
                        className="w-full h-[260px] sm:h-[340px] md:h-[420px] object-cover scale-100 hover:scale-105 transition-transform duration-700"
                      />
                      {/* Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-black/20 to-transparent"></div>
    </section>
  );
};

export default HeroSection;
