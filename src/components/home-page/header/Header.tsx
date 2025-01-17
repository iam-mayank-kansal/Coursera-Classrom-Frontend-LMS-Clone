"use client";
import React, { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import SlideContent from "./SlideContent";
import SlideIndicators from "./SlideIndicators";
import NavigationButtons from "./NavigationButtons";
import { slides } from "@/utils/utils";
import {
  SlideFeature,
  SlideGrid,
  SlideHero,
  SlideSplit,
} from "@/utils/interface";

export default function Header() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const handlePrevious = () => {
    setIsAutoPlaying(false);
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const handleNext = () => {
    setIsAutoPlaying(false);
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const handleIndicatorClick = (index: number) => {
    setIsAutoPlaying(false);
    setCurrentSlide(index);
  };

  return (
    <div className="relative h-[600px] sm:h-[700px] w-full overflow-hidden">
      <AnimatePresence mode="wait">
        {slides.map(
          (slide, index) =>
            index === currentSlide && (
              <SlideContent
                key={index}
                slide={
                  slide as SlideHero | SlideSplit | SlideFeature | SlideGrid
                }
                isActive={index === currentSlide}
              />
            )
        )}
      </AnimatePresence>

      <NavigationButtons onPrevious={handlePrevious} onNext={handleNext} />

      <SlideIndicators
        total={slides.length}
        current={currentSlide}
        onSelect={handleIndicatorClick}
      />
    </div>
  );
}
