import React, { useState, useEffect } from 'react';

function Featured() {

  return(
    <div className="featured-container content-center">
      <div className="featured-text text-center">
        <h3>The Best is Back</h3>
        <p> Everyone's favorite sweater is now back in stock. Shop the Fisherman in cashmere and cotton before it's gone once again.</p>
        <div className="featured-link"><a href="#">shop now</a></div>
      </div>
      <div className="featured-image">
        <img src="https://s3.amazonaws.com/jenni-kayne/media/cmsimage/9440/standard/Jenni_Kayne_Fisherman_Laydown-1.jpg" alt="image" />
      </div>
    </div>
  )
}

export default Featured;
