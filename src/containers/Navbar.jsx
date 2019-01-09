import React from 'react';
import logo from '../logo.svg';
import {Link} from 'react-router-dom'

const Navbar = () => {
  return (
  <header className="App-header">
    <img src={logo} className="App-logo" alt="logo" />
    <ul className="nav">
      <Link to='/'><li>Home</li></Link>
      <Link to='/hero/antimage'><li>AM</li></Link>
      <Link to='/fetch'><li>fetch</li></Link>
    </ul>
  </header>
  );
};

export default Navbar;
