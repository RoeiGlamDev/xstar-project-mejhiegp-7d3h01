'use client'
import React from 'react'
import { motion } from 'framer-motion'
const AboutPage: React.FC = () => {
  return (<>
<div className="bg-white text-gray-800">
      <header className="bg-gradient-to-r from-red-500 to-orange-400 py-8">
        <h1 className="text-5xl font-bold text-center text-white">About VidNexus</h1>
      </header>

      <section className="max-w-5xl mx-auto px-4 py-16">
        <motion.div 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          transition={{ duration: 0.5 }} 
          className="mb-10"

          <h2 className="text-3xl font-semibold mb-4">Our History</h2>
          <p className="text-lg">
            Founded in 2023, VidNexus emerged from the vision of innovating AI-driven video creation. 
            Our journey began with a simple idea: to empower creators by harnessing the power of advanced 
            technology to streamline video production. With a team of passionate technologists and creatives, 
            we've positioned ourselves as a leader in AI video solutions.'
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          transition={{ duration: 0.6 }} 
          className="mb-10"

          <h2 className="text-3xl font-semibold mb-4">Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex flex-col items-center bg-white border rounded-lg shadow-lg p-6 hover:scale-105 transition-transform">
              <img src="/team-member1.jpg" alt="Team Member" className="rounded-full mb-4 w-24 h-24"/>
              <h3 className="text-xl font-medium">Alice Smith</h3>
              <p className="text-gray-600">AI Engineer</p>
            </div>
            <div className="flex flex-col items-center bg-white border rounded-lg shadow-lg p-6 hover:scale-105 transition-transform">
              <img src="/team-member2.jpg" alt="Team Member" className="rounded-full mb-4 w-24 h-24"/>
              <h3 className="text-xl font-medium">Bob Johnson</h3>
              <p className="text-gray-600">Creative Director</p>
            </div>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          transition={{ duration: 0.7 }} 
          className="mb-10"

          <h2 className="text-3xl font-semibold mb-4">Our Values</h2>
          <p className="text-lg">
            At VidNexus, we believe in:</p>
          <ul className="list-disc list-inside space-y-2 text-lg">
            <li>Innovation: Continuously pushing the boundaries of technology.</li>
            <li>Collaboration: Working together for greater impact.</li>
            <li>Integrity: Upholding the highest standards in our practices.</li>
            <li>Customer Focus: Delivering exceptional value to our users.</li>
          </ul>
        </motion.div>
      </section>
    </div>
</>)
}
export default AboutPage
);