import React from 'react';
import { Link } from 'react-router-dom';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

const NumberInCart = ({cart}) => {
  return (
    <div className="kart">
      <Link to={'/cart'}>
        <button type="button">
          view cart<ShoppingCartIcon />
        </button>
      </Link>
    <p><span>{cart.length}</span> items</p>
  </div>
  );
}

export default NumberInCart;