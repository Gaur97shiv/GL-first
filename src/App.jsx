import React from 'react'
import Navbar from './Components/Navbar'
import styles from "./App.module.css";
import Text from './Components/Text/Text';

const App = () => {
  return (
    <>
    <div className={styles.bg}>
    < Navbar className={styles.navbar} />
    <img className={styles.bg1} src="src/Components/image/23809-globallogic-office-1.png" alt="background" />
    </div>
    <div className={styles.te}>
    <Text/>
    </div>
    </>
  )
}
export default App;
