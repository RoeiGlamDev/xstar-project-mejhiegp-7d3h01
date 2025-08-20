'use client'
import React from 'react'
import { motion } from 'framer-motion'
interface Testimonial {
  name: string
  photo: string
  review: string
  rating: number
}

const testimonials: Testimonial[] = [
  {
    name: 'Jane Doe',
    photo: 'https://via.placeholder.com/100',
    review: 'VidNexus transformed our marketing strategy with AI-generated video content, greatly enhancing our engagement!',
    rating: 5,
  },
  {
    name: 'John Smith',
    photo: 'https://via.placeholder.com/100',
    review: 'The AI video creation tools at VidNexus are revolutionary. We can produce high-quality videos in no time!',
    rating: 4,
  },
  {
    name: 'Alice Johnson',
    photo: 'https://via.placeholder.com/100',
    review: 'Working with VidNexus has streamlined our workflow. Their innovative technology is a game changer!',
    rating: 5,
  },
]
const TestimonialsSection: React.FC = () => {
  return (
    <section className="bg-white py-10">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-semibold text-red-600 mb-5">What Our Clients Say About VidNexus</h2>
        <div className="flex flex-wrap justify-center gap-6">
          {testimonials.map(({ name, photo, review, rating }) => (
            <motion.div
              key={name}
              className="bg-orange-200 border border-red-500 rounded-lg p-6 w-full max-w-xs shadow-lg transition-transform transform hover:scale-105"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}

              <img src={photo} alt={name} className="rounded-full w-20 h-20 mx-auto mb-4" />
              <div className="flex justify-center mb-2">
                {Array.from({ length: rating }, (_, i) => (
                  <span key={i} className="text-yellow-500 text-lg">★</span>
                ))}
                {Array.from({ length: 5 - rating }, (_, i) => (
                  <span key={i} className="text-gray-300 text-lg">★</span>
                ))}
              </div>
              <p className="text-gray-700 italic">"{review}"</p>
              <h3 className="font-bold mt-4 text-red-600">{name}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
export default TestimonialsSection
);