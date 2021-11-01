import React, { useEffect, useState } from 'react';
import Favorites from './favorites';
import Search from './search';
import fillari from '../media/fillari192.png';
import { Link } from 'react-router-dom';
import styles from './main.module.scss';
import { useLocationContext } from '../context/locationContextProvider';
import CalcDistance from '../helpers/calcDistance';
import { observer } from 'mobx-react-lite';
import { getSnapshot, onSnapshot } from 'mobx-state-tree';
import { RootStoreSnapshot, Station } from '../mst';
import { useStores } from '../mst/rootStoreContext';

const Main: React.FC = observer(() => {
  const [snap, setSnap] = useState<RootStoreSnapshot>(getSnapshot(useStores()));
  onSnapshot(useStores(), (newSnapshot) => setSnap(newSnapshot));
  const { location } = useLocationContext();

  const [nearPlaces, setNearPlaces] = useState<Station[]>([]);
  
  useEffect(() => {
    console.log(location);
    if (!location) return

    const sorted = snap.stations.slice().sort((pos1, pos2) => CalcDistance(location, {lat: pos1.lat, lon: pos1.lon}) - CalcDistance(location, {lat: pos2.lat, lon: pos2.lon})).slice(0, 1);
    setNearPlaces(sorted);

    // const kek = CalcDistance(location, location);
    // console.log('Distance:', kek)
  }, [location, snap.stations]);
  
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <img src={fillari} alt='fillari'/>
        <u style={{color:'darkgreen'}}><h1 style={{marginTop:0, fontSize:'5vh', color:'#fff'}}>Omat kaupunkifillarit</h1></u>
      </div>

      <div>
        <p style={{margin:0}}>Lähellä:</p>
      {
        nearPlaces.map(x => {
          return (
            <Link to={`/station/${x.id}`} >{x.name}</Link>
          )
        })
      }
      </div>

      <div className={styles.content}>
        <Search displayHeader={false} />
        <Favorites />
      </div>

      <div className={styles.footer}>
        <p>Asenna mobiilisovellus <Link to='/help'>OHJE</Link></p>
      </div>
    </div>
  )
})

export default Main;
