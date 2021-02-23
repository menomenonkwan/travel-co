import React from 'react';
import CityInfo from './CityInfo';
import { cities } from '../assets/Content';
import { motion, AnimatePresence } from "framer-motion";
import CloseIcon from '@material-ui/icons/Close';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import NumberInCart from '../assets/NumberInCart';

const variants = {
  hidden: { 
    opacity: 0, 
  },
  visible: { 
    opacity: 1, 
    transition: {
      duration: 0.3      
    } 
  },
  exit: {
    opacity: 0, 
  }
}

const Overlay = ({ city, setCity, setOverlay, cart, addToCart }) => {

  const handleClick = (e) => {
    if(e.target === e.currentTarget) {
      setOverlay(false);
    }
  };

  const clickPrev = () => {
    const cur = cities.indexOf(city);
    const prev = cur - 1;
    if(prev < 0) {
      setCity(cities[cities.length - 1]);
      return;
    }
    setCity(cities[prev]);
  };

  const clickNext = () => {
    const cur = cities.indexOf(city);
    const next = cur + 1;
    if(next >= cities.length) {
      setCity(cities[0]);
      return;
    }
    setCity(cities[next]);
  };

  return (
    <motion.div 
      className="overlay" 
      onClick={handleClick}
      variants={variants}
      initial="hidden"
      animate="visible"  
      exit="exit"  
    >
      <NumberInCart cart={cart} />
      <motion.button onClick={clickPrev} className="prev" whileTap={{scale:0.9}}>
        <NavigateBeforeIcon style={{ fontSize: "5rem" }} />
      </motion.button>
      <motion.button onClick={clickNext} className="next" whileTap={{scale:0.8}}>
        <NavigateNextIcon style={{ fontSize: "5rem" }} />
      </motion.button>
      <div className="trip-info">
        <AnimatePresence initial={false} >
        <motion.img exitBeforeEnter
          src={city.src} 
          alt={city.city} 
          key={city.id}
          initial={{
            opacity:0, 
            scale: 0.1,
            rotateX: 45, 
            rotateY: 90,
          }}
          animate={{
            opacity:1,  
            scale: 1,
            rotateX: 0, 
            rotateY: 0,
          }}
          exit={{
            opacity:0, 
            scale: 0.1,
            rotateX: -45, 
            rotateY: -90 
          }}
          transition={{
            opacity:{duration: 0.3},
          }}
        />
        </AnimatePresence>
        <button type="button" className="close" onClick={() => {setOverlay(false)}}><CloseIcon /></button>
          <AnimatePresence initial={false} >
            <CityInfo city={city} addToCart={addToCart} />
          </AnimatePresence>
      </div>
    </motion.div>
  );
}

export default Overlay;