import React, { useState } from 'react';
import { cities } from '../assets/Content';
import TravelCard from '../assets/TravelCard';
import Overlay from '../assets/Overlay';
import NumberInCart from '../assets/NumberInCart';
import { motion, AnimatePresence } from "framer-motion";
import { v4 as uuidv4 } from 'uuid';
import { containerVariants } from '../assets/Content';

const Travel = ({ cart, setCart }) => {
  const [overlay, setOverlay] = useState(false);
  const [city, setCity] = useState({});

  const displayOverlay = (location) => {
    setCity(location);
    setOverlay(true);
  }

  const addToCart = (location) => {
    const uid = uuidv4();
    setCart([ ...cart, {...location, uid} ]);
  }

  return (
  <React.Fragment>
    <AnimatePresence>
      {overlay && (
        <Overlay
          city={city}
          setCity={setCity}
          setOverlay={setOverlay}
          cart={cart}
          addToCart={addToCart}
        />
      )}
    </AnimatePresence>
    <motion.div
      className="container"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <div id="travel">
        <NumberInCart cart={cart} />
        <h2>our travel packages</h2>
        <div className="travel-grid">
          {cities.map(location => (
            <TravelCard
              key={location.id}
              location={location}
              displayOverlay={displayOverlay}
            />
          ))}
        </div>
      </div>
    </motion.div>
  </React.Fragment>
  );
}

export default Travel;