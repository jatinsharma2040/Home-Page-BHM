import React, { useState } from "react";
import { FaPlay, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { assets } from "../assets/assets";

const podcastImages = [
  assets.people,
  assets.people1,
  assets.people2,
];

const PodcastCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(2); 

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : podcastImages.length - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev < podcastImages.length - 1 ? prev + 1 : 0));
  };

  return (
    <div id="blogs" className="min-h-screen bg-[#E9F1FA] flex flex-col justify-center items-center px-8">
      {/* Title */}
      <h2 className="text-center text-5xl font-bold text-[#03234B] mb-25">
        Civil Engineering Podcast Series
      </h2>

      {/* Carousel Container */}
      <div className="relative flex items-center justify-center w-full max-w-7xl">
        {/* Left Button */}
        <button
          className="bg-[#03234B] text-white w-14 h-14 flex justify-center items-center rounded-full absolute left-0 z-10"
          onClick={prevSlide}
        >
          <FaChevronLeft size={28} />
        </button>

        {/* Image Wrapper */}
        <div className="flex items-center justify-center relative">
          {/* Previous Image (Left Side) */}
          <img
            src={podcastImages[(currentIndex - 1 + podcastImages.length) % podcastImages.length]}
            alt="Previous Podcast"
            className="w-80 h-52 rounded-lg opacity-70 absolute left-[-150px] top-5 transform scale-90 shadow-lg"
          />

          {/* Main Image (Center) */}
          <div className="relative z-20">
            <img
              src={podcastImages[currentIndex]}
              alt="Current Podcast"
              className="w-[550px] h-[350px] rounded-lg shadow-xl"
            />
            <button className="absolute inset-0 flex justify-center items-center">
              <FaPlay className="text-white bg-[#03234B] p-5 rounded-full w-20 h-20 shadow-lg" />
            </button>
          </div>

          {/* Next Image (Right Side) */}
          <img
            src={podcastImages[(currentIndex + 1) % podcastImages.length]}
            alt="Next Podcast"
            className="w-80 h-52 rounded-lg opacity-70 absolute right-[-150px] top-5 transform scale-90 shadow-lg"
          />
        </div>

        {/* Right Button */}
        <button
          className="bg-[#03234B] text-white w-14 h-14 flex justify-center items-center rounded-full absolute right-0 z-10"
          onClick={nextSlide}
        >
          <FaChevronRight size={28} />
        </button>
      </div>
    </div>
  );
};

export default PodcastCarousel;
