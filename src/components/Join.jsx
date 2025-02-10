import React, { useState } from "react";
import { assets } from "../assets/assets";

const InstructorCard = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    expertise: "",
  });

  // Handles input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handles form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Your application has been submitted successfully! We will contact you soon.");
    setIsModalOpen(false); // Close modal after submission
  };

  return (
    <div id="join" className="flex justify-center items-center min-h-screen bg-[#E9F1FA] p-6">
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
            <button
              onClick={() => setIsModalOpen(true)}
              className="mt-10 px-10 py-4 bg-white text-[#002D62] text-2xl font-semibold rounded-full shadow-lg hover:bg-gray-200 transition"
            >
              Join Now
            </button>
          </div>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
            <h2 className="text-2xl font-bold mb-4 text-center text-[#002D62]">Become an Instructor</h2>
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
              <input
                type="text"
                name="expertise"
                placeholder="Your Expertise (e.g., Civil Engineering, AutoCAD)"
                value={formData.expertise}
                onChange={handleChange}
                required
                className="w-full p-2 border rounded"
              />
              <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded">
                Submit Application
              </button>
            </form>
            <button
              onClick={() => setIsModalOpen(false)}
              className="mt-3 text-red-600 text-center block w-full"
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default InstructorCard;
