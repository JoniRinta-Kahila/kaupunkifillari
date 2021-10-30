import React, { useEffect, useState } from 'react';
import { Link, useParams } from "react-router-dom";
import styles from './stationInfo.module.scss';
import { observer } from 'mobx-react-lite';
import { useStores } from '../mst/rootStoreContext';
import { RootStoreSnapshot, Station } from '../mst';
import { getSnapshot, onSnapshot } from 'mobx-state-tree';

const StationInfo: React.FC = observer(() => {
  const [station, setStation] = useState<Station>();
  const [snap, setSnap] = useState<RootStoreSnapshot>(getSnapshot(useStores()));
  onSnapshot(useStores(), (newSnapshot) => setSnap(newSnapshot));

  const params = useParams<any>();
  const stationReq: string = params.stationName;

  useEffect(() => {
    setStation(snap.stations.find(x => x.name === stationReq))
  }, [snap.stations, stationReq]);

  return !!station
  ? (
      <div className={styles.container}>
        <h1 style={{color: 'azure'}}>{station.name}</h1>
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
        <button>
          <Link to='/'> Valitse toinen asema </Link>
        </button>
      </div>
    )
  : (
      <div>
        <p>NO_DATA</p>
      </div>
    )
})

export default StationInfo;
