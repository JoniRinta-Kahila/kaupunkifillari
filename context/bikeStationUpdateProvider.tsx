import React, { useEffect } from 'react';
import { useStores } from '../mst/rootStoreContext';

type BikeStationUpdateProviderProps = {
  updateFrequency?: number, // ms
  children: JSX.Element | JSX.Element[]
}

const BikeStationUpdateProvider: React.FC<BikeStationUpdateProviderProps> = ({updateFrequency = 120000, children}) => {

  const { fetchStationDataAsync } = useStores();
  
  useEffect(() => {
    // console.log('USEEFFECT')
    fetchStationDataAsync();
    const intervall = setInterval(() => {
      fetchStationDataAsync();
    }, updateFrequency);
    return () => clearInterval(intervall);    
  }, [fetchStationDataAsync, updateFrequency])

  return (
    <div>
      {children}
    </div>
  )
}

export default BikeStationUpdateProvider
