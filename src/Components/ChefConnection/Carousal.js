import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const slides = [
  {
    id: 1,
    imageDesktop:
      'https://thechefkart.com/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fchefkart-strapi-media%2FJoin_as_chef_hero_banner_03_e679e84c56.webp&w=1080&q=75',
    imageMobile:
      'https://thechefkart.com/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fchefkart-strapi-media%2FChef_for_party_banner_03_mob_17c05b36ab.webp&w=750&q=75',
    title: 'ChefKart का हिस्सा बनें',
    subtitle:
      'हमसे जुड़े 4500 से भी ज़्यादा कुक्स का हिस्सा बनें और अपने कौशल को आगे बढ़ाएँ।',
    button: 'ChefKart से जुड़ें',
  },
  {
    id: 2,
    imageDesktop:
      'https://thechefkart.com/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fchefkart-strapi-media%2FJoin_as_chef_hero_banner_01_f31e87e92e.webp&w=2048&q=75',
    imageMobile:
      'https://thechefkart.com/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fchefkart-strapi-media%2FChef_for_party_banner_01_mob_694649d684.webp&w=750&q=75',
    title: 'समाज का नज़रिया बदलें',
    subtitle:
      'देश में कुक की परिभाषा और उनके लिए दृष्टिकोण बदलने में हमारी मदद करें।',
    button: 'ChefKart से जुड़ें',
  },
  {
    id: 3,
    imageDesktop:
      'https://thechefkart.com/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fchefkart-strapi-media%2FJoin_as_chef_hero_banner_02_6c8df4e377.webp&w=3840&q=75',
    imageMobile:
      'https://thechefkart.com/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fchefkart-strapi-media%2FChef_for_party_banner_02_mob_952a5fef33.webp&w=2048&q=75',
    title: 'हुनर से पैसे कमाएँ',
    subtitle:
      'अपने खाना बनाने की प्रतिभा को एक नई शुरुआत दें और इसके माध्यम से पैसे कमाएँ।',
    button: 'ChefKart से जुड़ें',
  },
]

const Carousel = () => {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const timer = setInterval(
      () => setCurrent((prev) => (prev + 1) % slides.length),
      6000
    )
    return () => clearInterval(timer)
  }, [])

  return (
    <div className="relative w-full h-[90vh] sm:h-screen overflow-hidden">
      <AnimatePresence>
        <motion.div
          key={slides[current].id}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${
              window.innerWidth < 768
                ? slides[current].imageMobile
                : slides[current].imageDesktop
            })`,
          }}
        >
          <div className="absolute inset-0 bg-black/40"></div>

          <div className="relative z-10 flex items-center h-full">
            <div className="px-4 sm:px-8 md:px-12 lg:px-24 max-w-md sm:max-w-lg md:max-w-2xl">
              <h1 className="text-white text-2xl sm:text-3xl md:text-3xl font-semibold mb-3 leading-tight whitespace-nowrap overflow-hidden text-ellipsis">
                {slides[current].title}
              </h1>
              <p className="text-white text-sm sm:text-base md:text-lg mb-5 text-ellipsis">
                {slides[current].subtitle}
              </p>
              <button className="bg-orange-500 hover:bg-orange-600 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-md font-semibold shadow-md text-sm sm:text-base">
                {slides[current].button}
              </button>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex space-x-3 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              current === index ? 'bg-orange-500 scale-110' : 'bg-gray-300'
            }`}
          ></button>
        ))}
      </div>
    </div>
  )
}

export default Carousel
