'use client'
import React, { useEffect } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import { motion } from 'framer-motion'
interface Props {
  title?: string
}

const Scene: React.FC<Props> = () => {
  useEffect(() => {
    // Logic for 3D animations and interactions can be added here
  }, [])
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white text-red-600">
      <motion.h1
        className="text-6xl font-bold mb-4 text-center"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}

        Welcome to VidNexus
      </motion.div>
      <motion.p
        className="text-xl mb-10 text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}

        Creating the future of AI-driven video solutions.
      </motion.div>
      <div className="w-full h-96 bg-red-200 rounded-lg shadow-lg">
        <Canvas>
          <ambientLight intensity={0.5} />
          <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
          <OrbitControls />
          {/ Custom 3D objects can be added here /}
        </Canvas>
      </div>
      <motion.button
        className="mt-6 px-6 py-3 text-white bg-orange-500 rounded-lg shadow-lg hover:bg-orange-400 transition-colors"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}

        Explore Our Solutions
      </motion.div>
    </div>
  )
}
export default Scene
);