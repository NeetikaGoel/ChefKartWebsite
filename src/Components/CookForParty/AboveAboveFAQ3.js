import { Link } from 'react-router-dom'

const AboveAboveFAQ3 = () => {
  return (
    <div>
      <section className="text-gray-600 body-font bg-green-900">
        <div className="flex md:flex-row flex-col items-center">
          {/* Right Text */}
          <div className="w-full md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center px-6 md:px-0">
            <h2 className="text-orange-700 text-lg mb-1 font-bold">
              Let Food Do The Talking
            </h2>
            
          </div>
          {/* Left Image */}
          <div className="w-full md:w-1/2 h-full">
            <img
              className="object-cover w-full max-h-98 rounded-l"
              alt="hero"
              src="https://thechefkart.com/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fchefkart-strapi-media%2Fcook_1_3efd7cf8b6_71550458c9.webp&w=1920&q=75"
            />
          </div>

          
        </div>
      </section>
      <section className="text-gray-600 body-font bg-green-950">
        <div className="flex md:flex-row flex-col items-center">
          {/* Left Image */}
          <div className="w-full md:w-1/2 h-full">
            <img
              className="object-cover w-full max-h-98 rounded-l"
              alt="hero"
              src="https://thechefkart.com/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fchefkart-strapi-media%2FSign_up_d1762e3ca9.webp&w=1920&q=75"
            />
          </div>

          {/* Right Text */}
          <div className="w-full md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center px-6 md:px-0">
            <h1 className="text-orange-400 text-3xl mb-1 font-bold">
              The Taste of Luxury <span className="text-white">Experience elevated culinary perfection, as our</span> highly skilled chefs <span className="text-white">take your party to new heights.</span> 
            </h1>
            
          </div>
        </div>
      </section>
    </div>
  )
}

export default AboveAboveFAQ3
