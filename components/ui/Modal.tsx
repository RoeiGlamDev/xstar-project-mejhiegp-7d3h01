'use client'
import React from 'react'
import { motion } from 'framer-motion'
interface ModalProps {
  isOpen: boolean
  onClose: () => void
  title: string
  children: React.ReactNode
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, title, children }) => {
  if (!isOpen) return null
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 backdrop-blur-md">
      <motion.div
        className="bg-white rounded-lg shadow-lg p-6 relative w-full max-w-md"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        exit={{ scale: 0 }}
        transition={{ type: 'spring', stiffness: 300, damping: 30 }}

        <h2 className="text-2xl font-bold text-red-600 mb-4">{title}</h2>
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-red-600 hover:text-red-800 focus:outline-none"
          aria-label="Close Modal"

          &times
        </button>
        <div className="text-gray-700 mb-4">
          <p>
            Welcome to VidNexus — your hub for creating cutting-edge AI-powered videos that resonate with your audience. 
            Utilize our robust technology to generate dynamic content that leverages the latest in AI advancements.
          </p>
          {children}
        </div>
        <div className="flex justify-end">
          <motion.button
            className="bg-orange-500 text-white py-2 px-4 rounded-lg hover:bg-orange-600 focus:outline-none transition duration-200"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={onClose}

            Close
          </motion.div>
        </div>
      </motion.div>
    </div>
  )
}
export default Modal
);