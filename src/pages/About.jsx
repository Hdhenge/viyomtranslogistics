import React from "react";
import { Link } from "react-router-dom";

const AboutUs = () => {
  const stats = [
    { value: "15+", label: "Years of Experience" },
    { value: "500+", label: "Happy Clients" },
    { value: "50K+", label: "Deliveries Completed" },
    { value: "25+", label: "Countries Served" }
  ];

  const values = [
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: "Reliability",
      description: "We deliver on our promises with consistent, dependable service you can trust."
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: "Efficiency",
      description: "Optimized processes and cutting-edge technology ensure fast, cost-effective solutions."
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1z" />
        </svg>
      ),
      title: "Customer Focus",
      description: "Your success is our priority with personalized service and dedicated support."
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3" />
        </svg>
      ),
      title: "Innovation",
      description: "We leverage the latest technology to provide advanced logistics solutions."
    }
  ];

  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="bg-gradient-to-r from-lime-500 to-lime-600 py-20 text-center px-4">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
          About Our Company
        </h1>
        <p className="text-xl text-lime-50 max-w-3xl mx-auto">
          Leading the way in logistics and transportation services with innovation and excellence.
        </p>
      </section>

      {/* Story */}
      <section className="py-16 px-4 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <img
          src="/assets/img/scene-with-photorealistic-logistics.png"
          alt="Logistics"
          className="w-full h-[500px] object-cover rounded-2xl shadow-2xl"
        />

        <div>
          <p className="text-sm text-lime-500 font-semibold mb-2">OUR STORY</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Building the Future of Logistics
          </h2>
          <p className="text-gray-600 mb-4">
            Viyom Translogistics Private Limited was founded in 2025 with a mission to modernize logistics through technology and trust.
          </p>
          <p className="text-gray-600">
            We provide pan-India and international logistics services with precision, speed, and reliability.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-gray-50 py-16 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat, i) => (
            <div key={i}>
              <p className="text-4xl font-bold text-lime-500">{stat.value}</p>
              <p className="text-gray-600">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Values */}
      <section className="py-16 px-4 max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          What Drives Us Forward
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((v, i) => (
            <div key={i} className="bg-white rounded-xl p-6 shadow hover:shadow-lg transition">
              <div className="w-16 h-16 bg-lime-100 text-lime-600 flex items-center justify-center rounded-lg mb-4">
                {v.icon}
              </div>
              <h3 className="text-xl font-bold mb-2">{v.title}</h3>
              <p className="text-gray-600 text-sm">{v.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-lime-500 to-lime-600 py-16 text-center px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
          Ready to Work With Us?
        </h2>
        <p className="text-lime-50 mb-8">
          Let’s optimize your logistics together.
        </p>

        <div className="flex justify-center gap-4 flex-wrap">
          <Link
            to="/contact"
            className="bg-white text-lime-600 font-semibold px-8 py-3 rounded-lg hover:bg-gray-100 transition"
          >
            Contact Us
          </Link>

          <Link
            to="/services"
            className="border-2 border-white text-white font-semibold px-8 py-3 rounded-lg hover:bg-white hover:text-lime-600 transition"
          >
            View Services
          </Link>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
