import React from "react";

const Service = () => {
  const services = [
    {
      icon: "🌍",
      title: "Personalized Travel Itinerary Planning",
      description:
        "We offer tailored travel itineraries based on your preferences, helping you explore unique destinations and experiences. From adventure trips to cultural explorations, our expert team crafts a journey just for you.",
    },
    {
      icon: "🏨",
      title: "Exclusive Hotel & Accommodation Deals",
      description:
        "Get access to handpicked hotel deals and accommodations that suit your travel style and budget. Whether you're seeking luxury stays or budget-friendly options, we help you find the perfect place to rest during your travels.",
    },
    {
      icon: "✈️",
      title: "Flight Booking & Travel Assistance",
      description:
        "We simplify the flight booking process for you, offering competitive rates and the best flight routes. Our team ensures that your journey is seamless from takeoff to landing, providing assistance throughout your travel.",
    },
    {
      icon: "🗺️",
      title: "Guided Tours & Local Experiences",
      description:
        "Enhance your travels with guided tours and local experiences that immerse you in the culture and beauty of your destination. We connect you with trusted local guides to help you discover hidden gems and unforgettable activities.",
    },
  ];

  return (
    <div className="px-4 lg:px-20 bg-pink-100 py-10">
      {/* Header Section */}
      <h2 className="text-3xl lg:text-4xl font-bold text-center text-pink-700 mb-4">
        Our Travel Services
      </h2>
      <p className="text-center text-gray-600 mb-10 max-w-5xl mx-auto">
        We are dedicated to making your travel experiences unforgettable. Our
        range of travel services ensures that every aspect of your journey is
        planned to perfection, allowing you to focus on enjoying your trip and
        creating memories.
      </p>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {services.map((service, index) => (
          <div
            key={index}
            className="flex items-start space-x-4 bg-white hover:shadow-lg hover:translate-y-[-7px] p-6 rounded-lg cursor-pointer transition-transform duration-300 ease-in-out"
          >
            {/* Icon Section */}
            <div className="text-4xl text-pink-600">{service.icon}</div>
            {/* Content Section */}
            <div>
              <h3 className="text-xl font-semibold text-pink-700 mb-2">
                {service.title}
              </h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Service;
