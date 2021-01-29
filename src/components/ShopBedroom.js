import React, { useState, useEffect } from 'react';

function ShopBedroom() {

  return(
    <div className="shopbedroom-container">
      <div className="shopbedroom-header">
        <p className="shopbedroom-title uppercase-letter">Shop for Bedroom</p>
      </div>
      <div className="shopbedroom-body">
        <div className="shopbedroom-quote">
          <p>“These are the pieces you’ll love coming home to. Let us help you design the space of your dreams.”</p>
          <div className="signature">
            <img className="" src="https://www.jennikayne.com/dist/assets/temp/jk-signature.png" alt="image" />
          </div>
        </div>
        <div className="shopbedroom-image">
          <img src="https://s3.amazonaws.com/jenni-kayne/media/cmsimage/9415/desktop/Jenni_Kayne-Home-Blankets-1.jpg" alt="banner" />
        </div>
        <div className="shopbedroom-quote-bottom">
          <p>You can never have too many pillows and throws. Made for mixing and matching with ease, our handcrafted textiles are what every room needs.</p>
        </div>
      </div>
    </div>
  )
}

export default ShopBedroom;
