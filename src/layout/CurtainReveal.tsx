import { motion, useScroll, useTransform, useSpring } from 'framer-motion'
import { useRef } from 'react'
import { Certifications } from '../features/Certifications/Certifications'
import { Education } from '../features/Education/Education'

export const CurtainReveal = () => {
  const targetRef = useRef<HTMLDivElement | null>(null)

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ['start start', 'end end'],
  })

  // Create a smooth version (physics-based inertia) of scrollYProgress
  const smoothScroll = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 10,
    restDelta: 0.001,
  })

  const slide2X = useTransform(
    smoothScroll,
    [0, 0.01, 0.5, 0.99, 1],
    ['100%', '100%', '0%', '100%', '100%']
  )

  return (
    <section>
      <div ref={targetRef} className="relative h-[450vh] bg-neutral-900 font-body">
        <div className="sticky top-0 h-screen w-full overflow-hidden">
          <Education></Education>
          <motion.div className="absolute h-full w-full px-12 pt-8 flex flex-col items-center justify-center bg-primary-900 text-white z-10">
            <Education></Education>
          </motion.div>
          <motion.div
            style={{ x: slide2X }}
            className="absolute inset-0 h-full w-full px-12 pt-8 flex flex-col items-center justify-center bg-white text-primary-900 z-20 shadow-2xl"
          >
            <Certifications></Certifications>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
