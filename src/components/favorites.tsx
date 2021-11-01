import React, { useEffect, useState } from 'react';
import { RootStoreSnapshot, Station } from '../mst';
import { getSnapshot, onSnapshot } from 'mobx-state-tree';
import { useStores } from '../mst/rootStoreContext';
import { Link, Redirect } from 'react-router-dom';

const Favorites: React.FC = () => {
  const [favs, setFavs] = useState<Station[]>([]);
  const [snap, setSnap] = useState<RootStoreSnapshot>(getSnapshot(useStores()));
  onSnapshot(useStores(), (newSnapshot) => setSnap(newSnapshot));

  useEffect(() => {

    const favoriteStations = snap.stations.filter(s => {
      const fav = snap.favorites.find(f => f.name === s.name);
      return s.name === fav?.name
    });
    setFavs(favoriteStations);
  }, [snap]);

  return snap.favorites.length > 1 ? (
    <div style={{display:'flex', flexDirection:'row', flexWrap:'wrap', width:'300px', margin:'8px'}}>
      {
        favs.map(x => {
          return (
            <div key={x.id} style={{background: 'azure', width:'fit-content', padding:'3px 5px', borderRadius:'5px', margin:'5px'}}>
              <Link style={{color:'black', textDecoration:'none', fontSize:'20px'}} to={`station/${x.id}`}>{`${x.name}: ${x.bikesAvailable}`}</Link>
            </div>
          )
        })
      }
    </div>
  )
  : snap.favorites.length === 1 ? <Redirect to={`station/${snap.favorites[0].id}`}/> : null
}

export default Favorites;
