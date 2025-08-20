'use client'
import React from 'react'
import { motion } from 'framer-motion'
interface Feature {
  id: number
  title: string
  description: string
  icon: JSX.Element
}

const features: Feature[] = [
  {
    id: 1,
    title: 'AI-Powered Video Creation',
    description: 'Utilize cutting-edge AI technology to generate stunning videos effortlessly.',
    icon: <i className="fas fa-video"></i>,
  },
  {
    id: 2,
    title: 'Real-Time Editing',
    description: 'Edit videos on-the-fly with our intuitive interface for a seamless experience.',
    icon: <i className="fas fa-pencil-alt"></i>,
  },
  {
    id: 3,
    title: 'Automated Subtitles',
    description: 'Automatically generate accurate subtitles for your videos in multiple languages.',
    icon: <i className="fas fa-comment-dots"></i>,
  },
  {
    id: 4,
    title: 'Social Media Integration',
    description: 'Easily share your creations across all major social media platforms with one click.',
    icon: <i className="fas fa-share-alt"></i>,
  },
]
const FeaturesSection: React.FC = () => {
  return (
    <section className="bg-white py-12">
      <div className="container mx-auto text-center">
        <motion.h2
          className="text-4xl font-bold text-red-600 mb-6"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}

          Discover the Power of VidNexus
        </motion.div>
        <motion.p
          className="text-lg text-gray-700 mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}

          Explore our innovative technology services designed to elevate your video production experience.
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature) => (
            <motion.div
              key={feature.id}
              className="bg-orange-400 rounded-lg shadow-lg p-6 transform hover:scale-105 transition duration-300"
              initial={{ scale: 0.9 }}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}

              <div className="text-red-600 mb-4 text-3xl">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-red-800 mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
export default FeaturesSection
);