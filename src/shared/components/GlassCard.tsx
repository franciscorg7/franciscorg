import React, { useRef } from 'react'
import { motion, useMotionTemplate, useMotionValue, useSpring, useTransform } from 'framer-motion'

export const GlassCard = ({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) => {
  const ref = useRef<HTMLDivElement>(null)

  // Mouse positions (from -0.5 to 0.5)
  const x = useMotionValue(0)
  const y = useMotionValue(0)

  // Smooth springs for tilt
  const mouseXSpring = useSpring(x, { stiffness: 150, damping: 20 })
  const mouseYSpring = useSpring(y, { stiffness: 150, damping: 20 })

  // 3D Rotations
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ['10deg', '-10deg'])
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ['-10deg', '10deg'])

  // Glare position - maps mouse position to a percentage for the background gradient
  // Glare Position
  const glareX = useTransform(mouseXSpring, [-0.5, 0.5], [0, 100])
  const glareY = useTransform(mouseYSpring, [-0.5, 0.5], [0, 100])
  const glareBg = useMotionTemplate`radial-gradient(
    circle at ${glareX}% ${glareY}%, 
    rgba(255, 255, 255, 0.08) 0%, 
    rgba(255, 255, 255, 0.02) 45%, 
    transparent 80%
  )`

  const glareOpacity = useTransform(mouseXSpring, v =>
    Math.abs(v) > 0 || Math.abs(y.get()) > 0 ? 1 : 0
  )

  /**
   * Calculates the mouse position relative to the center of the card.
   *
   * This function converts absolute mouse coordinates into a normalized
   * range from -0.5 to 0.5.
   *
   * Framer Motion uses 0 to represent the center, allowing for balanced 3D rotation
   * in both directions (e.g., -10deg to 10deg).
   *
   * @param e - the React MouseEvent triggered by moving over the card.
   */
  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return
    const { left, top, width, height } = ref.current.getBoundingClientRect()
    const mouseX = (e.clientX - left) / width - 0.5
    const mouseY = (e.clientY - top) / height - 0.5

    x.set(mouseX)
    y.set(mouseY)
  }

  /**
   * Resets the card's rotation when the mouse leaves the element.
   *
   * Setting the motion values back to 0 triggers the Framer Motion springs
   * to smoothly animate the card back to its flat, initial state.
   */
  const handleMouseLeave = () => {
    x.set(0)
    y.set(0)
  }

  return (
    <div className="relative h-full w-full" style={{ perspective: '1200px' }}>
      <motion.div
        ref={ref}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          rotateX,
          rotateY,
          transformStyle: 'preserve-3d',
        }}
        className={`glassy-card relative h-full w-full isolation-isolate ${className}`}
      >
        <motion.div
          style={{ background: glareBg, opacity: glareOpacity }}
          className="absolute inset-0 pointer-events-none z-10"
        />
        <div
          style={{
            transform: 'translateZ(1px)',
            transformStyle: 'preserve-3d',
          }}
          className="relative z-20 h-full pointer-events-auto"
        >
          {children}
        </div>
      </motion.div>
    </div>
  )
}
