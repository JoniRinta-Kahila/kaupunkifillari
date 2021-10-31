import {
  Instance,
  SnapshotOut,
  types as t,
  flow
} from 'mobx-state-tree';

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
      try {
        const response: Response = yield fetch('https://us-central1-kaupunkifillarit-aed04.cloudfunctions.net/getStationsData', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({data:{}}),
        });
        const dataText = yield response.text();
        const data: Stations = JSON.parse(dataText);
        if (response.ok) {
          self.stations.replace(data.bikeRentalStations);
          return;
        }
        console.error('NOTHING TO FETCH');
      } catch (err) {
        console.error('MST:', err);
      }
    })
  }));

export interface Station extends Instance<typeof StationModel> { };
export interface StationSnapshot extends SnapshotOut<typeof StationModel> { };

export interface Stations extends Instance<typeof StationsModel> { };
export interface StationSnapshot extends SnapshotOut<typeof StationsModel> { };

export interface RootStore extends Instance<typeof RootStoreModel> { };
export interface RootStoreSnapshot extends SnapshotOut<typeof RootStoreModel> { };
