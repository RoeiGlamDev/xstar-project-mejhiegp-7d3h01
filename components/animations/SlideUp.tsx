'use client'
import React from 'react'
import { motion } from 'framer-motion'
interface SlideUpProps {
  children: React.ReactNode
}

const slideUpVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
}
const SlideUp: React.FC<SlideUpProps> = ({ children }) => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={slideUpVariants}
      transition={{ duration: 0.5 }}
      className="p-6 bg-white rounded-lg shadow-lg transition-transform transform hover:-translate-y-2"
      aria-live="polite"

      {children}
    </motion.div>
  )
}
export default SlideUp
);