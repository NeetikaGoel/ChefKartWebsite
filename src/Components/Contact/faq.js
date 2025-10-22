import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io"; 

const faqs = [
  {
    question: "What does ChefKart do?",
    answer:
      "ChefKart is a platform that seamlessly connects households with the ideal cook based on their specific needs and requirements.",
  },
  {
    question: "What are your services?",
    answer:
      "ChefKart provides three types of cooking services — Monthly Subscription (cook for a month), Chefit (one-time cooking service), and Chef for Party.",
  },
  {
    question: "How are cooks onboarded?",
    answer:
      "Cooks list themselves on the ChefKart Partner App. We register cooks after background verification and criminal record checks. They undergo assessments and training to ensure they meet our quality standards.",
  },
  {
    question: "How to reach ChefKart Support?",
    answer:
      "You can contact Customer Support through the Help & Support section in our App.",
  },
  {
    question: "Do you have an app?",
    answer:
      "Yes! ChefKart is available on both the App Store and Play Store. You can easily download it on any smartphone.",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="text-gray-800 body-font pb-16">
  <div className="container px-5 py-19 mx-auto">
    <h1 className="text-3xl font-semibold text-center mb-12 text-orange-700">
      Frequently Asked Questions
    </h1>
    <div className="max-w-2xl mx-auto divide-y divide-gray-200">
      {faqs.map((faq, index) => (
        <div key={index} className="py-4">
          <button
            onClick={() => toggleFAQ(index)}
            className="w-full flex justify-between items-center text-left focus:outline-none"
          >
            <span className="text-lg font-medium text-gray-900">
              {faq.question}
            </span>
            <IoIosArrowDown
              className={`w-5 h-5 text-gray-500 transform transition-transform duration-300 ${
                openIndex === index ? "rotate-180 text-orange-500" : ""
              }`}
            />
          </button>

          <div
            className={`mt-2 text-gray-600 overflow-hidden transition-all duration-300 ease-in-out ${
              openIndex === index ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
            }`}
          >
            <p className="leading-relaxed">{faq.answer}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>

  );
};

export default FAQ;
