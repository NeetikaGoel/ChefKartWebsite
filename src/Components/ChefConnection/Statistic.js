import { PiChefHatFill } from "react-icons/pi";
import { BiSolidDish } from "react-icons/bi";
import { FaHouseCircleCheck } from "react-icons/fa6";

const Statistic = () => {
  return (
    <div>
      <section className="text-gray-600 body-font">
        <div className="container px-5 mx-auto">
          <div className="flex flex-wrap justify-center -m-3 text-center">
            
            {/* Meals Cooked */}
            <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
              <div className="px-4 py-6 rounded-lg flex flex-col items-center">
                <BiSolidDish className="text-orange-700 w-12 h-12 mb-3" />
                <h2 className="title-font font-extrabold text-3xl text-gray-900">
                  3M+
                </h2>
                <p className="leading-relaxed font-medium">Meals cooked with love</p>
              </div>
            </div>

            {/* Verified Cooks */}
            <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
              <div className="px-4 py-6 rounded-lg flex flex-col items-center">
                <PiChefHatFill className="text-orange-700 w-12 h-12 mb-3" />
                <h2 className="title-font font-extrabold text-3xl text-gray-900">
                  4500+
                </h2>
                <p className="leading-relaxed font-medium">Verified & Trained Cooks</p>
              </div>
            </div>

            {/* Households Served */}
            <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
              <div className="px-4 py-6 rounded-lg flex flex-col items-center">
                <FaHouseCircleCheck className="text-orange-700 w-12 h-12 mb-3" />
                <h2 className="title-font font-extrabold text-3xl text-gray-900">
                  10K+
                </h2>
                <p className="leading-relaxed font-medium">Households served</p>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default Statistic;
