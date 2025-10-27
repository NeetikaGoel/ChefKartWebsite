const BelowBanner = () => {
  return (
    <div>
      <section className="text-gray-600 bg-gray-200 body-font">
        <div className="container px-5 py-8 mx-auto flex flex-col md:flex-row items-center">

          {/* Left Section */}
          <div className="md:w-2/5 flex flex-col items-start md:items-center text-left md:text-center">
            <h2 className="text-2xl sm:text-3xl text-gray-900 font-extrabold leading-tight">
              <span className="text-orange-700 text-lg font-semibold block mb-1">
                Why Choose
              </span>
              Chefit: One-Time Cook
            </h2>
          </div>

          {/* Orange Divider */}
          <div className="hidden md:block w-1 bg-orange-500 mx-8 h-24"></div>

          {/* Right Section */}
          <div className="md:w-3/5 md:pl-6 text-left md:text-left mt-6 md:mt-0">
            <p className="leading-relaxed text-lg font-semibold text-gray-800">
              Get a certified cook for one-time to prepare delicious food in your kitchen.
            </p>
          </div>

        </div>
      </section>
    </div>
  );
};

export default BelowBanner;
