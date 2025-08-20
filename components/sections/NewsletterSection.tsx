'use client'
import React, { useState } from 'react'
import { motion } from 'framer-motion'
interface NewsletterSectionProps {
    title: string
    description: string
}

const NewsletterSection: React.FC<NewsletterSectionProps> = ({ title, description }) => {
    const [email, setEmail] = useState('')
    const [submitted, setSubmitted] = useState(false)
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        // Handle email submission logic here
        setSubmitted(true)
    }
    return (
        <section className="bg-white py-12 px-4">
            <div className="max-w-lg mx-auto text-center">
                <motion.h2
                    className="text-3xl text-red-500 font-bold mb-4"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}

                    {title || 'Join the VidNexus Community!'}
                </motion.div>
                <motion.p
                    className="text-lg text-gray-700 mb-8"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}

                    {description || 'Subscribe for the latest insights on AI video creation and technology updates.'}
                </motion.div>
                <form onSubmit={handleSubmit} className="flex flex-col md:flex-row justify-center">
                    <input
                        type="email"
                        className="border border-gray-300 rounded-lg p-3 md:mr-2 w-full md:w-1/2 focus:outline-none focus:ring-2 focus:ring-orange-500"
                        placeholder="Enter your email address"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                    <motion.button
                        type="submit"
                        className="bg-red-500 text-white rounded-lg p-3 mt-3 md:mt-0 hover:bg-orange-500 transition duration-300"
                        whileHover={{ scale: 1.05 }}

                        Subscribe
                    </motion.div>
                </form>
                {submitted && (
                    <motion.div
                        className="mt-4 text-green-500"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5 }}

                        Thank you for subscribing to VidNexus!
                    </motion.div>
                )}
            </div>
        </section>
    )
}
export default NewsletterSection
);