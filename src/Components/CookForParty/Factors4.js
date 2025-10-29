const Factors4 = () => {
  const factors = [
    {
      title: 'No. of People',
      img: 'https://thechefkart.com/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fchefkart-strapi-media%2FBatch_Assign_54bbf77213.png&w=1920&q=75',
    },
    {
      title: 'No. of Dishes',
      img: 'https://thechefkart.com/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fchefkart-strapi-media%2FNoodles_77d70fadf1.png&w=1920&q=75',
    },
    {
      title: 'Cuisine Preference',
      img: 'https://thechefkart.com/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fchefkart-strapi-media%2FVegan_Food_b23033b652.png&w=1920&q=75',
    },
    {
      title: 'Location',
      img: 'https://thechefkart.com/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fchefkart-strapi-media%2FPlace_Marker_e599ac1ded.png&w=1920&q=75',
    },
  ]

  return (
    <section className="text-gray-900 body-font py-16">
      <div className="container mx-auto px-5 flex justify-between flex-wrap lg:flex-nowrap gap-14">
        {/* Left Text Section */}
        <div className="lg:w-1/2 text-left flex flex-col justify-center">
          <h1 className="text-3xl lg:text-4xl font-bold mb-4">
            Our Affordable Prices are based on{' '}
            <span className="text-orange-600">4 Factors</span>
          </h1>
          <p className="text-2xl font-medium text-gray-700">
            Minimum Prices Guaranteed*
          </p>
        </div>

        {/* Right Icons in One Row */}
        <div className="flex items-center justify-center gap-14 lg:w-1/2 text-center">
          {factors.map((item, index) => (
            <div key={index} className="flex flex-col items-center space-y-3">
              <img src={item.img} alt={item.title} className="w-12 h-12" />
              <p className="text-black text-sm font-semibold">{item.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Factors4
