import React from 'react';
import { motion } from "framer-motion";

const containerVariants = {
  hidden: {
    opacity: 0,
    x: '100vw',
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      delay: 0.1,
      type: 'spring',
      stiffness: 110,
      mass: 0.5,
      damping: 9,
      duration: 0.4,
      staggerChildren: 0.1,
      delayChildren: 0.5      
    } 
  },
  exit: {
    x: '-100vw',
    transition: { ease: 'easeInOut' }
  }
}

const itemVariant = {
  hidden: { opacity: 0, scale: 0.1 },
  visible: { opacity: 1, scale: 1,}
}

const Contact = () => {
  const handleSubmit =(e) => {
    e.preventDefault();

    const form = e.target;
    form.reset();
  }

  return (
    <motion.div 
      className="container"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"    
    >
      <div id="contact">
        <form onSubmit={handleSubmit} >
          <motion.label 
            variants={itemVariant} 
            htmlFor="name"
          >
            Name*:
          </motion.label>
            <motion.input 
              variants={itemVariant} 
              type="text" 
              id="name" 
              name="name" 
              placeholder="name..." 
              required 
            />  
          <motion.label 
            variants={itemVariant} 
            htmlFor="email"
          >
            Email*:
          </motion.label>
            <motion.input 
              variants={itemVariant}  
              type="email" 
              id="email" 
              name="email" 
              placeholder="email..." 
              required 
            />
          <motion.label 
            variants={itemVariant} 
            htmlFor="subject" 
          >
            Subject:
          </motion.label>
            <motion.input 
              variants={itemVariant}  
              type="text" 
              id="subject" 
              name="subject" 
              placeholder="subject... (optional)" 
            />
          <motion.label 
            variants={itemVariant} 
            htmlFor="message"
          >
            Message:
          </motion.label>   
          <motion.textarea 
            variants={itemVariant} 
            type="message" 
            id="message" 
            name="message" 
            rows="4" 
            placeholder="message... (optional)"
          ></motion.textarea>
          <motion.label 
            variants={itemVariant} 
            className="checkmark" 
            htmlFor="agree"
          >
            <input 
              type="checkbox" 
              id="agree" 
              name="agree"
            />
            Sign me up for the mailing list!
          </motion.label>
          <hr />
          <button type="submit">Submit</button>                             
        </form>
      </div>
    </motion.div>
  );
}

export default Contact;