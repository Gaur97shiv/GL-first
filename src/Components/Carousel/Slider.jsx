import React, { useState } from 'react';
import styles from './Slider.module.css'
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
const Slider = ({ images }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const nextImage = () => {
    const newIndex = (currentImageIndex + 1) % images.length;
    setCurrentImageIndex(newIndex);
  };
  const prevImage = () => {
    const newIndex = (currentImageIndex - 1 + images.length) % images.length;
    setCurrentImageIndex(newIndex);
  };
  return (
    <div>
    <div className={styles.carousel}>
     <FaArrowLeft onClick={prevImage} className={styles.icon}/>
      <img src={images[currentImageIndex]} alt={`Image ${currentImageIndex}`} className={styles.image} />
     <FaArrowRight onClick={nextImage} className={styles.icon}/>
    </div>
  </div>
  
  );
};

export default Slider;
