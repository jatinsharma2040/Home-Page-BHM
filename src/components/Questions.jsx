import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { motion } from "framer-motion";

const faqs = [
  {
    question: "If I’m not a Computer Science Background, is this course fit for me?",
    answer: "Yes! This course is designed for beginners, even if you have no prior experience in programming.",
  },
  {
    question: "After completing the course as fresher will I get job opportunities?",
    answer: "Absolutely! We provide career guidance and support to help you land your first job.",
  },
  {
    question: "What are the eligibility criteria for this Python Masterclass?",
    answer: "Anyone with an interest in coding can join! No prior experience is required.",
  },
  {
    question: "After completing the course will I get a certificate of Completion?",
    answer: "Yes! You will receive an industry-recognized certificate upon completion of the course.",
  },
  {
    question: "How to enroll for this course?",
    answer: "Simply click the 'Enroll Now' button on our website and follow the instructions.",
  },
  {
    question: "Will class recordings be available if I miss the class?",
    answer: "Yes! All sessions are recorded and accessible anytime through your student portal.",
  },
  {
    question: "Will I get Industrial Exposure?",
    answer: "Yes! You will work on real-world projects and case studies during the course.",
  },
  {
    question: "If I didn’t like the course after joining, will I get my refund?",
    answer: "We offer a 7-day money-back guarantee if you're not satisfied with the course.",
  },
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-[#E9F1FA] flex flex-col items-center py-12 px-6">
      <h2 className="text-center text-4xl font-bold text-[#03234B] mb-8">Frequently Asked Questions</h2>

      <div className="w-full max-w-3xl">
        {faqs.map((faq, index) => (
          <div key={index} className="mb-3">
            {/* Question Section */}
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full bg-white shadow-md rounded-lg flex justify-between items-center p-4 text-[#002D62] font-semibold text-lg"
            >
              {faq.question}
              {openIndex === index ? <FaChevronUp /> : <FaChevronDown />}
            </button>

            {/* Answer Section (Expandable) */}
            {openIndex === index && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                className="bg-white shadow-md rounded-lg p-4 mt-1 text-gray-700 text-md"
              >
                {faq.answer}
              </motion.div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQSection;
