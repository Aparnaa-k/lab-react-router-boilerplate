import React from 'react';
import "../navbar/navbar.css";
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className='main'>
    <Link to="/" className='left'>
      Kalvium &#128151; 
    </Link>
    <div className='right'>
      <Link to="/contacts">Contacts</Link>
      <Link to="/about">About</Link>
      
    </div>
    </nav>
  );
}

export default Navbar;
