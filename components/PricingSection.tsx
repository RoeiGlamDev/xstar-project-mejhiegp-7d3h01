'use client'
import React from 'react'
import { motion } from 'framer-motion'
interface PricingTier {
  title: string
  price: string
  features: string[]
}

const pricingTiers: PricingTier[] = [
  {
    title: 'Basic AI Video Creation',
    price: '$29/mo',
    features: [
      'Access to basic video templates',
      'AI-driven video generation',
      'Resolution up to 720p',
      'Standard support',
    ],
  },
  {
    title: 'Pro AI Video Creator',
    price: '$59/mo',
    features: [
      'All Basic features',
      'Advanced video editing tools',
      'Resolution up to 1080p',
      'Priority support',
      'Access to premium templates',
    ],
  },
  {
    title: 'Enterprise AI Video Solutions',
    price: 'Contact Us',
    features: [
      'All Pro features',
      'Custom video solutions',
      'Resolution up to 4K',
      'Dedicated account manager',
      '24/7 support',
    ],
  },
]
const PricingSection: React.FC = () => {
  return (
    <section className="bg-white py-12">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-semibold text-red-500 mb-8">VidNexus Pricing</h2>
        <p className="text-lg text-gray-700 mb-12">
          Choose the perfect plan for your AI video creation needs.
        </p>
        <div className="flex justify-center space-x-8">
          {pricingTiers.map((tier, index) => (
            <motion.div
              key={index}
              className="bg-orange-500 text-white rounded-lg shadow-lg p-6 transition-transform transform hover:scale-105"
              whileHover={{ scale: 1.05 }}

              <h3 className="text-xl font-bold mb-4">{tier.title}</h3>
              <p className="text-2xl mb-4">{tier.price}</p>
              <ul className="list-disc list-inside mb-6">
                {tier.features.map((feature, fIndex) => (
                  <li key={fIndex} className="mb-2">{feature}</li>
                ))}
              </ul>
              <button className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded transition duration-200 focus:outline-none focus:ring-2 focus:ring-red-300">
                Get Started
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
export default PricingSection
);