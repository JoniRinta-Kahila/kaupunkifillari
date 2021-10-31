import {
  Instance,
  SnapshotOut,
  types as t,
  flow
} from 'mobx-state-tree';
import * as functions from 'firebase/functions';
import FirebaseServices from '../firebase/firebaseService';

export const StationModel = t.model('Station', {
  id: t.string,
  lat: t.number,
  lon: t.number,
  name: t.string,
  bikesAvailable: t.number,
  spacesAvailable: t.number,
  active: t.boolean,
});

export const StationsModel = t.model('Stations', {
  bikeRentalStations: t.array(StationModel),
});

export const RootStoreModel = t
  .model('Root', {
    stations: t.array(StationModel),
    favorites: t.array(StationModel),
  })
  .actions(self => ({
    addFavorite(station: Station) {
      const exists = self.favorites.find(x => x.name === station.name);
      if (exists) {
        console.info(station.name, 'is allready in favorites');
        return;
      }
      self.favorites.push(station);
    },
    delFavorite(station: Station) {
      const exists = self.favorites.find(x => x.name === station.name);
      if (!exists) {
        console.info(station.name, 'is not part of favoritelist');
        return;
      }
      self.favorites.replace(self.favorites.filter(x => x.name !== station.name));
    },
    fetchStationDataAsync: flow(function* () {
      const functionsInstance = FirebaseServices.getFunctionsInstance();
      const endpointCall: () => Promise<functions.HttpsCallableResult<Stations>> = functions.httpsCallable(functionsInstance, 'getStationsData', {timeout: 70000});
      const data = endpointCall()
        .then(data => data);
      const result = (yield data).data;
      self.stations.replace(result.bikeRentalStations);
    })
  }));

export interface Station extends Instance<typeof StationModel> { };
export interface StationSnapshot extends SnapshotOut<typeof StationModel> { };

export interface Stations extends Instance<typeof StationsModel> { };
export interface StationSnapshot extends SnapshotOut<typeof StationsModel> { };

export interface RootStore extends Instance<typeof RootStoreModel> { };
export interface RootStoreSnapshot extends SnapshotOut<typeof RootStoreModel> { };
