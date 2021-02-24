import React from 'react';
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { delay: 1.5, duration: 1.5,when: 'beforeChildren',
    staggerChildren: 0.5,
    } 
  },
  exit: {
    x: '-100vw',
    transition: { ease: 'easeInOut' }
  }
};

const motionVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 }
};

const dots = ['.','.','.'];

const Home = () => {
  return (
    <div className="container">
      <motion.h2
        className="solo" 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        Find Yourself
        {dots.map((dot, i) => (
          <motion.span
            variants={motionVariants}    
            key={i}
          >
            {dot}
          </motion.span>
        ))}
      </motion.h2>
    </div>
  );
}

export default Home;
