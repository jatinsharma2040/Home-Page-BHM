import React from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { assets } from "../assets/assets";

const AdvisorSection = () => {
  return (
    <div className="bg-[#03234B] w-full py-12"> {/* Full-width background */}
      <div className="text-white flex flex-col md:flex-row items-center justify-between p-8 md:p-12 rounded-lg shadow-lg max-w-6xl w-full mx-auto ">
        
        {/* Left Content */}
        <div className="md:w-2/3">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Talk To Our Advisor</h2>
          <ul className="list-disc ml-6 space-y-3 text-lg md:text-2xl">
            <li>Course Recommendations & Academic Planning</li>
            <li>Personalized Guidance & Career Advice</li>
            <li>Resume & Portfolio Building</li>
          </ul>

          {/* Call-to-action Button */}
          <button className="mt-8 bg-red-600 hover:bg-red-700 text-white font-semibold flex items-center gap-3 px-6 py-3 text-lg md:text-xl rounded-lg shadow-md">
            <FaPhoneAlt className="text-2xl" />
            Request Call Back
          </button>
        </div>

        {/* Right Image */}
        <div className="mt-8 md:mt-0 md:w-1/3 flex justify-center">
          <img
            src={assets.advisor}
            alt="Advisor"
            className="w-52 h-52 md:w-64 md:h-64 object-cover rounded-full "
          />
        </div>
      </div>
    </div>
  );
};

export default AdvisorSection;
