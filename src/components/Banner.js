import React, { useState, useEffect } from 'react';

function Banner() {

  return(
    <div className="banner-container" style={{
      backgroundImage: `url("https://s3.amazonaws.com/jenni-kayne/media/cmsimage/9426/desktop/Jenni_Kayne-Home-Living_Room.jpg")`,
      height: '100%',
      width: '100%',
      minHeight: '100vh',
    }}>
      <div className="banner-text">
        <h1 class="">Home Starts Here</h1>
        <div class="">
          This year, we're bringing it home. Set the foundation for your space with the timeless touch of Jenni Kayne Home.
        </div>
        <div class="">GET THE LOOK</div>
      </div>
    </div>
  )
}

export default Banner;
