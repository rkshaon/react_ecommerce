import React, { useState, useEffect } from 'react';

function Featured() {

  return(
    <div className="featured-container content-center">
      <div className="featured-text text-center">
        <h3><a href="">The Best is Black</a></h3>
        <p> Everyone's favorite sweater is now back in stock. Shop the Fisherman in cashmere and cotton before it's gone once again.</p>
        <button>shop now</button>
      </div>
      <div className="featured-image">
        <img src="https://s3.amazonaws.com/jenni-kayne/media/cmsimage/9440/standard/Jenni_Kayne_Fisherman_Laydown-1.jpg" alt="image" />
      </div>
    </div>
  )
}

export default Featured;
