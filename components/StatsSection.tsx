'use client'
import React from 'react'
import { motion } from 'framer-motion'
interface StatsData {
    title: string
    count: number
    description: string
}

const stats: StatsData[] = [
    {
        title: 'AI Videos Created',
        count: 1200,
        description: 'Engaging AI-generated videos tailor-made for your audience.',
    },
    {
        title: 'Happy Clients',
        count: 300,
        description: 'Clients who trust VidNexus for their video content needs.',
    },
    {
        title: 'Projects Completed',
        count: 1500,
        description: 'Successful projects delivered with cutting-edge AI technology.',
    },
    {
        title: 'Awards Won',
        count: 10,
        description: 'Recognized for innovation in technology and video production.',
    },
]
const StatsSection: React.FC = () => {
    return (
        <section className="py-12 bg-white">
            <div className="container mx-auto text-center">
                <h2 className="text-4xl font-bold text-red-500 mb-8">VidNexus Achievements</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={index}
                            className="bg-orange-400 p-6 rounded-lg shadow-lg transform transition duration-500 hover:scale-105"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}

                            <h3 className="text-5xl font-extrabold text-white leading-tight">
                                <motion.span
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ duration: 0.5, delay: index * 0.2 }}

                                    {stat.count}
                                </motion.span>
                            </h3>
                            <p className="text-xl text-white mt-2">{stat.title}</p>
                            <p className="text-base text-white mt-1">{stat.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
export default StatsSection
);