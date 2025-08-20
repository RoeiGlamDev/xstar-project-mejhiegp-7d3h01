'use client'
import React from 'react'
import { motion } from 'framer-motion'
interface FooterProps {}

const Footer: React.FC<FooterProps> = () => {
  return (<>
<footer className="bg-red-600 text-white py-8">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-4 md:mb-0"

          <h2 className="text-2xl font-bold">VidNexus</h2>
          <p className="mt-2 text-gray-200">
            Unleashing the power of AI-driven technology to create stunning videos effortlessly.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-col md:flex-row"

          <a href="/about" className="hover:text-orange-400 transition duration-300 mx-2">About Us</a>
          <a href="/services" className="hover:text-orange-400 transition duration-300 mx-2">Services</a>
          <a href="/contact" className="hover:text-orange-400 transition duration-300 mx-2">Contact</a>
          <a href="/privacy" className="hover:text-orange-400 transition duration-300 mx-2">Privacy Policy</a>
        </motion.div>
      </div>
      <div className="mt-6 border-t border-white pt-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex justify-center"

          <a href="https://twitter.com/VidNexus" className="mx-2 hover:text-orange-400 transition duration-300">
            Twitter
          </a>
          <a href="https://facebook.com/VidNexus" className="mx-2 hover:text-orange-400 transition duration-300">
            Facebook
          </a>
          <a href="https://linkedin.com/company/VidNexus" className="mx-2 hover:text-orange-400 transition duration-300">
            LinkedIn
          </a>
        </motion.div>
        <p className="text-center text-gray-400 mt-4">
          &copy; {new Date().getFullYear()} VidNexus. All Rights Reserved.
        </p>
      </div>
    </footer>
</>)
}
export default Footer
);