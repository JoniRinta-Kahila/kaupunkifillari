export interface IBikeStation {
  id: string,
  lat: number,
  lon: number,
  name: string,
  bikesAvailable: number,
  spacesAvailable: number,
  active: boolean,
  fetchTime?: number,
}

export interface IBikeStations {
  bikeRentalStations: IBikeStation[],
}

/**
 * 
 * @param stationName The name of the bicycle station.
 * @returns IBikeStation
 */
const GetBikeStationStatusAsync = async (stationName: string) => {
  const response = await fetch('https://us-central1-kaupunkifillarit-aed04.cloudfunctions.net/api/getStations', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });

  const dataText = await response.text();
  console.log(dataText);
  const data: IBikeStations = JSON.parse(dataText);
  if (response.ok) {
    const stations: IBikeStations = data;
    const station = stations.bikeRentalStations.find(x => x.name === stationName);
    console.log('station', station)
    return !!station
    ? station
    : Promise.reject(Error('The station name you entered cannot be found'));
  }
  Promise.reject(new Error('ERROR'));
};

export default GetBikeStationStatusAsync;
