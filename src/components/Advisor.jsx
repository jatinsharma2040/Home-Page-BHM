import React, { useState } from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { assets } from "../assets/assets";

const AdvisorSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  // Handles input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handles form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Request submitted successfully! Our advisor will contact you soon.");
    setIsModalOpen(false); // Close modal after submission
  };

  return (
    <div className="bg-[#03234B] w-full py-12">
      <div className="text-white flex flex-col md:flex-row items-center justify-between p-8 md:p-12 rounded-lg shadow-lg max-w-6xl w-full mx-auto">
        
        {/* Left Content */}
        <div className="md:w-2/3">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Talk To Our Advisor</h2>
          <ul className="list-disc ml-6 space-y-3 text-lg md:text-2xl">
            <li>Course Recommendations & Academic Planning</li>
            <li>Personalized Guidance & Career Advice</li>
            <li>Resume & Portfolio Building</li>
          </ul>

          {/* Call-to-action Button */}
          <button
            onClick={() => setIsModalOpen(true)}
            className="mt-8 bg-red-600 hover:bg-red-700 text-white font-semibold flex items-center gap-3 px-6 py-3 text-lg md:text-xl rounded-lg shadow-md"
          >
            <FaPhoneAlt className="text-2xl" />
            Request Call Back
          </button>
        </div>

        {/* Right Image */}
        <div className="mt-8 md:mt-0 md:w-1/3 flex justify-center">
          <img
            src={assets.advisor}
            alt="Advisor"
            className="w-52 h-52 md:w-64 md:h-64 object-cover rounded-full"
          />
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
            <h2 className="text-2xl font-bold mb-4 text-center text-[#03234B]">Request a Call Back</h2>
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
                type="tel"
                name="phone"
                placeholder="Phone Number"
                value={formData.phone}
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
              <textarea
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                className="w-full p-2 border rounded"
              ></textarea>
              <button type="submit" className="w-full bg-red-600 text-white py-2 rounded">
                Submit Request
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

export default AdvisorSection;
