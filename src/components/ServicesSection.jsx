import React from 'react';

const ServicesSectionSimple = () => {
  const services = [
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
        </svg>
      ),
      title: "Warehouse & Storage Solutions",
      description: "Secure facilities with real-time inventory tracking"
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
        </svg>
      ),
      title: "Freight Transportation",
      description: "Ground, air, and sea shipping worldwide"
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
        </svg>
      ),
      title: "Supply Chain Optimization",
      description: "Complete supply chain planning and management"
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
        </svg>
      ),
      title: "Express & Same-Day Delivery",
      description: "Fast delivery for time-sensitive shipments"
    }
  ];

  return (
    <section className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Text Content */}
          <div>
            <p className="text-sm text-lime-500 uppercase tracking-wide font-semibold mb-3">
              WHAT WE DO
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Professional Logistics Services
            </h2>
            <p className="text-gray-600 mb-8 leading-relaxed">
              From warehousing to worldwide shipping, we provide comprehensive logistics solutions that keep your business moving forward with efficiency and reliability.
            </p>

            {/* Services List */}
            <div className="space-y-4 mb-8">
              {services.map((service, index) => (
                <div key={index} className="flex items-start bg-white p-4 rounded-lg shadow-sm">
                  <div className="flex-shrink-0">
                    <div className="w-8 h-8 bg-lime-500 rounded-full flex items-center justify-center text-white">
                      {service.icon}
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="font-semibold text-gray-900 mb-1">{service.title}</h4>
                    <p className="text-gray-600 text-sm">{service.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <button className="bg-lime-500 hover:bg-lime-600 text-white font-semibold px-8 py-3 rounded-lg transition-colors duration-200">
              Explore Our Services
            </button>
          </div>

          {/* Right Side - Image */}
          <div className="relative lg:order-last order-first">
            <img
              src="https://images.unsplash.com/photo-1566576721346-d4a3b4eaeb55?w=800"
              alt="Logistics warehouse operations"
              className="w-full h-[550px] object-cover rounded-2xl shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSectionSimple;
