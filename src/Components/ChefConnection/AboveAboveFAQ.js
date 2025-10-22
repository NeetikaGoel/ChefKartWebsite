import { Link } from "react-router-dom";

const AboveAboveFAQ = () => {
  return (
    <div>
      <section className="text-gray-600 body-font bg-orange-200">
        <div className="flex md:flex-row flex-col items-center">
          {/* Left Image */}
          <div className="w-full md:w-1/2 h-full">
            <img
              className="object-cover w-full max-h-98 rounded-l"
              alt="hero"
              src="https://thechefkart.com/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fchefkart-strapi-media%2FMale_female_Cooks_ceb391c475.webp&w=1920&q=75"
            />
          </div>

          {/* Right Text */}
          <div className="w-full md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center px-6 md:px-0">
            <h2 className="text-orange-700 text-lg mb-1 font-bold">हमें है विश्वास</h2>
            <h1 className="title-font sm:text-4xl text-2xl mb-4 text-gray-900 font-bold">
              आपका बनाया खाना, खाएगा ज़माना!
            </h1>
            <p className="mb-8 leading-relaxed font-bold">ऊपर जाएँ</p>
            <div className="flex justify-center md:justify-start">
              <Link to="join-with-chef">
                <button className="inline-flex text-white bg-orange-700 border-0 py-2 px-6 focus:outline-none hover:bg-red-950 rounded text-lg">
                  ChefKart से जुड़ें
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboveAboveFAQ;
