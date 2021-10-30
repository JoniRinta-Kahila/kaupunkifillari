import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import GetBikeStationStatusAsync, { IBikeStation } from '../scripts/getBikeStationStatusAsync';

const StationInfo: React.FC = () => {
  const params = useParams<any>();
  const stationReq: string = params.stationName;

  const [station, setStation] = useState<IBikeStation|null>();

  useEffect(() => {
    (async () => {
      try {
        const stat = await GetBikeStationStatusAsync(stationReq);
        setStation(stat);
        if (!stat) console.warn('Station is undefined');
      } catch (err) {
        console.error(err);
      }
    })();
  }, [stationReq]);

  return !!station
  ? (
      <div>
        <p>Station name: {station.name}</p>
        <p>Bikes available {station.bikesAvailable}</p>
        <p>Station capacity {station.bikesAvailable}</p>
      </div>
    )
  : (
      <div>
        <p>NO_DATA</p>
      </div>
    )
}

export default StationInfo;
