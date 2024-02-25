import React from 'react'
import Navbar from "../../Components/Navbar";
import styles from "./Home.module.css";
import Text from "../../Components/Text/Text";
import Carousel from "../../Components/Carousel/Carousel";
const Home = () => {
  return (
    <>
    <div className={styles.bg}>
    < Navbar className={styles.navbar} />
    <img className={styles.bg1} src="src\Components\image\img1.jpg" alt="background" />
    </div>
    <Text />
    <div className={styles.car}>
    <Carousel className={styles.carousel1} />
    <Carousel className={styles.carousel2} />
    <Carousel className={styles.carousel3} />
    </div>
 <div className={styles.foot}>
  @copyright 2024
</div> 
    </>
  )
}
export default Home;

