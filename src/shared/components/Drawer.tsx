import { createPortal } from 'react-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { useEffect, type ReactNode } from 'react'

interface DrawerProps {
  isOpen: boolean
  children: ReactNode
  onClose: () => void
}

export const Drawer = ({ isOpen, children, onClose }: DrawerProps) => {
  // Handle Escape key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [onClose])

  // Manages the background scroll behavior when the drawer is open
  useEffect(() => {
    if (isOpen) {
      // Prevents the background page from scrolling
      document.body.style.overflow = 'hidden'

      // Prevents mobile "pull-to-refresh" or bounce effects
      document.body.style.overscrollBehavior = 'none'
    } else {
      document.body.style.overflow = 'unset'
      document.body.style.overscrollBehavior = 'unset'
    }

    // Cleanup function to ensure scroll is restored if component unmounts
    return () => {
      document.body.style.overflow = 'unset'
      document.body.style.overscrollBehavior = 'unset'
    }
  }, [isOpen])

  return createPortal(
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed top-0 left-0 w-screen h-screen z-999 bg-white flex flex-col overflow-hidden"
          initial={{ x: '100%' }}
          animate={{ x: 0 }}
          exit={{ x: '100%' }}
          transition={{
            type: 'spring',
            stiffness: 60,
            damping: 15,
            mass: 1.1,
            restDelta: 0.001,
          }}
        >
          <div className="overflow-hidden px-6 py-12 md:px-12 bg-white selection:bg-primary-100">
            <button
              onClick={onClose}
              className="p-2 hover:bg-neutral-100 cursor-pointer rounded-full transition-colors text-primary-900"
            >
              <span className="text-sm font-bold uppercase tracking-widest">Close</span>
            </button>
            <div className="max-w-6xl mx-auto">{children}</div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body
  )
}
