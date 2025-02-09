import React from "react";
import { assets } from "../assets/assets";

const webinars = [
  {
    id: 1,
    logo: "/logo.png", // Add the correct path to your logo
    title: "Fundamentals of Engineering (Batch-4)",
    date: "18 NOVEMBER",
    day: "MONDAY",
    time: ["07:30 - 08:30 PM (CST)", "08:30 - 09:30 PM (EST)"],
    price: { original: "$600", discounted: "$300" },
    coupon: "Apply Coupon get $50 offer",
    phone: "+91 9110-363-544",
    website: "www.bhavanamse2e.com",
  },
  {
    id: 2,
    logo: "/logo.png",
    title: "Fundamentals of Engineering (Batch-4)",
    date: "18 NOVEMBER",
    day: "MONDAY",
    time: ["07:30 - 08:30 PM (CST)", "08:30 - 09:30 PM (EST)"],
    price: { original: "$600", discounted: "$300" },
    coupon: "Apply Coupon get $50 offer",
    phone: "+91 9110-363-544",
    website: "www.bhavanamse2e.com",
  },
  {
    id: 3,
    logo: "/logo.png",
    title: "Fundamentals of Engineering (Batch-4)",
    date: "18 NOVEMBER",
    day: "MONDAY",
    time: ["07:30 - 08:30 PM (CST)", "08:30 - 09:30 PM (EST)"],
    price: { original: "$600", discounted: "$300" },
    coupon: "Apply Coupon get $50 offer",
    phone: "+91 9110-363-544",
    website: "www.bhavanamse2e.com",
  },
];

const WebinarCard = ({ webinar }) => {
  return (
    <div className="bg-white rounded-xl shadow-lg border p-4 text-center w-80">
      {/* Logo Image */}
      <img src={assets.logo} alt="Webinar Logo" className="mx-auto h-16 w-40" />

      {/* Countdown Timer */}
      <div className="bg-[#03234B] text-white py-2 rounded-t-md text-lg font-semibold flex justify-center gap-2 mt-2">
        <span>2</span> <span className="text-sm">Hours</span> : 
        <span>20</span> <span className="text-sm">Minutes</span> : 
        <span>30</span> <span className="text-sm">Seconds</span>
      </div>

      {/* Webinar Details */}
      <div className="p-4">
        <h3 className="text-xl font-bold">
          Fundamentals of Engineering <span className="text-orange-500">(Batch-4)</span>
        </h3>
        <p className="text-lg font-semibold text-red-600 mt-1">📺 LIVE STARTS ON</p>

        {/* Date Section */}
        <div className="flex justify-center items-center gap-2 mt-2">
          <span className="bg-black text-white px-3 py-1 rounded-md font-semibold">{webinar.day}</span>
          <span className="text-3xl font-bold">{webinar.date.split(" ")[0]}</span>
          <span className="text-lg font-semibold">{webinar.date.split(" ")[1]}</span>
        </div>

        {/* Time & Date */}
        <div className="bg-gray-100 p-3 rounded-md mt-3 text-sm">
          <p className="font-semibold">📅 18/11/2024 (Monday)</p>
          <p>⏰ {webinar.time[0]}</p>
          <p>⏰ {webinar.time[1]}</p>
        </div>

        {/* Pricing Section */}
        <div className="mt-3">
          <p className="text-lg font-semibold">
            <span className="line-through text-red-500">{webinar.price.original}</span> 
            <span className="text-green-600 ml-2">{webinar.price.discounted}</span>
          </p>
        </div>

        {/* Coupon Offer */}
        <p className="text-sm text-gray-600 mt-1">{webinar.coupon}</p>

        {/* Contact Details */}
        <div className="bg-[#03234B] text-white py-1 px-2 mt-3 rounded-md text-sm">
          {webinar.phone} | {webinar.website}
        </div>

        {/* Register Button */}
        <button className="bg-[#03234B] text-white font-bold py-3 px-4 mt-4 rounded-md w-full text-lg">
          Register Now
        </button>
      </div>
    </div>
  );
};

const WebinarsSection = () => {
  return (
    <div className="py-10 bg-[#EFF5FB] text-center">
      <h2 className="text-3xl md:text-4xl font-bold text-[#03234B] mb-6">Webinars/Workshops</h2>

      {/* Webinar Cards List */}
      <div className="flex flex-wrap justify-center gap-6">
        {webinars.map((webinar) => (
          <WebinarCard key={webinar.id} webinar={webinar} />
        ))}
      </div>

      {/* Pagination Dots */}
      <div className="flex justify-center mt-6 space-x-2">
        <span className="w-3 h-3 bg-[#03234B] rounded-full"></span>
        <span className="w-3 h-3 bg-gray-400 rounded-full"></span>
        <span className="w-3 h-3 bg-gray-400 rounded-full"></span>
      </div>
    </div>
  );
};

export default WebinarsSection;
