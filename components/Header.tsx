'use client'
import React from 'react'
import { motion } from 'framer-motion'
interface HeaderProps {
  logo: string
}

const Header: React.FC<HeaderProps> = ({ logo }) => {
  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto flex justify-between items-center p-4">
        <motion.div
          className="text-red-600 text-2xl font-bold flex items-center"
          whileHover={{ scale: 1.05 }}

          <img src={logo} alt="VidNexus Logo" className="mr-2 h-10" />
          VidNexus
        </motion.div>
        <nav className="hidden md:flex space-x-6">
          <motion.a
            className="text-red-500 hover:text-orange-500 transition-colors duration-300"
            href="#features"
            whileHover={{ scale: 1.1 }}

            Features
          </motion.div>
          <motion.a
            className="text-red-500 hover:text-orange-500 transition-colors duration-300"
            href="#about"
            whileHover={{ scale: 1.1 }}

            About Us
          </motion.div>
          <motion.a
            className="text-red-500 hover:text-orange-500 transition-colors duration-300"
            href="#contact"
            whileHover={{ scale: 1.1 }}

            Contact
          </motion.div>
        </nav>
        <div className="md:hidden">
          <button className="text-red-600 focus:outline-none focus:ring-2 focus:ring-red-400 p-2 rounded">
            Menu
          </button>
        </div>
      </div>
    </header>
  )
}
export default Header
);