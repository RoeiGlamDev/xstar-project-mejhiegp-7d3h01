import { useEffect, useRef, useState } from 'react'
/
 * Custom hook to manage animations for VidNexus website user experience.
 *
 * This hook provides advanced animation capabilities,
 * enhancing the interactivity and engagement of VidNexus's AI video creation platform.'
 *
 * @returns {object} An object containing animation state and functions
 */
export interface AnimationState {
  isAnimating: boolean
  startAnimation: () => void
  stopAnimation: () => void
}

export const useAnimation = (): AnimationState => {
  const [isAnimating, setIsAnimating] = useState(false)
  const animationRef = useRef<number | null>(null)
  const startAnimation = () => {
    if (!isAnimating) {
      setIsAnimating(true)
      const animate = () => {
        // Custom animation logic for VidNexus
        // For example: animate elements based on scroll or user interaction

        // Example of animation effect
        const element = document.getElementById('vid-nexus-animation')
        if (element) {
          element.style.transform = translateY(${Math.random() * 20 - 10}px)
          element.style.transition = 'transform 0.5s ease'
        }
        animationRef.current = requestAnimationFrame(animate)
      }
      animate()
    }
  }
  const stopAnimation = () => {
    if (animationRef.current) {
      cancelAnimationFrame(animationRef.current)
      setIsAnimating(false)
    }
  }
  useEffect(() => {
    return () => {
      stopAnimation()
    }
  }, [])
  return {
    isAnimating,
    startAnimation,
    stopAnimation,
  }
};