'use client'
import React, { useEffect, useRef } from 'react'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
interface FadeInProps {
  children: React.ReactNode
}

const FadeIn: React.FC<FadeInProps> = ({ children }) => {
  const controls = useAnimation()
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })
  useEffect(() => {
    if (inView) {
      controls.start({ opacity: 1, y: 0 })
    } else {
      controls.start({ opacity: 0, y: 20 })
    }
  }, [controls, inView])
  return (
    <motion.div
      ref={ref}
      animate={controls}
      initial={{ opacity: 0, y: 20 }}
      className="transition-opacity duration-500 ease-in-out"

      {children}
    </motion.div>
  )
}
const VidNexusSection: React.FC = () => {
  return (
    <section className="bg-white text-gray-900 p-6 rounded-lg shadow-lg">
      <FadeIn>
        <h2 className="text-3xl font-bold text-center mb-4">
          Welcome to VidNexus
        </h2>
        <p className="text-lg text-center mb-6">
          Transforming your creative visions into reality with AI-generated videos.
        </p>
        <p className="mb-6">
          At VidNexus, we harness cutting-edge technology to empower creators. Our AI algorithms analyze and curate the best visuals and audio to bring your ideas to life. Whether it's for marketing, storytelling, or personal projects, our platform makes video production accessible and efficient.
        </p>
        <button className="bg-red-600 text-white px-4 py-2 rounded hover:bg-orange-500 transition-colors duration-300">
          Get Started
        </button>
      </FadeIn>
    </section>
  )
}
export default VidNexusSection
);