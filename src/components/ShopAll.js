import React, { useState, useEffect } from 'react';

function ShopAll() {

  return(
    <div className="bestseller-container">
      <div className="bestseller-header">
        <h3 className="BestSeller-title">shop all</h3>
      </div>
      <div className="bestseller-image">
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
