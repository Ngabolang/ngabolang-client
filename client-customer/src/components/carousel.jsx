import React from "react";
import { useState, useEffect } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/solid";

function Carousel({ images }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPreviousSlide = () => {
    const index = (currentIndex - 1 + images.length) % images.length;
    setCurrentIndex(index);
  };

  const goToNextSlide = () => {
    const index = (currentIndex + 1) % images.length;
    setCurrentIndex(index);
  };

  useEffect(() => {
    document.body.style.margin = "0";
    document.body.style.padding = "0";
    const timer = setInterval(goToNextSlide, 6000); // Auto swipe every 5 seconds

    return () => {
      clearInterval(timer); // Clear the timer when the component is unmounted
    };
  }, [currentIndex]);

  useEffect(() => {
    document.body.style.margin = "0";
    document.body.style.padding = "0";
  }, []);

  const carouselStyle = {
    width: "100%",
    paddingBottom: "35.25%",
    overflow: "hidden",
    position: "relative",
  };

  return (
    <div className="relative" style={carouselStyle}>
      <div className="w-screen h-full absolute top-0 left-0">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Slide ${index}`}
            className={`absolute top-0 left-0 w-full h-full transition-opacity duration-500 ${
              index === currentIndex ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}
      </div>
      <div className="absolute top-1/2 left-4 transform -translate-y-1/2">
        <button
          onClick={goToPreviousSlide}
          className="p-2 bg-gray-800 rounded-full text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800"
        >
          <ChevronLeftIcon className="h-6 w-6" />
        </button>
      </div>
      <div className="absolute top-1/2 right-4 transform -translate-y-1/2">
        <button
          onClick={goToNextSlide}
          className="p-2 bg-gray-800 rounded-full text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800"
        >
          <ChevronRightIcon className="h-6 w-6" />
        </button>
      </div>
    </div>
  );
}

export default Carousel;
