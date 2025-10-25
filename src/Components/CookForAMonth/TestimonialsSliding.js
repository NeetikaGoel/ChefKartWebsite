import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const testimonials = [
  {
    name: 'Rohan Pal',
    src: 'https://thechefkart.com/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fchefkart-strapi-media%2FMale_testimonial_5274df66dc.webp&w=750&q=75',
    review:
      'Each cook that they assigned for my 4 chefit bookings was aware of everything in the kitchen & didn’t require guidance while working. Well-behaved and cooked amazing food!',
  },
  {
    name: 'Pooja Sachdeva',
    src: 'https://thechefkart.com/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fchefkart-strapi-media%2FCustomer_testimonial_04_bc36b188a4.webp&w=828&q=75',
    review:
      "Chefit is great for when I'm short on time but still want a home-cooked meal. It’s an affordable and healthy option!",
  },
  {
    name: 'Akhil Desai',
    src: 'https://thechefkart.com/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fchefkart-strapi-media%2FCustomer_testimonial_01_25aa96ff9c.webp&w=640&q=75',
    review:
      'Pretty impressed by the personalized approach. Will definitely book again!',
  },
  {
    name: 'Diwakar Kumar',
    src: 'https://thechefkart.com/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fchefkart-strapi-media%2Fimage_15_c28030c449.png&w=750&q=75',
    review:
      'When I am occupied with work, I book Chefit. Convenient and more affordable than ordering online.',
  },
]

const TestimonialsSliding = () => {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const slideTimer = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length)
    }, 4000)
    return () => clearInterval(slideTimer)
  }, [])

  const visible = [
    testimonials[index],
    testimonials[(index + 1) % testimonials.length],
    testimonials[(index + 2) % testimonials.length],
  ]

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto relative min-h-[420px]">
        <AnimatePresence initial={false}>
          <motion.div
            key={index}
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '-100%' }}
            transition={{ duration: 0.8 }}
            className="absolute top-0 left-0 w-full flex gap-6 px-4"
          >
            {visible.map((t, i) => (
              <div
                key={i}
                className="flex-1 text-center bg-emerald-950 p-8 rounded-xl shadow-lg"
              >
                <img
                  alt={t.name}
                  className="w-20 h-20 mb-6 object-cover rounded-full border-4 border-orange-700 mx-auto"
                  src={t.src}
                />
                <p className="text-white text-sm leading-relaxed">{t.review}</p>
                <span className="inline-block h-1 w-10 bg-orange-700 mt-6 mb-4"></span>
                <h2 className="text-gray-300 font-bold tracking-wider">
                  {t.name}
                </h2>
                <div className="text-yellow-500 mt-2 text-lg">★ ★ ★ ★ ★</div>
              </div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}

export default TestimonialsSliding
