import React, { useState } from 'react';
import { motion, AnimatePresence } from "framer-motion";

const Advisory = ({ country }) => {
  const [show, setShow] = useState(false);

  return (
    <div className="advisory">
      <h3 onClick={() => setShow(!show)}>{country.iso_alpha2} - {country.name}</h3>
      <AnimatePresence>
        {show && (
          <motion.p
            initial={{ opacity: 0, y: -25, height: 0, fontSize: '0rem' }}
            animate={{ opacity: 1, y: 0, height: '80%', fontSize: '1.25rem' }}
            exit={{ opacity: 0, y: -10, height: 0, fontSize: '0rem' }}
            transition={{stiffness: 400, damping: 50, mass: 5 }}
          >
            {country.advisory.message}
          </motion.p>
        )}
      </AnimatePresence>
    </div>
  );
}

export default Advisory;