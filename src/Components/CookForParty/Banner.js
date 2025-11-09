const slides = [
  {
    id: 1,
    imageDesktop:
      'https://thechefkart.com/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fchefkart-strapi-media%2FWebsite_banner_01_web_1_40ea9de1d0.webp&w=750&q=75',
    imageMobile:
      'https://thechefkart.com/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fchefkart-strapi-media%2FChef_for_party_hero_banner_01_mob_90fa69d19a.webp&w=3840&q=75',
    // title: '',
    subtitle: 'Experience the Taste from Around the World without leaving the Coziness of Home.',
    button: 'Get Started',
  },
]

const Banner = () => {
  const slide = slides[0]

  return (
    <div
      className="relative w-full h-[90vh] sm:h-screen bg-cover bg-center flex items-center"
      style={{
        backgroundImage: `url(${
          window.innerWidth < 768 ? slide.imageMobile : slide.imageDesktop
        })`,
      }}
    >
      <div className="absolute inset-0 bg-black/45"></div>

      <div className="relative z-10 flex items-center h-full">
        <div className="px-4 sm:px-8 md:px-12 lg:px-24 max-w-md sm:max-w-lg md:max-w-2xl">
          <h1 className="text-white text-2xl sm:text-3xl md:text-4xl font-bold mb-3 leading-snug">
            Hire the Best Chef for Party <span className="text-orange-400">In Delhi-NCR, Bangalore & Mumbai </span>
          </h1>
          <p className="text-white text-sm sm:text-base md:text-lg mb-6">
            {slide.subtitle}
          </p>
          <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg font-semibold shadow-lg">
            {slide.button}
          </button>
        </div>
      </div>
    </div>
  )
}

export default Banner
