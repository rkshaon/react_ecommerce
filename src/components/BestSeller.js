import React, { useState, useEffect } from 'react';

function BestSeller() {

  return(
    <div className="bestseller-container">
      <div className="bestseller-header">
        <p className="bestSeller-title">Best Sellers</p>
      </div>
      <div className="bestseller-image">
        <a href="">
          <div className="image-container">
            <div className="image-inner-container">
              <img src="https://dygk1aj3dwrbt.cloudfront.net/media/products/6292/listing/Jenni_Kayne_Cashmere_Fisherman_Heather_Taupe.jpg?1572376014" />
              <div className="overlay">
                <div className="text">
                  <ul className="navbar-item">
                    <li className="navbar-link">xxs</li>
                    <li className="navbar-link">xs</li>
                    <li className="navbar-link">s</li>
                    <li className="navbar-link">m</li>
                    <li className="navbar-link">l</li>
                    <li className="navbar-link">xl</li>
                    <li className="navbar-link">xxl</li>
                  </ul>
                  <p className="size-selector">SELECT SIZE</p>
                </div>
              </div>
            </div>
            <div className="sellers-text">
              <h5 className="text-top">jenny kayne <span className="currency">$445.0</span></h5>
              <p className="text-head">Cashmere Cocoon Cadigan</p>
              <p className="text-bottom">Ivory -- more colors</p>
            </div>
          </div>
        </a>
        <a href="">
          <div className="image-container">
            <div className="image-inner-container">
              <img src="https://dygk1aj3dwrbt.cloudfront.net/media/products/7483/listing/Jenni-Kayne-CedarStump3.jpg?1586541543" />
              <div className="overlay">
                <div className="text">
                  <p className="size-selector">Add to Bag</p>
                </div>
              </div>
            </div>
            <div className="sellers-text">
              <h5 className="text-top">jenny kayne <span className="currency">$445.0</span></h5>
              <p className="text-head">Cashmere Cocoon Cadigan</p>
              <p className="text-bottom">Ivory -- more colors</p>
            </div>
          </div>
        </a>
        <a href="">
          <div className="image-container">
            <div className="image-inner-container">
              <img src="https://dygk1aj3dwrbt.cloudfront.net/media/products/5764/listing/Jenni_Kayne_Suede_Moc_Clog_Natural.jpg?1569353784" />
              <div className="overlay">
                <div className="text">
                  <ul className="navbar-item">
                    <li className="navbar-link">xxs</li>
                    <li className="navbar-link">xs</li>
                    <li className="navbar-link">s</li>
                    <li className="navbar-link">m</li>
                    <li className="navbar-link">l</li>
                    <li className="navbar-link">xl</li>
                    <li className="navbar-link">xxl</li>
                  </ul>
                  <p className="size-selector">SELECT SIZE</p>
                </div>
              </div>
            </div>
            <div className="sellers-text">
              <h5 className="text-top">jenny kayne <span className="currency">$445.0</span></h5>
              <p className="text-head">Cashmere Cocoon Cadigan</p>
              <p className="text-bottom">Ivory -- more colors</p>
            </div>
          </div>
        </a>
      </div>
    </div>
  )
}

export default BestSeller;
