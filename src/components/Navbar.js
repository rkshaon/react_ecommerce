import React, { useState, useEffect } from 'react';

function Navbar() {

  return(
    <div className="navbar-container">
      <div className="navbar-top text-white content-center">
        <p>The cocoon is back.</p><a href="" className="text-white">SHOP NOW</a>
      </div>
      <div className="navbar">
        <div className="navbar-title">
          <a className="navbar-brand" href="#">Jenni Kayne</a>
        </div>
        <div className="navbar-content">
          <ul className="navbar-item">
            <li className="navbar-link"><a href="">New</a></li>
            <li className="navbar-link"><a href="">Home</a></li>
            <li className="navbar-link"><a href="">Furniture</a></li>
            <li className="navbar-link"><a href="">Best-sellers</a></li>
            <li className="navbar-link"><a href="">Clothing</a></li>
            <li className="navbar-link"><a href="">Shoes</a></li>
            <li className="navbar-link"><a href="">Blog</a></li>
          </ul>
        </div>
        <div className="navbar-address">
          <ul>
            <li className="navbar-link"><a href="">Search</a></li>
            <li className="navbar-link"><a href="">Account</a></li>
            <li className="navbar-link"><a href="">My Bag 0</a></li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Navbar;
