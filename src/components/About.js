import React from 'react';
import Employee from '../assets/Employee';
import { aboutText } from '../assets/Content';
import { motion } from "framer-motion";
import { containerVariants } from '../assets/Content';

const About = ({ employees }) => { 
  return (
    <motion.div 
      className="container"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"    
    >
      <div id="about">
        <h2>about Us</h2>
        <div className="reading">
          {aboutText.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
        <h2>meet Us</h2>
        {employees.map(employee => (
          <Employee key={employee.id} employee={employee} />
        ))}
      </div>
    </motion.div>
  );
}

export default About;