'use client'
import React, { useEffect, useRef } from "react"
import * as THREE from "three"
import { motion } from "framer-motion"
const ParticleBackground: React.FC = () => {
  const mountRef = useRef<HTMLDivElement | null>(null)
  useEffect(() => {
    if (mountRef.current) {
      const width = mountRef.current.clientWidth
      const height = mountRef.current.clientHeight
      const scene = new THREE.Scene()
      const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000)
      const renderer = new THREE.WebGLRenderer({ alpha: true })
      renderer.setSize(width, height)
      mountRef.current.appendChild(renderer.domElement)
      const particles: THREE.Mesh[] = []
      const particleCount = 1000
      const geometry = new THREE.BufferGeometry()
      const positions = new Float32Array(particleCount * 3)
      for (let i = 0; i < particleCount; i++) {
        const x = (Math.random() - 0.5) * 100
        const y = (Math.random() - 0.5) * 100
        const z = (Math.random() - 0.5) * 100
        positions.set([x, y, z], i * 3)
      }

      geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3))
      const material = new THREE.PointsMaterial({ size: 0.2, vertexColors: true })
      const colors = []
      for (let i = 0; i < particleCount; i++) {
        const color = new THREE.Color(hsl(${Math.random() * 360}, 100%, 50%))
        colors.push(color.r, color.g, color.b)
      }

      geometry.setAttribute("color", new THREE.Float32BufferAttribute(colors, 3))
      const particlesMesh = new THREE.Points(geometry, material)
      scene.add(particlesMesh)
      camera.position.z = 50
      const animate = () => {
        requestAnimationFrame(animate)
        particlesMesh.rotation.x += 0.001
        particlesMesh.rotation.y += 0.001
        renderer.render(scene, camera)
      }
      animate()
      return () => {
        mountRef.current?.removeChild(renderer.domElement)
        renderer.dispose()
      }
    }
  }, [])
  return (
    <div
      ref={mountRef}
      className="absolute top-0 left-0 w-full h-full overflow-hidden"

      <div className="absolute inset-0 flex items-center justify-center">
        <motion.h1
          className="text-6xl font-bold text-white"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}

          Welcome to VidNexus
        </motion.div>
        <motion.h2
          className="text-4xl font-light text-orange-300"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { delay: 0.5 } }}

          Your Hub for AI-Generated Videos
        </motion.div>
      </div>
    </div>
  )
}
export default ParticleBackground
);