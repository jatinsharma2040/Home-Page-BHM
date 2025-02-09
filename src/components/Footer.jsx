import React from "react";
import { FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";
import { assets } from "../assets/assets"; // Ensure assets are correctly imported

const Footer = () => {
  return (
    <footer className="bg-[#E9F1FA] py-12 px-8 md:px-16">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10 text-black">
        
        {/* Logo & About Section */}
        <div>
          <img src={assets.logo} alt="Bhavanam's Logo" className="w-48 mb-5" />
          <p className="text-xl font-medium leading-relaxed">
            Your journey to success starts here – <br /> <span className="font-semibold">Explore, Learn, Excel.</span>
          </p>
        </div>

        {/* Follow Us Section */}
        <div>
          <h3 className="text-2xl font-bold mb-4">Follow Us</h3>
          <ul className="space-y-3 text-lg">
            <li className="flex items-center gap-3">
              <FaInstagram className="text-pink-600 text-2xl" /> Instagram
            </li>
            <li className="flex items-center gap-3">
              <FaLinkedin className="text-blue-700 text-2xl" /> LinkedIn
            </li>
            <li className="flex items-center gap-3">
              <FaYoutube className="text-red-600 text-2xl" /> YouTube
            </li>
          </ul>
        </div>

        {/* Quick Links Section */}
        <div>
          <h3 className="text-2xl font-bold mb-4">Quick Links</h3>
          <ul className="space-y-3 text-lg">
            <li>Home</li>
            <li>Store</li>
            <li>Civil Blogs</li>
            <li>Register</li>
            <li>Join As Instructor</li>
            <li>Contact Us</li>
          </ul>
        </div>

        {/* Download Our App Section */}
        <div>
          <h3 className="text-2xl font-bold mb-4">Download Our App</h3>
          <div className="flex items-center gap-4">
            <div className="flex flex-col gap-4">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                alt="Google Play"
                className="w-40"
              />
              <img
                src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
                alt="App Store"
                className="w-40"
              />
            </div>
            <img
              src={assets.logoSmall}
              alt="Bhavanam's Mini Logo"
              className="w-24 h-24 object-contain  p-2 rounded-lg"
            />
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
