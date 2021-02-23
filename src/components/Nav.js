import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Logo from '../assets/images/logo_prof.png';
import MenuIcon from '@material-ui/icons/Menu';
import MenuOpenIcon from '@material-ui/icons/MenuOpen';

const Nav = () => {
  const [open, setOpen] = useState(false);

  const linkStyles = {
    textDecoration: 'none',
    fontSize: '1.6rem'
  };

  const handleClick = () => {
    setOpen(!open);
  }

  return (
    <nav>
      <img src={Logo} alt="" style={{ maxHeight: "10vh"}} />
      <h2>Happy Trails, Inc.</h2>
      <ul 
        className={open ? "nav-links mobile-open" : "nav-links mobile-close"}
      >
        <NavLink style={linkStyles} to="/travel" onClick={()=>setOpen(false)}>
          <li>Travel</li>
        </NavLink>
        <NavLink style={linkStyles} to="/tips" onClick={()=>setOpen(false)}>
          <li>Travel Tips</li>
        </NavLink>
        <NavLink style={linkStyles} to="/about" onClick={()=>setOpen(false)}>
          <li>About</li>
        </NavLink>
        <NavLink style={linkStyles} to="/contact" onClick={()=>setOpen(false)}>
          <li>Contact</li>
        </NavLink>
      </ul>
      <div className="hamburger" onClick={handleClick}>
        {open 
          ? <MenuOpenIcon style={{fontSize:'2rem'}}/>
          : <MenuIcon style={{fontSize:'2rem'}}/>
        }
      </div>
    </nav>
  );
}

export default Nav;