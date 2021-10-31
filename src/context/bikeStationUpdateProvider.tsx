import React, { useEffect } from 'react';
import { useStores } from '../mst/rootStoreContext';

type BikeStationUpdateProviderProps = {
  updateFrequency?: number, // ms
}

const BikeStationUpdateProvider: React.FC<BikeStationUpdateProviderProps> = ({updateFrequency = 120000, children}) => {

  const { fetchStationDataAsync } = useStores();
  
  useEffect(() => {
    // console.log('USEEFFECT')
    fetchStationDataAsync();
    const intervall = setInterval(() => {
      console.info('Updating data...');
      fetchStationDataAsync();
    }, updateFrequency);
    return () => clearInterval(intervall);    
  }, [fetchStationDataAsync, updateFrequency]);

  return (
    <div>
      {children}
    </div>
  )
}

export default BikeStationUpdateProvider;
