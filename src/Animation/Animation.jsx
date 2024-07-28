import React from 'react'
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
// fadeinup
const Animation = ({ children }) => {
        const { ref, inView } = useInView({
          triggerOnce: true,
          threshold: 0.1,
        });
  return (
      <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 50 }}
      transition={{ duration: 1, ease: 'easeOut' }}
    >
      {children}
    </motion.div>
  )
}

export default Animation
