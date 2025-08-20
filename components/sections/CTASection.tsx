'use client'
import React from 'react'
import { motion } from 'framer-motion'
interface CTASectionProps {
  title?: string
  subtitle?: string
  buttonText?: string
  buttonLink?: string
}

const CTASection: React.FC<CTASectionProps> = ({
  title = "Transform Your Ideas into Reality",
  subtitle = "With VidNexus, harness the power of AI to create stunning videos effortlessly.",
  buttonText = "Get Started",
  buttonLink = "/get-started",
}) => {
  return (
    <section className="flex flex-col items-center justify-center bg-white py-12 px-4">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center"

        <h2 className="text-3xl font-bold text-red-600 mb-4">{title}</h2>
        <p className="text-lg text-gray-700 mb-6">{subtitle}</p>
        <motion.a
          href={buttonLink}
          className="bg-orange-500 text-white font-semibold py-3 px-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:ring-opacity-50"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}

          {buttonText}
        </motion.div>
      </motion.div>
    </section>
  )
}
export default CTASection
);