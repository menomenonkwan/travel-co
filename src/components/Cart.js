import React from 'react';
import Receipt from '../assets/Receipt';
import { formatPrice } from '../assets/Utils';
import SentimentVeryDissatisfiedIcon from '@material-ui/icons/SentimentVeryDissatisfied';
import { motion, AnimatePresence } from 'framer-motion';

const variants = {
  hidden: { 
    opacity: 0, 
  },
  visible: { 
    opacity: 1, 
    transition: {
      delay: 0.1,
      duration: 0.4      
    } 
  }
}

const btnVariants = {
  hover: {
    scale: 1.2,
    transition: {
      repeat: Infinity,
      duration: 0.5
    }
  }
};

const Cart = ({cart, setCart}) => {
  const removePackage = (i) => {
    const newPackages = cart.filter((_, index) => index !== i)
    setCart(newPackages);
  }
  
  const total = cart.reduce((acc,cur) => {
    return acc + cur.price;
  }, 0);
 
  const Empty = () => {
    return (
      <h1 className="empty">is empty... <SentimentVeryDissatisfiedIcon /></h1>
    );
  }
  
  return (
    <div className="container">
      <motion.div 
        id="kart"
        variants={variants}
        initial="hidden"
        animate="visible"        
      >
      <h2>your cart</h2>
        <div className="receipt">
          <div className="itemized">
            {cart.length > 0 
              ? <AnimatePresence> 
                  {cart.map((item, i) => (
                    <Receipt  
                      key={item.uid} 
                      item={item} 
                      index={i} 
                      removePackage={removePackage}
                    /> 
                  ))}
                </AnimatePresence> 
              : <Empty /> 
            }
          </div>
          <div className="totals">
            <h3>Total: <span>{formatPrice(total)}</span></h3>
            <motion.button 
              type="button" 
              disabled
              variants={btnVariants}
              whileHover="hover"
            >
              checkout
            </motion.button>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default Cart;
