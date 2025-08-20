'use client'
import React from 'react'
import { motion } from 'framer-motion'
interface HeroSectionProps {}

const HeroSection: React.FC<HeroSectionProps> = () => {
    return (
        <section className="flex flex-col items-center justify-center h-screen bg-gradient-to-r from-red-500 to-orange-500 text-white">
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-center"

                <h1 className="text-5xl font-bold mb-4">Welcome to VidNexus</h1>
                <p className="text-xl mb-8 max-w-xl mx-auto">
                    At VidNexus, we leverage cutting-edge AI technology to create stunning, high-quality videos tailored to your needs. Transform your ideas into captivating narratives effortlessly.
                </p>
                <div className="flex space-x-4">
                    <motion.button
                        className="bg-white text-red-500 font-semibold py-2 px-4 rounded transition-transform transform hover:scale-105"
                        initial={{ scale: 1 }}
                        whileHover={{ scale: 1.05 }}

                        Learn More
                    </motion.div>
                    <motion.button
                        className="bg-orange-500 text-white font-semibold py-2 px-4 rounded transition-transform transform hover:scale-105"
                        initial={{ scale: 1 }}
                        whileHover={{ scale: 1.05 }}

                        Get Started
                    </motion.div>
                </div>
                <div className="mt-10">
                    <span className="text-sm text-gray-200">Trusted by leading brands in technology</span>
                </div>
            </motion.div>
        </section>
    )
}
export default HeroSection
);