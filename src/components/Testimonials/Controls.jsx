// components/Controls.jsx
"use client";
import { useState, useEffect } from "react";

function Controls({ swiper }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  // Update current slide when swiper changes
  useEffect(() => {
    if (!swiper) return;

    const handleSlideChange = () => {
      setCurrentSlide(swiper.realIndex);
    };

    swiper.on("slideChange", handleSlideChange);

    // Cleanup
    return () => {
      swiper.off("slideChange", handleSlideChange);
    };
  }, [swiper]);

  // Navigation functions
  const goToSlide = (index) => {
    if (swiper) {
      swiper.slideToLoop(index);
    }
  };

  const goNext = () => {
    if (swiper) {
      swiper.slideNext();
    }
  };

  const goPrev = () => {
    if (swiper) {
      swiper.slidePrev();
    }
  };

  if (!swiper) {
    return (
      <div className="flex justify-center items-center h-16">
        <div className="text-gray-500">Loading controls...</div>
      </div>
    );
  }

  return (
    <div className="mt-1 lg:mt-8 p-6 bg-transparent rounded-xl  w-fit">
      {/* Prev/Next Buttons */}
      <div className="flex items-start gap-4">
        <button
          onClick={goPrev}
          className="w-12 h-12 bg-white rounded-full shadow flex items-center justify-center hover:bg-accent-primary transition-colors"
          aria-label="Previous slide"
        >
          <svg
            className="w-6 h-6 text-gray-700 hover:text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>

        <button
          onClick={goNext}
          className="w-12 h-12 bg-white rounded-full shadow flex items-center justify-center hover:bg-accent-primary transition-colors"
          aria-label="Next slide"
        >
          <svg
            className="w-6 h-6 text-gray-700 hover:text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}

export default Controls;
