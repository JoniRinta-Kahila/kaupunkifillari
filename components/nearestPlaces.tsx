import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { useLocationContext } from '../context/locationContextProvider';
import { observer } from 'mobx-react-lite';
import { getSnapshot, onSnapshot } from 'mobx-state-tree';
import { RootStoreSnapshot, Station } from '../mst';
import { useStores } from '../mst/rootStoreContext';
import CalcDistance from '../helpers/calcDistance';

type NearestPlacesProps = {
  nPlacesToDisplay?: number,
}

const NearestPlaces: React.FC<NearestPlacesProps> = observer(({ nPlacesToDisplay = 3 }) => {
  const [snap, setSnap] = useState<RootStoreSnapshot>(getSnapshot(useStores()));
  onSnapshot(useStores(), (newSnapshot) => setSnap(newSnapshot));

  const { location } = useLocationContext();
  const [nearPlaces, setNearPlaces] = useState<Station[]>([]);

  // find nearest stations
  useEffect(() => {
    if (!location) return
    const sorted = snap.stations.slice()
      .sort((pos1, pos2) => CalcDistance(location, { lat: pos1.lat, lon: pos1.lon }) - CalcDistance(location, { lat: pos2.lat, lon: pos2.lon }))
      .slice(0, nPlacesToDisplay);
    setNearPlaces(sorted);
  }, [location, nPlacesToDisplay, snap.stations]);

  return (
    <div>
      <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'center' }}>
        {
          nearPlaces.map(x => {
            return (
              <Link
                key={x.id}
                style={
                  {
                    background: 'azure',
                    margin: '5px 3px',
                    padding: '3px 5px',
                    borderRadius: '5px',
                    textDecoration: 'none',
                    color: 'black'
                  }}
                href={`/station/${x.id}`}
              >{x.name}</Link>
            )
          })
        }
      </div>
    </div>
  )
})

export default NearestPlaces
