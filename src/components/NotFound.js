import React from "react";
import { motion } from "framer-motion";

const NotFound = () => {
  return (
    <div className="container">
        <motion.h2 
          className="solo" 
          initial={{ opacity: 0, y: -250 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ 
            delay: 0.5, 
            type: 'spring',
            stiffness: 125
          }}
        >
          Page Not Found!!!
        </motion.h2>
    </div>
  )
};

export default NotFound;

