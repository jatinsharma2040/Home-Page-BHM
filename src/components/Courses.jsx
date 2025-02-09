import React from "react";
import { assets } from "../assets/assets";

const CoursesSection = () => {
  const courses = [
    { name: "Autocad", logo: assets.autocad },
    { name: "Autodesk Revit", logo: assets.revit },
    { name: "SketchUp", logo: assets.sketchup },
    { name: "Autodesk 3DS Max", logo: assets.autodesk },
    { name: "ETABS", logo: assets.etabs },
    { name: "SAFE", logo: assets.safe },
    { name: "STAAD.Pro", logo: assets.staad },
    { name: "RCDC", logo: assets.rcdc },
    { name: "IDEA StatiCa", logo: assets.idea },
    { name: "Tekla Structures", logo: assets.tekla },
    { name: "MIDAS", logo: assets.midas },
    { name: "GTE", logo: assets.gte },
    { name: "PCM", logo: assets.pcm },
    { name: "Oracle Primavera P6", logo: assets.oracle },
    { name: "BIM MEP", logo: assets.bim },
  ];

  return (
    <div className="bg-[#03234B] py-16 px-6">
      {/* Section Title with Bigger Font */}
      <h2 className="text-white text-center text-5xl font-bold mb-12">
        Our Courses
      </h2>

      {/* Courses Grid with More Spacing */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10 max-w-6xl mx-auto">
        {courses.map((course, index) => (
          <div
            key={index}
            className="bg-white w-full h-32 flex flex-col justify-center items-center rounded-lg shadow-lg p-6"
          >
            <img
              src={course.logo}
              alt={course.name}
              className="w-24 h-16 object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CoursesSection;
