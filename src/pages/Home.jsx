import React from 'react';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import ServicesSection from '../components/ServicesSection';
// import Testimonials from '../components/Testimonial';
import ContactSection from '../components/ContactSection';

const Home = () => {
  return (
    <div>
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      {/* <Testimonials /> */}
      <ContactSection />

    </div>
  );
};

export default Home;
