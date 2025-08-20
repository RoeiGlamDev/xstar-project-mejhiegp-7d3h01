'use client'
import React from 'react'
import { motion } from 'framer-motion'
interface ContactFormData {
  name: string
  email: string
  message: string
}

const ContactPage: React.FC = () => {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    // Handle form submission logic here
  }
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white">
      <motion.h1 
        className="text-4xl font-bold text-red-600 mt-12"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}

        Contact VidNexus
      </motion.div>
      <motion.p 
        className="text-lg text-gray-700 mt-4"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}

        Have questions or want to learn more about our AI-powered video solutions? Reach out to us!
      </motion.div>

      <form onSubmit={handleSubmit} className="w-full max-w-lg mt-8 bg-gray-100 p-6 rounded-lg shadow-lg">
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Name</label>
          <input 
            type="text"
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Email</label>
          <input 
            type="email"
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Message</label>
          <textarea 
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
            rows={4}
            required
          />
        </div>
        <button 
          type="submit" 
          className="w-full bg-red-600 text-white font-bold py-2 px-4 rounded-md hover:bg-red-500 transition duration-300"

          Send Message
        </button>
      </form>

      <div className="mt-12">
        <motion.h2 
          className="text-2xl font-semibold text-red-600"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}

          Our Location
        </motion.div>
        <p className="text-lg text-gray-700 mt-2">1234 AI Avenue, Tech City, ST 56789</p>
        <motion.h3 
          className="text-lg font-medium text-orange-600 mt-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}

          Business Hours
        </motion.div>
        <p className="text-md text-gray-500">Monday - Friday: 9 AM - 6 PM</p>
        <p className="text-md text-gray-500">Saturday - Sunday: Closed</p>
      </div>
    </div>
  )
}
export default ContactPage
);