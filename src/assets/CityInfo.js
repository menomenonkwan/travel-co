import React from 'react';
import { motion } from 'framer-motion';
import { formatPrice } from './Utils';

const CityInfo = ({city, addToCart}) => {

  return (
    <motion.div 
      style={{ textAlign: 'center' }}
      key={city.id}
      initial={{opacity:0, y: '-50vh', scale: 0.1}}
      animate={{opacity:1, y: 0, scale: 1 }}
      exit={{opacity:0, y: '50vh', scale: 0.1}}
      transition={{ opacity: {duration: 0.75} }}
    >
      <h2>{city.city}</h2>
      <motion.button 
        type="button" 
        onClick={() => {
          addToCart(city); 
        }}
        whileTap={{scale:0.8}}
      >
        Add Trip
      </motion.button>
      <p>{city.description}</p>
      <p className="price">{formatPrice(city.price)}</p>
    </motion.div>
  );
}
export default CityInfo;