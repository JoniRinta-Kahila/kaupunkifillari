import React, { useEffect, useState } from 'react';
import { Link, useParams } from "react-router-dom";
import styles from './stationInfo.module.scss';
import { observer } from 'mobx-react-lite';
import { useStores } from '../mst/rootStoreContext';
import { RootStoreSnapshot, Station } from '../mst';
import { getSnapshot, onSnapshot } from 'mobx-state-tree';
import { AiOutlineStar, AiTwotoneStar } from 'react-icons/ai';
import Search from './search';
import fillari from '../media/fillari192.png';

const StationInfo: React.FC = observer(() => {
  const [station, setStation] = useState<Station>();
  const [favorite, setFavorite] = useState<boolean>(false);
  
  const { addFavorite, delFavorite } = useStores();

  const [snap, setSnap] = useState<RootStoreSnapshot>(getSnapshot(useStores()));
  onSnapshot(useStores(), (newSnapshot) => setSnap(newSnapshot));

  const params = useParams<any>();
  const stationReq: string = params.stationId;

  useEffect(() => {
    const currentSation = snap.stations.find(x => x.id === stationReq);
    setStation(currentSation);

    if (!station) return;
    const inFavs = snap.favorites.find(x => x.name === station.name);
    setFavorite(!!inFavs);
    
  }, [snap.favorites, snap.stations, station, stationReq]);

  const handleFavorite = () => {
    if (!station) return;
    const inFavs = snap.favorites.find(x => x.name === station.name);
    setFavorite(!inFavs);
    inFavs ? delFavorite(station) : addFavorite(station);
  }

  const ActionItem = () => {
    return snap.favorites.length < 2
    ? (
      <Search displayHeader={false} />
    )
    : <button><Link to='/'>Valitse toinen asemat</Link></button>
  }

  return station
  ? (
      <div className={styles.container}>

        <div className={styles.header}>
          <Link to='/'><img src={fillari} alt='fillari'/></Link>
          {/* <u style={{color:'darkgreen'}}><h1 style={{marginTop:0, fontSize:'5vh', color:'#fff'}}>Omat kaupunkifillarit</h1></u> */}
          <span style={{display:'flex', flexDirection:'row', justifyContent:'center', alignItems:'center'}}>
            <h1 style={{color: 'azure', margin:0, fontSize:'5vh'}}>{station.name}</h1>
            <i onClick={() => handleFavorite()}>
              {
                favorite
                  ? <AiTwotoneStar size='32' color='yellow' />
                  : <AiOutlineStar size='32'/>
              }
            </i>
          </span>
          <p style={station.active ? {color: 'greenyellow', margin:0, textAlign:'center', fontSize:'15px'} : {color:'red', textAlign:'center', fontSize:'15px'}}>Asema {station.active ? 'on käytössä': 'ei ole käytössä'}</p>
        </div>

        <div className={styles.bikesAvailable}>
          <div className={styles.len}>
            <p>{station.bikesAvailable}</p>
          </div>
          <h1
            style={
              station.bikesAvailable < 1
              ? {color: '#bd0000', textShadow: '2px 2px #b59a9a'}
              : {color: 'snow', textShadow: '2px 2px #61a6e7'}
            }
          >
            Fillaria vapaana
          </h1>
        </div>

        <div className={styles.content}>
          <ActionItem /> {/* Search bar OR btn back */}
        </div>

        <div className={styles.footer}>
          <p>Asenna mobiilisovellus <Link to='/help'>OHJE</Link></p>
        </div>

      </div>
    )
  : (
      <div>
        {/* TODO add load indicator */}
        <p>NO_DATA</p> 
      </div>
    )
})

export default StationInfo;
