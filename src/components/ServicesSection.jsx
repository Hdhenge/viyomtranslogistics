import React from 'react';
import { Warehouse, Plane, Network, Clock, ArrowRight } from 'lucide-react';

const ServicesSectionSimple = () => {
  const services = [
    {
      icon: <Warehouse className="w-6 h-6" />,
      title: "Warehouse & Storage Solutions",
      description: "Secure facilities with real-time inventory tracking and management."
    },
    {
      icon: <Plane className="w-6 h-6" />,
      title: "Freight Transportation",
      description: "Comprehensive ground, air, and ocean shipping across the globe."
    },
    {
      icon: <Network className="w-6 h-6" />,
      title: "Supply Chain Optimization",
      description: "End-to-end planning to streamline operations and reduce costs."
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Express & Same-Day Delivery",
      description: "Priority logistics for time-sensitive shipments that can't wait."
    }
  ];

  return (
    <section className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Left Side - Text Content */}
          <div className="order-2 lg:order-1">
            <div className="flex items-center gap-2 mb-3">
              <span className="h-0.5 w-8 bg-[#d4e157]"></span>
              <p className="text-sm text-[#1e40af] uppercase tracking-wider font-bold">
                WHAT WE DO
              </p>
            </div>
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Professional Logistics <br className="hidden md:block"/> Services
            </h2>
            
            <p className="text-gray-600 text-lg mb-8 leading-relaxed">
              From warehousing to worldwide shipping, Viyom Translogistics provides 
              comprehensive solutions that keep your business moving forward with efficiency 
              and reliability.
            </p>

            {/* Services List */}
            <div className="space-y-6 mb-10">
              {services.map((service, index) => (
                <div 
                  key={index} 
                  className="flex items-start bg-white p-5 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300"
                >
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-[#ecfccb] rounded-full flex items-center justify-center text-[#4d7c0f]">
                      {service.icon}
                    </div>
                  </div>
                  <div className="ml-5">
                    <h4 className="font-bold text-gray-900 text-lg mb-1">{service.title}</h4>
                    <p className="text-gray-600 text-sm leading-relaxed">{service.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <button className="group inline-flex items-center gap-2 bg-[#0a2540] hover:bg-[#1e40af] text-white font-semibold px-8 py-4 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1">
              Explore Our Services
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Right Side - Image */}
          <div className="relative order-1 lg:order-2">
            {/* Decorative Border Element */}
            <div className="absolute -inset-4 border-2 border-[#d4e157] rounded-3xl z-0 hidden lg:block translate-x-4 translate-y-4"></div>
            
            <div className="relative rounded-2xl overflow-hidden shadow-2xl z-10">
              <img
                src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                alt="Viyom Logistics Warehouse Operations"
                className="w-full h-[600px] object-cover hover:scale-105 transition-transform duration-700"
              />
              
              {/* Overlay Content */}
              <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/80 via-black/40 to-transparent p-8">
                <p className="text-white font-medium text-lg">
                  "Streamlining global trade through innovation."
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ServicesSectionSimple;
