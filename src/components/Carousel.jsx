import React, { useState, useEffect } from "react";

const Carousel = () => {
    const [activeSlide, setActiveSlide] = useState(0);
    const slides = [
      "/imgs/img1.jpeg",
      "/imgs/img3.jpeg",
      "/imgs/img4.jpeg",
    ];

    const nextSlide = () => setActiveSlide((prev) => (prev + 1) % slides.length);
    const prevSlide = () => setActiveSlide((prev) => (prev - 1 + slides.length) % slides.length);

    useEffect(() => {
      const interval = setInterval(() => {
        nextSlide();
      }, 3000);

      // Cleanup interval on component unmount
      return () => clearInterval(interval);
    }, [activeSlide]);

    return (
      <div className="relative w-full h-screen">
        <div className="relative h-screen overflow-hidden rounded-lg md:h-screen">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`absolute inset-0 h-screen transition-transform duration-300 ease-in-out ${activeSlide === index ? "translate-x-0" : "translate-x-full hidden"
                }`}
            >
              <img
                src={slide}
                className="block w-full h-screen object-cover"
                alt={`Slide ${index + 1}`}
              />
            </div>
          ))}
        </div>
        {/* Indicators */}
        <div className="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3">
          {slides.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full ${activeSlide === index ? "bg-orange-400": "bg-gray-300"
                }`}
              onClick={() => setActiveSlide(index)}
            ></button>
          ))}
        </div>
      </div>
    );
  };


  export default Carousel;