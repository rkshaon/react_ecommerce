import React, { useState, useEffect } from 'react';

function GetAll() {

  return(
    <div className="bestseller-container">
      <div className="bestseller-header">
        <h3 className="BestSeller-title">Get All</h3>
      </div>
      <div className="bestseller-image">
        <div className="image-container">
          <img src="https://dygk1aj3dwrbt.cloudfront.net/media/products/6292/listing/Jenni_Kayne_Cashmere_Fisherman_Heather_Taupe.jpg?1572376014" />
        </div>
        <div className="image-container">
          <img src="https://dygk1aj3dwrbt.cloudfront.net/media/products/7483/listing/Jenni-Kayne-CedarStump3.jpg?1586541543" />
        </div>
        <div className="image-container">
          <img src="https://dygk1aj3dwrbt.cloudfront.net/media/products/5764/listing/Jenni_Kayne_Suede_Moc_Clog_Natural.jpg?1569353784" />
        </div>
      </div>
    </div>
  )
}

export default GetAll;
