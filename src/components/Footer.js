import React from 'react';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer>
      <Link to="/travel-co/contact" className="footer-contact">
        <p>Contact</p>
      </Link>
      <ul>
        <li><FacebookIcon /> Facebook</li>
        <li><InstagramIcon /> Instagram</li>
        <li><TwitterIcon /> Twitter</li>
      </ul>
      <p>&copy; 2021 Brannon Lee</p>
    </footer>
  );
}

export default Footer;