"use client";
import React, { useState, useEffect, useRef } from "react";
import { profiles } from "@/utils/utils";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";
import classNames from "classnames";

export default function TestimonialSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const autoplayTimeout = useRef<NodeJS.Timeout | null>(null);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (isAutoPlaying) {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % profiles.length);
      }, 3000);

      return () => clearInterval(interval);
    }
  }, [isAutoPlaying, profiles.length]);

  // Reset autoplay with delay
  const resetAutoplay = () => {
    setIsAutoPlaying(false);
    if (autoplayTimeout.current) clearTimeout(autoplayTimeout.current);

    autoplayTimeout.current = setTimeout(() => {
      setIsAutoPlaying(true);
    }, 3000);
  };

  const handlePrevious = () => {
    resetAutoplay();
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + profiles.length) % profiles.length
    );
  };

  const handleNext = () => {
    resetAutoplay();
    setCurrentIndex((prevIndex) => (prevIndex + 1) % profiles.length);
  };

  const handleThumbnailClick = (index: number) => {
    resetAutoplay();
    setCurrentIndex(index);
  };

  return (
    <div className="w-full max-w-6xl mx-auto px-4 py-12">
      <h1 className="text-center mb-12">
        <span className="text-green-600 font-bold text-4xl">Placements</span>
        <span className="text-gray-800 font-bold text-4xl"> and Success</span>
      </h1>

      <div className="relative">
        {/* Main Testimonial */}
        <div className="bg-white rounded-lg shadow-xl p-8 mb-8">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-800">
                {profiles[currentIndex].name}
              </h2>
              {profiles[currentIndex].salary && (
                <p className="text-lg">
                  <span className="text-green-600 font-semibold">Salary: </span>
                  {profiles[currentIndex].salary}
                </p>
              )}
              <p className="text-gray-600 font-medium">
                {profiles[currentIndex].role}
              </p>
              <p className="text-gray-700 leading-relaxed">
                {profiles[currentIndex].description}
              </p>
            </div>
            <div className="relative h-96 w-96 ml-auto">
              <img
                src={profiles[currentIndex].image}
                alt={profiles[currentIndex].name}
                className="w-full h-full object-contain rounded-lg"
              />
            </div>
          </div>
        </div>

        {/* Navigation Buttons */}
        <button
          onClick={handlePrevious}
          className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white p-2 rounded-full shadow-lg hover:bg-gray-100 transition-colors"
        >
          <BiChevronLeft className="w-6 h-6" />
        </button>
        <button
          onClick={handleNext}
          className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white p-2 rounded-full shadow-lg hover:bg-gray-100 transition-colors"
        >
          <BiChevronRight className="w-6 h-6" />
        </button>

        {/* Thumbnails */}
        <div className="flex justify-center gap-4 mt-8 overflow-x-auto py-4 flex-wrap">
          {profiles.map((testimonial, index) => (
            <button
              key={index}
              onClick={() => handleThumbnailClick(index)}
              className={classNames(
                "flex-shrink-0 transition-all duration-300",
                {
                  "scale-110": index === currentIndex,
                },
                { "opacity-50 hover:opacity-75": index !== currentIndex }
              )}
            >
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-20 h-20 rounded-full object-cover"
              />
              <p className="text-xs text-center mt-1 font-medium">
                {testimonial.name.split(" ")[0]}
              </p>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
