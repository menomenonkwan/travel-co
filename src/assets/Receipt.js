import React from 'react';
import { formatPrice } from './Utils';
import { motion } from 'framer-motion';

const variants = {
  hidden: (index) => ({
    opacity: 0,
    y: -50 * index,
  }),
  visible: (index) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: index * 0.1,
    },
  }),
  exit: {
    opacity: 0,
    x: -150,
    transition: {
      duration: 0.3,
    }
  },
};

const Receipt = ({ item, index, removePackage }) => {

  const handleClick = () => {
    removePackage(index);
  }
  
  return (
    <motion.div 
      className="cart-item"   
      variants={variants}    
      initial="hidden"
      animate="visible"
      exit="exit"
      custom={index}
      key={item.uid}
    >
      <button 
        type="button" 
        onClick={handleClick}
      >
        remove
      </button>
      <div>
        <h3>{item.city}</h3>
        <p>{formatPrice(item.price)}</p>
      </div>
    </motion.div>
  );
}

export default Receipt;
