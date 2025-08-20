'use client'
import React, { useState } from "react"
import { motion } from "framer-motion"
interface InputProps {
  label: string
  type: "text" | "email" | "password"
  placeholder: string
  value: string
  onChange: (value: string) => void
  required?: boolean
}

const Input: React.FC<InputProps> = ({ label, type, placeholder, value, onChange, required }) => {
  const [isFocused, setIsFocused] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const handleBlur = () => {
    if (required && !value) {
      setError(${label} is required)
    } else {
      setError(null)
    }
  }
  return (<>
<motion.div
      className="flex flex-col mb-6"
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}

      <label className={text-lg font-semibold mb-2 ${error ? "text-red-500" : "text-white"}}>
        {label}
      </label>
      <input
        type={type}
        placeholder={placeholder}
        className={p-2 rounded-md border-2 
          ${error ? "border-red-500" : "border-orange-300"} 
          focus:border-orange-500 focus:outline-none 
          bg-white transition duration-200 ease-in-out 
          ${isFocused ? "shadow-lg" : "shadow-md"} 
          text-gray-800}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onFocus={() => setIsFocused(true)}
        onBlur={() => {
          setIsFocused(false
</>)
          handleBlur()
        }}
        aria-invalid={!!error}
      />
      {error && <span className="text-red-500 text-sm mt-1">{error}</span>}
    </motion.div>
  )
}
export default Input
);