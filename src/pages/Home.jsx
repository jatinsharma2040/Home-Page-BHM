import React from "react";
import './Home.css';
import { assets } from "../assets/assets";

const HomeSection = () => {
  return (
    <div className="bg-[#03234B] text-white py-16 px-4">
      {/* Top Section */}
      <div className="container mx-auto flex flex-col md:flex-row items-center ">
        {/* Text Section */}
        <div className="md:w-1/2 text-center md:text-left">
          <h1 className="text-5xl font-bold leading-tight mb-6">
            Let’s Learn With Our Exciting{" "}
            <span className="gradient-text">Courses!</span>
          </h1>
          <p className="text-xl mb-5">
            Explore hundreds of courses and reach new milestones every day.
          </p>
          <button className="bg-white text-blue-900 font-bold px-8 py-4 rounded-full shadow-md hover:bg-gray-200 text-lg">
            Join Now
          </button>
        </div>

        {/* Image Section */}
        <div className="md:w-5/12 mt-8 md:mt-0 flex justify-center md:w-[900px]">
          <img
            src={assets.people_stand}
            alt="Engineers working"
            className="max-w-full md:w-[900px] md:h-[500px] h-auto"
          />
        </div>
      </div>

      {/* Logos Section */}
      <div className="mt-[1px]">
      <div className="flex flex-wrap justify-center bg-[#0A3A6B] py-4 px-6 rounded-md gap-4">
          {[
            { src: assets.autocad, alt: "Autocad" },
            { src: assets.autodesk, alt: "Autodesk Revit" },
            { src: assets.sketchup, alt: "SketchUp" },
            { src: assets.gte, alt: "GTE" },
            { src: assets.midas, alt: "MIDAS" },
            { src: assets.tekla, alt: "Tekla Structures" },
            { src: assets.oracle, alt: "Oracle Primavera P6" },
            { src: assets.rcdc, alt: "RCDC" },
            { src: assets.safe, alt: "Safe" },
          ].map((logo, index) => (
            <div
              key={index}
              className="bg-white p-2 rounded-md shadow-lg flex justify-center items-center h-16 w-32"
            >
              <img src={logo.src} alt={logo.alt} className="max-h-full max-w-full" />
            </div>
          ))}
        </div>
      </div>



      {/* Recognition Section */}
      <div className="mt-16 text-center">
        <h3 className="text-2xl font-bold mb-6">Recognized By</h3>
        <div className="bg-[#E9EFF6] py-4 px-4 rounded-xl flex flex-wrap justify-center items-center gap-2 w-225 
        mx-auto border-t border-b border-gray-400">
          {[
            { src: assets.aicte_logo, alt: "AICTE" },
            { src: assets.mca_logo, alt: "Ministry of Corporate Affairs" },
            { src: assets.dppit, alt: "DPIIT" },
            { src: assets.iso_logo, alt: "ISO Certified" },
          ].map((logo, index, array) => (
            <React.Fragment key={index}>
            <img
              src={logo.src}
              alt={logo.alt}
              className="h-22 w-auto mx-4"
            />
            {index < array.length - 1 && <div className="h-20 w-0.5 bg-gray-400"></div>}
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomeSection;
