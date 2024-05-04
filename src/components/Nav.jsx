import React from 'react';
// import { Link } from 'react-router-dom';
import './Nav.css';

function Nav() {

  return (
    <div className="topnav">
      <div>
        <a className='active' href="/">Home</a>
        <div class="topnav-right">
            <a href="search">Search</a>
            <a href="about">About</a>
        </div>
        {/* <Link className="navLink" to="/home">
          Home
        </Link>
        <Link className="navLink" to="/search">
          Search
        </Link>
        <Link className="navLink" to="/about">
          About
        </Link> */}
      </div>
    </div>
  );
}

export default Nav;
