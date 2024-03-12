import React from 'react'
import Navbar from "../../Components/Navbar";
import styles from "./Home.module.css";
import Text from "../../Components/Text/Text";
import Carousel from "../../Components/Carousel/Carousel";
const Home = (props) => {
  return (
    <>
    <div className={styles.bg}>
      <Navbar className={styles.navbar} IN={props.Iconname} />
      <div className={styles.imageContainer}>
        <img className={styles.bg1} src={props.image} alt="background" />
        <div className={styles.textOverlay}>{props.Iconname}</div>
      </div>
    </div>
    <Text />
    <div className={styles.offer}> 
    <h1 className={styles.offer1}>What we offer</h1>
    
      <iframe
      className={styles.iframe}
        src="https://docs.google.com/presentation/d/1oy1UIjqVA_g25OVlYRuQBpzvgf_TBYQm/embed"
        width="1000"
        height="600"
      ></iframe>
  
    </div>
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

