import React from 'react'
import { motion } from 'framer-motion';
// fadeinup
const Animation = ({ children }) => {
  return (
      <motion.div
      whileInView={{opacity:1 ,y:0}}
      initial={{ opacity: 0, y: 50 }}
      animate={{y:50}}
      transition={{ duration: 1, ease: 'easeOut' }}
    >
      {children}
    </motion.div>
  )
}

export default Animation
