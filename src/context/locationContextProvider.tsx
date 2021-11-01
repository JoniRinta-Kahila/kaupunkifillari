import React, { createContext, useContext, useEffect, useState } from 'react';

interface ILocationContext {
  location: {
    lat: number;
    lon: number;
  } | undefined;
}

const LocationContext = createContext<ILocationContext|undefined>(undefined);

export const useLocationContext = () => {
  const context = useContext(LocationContext);

  if (context === undefined) {
    throw new Error('Call "useLocationContext" only inside a LocationContextProvider')
  }

  return context;
}

const LocationContextProvider: React.FC = ({children}) => {
  const [location, setLocation] = useState<{lat: number, lon: number}>()
  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      setLocation({
        lat: position.coords.latitude,
        lon: position.coords.longitude,
      });
    })
  }, []);
  return (
    <LocationContext.Provider value={{location: location}}>
      {children}
    </LocationContext.Provider>
  )
}

export default LocationContextProvider;
