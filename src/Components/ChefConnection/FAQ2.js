import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io"; 

const faqs = [
  {
    question: "ChefKart से कैसे जुड़ें?",
    answer:
      "ChefKart से जुड़ने के लिए ऊपर दिए गए ‘ChefKart से जुड़ें’ का बटन दबा कर फॉर्म भरें या हमें 9871231115 पर कॉल करें।",
  },
  {
    question: "ChefKart से कौन जुड़ सकते हैं?",
    answer:
      "ChefKart से हर वह कुक जुड़ सकते हैं जो खाना पकाने की प्रतिभा रखते हैं और 18 साल से ज़्यादा उम्र के हैं।",
  },
  {
    question: "ChefKart से जुड़ने के लिए किन चीजों की आवश्यकता है?",
    answer:
      "ChefKart से जुड़ने के लिए आपके पास आधार कार्ड, स्मार्ट फ़ोन, बैंक अकाउंट और पासपोर्ट फ़ोटो होना ज़रूरी है।",
  },
];

const FAQ2 = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="text-gray-800 body-font pb-16">
      <div className="container px-5 py-19 mx-auto">
        <h1 className="text-3xl font-semibold text-center mb-12 text-orange-700">
          आपके प्रश्न
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

export default FAQ2;
