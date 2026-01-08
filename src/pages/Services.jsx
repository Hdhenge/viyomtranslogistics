import React from "react";

const Services = () => {
  // NEW: OMM Roadways services (above existing)
  const ommServices = [
    {
      title: "Coal Transportation",
      description:
        "Efficient movement of coal from MCL Talcher mines to major thermal and steel industries across Odisha.",
      color: "lime",
    },
    {
      title: "Iron Ore & Pellet Logistics",
      description:
        "Specialized handling and delivery of iron ore and pellets from mining zones to industrial hubs and ports.",
      color: "blue",
    },
    {
      title: "Commission Agency",
      description:
        "Facilitating bulk material movement with full compliance and documentation support.",
      color: "lime",
    },
    {
      title: "Customized Transport Solutions",
      description:
        "Tailored logistics plans for unique operational needs, including route optimization and fleet coordination.",
      color: "blue",
    },
    {
      title: "Fleet Management & Monitoring",
      description:
        "GPS-enabled fleet tracking, driver coordination, and real-time delivery updates to ensure transparency and control.",
      color: "lime",
    },
  ];

  const tone = {
    lime: {
      iconWrap: "bg-lime-100 text-lime-700",
      hoverRing: "hover:ring-lime-200",
      hoverShadow: "hover:shadow-lime-200/60",
      badge: "bg-lime-100 text-lime-700",
      hoverText: "group-hover:text-lime-700",
    },
    blue: {
      iconWrap: "bg-blue-100 text-blue-700",
      hoverRing: "hover:ring-blue-200",
      hoverShadow: "hover:shadow-blue-200/60",
      badge: "bg-blue-100 text-blue-700",
      hoverText: "group-hover:text-blue-700",
    },
  };

  // EXISTING: comprehensive services
  const comprehensiveServices = [
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"
          />
        </svg>
      ),
      title: "Warehouse Management",
      description:
        "End-to-end warehouse solutions including inventory tracking, storage optimization, and real-time monitoring systems for efficient supply chain operations.",
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
          />
        </svg>
      ),
      title: "Supply Chain Planning",
      description:
        "Strategic planning and optimization of your entire supply chain network, from procurement to distribution, ensuring cost-effective and timely delivery.",
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3"
          />
        </svg>
      ),
      title: "Inventory Management",
      description:
        "Advanced inventory control systems with real-time tracking, automated reordering, and analytics to minimize stockouts and reduce carrying costs.",
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
          />
        </svg>
      ),
      title: "Documentation & Compliance",
      description:
        "Complete documentation support including customs clearance, regulatory compliance, and paperwork management for seamless international logistics.",
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
          />
        </svg>
      ),
      title: "Analytics & Reporting",
      description:
        "Comprehensive data analytics and reporting tools to track performance metrics, identify bottlenecks, and make data-driven decisions.",
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
          />
        </svg>
      ),
      title: "Process Optimization",
      description:
        "Continuous improvement of logistics processes through automation, technology integration, and best practice implementation to enhance efficiency.",
    },
  ];

  // EXISTING: transportation services
  const transportationServices = [
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"
          />
        </svg>
      ),
      title: "Ground Transportation",
      description:
        "Reliable road freight services with a fleet of modern trucks for local, regional, and long-haul deliveries with real-time tracking.",
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9"
          />
        </svg>
      ),
      title: "Air Freight",
      description:
        "Fast and secure air cargo services for time-sensitive shipments with worldwide coverage and express delivery options.",
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
          />
        </svg>
      ),
      title: "Last-Mile Delivery",
      description:
        "Efficient last-mile delivery solutions ensuring your products reach customers' doorsteps quickly and safely with flexible delivery windows.",
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
          />
        </svg>
      ),
      title: "International Shipping",
      description:
        "Global shipping solutions via sea and air with customs brokerage, documentation support, and door-to-door delivery services.",
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
      title: "Express Delivery",
      description:
        "Same-day and next-day express delivery services for urgent shipments with priority handling and guaranteed time-definite delivery.",
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z"
          />
        </svg>
      ),
      title: "Fleet Management",
      description:
        "Professional fleet management services including vehicle maintenance, route optimization, driver management, and fuel efficiency programs.",
    },
  ];

  return (
    <div className="bg-gray-50 min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* NEW: OMM Roadways section (above existing) */}
        <section className="mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <p className="text-sm text-lime-600 uppercase tracking-wide font-semibold mb-2">
               Viyom Translogistics
              </p>

              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Tailored Logistics for Bulk Materials
              </h2>

              <p className="text-gray-600 leading-relaxed mb-4">
                We specialize in delivering tailored logistics solutions that meet the dynamic needs of India’s industrial sector, with deep expertise in bulk material transportation.
              </p>

              <p className="text-gray-600 leading-relaxed">
                Whether moving coal from mines to power plants, transporting iron ore to ports, or managing complex supply chains—our services are built to support growth and drive performance.
              </p>

              <div className="mt-6 flex gap-3">
                <a
                  href="/contact"
                  className="bg-lime-600 text-white font-semibold px-6 py-3 rounded-lg
                  transition-colors duration-300 hover:bg-lime-700 focus:outline-none focus:ring-2 focus:ring-lime-300"
                >
                  Contact Us
                </a>

                <a
                  href="/about"
                  className="bg-white text-gray-900 font-semibold px-6 py-3 rounded-lg ring-1 ring-gray-200
                  transition duration-300 hover:bg-gray-50"
                >
                  Learn More
                </a>
              </div>
            </div>

            {/* Image: put file at public/image.jpg */}
            <div className="relative">
              <div
                className="absolute -inset-6 rounded-3xl bg-gradient-to-r from-lime-200/60 to-blue-200/60 blur-2xl"
                aria-hidden="true"
              />
              <div
                className="relative overflow-hidden rounded-2xl ring-1 ring-gray-200 bg-white shadow-sm
                transition-shadow duration-300 hover:shadow-xl"
              >
                <img
                  src="/image.jpg"
                  alt="OMM Roadways services"
                  className="w-full h-full object-cover transition-transform duration-700 ease-out hover:scale-[1.03]"
                />
              </div>

              <div className="absolute -bottom-5 left-6 rounded-xl bg-white px-4 py-3 shadow-lg ring-1 ring-gray-200">
                <p className="text-xs uppercase tracking-wide text-gray-500 font-semibold">
                  Fleet visibility
                </p>
                <p className="text-sm font-bold text-gray-900">
                  GPS-enabled monitoring
                </p>
              </div>
            </div>
          </div>

          {/* OMM Cards */}
          <div className="mt-14">
            <div className="text-center mb-10">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
                Key Services We Offer
              </h3>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Bulk logistics with compliance support, custom planning, and real-time monitoring.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {ommServices.map((s, index) => (
                <div
                  key={index}
                  className={`group bg-white rounded-xl p-8 shadow-sm ring-1 ring-gray-200
                  transition-all duration-300 hover:-translate-y-1 hover:shadow-xl
                  ${tone[s.color].hoverRing} ${tone[s.color].hoverShadow}`}
                >
                  <div
                    className={`w-14 h-14 rounded-lg flex items-center justify-center ${tone[s.color].iconWrap}
                    transition-transform duration-300 group-hover:scale-110`}
                  >
                    <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 7l-8-4-8 4v10l8 4 8-4V7z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 22V12" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 7l-8 5-8-5" />
                    </svg>
                  </div>

                  <div className="mt-5 flex items-start justify-between gap-3">
                    <h4 className={`text-lg font-bold text-gray-900 ${tone[s.color].hoverText}`}>
                      {s.title}
                    </h4>
                    <span className={`shrink-0 text-xs font-semibold px-2 py-1 rounded-md ${tone[s.color].badge}`}>
                      Service
                    </span>
                  </div>

                  <p className="text-gray-600 leading-relaxed mt-2">
                    {s.description}
                  </p>

                  <a
                    href="/contact"
                    className="inline-flex items-center gap-2 mt-5 text-sm font-semibold text-gray-900
                    transition-colors duration-300 group-hover:text-lime-700"
                  >
                    Get quote
                    <span className="transition-transform duration-300 group-hover:translate-x-1">
                      →
                    </span>
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Existing Header */}
        <div className="text-center mb-16">
          <p className="text-sm text-lime-500 uppercase tracking-wide font-semibold mb-2">
            OUR SERVICES
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Professional Logistics Solutions
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We provide comprehensive logistics and transportation services tailored to meet your business needs with efficiency and reliability.
          </p>
        </div>

        {/* Comprehensive Service in Logistics */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Comprehensive Service in Logistics
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Complete end-to-end logistics solutions to streamline your supply chain operations and maximize efficiency.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {comprehensiveServices.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-lg p-8 shadow-sm hover:shadow-lg transition-shadow duration-300 group"
              >
                <div className="w-16 h-16 bg-lime-100 rounded-lg flex items-center justify-center mb-6 text-lime-600 group-hover:bg-lime-500 group-hover:text-white transition-colors duration-300">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Logistics & Transportation Services */}
        <section>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Logistics & Transportation Services
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Reliable transportation solutions covering ground, air, and sea freight to ensure your cargo reaches its destination safely and on time.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {transportationServices.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-lg p-8 shadow-sm hover:shadow-lg transition-shadow duration-300 group"
              >
                <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mb-6 text-blue-600 group-hover:bg-blue-500 group-hover:text-white transition-colors duration-300">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Call to Action */}
        <div className="mt-20 bg-gradient-to-r from-lime-500 to-lime-600 rounded-2xl p-12 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Optimize Your Logistics?
          </h2>
          <p className="text-lime-50 mb-8 max-w-2xl mx-auto">
            Get in touch with our team to discuss how we can help streamline your supply chain and transportation needs.
          </p>
          <a
            href="/contact"
            className="inline-flex bg-white text-lime-600 font-semibold px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors duration-200"
          >
            Contact Us Today
          </a>
        </div>
      </div>
    </div>
  );
};

export default Services;
