import React, { useState } from "react";
import { assets } from "../assets/assets";

const webinars = [
  {
    id: 1,
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
    title: "Structural Engineering Workshop",
    date: "25 NOVEMBER",
    day: "SATURDAY",
    time: ["06:00 - 07:30 PM (CST)", "07:00 - 08:30 PM (EST)"],
    price: { original: "$500", discounted: "$250" },
    coupon: "Apply Coupon get $30 offer",
    phone: "+91 9110-363-544",
    website: "www.bhavanamse2e.com",
  },
  {
    id: 2,
    title: "Structural Engineering Workshop",
    date: "25 NOVEMBER",
    day: "SATURDAY",
    time: ["06:00 - 07:30 PM (CST)", "07:00 - 08:30 PM (EST)"],
    price: { original: "$500", discounted: "$250" },
    coupon: "Apply Coupon get $30 offer",
    phone: "+91 9110-363-544",
    website: "www.bhavanamse2e.com",
  }
];

const WebinarCard = ({ webinar, openModal }) => {
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
          {webinar.title}
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
          <p className="font-semibold">📅 {webinar.date}</p>
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
        <button
          onClick={() => openModal(webinar)}
          className="bg-[#03234B] text-white font-bold py-3 px-4 mt-4 rounded-md w-full text-lg"
        >
          Register Now
        </button>
      </div>
    </div>
  );
};

const WebinarsSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedWebinar, setSelectedWebinar] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const openModal = (webinar) => {
    setSelectedWebinar(webinar);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setFormData({ name: "", email: "", phone: "" });
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`You have successfully registered for ${selectedWebinar.title}`);
    closeModal();
  };

  return (
    <div className="py-10 bg-[#EFF5FB] text-center">
      <h2 className="text-3xl md:text-4xl font-bold text-[#03234B] mb-6">Webinars/Workshops</h2>

      {/* Webinar Cards List */}
      <div className="flex flex-wrap justify-center gap-6">
        {webinars.map((webinar) => (
          <WebinarCard key={webinar.id} webinar={webinar} openModal={openModal} />
        ))}
      </div>

      {/* Pagination Dots */}
      <div className="flex justify-center mt-6 space-x-2">
        <span className="w-3 h-3 bg-[#03234B] rounded-full"></span>
        <span className="w-3 h-3 bg-gray-400 rounded-full"></span>
        <span className="w-3 h-3 bg-gray-400 rounded-full"></span>
      </div>

      {/* Modal for Registration Form */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
            <h2 className="text-2xl font-bold mb-4 text-center text-[#03234B]">
              Register for {selectedWebinar.title}
            </h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full p-2 border rounded"
              />
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full p-2 border rounded"
              />
              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={handleChange}
                required
                className="w-full p-2 border rounded"
              />
              <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded">
                Confirm Registration
              </button>
            </form>
            <button onClick={closeModal} className="mt-3 text-red-600 text-center block w-full">
              Cancel
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default WebinarsSection;
