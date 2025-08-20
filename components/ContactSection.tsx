'use client'
import React, { useState } from 'react'
import { motion } from 'framer-motion'
interface ContactFormState {
  name: string
  email: string
  message: string
  reason: string
}

const ContactSection: React.FC = () => {
  const [formState, setFormState] = useState<ContactFormState>({
    name: '',
    email: '',
    message: '',
    reason: 'Inquiry',
  })
  const [errors, setErrors] = useState<{ [key: string]: string }>({})
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormState((prevState) => ({ ...prevState, [name]: value }))
    setErrors((prevErrors) => ({ ...prevErrors, [name]: '' }))
  }
  const validateForm = (): boolean => {
    const newErrors: { [key: string]: string } = {}
    if (!formState.name) newErrors.name = 'Name is required'
    if (!formState.email) newErrors.email = 'Email is required'
    if (!/\S+@\S+\.\S+/.test(formState.email)) newErrors.email = 'Email is invalid'
    if (!formState.message) newErrors.message = 'Message is required'
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (validateForm()) {
      // Handle form submission
      console.log('Form submitted:', formState)
      // Reset form or show success message
    }
  }
  return (<>
<motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="bg-white p-8 rounded-lg shadow-lg max-w-lg mx-auto mt-12"

      <h2 className="text-3xl font-bold text-red-600 mb-4">Contact VidNexus</h2>
      <p className="text-gray-600 mb-6">
        For technology inquiries, please fill out the form below or reach us at our office.
      </p>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-gray-700">Name</label>
          <input
            type="text"
            name="name"
            value={formState.name}
            onChange={handleChange}
            className={border ${errors.name ? 'border-red-500' : 'border-gray-300'} p-2 w-full rounded}
          />
          {errors.name && <p className="text-red-500">{errors.name}</p>}
        </div>
        <div>
          <label className="block text-gray-700">Email</label>
          <input
            type="email"
            name="email"
            value={formState.email}
            onChange={handleChange}
            className={border ${errors.email ? 'border-red-500' : 'border-gray-300'} p-2 w-full rounded}
          />
          {errors.email && <p className="text-red-500">{errors.email}</p>}
        </div>
        <div>
          <label className="block text-gray-700">Reason for Contact</label>
          <select
            name="reason"
            value={formState.reason}
            onChange={handleChange}
            className="border border-gray-300 p-2 w-full rounded"

            <option value="Inquiry">Inquiry</option>
            <option value="Support">Support</option>
            <option value="Partnership">Partnership</option>
            <option value="Feedback">Feedback</option>
          </select>
        </div>
        <div>
          <label className="block text-gray-700">Message</label>
          <textarea
            name="message"
            value={formState.message}
            onChange={handleChange}
            className={border ${errors.message ? 'border-red-500' : 'border-gray-300'} p-2 w-full rounded}
            rows={4}
          />
          {errors.message && <p className="text-red-500">{errors.message}</p>}
        </div>
        <button
          type="submit"
          className="bg-red-600 text-white py-2 px-4 rounded hover:bg-orange-500 transition duration-300"

          Send Message
        </button>
      </form>

      <div className="mt-8">
        <h3 className="text-xl font-semibold text-red-600">VidNexus Business Information</h3>
        <p className="text-gray-600 mt-2">Address: 123 Tech Lane, Innovate City, ST 45678</p>
        <p className="text-gray-600">Business Hours: Mon-Fri 9 AM - 5 PM</p>
      </div>
    </motion.section>
</>)
}
export default ContactSection
);