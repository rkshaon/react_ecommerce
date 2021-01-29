import React, { useState, useEffect } from 'react';

function ShopAll() {

  return(
    <div className="shopall-container">
      <div className="shopall-header">
        <p className="shopall-title uppercase-letter">shop all</p>
      </div>
      <div className="shopall-image">
        <div className="image-container">
          <img src="https://s3.amazonaws.com/jenni-kayne/media/cmsimage/9418/standard/Jenni_Kayne-Slippers-2.jpg" />
        </div>
        <div className="image-container">
          <img src="https://s3.amazonaws.com/jenni-kayne/media/cmsimage/9417/standard/Jenni_Kayne-Home-Furniture-1.jpg" />
        </div>
      </div>
    </div>
  )
}

export default ShopAll;
