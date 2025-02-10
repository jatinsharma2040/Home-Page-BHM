import React from "react";
import {assets} from '../assets/assets'

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between px-4 py-2 bg-white shadow-md rounded-xs">
      {}
      <div className="flex items-center ml-5">   
        <img
          src={assets.logo}
          alt="Bhavanam's Logo"
          className="h-13 w-auto"
        />
        <span className="ml-2 text-blue-500 font-bold text-xl">
          
        </span>
      </div>

      {/* Navigation Links */}
      <div className="flex space text-lg ml-auto space-x-6 mr-10">
        <a href="#home" className="text-blue-900 font-bold">
          Home
        </a>
        <a href="#store" className="text-blue-900 font-bold">
          Store
        </a>
        <a href="#courses" className="text-blue-900 font-bold">
          My Courses
        </a>
        <a href="#blogs" className="text-blue-900 font-bold">
          Civil Blogs
        </a>
      </div>

      {/* Login Button */}
      <button className="bg-blue-800 text-white px-4 py-2 rounded-full mr-8">
        Login
      </button>
    </nav>
  );
};

export default Navbar;
