'use client'
import React from 'react'
import { Canvas } from '@react-three/fiber'
import { useFrame } from '@react-three/fiber'
import { Html } from '@react-three/drei'
import { motion } from 'framer-motion'
interface FloatingElementProps {
  position: [number, number, number]
}

const FloatingElement: React.FC<FloatingElementProps> = ({ position }) => {
  const ref = React.useRef<THREE.Mesh>(null)
  useFrame(() => {
    if (ref.current) {
      ref.current.position.y += Math.sin(Date.now()  0.001)  0.01
    }
  })
  return (
    <mesh ref={ref} position={position} scale={1}>
      <boxBufferGeometry />
      <meshStandardMaterial color="orange" />
      <Html>
        <div className="w-24 h-24 flex items-center justify-center bg-white rounded-full shadow-lg">
          <h2 className="text-red-600 text-lg font-bold">VidNexus</h2>
        </div>
      </Html>
    </mesh>
  )
}
const FloatingElements: React.FC = () => {
  return (
    <Canvas className="w-full h-full">
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      <FloatingElement position={[-2, 0, 0]} />
      <FloatingElement position={[2, 0, 0]} />
      <FloatingElement position={[0, 2, 0]} />
    </Canvas>
  )
}
const FloatingElementsContainer: React.FC = () => {
  return (<>
<motion.div
      className="flex flex-col items-center justify-center h-screen bg-red-500"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}

      <h1 className="text-4xl text-white font-bold mb-4">Welcome to VidNexus!</h1>
      <p className="text-white mx-4 text-center text-lg">
        Leverage the power of artificial intelligence to create stunning videos effortlessly. At VidNexus, our technology revolutionizes video production through innovative AI solutions.
      </p>
      <div className="mt-4">
        <FloatingElements />
      </div>
    </motion.div>
</>)
}
export default FloatingElementsContainer
);