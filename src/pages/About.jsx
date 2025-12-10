import React from 'react';

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
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      ),
      title: "Customer Focus",
      description: "Your success is our priority with personalized service and dedicated support."
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
      title: "Innovation",
      description: "We leverage the latest technology to provide advanced logistics solutions."
    }
  ];

  const team = [
    {
      name: "Sudhir Nath",
      position: "Director",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400"
    },
    {
      name: "Urmila Manoj Shingade",
      position: "Director",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400"
    },
    {
      name: "Suresh Kumar S",
      position: "Regional Head (Visakhapatnam)",
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400"
    }
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-lime-500 to-lime-600 py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            About Our Company
          </h1>
          <p className="text-xl text-lime-50 max-w-3xl mx-auto">
            Leading the way in logistics and transportation services with innovation, dedication, and excellence.
          </p>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left - Image */}
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800"
                alt="Our company"
                className="w-full h-[500px] object-cover rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-lime-200 rounded-full -z-10"></div>
            </div>

            {/* Right - Content */}
            <div>
              <p className="text-sm text-lime-500 uppercase tracking-wide font-semibold mb-3">
                OUR STORY
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Building the Future of Logistics
              </h2>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Viyom Translogistics Private Limited was established in 2025 with a clear and ambitious mission: to revolutionize the logistics industry through digital innovation and unwavering commitment to service. Headquartered in the industrial heart of Odisha, we are a rapidly emerging force in the Indian supply chain sector.
              </p>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Though a young company, we are built on a foundation of deep industry expertise. Our leadership team brings decades of combined experience in freight forwarding, warehousing, and supply chain management. What started as a vision to simplify complex trade routes has quickly evolved into a trusted partnership for businesses across India.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Today, we are aggressively expanding our footprint, serving clients in retail, industrial, and personal sectors. From pan-India trucking to international freight forwarding, we handle every shipment with precision. We continue to invest in cutting-edge tracking technology and expand our network to deliver world-class logistics solutions that drive our clients' success.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <p className="text-4xl md:text-5xl font-bold text-lime-500 mb-2">
                  {stat.value}
                </p>
                <p className="text-gray-600 font-medium">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Mission */}
            <div className="bg-white border-2 border-lime-500 rounded-2xl p-8">
              <div className="w-16 h-16 bg-lime-500 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
              <p className="text-gray-600 leading-relaxed">
                To provide innovative, reliable, and efficient logistics solutions that empower businesses to grow and succeed in the global marketplace. We strive to exceed expectations through continuous improvement and an unwavering commitment to quality.
              </p>
            </div>

            {/* Vision */}
            <div className="bg-white border-2 border-lime-500 rounded-2xl p-8">
              <div className="w-16 h-16 bg-lime-500 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
              <p className="text-gray-600 leading-relaxed">
                To be India's most trusted logistics partner, recognized for innovation, sustainability, and exceptional service. We envision a future where seamless global commerce is accessible to all, powered by smart technology and human expertise.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-sm text-lime-500 uppercase tracking-wide font-semibold mb-2">
              CORE VALUES
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              What Drives Us Forward
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-shadow duration-300">
                <div className="w-16 h-16 bg-lime-100 rounded-lg flex items-center justify-center mb-4 text-lime-600">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-sm text-lime-500 uppercase tracking-wide font-semibold mb-2">
              OUR TEAM
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Meet the Leadership
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our experienced team of logistics professionals is dedicated to delivering excellence in every aspect of our service.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-8">
            {team.map((member, index) => (
              <div key={index} className="group w-full sm:w-[calc(50%-1rem)] lg:w-[calc(25%-1.5rem)]">
                <div className="relative overflow-hidden rounded-xl mb-4">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-1">
                  {member.name}
                </h3>
                <p className="text-lime-600 font-medium">{member.position}</p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-lime-500 to-lime-600 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Work With Us?
          </h2>
          <p className="text-xl text-lime-50 mb-8">
            Let's discuss how we can help optimize your logistics and grow your business.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="bg-white text-lime-600 font-semibold px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors duration-200">
              Contact Us
            </button>
            <button className="border-2 border-white text-white font-semibold px-8 py-3 rounded-lg hover:bg-white hover:text-lime-600 transition-colors duration-200">
              View Services
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
