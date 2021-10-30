import React, { useEffect } from 'react';
import { useStores } from '../mst/rootStoreContext';

const BikeStationUpdateProvider: React.FC = ({children}) => {

  const { fetchStationDataAsync } = useStores();
  
  useEffect(() => {
    console.log('USEEFFECT')
    fetchStationDataAsync();
    const intervall = setInterval(() => {
      console.info('Updating data...');
      fetchStationDataAsync();
    }, 60000);
    return () => clearInterval(intervall);    
  }, [fetchStationDataAsync]);

  return (
    <div>
      {children}
    </div>
  )
}

export default BikeStationUpdateProvider;
