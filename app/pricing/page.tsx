'use client'
import React from 'react'
import { motion } from 'framer-motion'
const pricingData = [
  {
    plan: 'Basic',
    price: '$19/mo',
    features: [
      'AI Video Creation',
      'Basic Templates',
      'Standard Support',
    ],
  },
  {
    plan: 'Pro',
    price: '$49/mo',
    features: [
      'AI Video Creation',
      'Advanced Templates',
      'Priority Support',
      'Collaboration Tools',
    ],
  },
  {
    plan: 'Enterprise',
    price: 'Contact Us',
    features: [
      'Custom AI Solutions',
      'Dedicated Manager',
      'All Features Included',
    ],
  },
]
const FAQData = [
  {
    question: 'What is VidNexus?',
    answer: 'VidNexus is your go-to platform for creating high-quality AI-generated videos with ease.'
  },
  {
    question: 'How does the billing work?',
    answer: 'All plans are billed monthly, with the option to opt for annual subscriptions at a discount.'
  },
  {
    question: 'Can I switch plans?',
    answer: 'Yes, you can upgrade or downgrade your plans at any time.'
  },
]
const PricingPage: React.FC = () => {
  return (
    <div className="bg-white text-gray-800 p-8">
      <motion.h1 
        className="text-4xl font-bold text-center text-red-600"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}>
        Pricing Plans for VidNexus
      </motion.div>
      <motion.div 
        className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}>
        {pricingData.map((plan) => (
          <div 
            key={plan.plan} 
            className="border rounded-lg p-5 shadow-md hover:shadow-lg transition-shadow duration-300">
            <h2 className="text-2xl font-semibold text-orange-600">{plan.plan}</h2>
            <p className="text-xl font-bold text-red-600">{plan.price}</p>
            <ul className="mt-4">
              {plan.features.map((feature, index) => (
                <li key={index} className="text-gray-600">{feature}</li>
              ))}
            </ul>
            <button 
              className="mt-6 bg-red-600 text-white py-2 px-4 rounded hover:bg-red-700 transition-colors duration-300">
              Choose Plan
            </button>
          </div>
        ))}
      </motion.div>

      <section className="mt-12">
        <h2 className="text-3xl font-bold text-center text-red-600">Frequently Asked Questions</h2>
        <div className="mt-6 space-y-3">
          {FAQData.map((faq, index) => (
            <div 
              key={index} 
              className="border-b py-3">
              <h3 className="font-semibold text-orange-600">{faq.question}</h3>
              <p className="text-gray-600">{faq.answer}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
export default PricingPage
);