import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const SlidingCard = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
  };

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="w-full max-w-5xl px-4"> {/* centers and limits width */}
          <h1 className="text-4xl md:text-4xl font-bold text-red-950 text-center mb-10">
            एक प्रमुख पहल
          </h1>
        <Slider {...settings}>
          {/* Slide 1 */}
          <section className="text-gray-600 body-font bg-gray-200 rounded-2xl shadow-lg mx-auto my-10 p-8">
            <div className=" bg-gray-200 flex flex-col md:flex-row items-center justify-center text-center md:text-left">
              <div className="md:w-1/2 md:pr-8 mb-6 md:mb-0">
                <h1 className="title-font text-2xl md:text-2xl font-medium text-gray-900">
                  THSC राष्ट्रीय व्यावसायिक मानक-आधारित ट्रेनिंग देने में गुणवत्ता को बनाए रखने के लिए समर्पित है। ChefKart से जुड़े कुक्स अपने कौशल को बढ़ाने में इसका लाभ उठा सकते हैं।
                </h1>
              </div>
              <div className="md:w-1/2 flex justify-center">
                <img
                  className="object-cover object-center rounded-lg border-2 border-orange-700 shadow-lg w-40 md:w-56"
                  alt="hero"
                  width="100px" height="100px"
                  src="https://thechefkart.com/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fchefkart-strapi-media%2FScreenshot_2023_07_10_at_4_52_1_658c10251b.png&w=384&q=75"
                />
              </div>
            </div>
          </section>

          {/* Slide 2 */}
          <section className="text-gray-600 body-font bg-gray-200 rounded-2xl shadow-lg mx-auto my-10 p-8">
            <div className="bg-gray-200 flex flex-col md:flex-row items-center justify-center text-center md:text-left">
              <div className="md:w-1/2 md:pr-8 mb-6 md:mb-0">
                <h1 className="title-font text-2xl md:text-2xl font-medium text-gray-900">
                  NCVET व्यावसायिक ट्रेनिंग में लगी संस्थाओं के कामकाज को छोटे और लम्बे समय के लिए नियंत्रित करती है और ऐसी संस्थाओं के कामकाज के लिए न्यूनतम मानक स्थापित करती है।
                </h1>
              </div>
              <div className="md:w-1/2 flex justify-center">
                <img
                  className="object-cover object-center rounded-lg border-2 border-orange-700 shadow-lg w-40 md:w-56"
                  alt="hero"
                  src="https://thechefkart.com/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fchefkart-strapi-media%2FNCVET_01_2_97436de85c.png&w=384&q=75"
                />
              </div>
            </div>
          </section>

          {/* Slide 3 */}
          <section className="text-gray-600 body-font bg-gray-200 rounded-2xl shadow-lg mx-auto my-10 p-8">
            <div className="bg-gray-200 flex flex-col md:flex-row items-center justify-center text-center md:text-left">
              <div className="md:w-1/2 md:pr-8 mb-6 md:mb-0">
                <h1 className="title-font text-2xl md:text-2xl font-medium text-gray-900">
                  ChefKart स्किल इंडिया के साथ जुड़कर अपने कुक्स को ट्रेनिंग दिलवाती है जिसके पूरे होते ही कुक्स को सर्टिफिकेट दिया जाता है।
                </h1>
              </div>
              <div className="md:w-1/2 flex justify-center">
                <img
                  className="object-cover object-center rounded-lg border-2 border-orange-700 shadow-lg w-40 md:w-56"
                  alt="hero"
                  src="https://thechefkart.com/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fchefkart-strapi-media%2FSkill_India_Preview_removebg_preview_1_03db4e9828.png&w=384&q=75"
                />
              </div>
            </div>
          </section>
        </Slider>
      </div>
    </div>
  );
};

export default SlidingCard;
