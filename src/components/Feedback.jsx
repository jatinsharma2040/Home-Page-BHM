import React, { useState } from "react";
import { FaChevronLeft, FaChevronRight, FaQuoteLeft } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import { assets } from "../assets/assets";

// Sample student feedback data
const feedbacks = [
  {
    name: "Neeharika.Y",
    image: "https://randomuser.me/api/portraits/women/79.jpg",
    course: "AUTODESK: 3DS MAX",
    feedback:
      "I learnt full course of 3DSMax+V-ray and I have done one project. It is very useful lecture. Thank you mam and sir for providing such good knowledge.",
  },
  {
    name: "Neeharika.Y",
    image: "https://randomuser.me/api/portraits/women/47.jpg",
    course: "AUTODESK: 3DS MAX",
    feedback:
      "I learnt full course of 3DSMax+V-ray and I have done one project. It is very useful lecture. Thank you mam and sir for providing such good knowledge.",
  },
  {
    name: "Neeharika.Y",
    image: "https://randomuser.me/api/portraits/men/81.jpg",
    course: "AUTODESK: 3DS MAX",
    feedback:
      "I learnt full course of 3DSMax+V-ray and I have done one project. It is very useful lecture. Thank you mam and sir for providing such good knowledge.",
  },
  {
    name: "Neeharika.Y",
    image: assets.profile2,
    course: "AUTODESK: 3DS MAX",
    feedback:
      "I learnt full course of 3DSMax+V-ray and I have done one project. It is very useful lecture. Thank you mam and sir for providing such good knowledge.",
  },
  {
    name: "Neeharika.Y",
    image: assets.profile1,
    course: "AUTODESK: 3DS MAX",
    feedback:
      "I learnt full course of 3DSMax+V-ray and I have done one project. It is very useful lecture. Thank you mam and sir for providing such good knowledge.",
  },
];

const StudentFeedback = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerPage = 3;

  const prevSlide = () => {
    setCurrentIndex((prev) => Math.max(prev - 1, 0));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => Math.min(prev + 1, feedbacks.length - itemsPerPage));
  };

  return (
    <div className="min-h-screen bg-[#E9F1FA] flex flex-col justify-center items-center px-8">
      {/* Title */}
      <h2 className="text-center text-5xl font-bold text-[#03234B] mb-25">
        Student Feedbacks
      </h2>

      <div className="relative w-full max-w-6xl flex items-center justify-center">
        {/* Carousel Container */}
        <div className="overflow-hidden w-full flex justify-center relative">
          <AnimatePresence initial={false} mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -50, opacity: 0 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="flex gap-6"
            >
              {feedbacks.slice(currentIndex, currentIndex + itemsPerPage).map((feedback, index) => (
                <motion.div
                  key={index}
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.3 }}
                  className="bg-gradient-to-b from-blue-700 to-blue-500 text-white p-6 rounded-2xl shadow-lg w-[320px] h-[420px] flex flex-col items-center"
                >
                  {/* Profile Image */}
                  <motion.img
                    src={feedback.image}
                    alt={feedback.name}
                    className="w-24 h-24 rounded-full border-4 border-white"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                  />

                  {/* Name */}
                  <h3 className="text-center mt-4 text-xl font-semibold">
                    {feedback.name}
                  </h3>

                  {/* Course Badge */}
                  <div className="mt-2">
                    <span className="bg-white text-blue-800 text-xs font-semibold px-3 py-1 rounded-full">
                      {feedback.course}
                    </span>
                  </div>

                  {/* Quote Icon */}
                  <motion.div
                    initial={{ rotate: -10, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                  >
                    <FaQuoteLeft className="text-3xl opacity-80 mt-4" />
                  </motion.div>

                  {/* Feedback Text */}
                  <motion.p
                    className="text-center text-sm mt-3 leading-relaxed"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                  >
                    {feedback.feedback}
                  </motion.p>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Navigation Buttons */}
        {currentIndex > 0 && (
          <motion.button
            className="absolute left-[-60px] bg-gray-500 text-white w-12 h-12 flex justify-center items-center rounded-full hover:bg-gray-700 transition"
            onClick={prevSlide}
            whileTap={{ scale: 0.9 }}
            whileHover={{ scale: 1.1 }}
          >
            <FaChevronLeft size={24} />
          </motion.button>
        )}

        {currentIndex + itemsPerPage < feedbacks.length && (
          <motion.button
            className="absolute right-[-60px] bg-blue-900 text-white w-12 h-12 flex justify-center items-center rounded-full hover:bg-blue-700 transition"
            onClick={nextSlide}
            whileTap={{ scale: 0.9 }}
            whileHover={{ scale: 1.1 }}
          >
            <FaChevronRight size={24} />
          </motion.button>
        )}
      </div>
    </div>
  );
};

export default StudentFeedback;
