'use client'
import React from 'react'
import { motion } from 'framer-motion'
interface TeamMember {
  name: string
  role: string
  expertise: string
}

const teamMembers: TeamMember[] = [
  { name: 'Alice Johnson', role: 'AI Engineer', expertise: 'Machine Learning' },
  { name: 'Mark Thompson', role: 'Video Production Lead', expertise: 'Multimedia Technology' },
  { name: 'Sarah Lee', role: 'Product Manager', expertise: 'Tech Strategy' },
]
const AboutSection: React.FC = () => {
  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-4xl font-bold text-center text-red-600 mb-8"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}

          About VidNexus
        </motion.div>
        
        <motion.p
          className="text-lg text-center text-gray-700 mb-8"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}

          At VidNexus, we believe in revolutionizing the way video content is created and consumed. As a pioneering tech company,
          we leverage cutting-edge artificial intelligence to produce high-quality video content efficiently and effectively.
          Our commitment to innovation and excellence has positioned us as leaders in the AI video production industry.
        </motion.div>
        
        <motion.h3
          className="text-2xl font-semibold text-red-600 mb-4 text-center"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}

          Our Mission
        </motion.div>
        
        <motion.p
          className="text-lg text-center text-gray-700 mb-8"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1 }}

          Our mission at VidNexus is to empower creators and businesses by providing innovative AI tools that simplify video creation,
          enhance productivity, and unlock creativity. We are dedicated to fostering an environment of collaboration and 
          continuous improvement, ensuring our technology evolves alongside our users' needs.'
        </motion.div>

        <motion.h3
          className="text-2xl font-semibold text-red-600 mb-4 text-center"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.3 }}

          Meet Our Team
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              className="bg-orange-300 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.3 }}

              <h4 className="text-xl font-bold text-red-600">{member.name}</h4>
              <p className="text-lg text-gray-800">{member.role}</p>
              <p className="text-sm text-gray-600">{member.expertise}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="text-center mt-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5 }}

          <p className="text-lg text-gray-700">
            At VidNexus, we are fueled by passion and innovation, driving the future of video with AI at our core.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
export default AboutSection
);