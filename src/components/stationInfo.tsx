import React, { useEffect, useState } from 'react';
import { Link, useParams } from "react-router-dom";
import styles from './stationInfo.module.scss';
import { observer } from 'mobx-react-lite';
import { useStores } from '../mst/rootStoreContext';
import { RootStoreSnapshot, Station } from '../mst';
import { getSnapshot, onSnapshot } from 'mobx-state-tree';
import { AiOutlineStar, AiTwotoneStar } from 'react-icons/ai';
import Search from './search';

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
        <span style={{display:'flex', flexDirection:'row', justifyContent:'center', alignItems:'center'}}>
          <h1 style={{color: 'azure'}}>{station.name}</h1>
          <i onClick={() => handleFavorite()}>
            {
              favorite
                ? <AiTwotoneStar size='32' color='yellow' />
                : <AiOutlineStar size='32'/>
            }
          </i>
        </span>

        <div>
          <p
            style={
              station.bikesAvailable < 1
              ? {color: 'red'}
              : {color: 'snow'}
            }
          >
            Fillareita vapaana {station.bikesAvailable}
            {/* / {station.spacesAvailable} */}
          </p>
          <p style={station.active ? {color: 'greenyellow'} : {color:'red'}}>Asema {station.active ? 'on käytössä': 'ei ole käytössä'}</p>

          {/* Search bar OR btn back */}
          <ActionItem />
        </div>
      </div>
    )
  : (
      <div>
        <p>NO_DATA</p>
      </div>
    )
})

export default StationInfo;
