'use client'
import React from 'react'
import { motion } from 'framer-motion'
interface CardProps {
  title: string
  description: string
  imageUrl: string
}

const Card: React.FC<CardProps> = ({ title, description, imageUrl }) => {
  return (<>
<motion.div
      className="bg-white bg-opacity-10 backdrop-blur-md border border-red-500 rounded-lg shadow-lg p-6 transform transition-transform duration-300 hover:scale-105"
      whileHover={{ scale: 1.05 }}
      aria-label={Card for ${title}}

      <img src={imageUrl} alt={title} className="w-full h-48 rounded-t-lg object-cover" />
      <h3 className="text-red-600 text-xl font-bold mt-4">{title}</h3>
      <p className="text-orange-400 text-base mt-2">{description}</p>
      <button className="mt-4 px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition-colors duration-200">
        Learn More
      </button>
    </motion.div>
</>)
}
export default Card
);