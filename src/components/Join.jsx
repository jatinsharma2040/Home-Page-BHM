import React from "react";
import { assets } from "../assets/assets";

const InstructorCard = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-[#E9F1FA] p-6">
      <div className="relative bg-white rounded-lg shadow-2xl w-full max-w-6xl h-[150px] flex items-center justify-center">
        {/* Background Shape */}
        <div className="absolute top-6 left-6 w-full h-full bg-blue-100 rounded-lg transform scale-95 -z-10"></div>

        {/* Main Card */}
        <div className="bg-[#002D62] text-white p-16 rounded-lg flex flex-col md:flex-row items-center w-full h-150">
          {/* Left Side: Image */}
          <div className="flex-shrink-0">
            <img
              src={assets.classpic}
              alt="Instructor Illustration"
              className="w-[550px] h-auto rounded-lg"
            />
          </div>

          {/* Right Side: Text Content */}
          <div className="md:ml-16 text-center md:text-left max-w-2xl">
            <h2 className="text-6xl font-bold">Join as an Instructor</h2>
            <p className="mt-8 text-3xl">
              Teach, inspire, and earn—start your journey as an instructor with us today!
            </p>

            {/* CTA Button */}
            <button className="mt-10 px-10 py-4 bg-white text-[#002D62] text-2xl font-semibold rounded-full shadow-lg hover:bg-gray-200 transition">
              Join Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InstructorCard;
