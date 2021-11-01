import React from 'react';
import Favorites from './favorites';
import Search from './search';
import fillari from '../media/fillari192.png';
import styles from './main.module.scss';
import NearestPlaces from './nearestPlaces';
import Footer from './footer';

const Main: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <img src={fillari} alt='fillari'/>
        <u style={{color:'darkgreen'}}><h1 style={{marginTop:0, fontSize:'5vh', color:'#fff'}}>Omat kaupunkifillarit</h1></u>
      </div>


      <div className={styles.content}>
        <NearestPlaces />
        <Search displayHeader={false} />
        <Favorites />
      </div>

      <div className={styles.footer}>
        <Footer />
      </div>
    </div>
  )
}

export default Main;
