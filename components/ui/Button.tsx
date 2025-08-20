'use client'
import React from 'react'
import { motion } from 'framer-motion'
interface ButtonProps {
  label: string
  variant?: 'primary' | 'secondary'
  onClick?: () => void
  disabled?: boolean
}

const buttonVariants = {
  rest: { scale: 1, boxShadow: '0px 4px 15px rgba(0, 0, 0, 0.25)' },
  hover: { scale: 1.05, boxShadow: '0px 8px 30px rgba(0, 0, 0, 0.3)' },
}
const buttonStyles = {
  primary: 'bg-gradient-to-r from-red-500 to-orange-500 text-white',
  secondary: 'bg-white text-red-500 border border-red-500',
}
const Button: React.FC<ButtonProps> = ({ label, variant = 'primary', onClick, disabled }) => {
  return (
    <motion.button
      className={transition-all duration-300 ease-in-out rounded-lg py-2 px-4 text-lg focus:outline-none ${buttonStyles[variant]} ${disabled ? 'opacity-50 cursor-not-allowed' : ''}}
      onClick={onClick}
      disabled={disabled}
      variants={buttonVariants}
      initial="rest"
      whileHover="hover"

      {label}
    </motion.div>
  )
}
export default Button
);