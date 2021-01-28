import React, { useState, useEffect } from 'react';

function Navbar() {

  return(
    <div className="navbar-container">
      <div className="navbar">
        <div className="navbar-top text-white content-center">
          <p>The cocoon is bank.</p><a href="" className="text-white">SHOP NOW</a>
        </div>
        <div className="navbar-title">
          Jenni Kayne
        </div>
        <ul className="navbar-content">
        <li className="navbar-item"><a href="">New</a></li>
          <li className="navbar-item"><a href="">Home</a></li>
          <li className="navbar-item"><a href="">Furniture</a></li>
          <li className="navbar-item"><a href="">Best-sellers</a></li>
          <li className="navbar-item"><a href="">Clothing</a></li>
          <li className="navbar-item"><a href="">Shoes</a></li>
          <li className="navbar-item"><a href="">Blog</a></li>
        </ul>
        <ul className="navbar-content navbar-address">
          <li className="navbar-item"><a href="">Search</a></li>
          <li className="navbar-item"><a href="">Account</a></li>
          <li className="navbar-item"><a href="">My Bag 0</a></li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar;
