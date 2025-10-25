import { Link } from 'react-router-dom'

const AboveAboveFAQ3 = () => {
  return (
    <div>
      <section className="text-gray-600 body-font bg-orange-200">
        <div className="flex md:flex-row flex-col items-center">
          {/* Left Image */}
          <div className="w-full md:w-1/2 h-full">
            <img
              className="object-cover w-full max-h-98 rounded-l"
              alt="hero"
              src="https://thechefkart.com/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fchefkart-strapi-media%2FKoustov1_d393227e33.png&w=1920&q=75"
            />
          </div>

          {/* Right Text */}
          <div className="w-full md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center px-6 md:px-0">
            <h2 className="text-orange-700 text-lg mb-1 font-bold">
              Running on a tight schedule
            </h2>
            <h1 className="title-font sm:text-4xl text-2xl mb-4 text-gray-900 font-bold leading-tight">
              No time to cook? <br />
              <span>ChefKart Got You Covered!!</span>
            </h1>

            <p className="mb-8 leading-relaxed font-bold">
              Get a professional cook within 60 minutes
            </p>
            <div className="flex justify-center md:justify-start">
              <Link to="join-with-chef">
                <button className="inline-flex text-white bg-orange-700 border-0 py-2 px-6 focus:outline-none hover:bg-red-950 rounded text-lg">
                  Book Now
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default AboveAboveFAQ3
