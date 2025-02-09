import React, { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import { assets } from "../assets/assets";

const professionals = [
  {
    name: "Mr. Ravi Charan",
    country: "Toronto, Canada",
    flag: "https://flagcdn.com/w40/ca.png",
    rating: "⭐ 5.0",
    role: "Structural Project Engineer | 5+ yrs",
    skills: "Estimation | BlueBeam | Procore",
    company: "Armour Heights and Developments",
    image: assets.prof,
  },
  {
    name: "Mr. Vinod Kumar",
    country: "Connecticut, USA",
    flag: "https://flagcdn.com/w40/us.png",
    rating: "⭐ 5.0",
    role: "Construction Inspector | 8+ yrs",
    skills: "Highway Paving | Bridges | Site Management",
    company: "GM2 Associates Inc | Ex-TATA Projects Limited",
    image: assets.prof1,
  },
  {
    name: "Ms. Sarah Johnson",
    country: "London, UK",
    flag: "https://flagcdn.com/w40/gb.png",
    rating: "⭐ 4.8",
    role: "Civil Engineer | 6+ yrs",
    skills: "AutoCAD | Structural Analysis | Project Planning",
    company: "AECOM | UK Infrastructure Projects",
    image: "https://randomuser.me/api/portraits/women/79.jpg",
  },
  {
    name: "Mr. Arjun Mehta",
    country: "New Delhi, India",
    flag: "https://flagcdn.com/w40/in.png",
    rating: "⭐ 4.9",
    role: "Project Manager | 10+ yrs",
    skills: "Project Scheduling | Primavera | Risk Management",
    company: "L&T Construction | DMRC Projects",
    image: "https://randomuser.me/api/portraits/men/47.jpg",
  },
];

const ProfessionalCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerPage = 2;

  const prevSlide = () => {
    setCurrentIndex((prev) => Math.max(prev - 1, 0));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => Math.min(prev + 1, professionals.length - itemsPerPage));
  };

  return (
    <div className="min-h-screen bg-[#E9F1FA] flex flex-col justify-center items-center px-8">
      <h2 className="text-center text-5xl font-bold text-[#03234B] mb-25">
        Connect with Global Working Professionals
      </h2>

      <div className="relative w-full max-w-5xl flex items-center justify-center">
        {/* Left Button */}
        {currentIndex > 0 && (
          <button
            className="absolute left-[-50px] bg-gray-500 text-white w-10 h-10 flex justify-center items-center rounded-full shadow-lg"
            onClick={prevSlide}
          >
            <FaChevronLeft size={20} />
          </button>
        )}

        {/* Profiles with Smooth Animation */}
        <div className="flex overflow-hidden w-full justify-center">
          <AnimatePresence mode="wait" initial={false}>
            {professionals.slice(currentIndex, currentIndex + itemsPerPage).map((pro, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
                className="bg-gradient-to-r from-blue-700 to-blue-500 text-white p-6 rounded-xl shadow-lg w-[320px] h-[360px] flex flex-col items-center mx-3"
              >
                {/* Profile Image */}
                <motion.img
                  src={pro.image}
                  alt={pro.name}
                  className="w-20 h-20 rounded-full border-4 border-white mb-3"
                  whileHover={{ scale: 1.1 }}
                />

                {/* Name */}
                <h3 className="text-lg font-semibold">{pro.name}</h3>

                {/* Location & Flag */}
                <div className="flex items-center gap-2 text-sm">
                  <img src={pro.flag} alt="flag" className="w-6 h-4 rounded" />
                  <p>{pro.country} | {pro.rating}</p>
                </div>

                {/* Role */}
                <p className="text-sm mt-2 font-semibold">{pro.role}</p>

                {/* Skills */}
                <p className="text-xs mt-1">{pro.skills}</p>

                {/* Company */}
                <p className="text-xs mt-1">{pro.company}</p>

                {/* Connect Button */}
                <motion.button
                  className="mt-4 bg-white text-blue-700 px-4 py-2 rounded-full text-sm font-semibold shadow-md"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Let's Connect
                </motion.button>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Right Button */}
        {currentIndex + itemsPerPage < professionals.length && (
          <button
            className="absolute right-[-50px] bg-blue-900 text-white w-10 h-10 flex justify-center items-center rounded-full shadow-lg"
            onClick={nextSlide}
          >
            <FaChevronRight size={20} />
          </button>
        )}
      </div>
    </div>
  );
};

export default ProfessionalCarousel;
