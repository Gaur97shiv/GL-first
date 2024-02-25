import React from 'react';
import Slider from "./Slider";
import img1 from "../image/img4.jpeg";
import img2 from "../image/img2.jpeg";
import img3 from "../image/img3.jpeg";
const Carousel= () => {
  const images = [
    img1,
    img2,
    img3
  ];

  return (
    <div>
      <Slider images={images} />
    </div>
  );
};

export default Carousel;
