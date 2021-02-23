import React from 'react';
import { formatPrice } from '../assets/Utils';

const TravelCard = ({ location, displayOverlay }) => {

  return (
    <div className="travel-card">
      <img src={location.src} alt={location.city} />
      <h3>{location.city}</h3>
      <p>{formatPrice(location.price)}</p>
      <button type="button" onClick={() => displayOverlay(location)}>More Info</button>
    </div>
  )
}

export default TravelCard;