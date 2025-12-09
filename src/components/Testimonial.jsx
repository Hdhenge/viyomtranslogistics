import React, { useState } from 'react';

const TestimonialsSlider = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      position: "CEO, TechCorp Inc.",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400",
      rating: 5,
      text: "Outstanding service! Their logistics solutions have transformed our supply chain efficiency. The team is professional, responsive, and always goes above and beyond to meet our needs. We've seen remarkable improvements in delivery times and cost savings."
    },
    {
      name: "Michael Chen",
      position: "Operations Manager, Global Traders",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400",
      rating: 5,
      text: "We've been working with them for 3 years and couldn't be happier. Their real-time tracking system and reliable delivery schedules have been game-changers for our business operations."
    },
    {
      name: "Emily Rodriguez",
      position: "Founder, EcoProducts",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400",
      rating: 5,
      text: "Exceptional customer service and competitive pricing. They handle our international shipments with care and precision. Highly recommend their services to any growing business."
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="bg-gradient-to-br from-lime-500 to-lime-600 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <p className="text-sm text-lime-100 uppercase tracking-wide font-semibold mb-2">
            TESTIMONIALS
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Client Success Stories
          </h2>
        </div>

        {/* Testimonial Card */}
        <div className="bg-white rounded-2xl p-8 md:p-12 shadow-2xl relative">
          {/* Quote Icon */}
          <div className="absolute -top-6 left-8 w-12 h-12 bg-lime-500 rounded-full flex items-center justify-center">
            <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
            </svg>
          </div>

          {/* Rating Stars */}
          <div className="flex justify-center mb-6">
            {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
              <svg
                key={i}
                className="w-6 h-6 text-yellow-400"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>

          {/* Testimonial Text */}
          <p className="text-gray-700 text-lg md:text-xl text-center mb-8 leading-relaxed">
            "{testimonials[currentIndex].text}"
          </p>

          {/* Client Info */}
          <div className="flex flex-col items-center">
            <img
              src={testimonials[currentIndex].image}
              alt={testimonials[currentIndex].name}
              className="w-16 h-16 rounded-full object-cover mb-4"
            />
            <h4 className="font-bold text-gray-900 text-lg">
              {testimonials[currentIndex].name}
            </h4>
            <p className="text-gray-600">{testimonials[currentIndex].position}</p>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-lime-500 hover:bg-lime-600 text-white rounded-full flex items-center justify-center transition-colors duration-200"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-lime-500 hover:bg-lime-600 text-white rounded-full flex items-center justify-center transition-colors duration-200"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-colors duration-200 ${
                  index === currentIndex ? 'bg-lime-500' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSlider;
