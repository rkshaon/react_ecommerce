import React, { useState, useEffect } from 'react';

function Favorites() {

  return(
    <div className="bestseller-container">
      <div className="bestseller-header">
        <p className="bestSeller-title">A Few Favorites</p>
      </div>
      <div className="bestseller-image">
        <a href="">
          <div className="image-container">
            <div className="image-inner-container">
              <img src="https://dygk1aj3dwrbt.cloudfront.net/media/products/3415/listing/JenniKayne_ProductFlats_Throws_016.jpg?1608668454" />
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
              <img src="https://dygk1aj3dwrbt.cloudfront.net/media/products/8869/listing/Jenni_Kayne-Tahoe_Cashmere_Throw__Stone-4.jpg?1604090297" />
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
              <img src="https://dygk1aj3dwrbt.cloudfront.net/media/products/8865/listing/Jenni_Kayne-Tahoe_Cashmere_Throw__Ivory-4.jpg?1604090123" />
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
      </div>
    </div>
  )
}

export default Favorites;
