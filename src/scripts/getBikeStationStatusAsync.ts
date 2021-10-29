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
  const response = await fetch('https://kaupunkifillarit.fi/api/stations', {
    method: 'GET',
  });

  const {data, errors} = await response.json();
  if (response.ok) {
    const stations: IBikeStations = data;
    const station = stations.bikeRentalStations.find(x => x.name === stationName);
    return !!station
    ? station
    : Promise.reject(Error('The station name you entered cannot be found'));
  }
  const error = new Error(errors?.map((e: any) => e.message).join('\n') ?? 'unknown');
  Promise.reject(error);
};

export default GetBikeStationStatusAsync;
