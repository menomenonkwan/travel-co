import React from 'react';
import Advisory from '../assets/Advisory';
import { tipsText } from '../assets/Content';
import { motion } from "framer-motion";
import { containerVariants } from '../assets/Content';

const Tips = ({ safety }) => {

  return (
    <motion.div 
      className="container"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"     
    >
      <div id="tips">
        <h2>safety &amp; tips</h2>
        <div className="reading">
          {tipsText.map((tip,index) => (
            <p key={index}>{tip}</p>
          ))}
        <p className="web-link"><a href="https://travel.state.gov/" target="blank">travel.state.gov</a></p>
        </div>
        {Object.keys(safety).map(country => (
          <Advisory key={country} country={safety[country]} />
        ))}
      </div>
    </motion.div>
  );
}

export default Tips;
