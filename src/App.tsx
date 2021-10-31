import React, { useEffect, useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import Main from './components/main';
import StationInfo from './components/stationInfo';
import styles from './App.module.scss';
import { RootStore } from './mst';
import { setupRootStore } from './mst/setup';
import { RootStoreProvider } from './mst/rootStoreContext';
import BikeStationUpdateProvider from './context/bikeStationUpdateProvider';
import Search from './components/search';

const App: React.FC = () => {
  const [rootTree, setRootTree] = useState<RootStore|undefined>();
  useEffect(() => {
    setRootTree(setupRootStore());
  }, []);

  if (!rootTree) return null; //activityindicator;

  return (
    <RootStoreProvider value={rootTree}>
      <BikeStationUpdateProvider>
        <div className={styles.container}>
          <Switch>
            <Route exact path='/' component={Main} />
            <Route exact path='/search' component ={Search} />
            <Route exact path='/station/:stationId' component={StationInfo} />
          </Switch>
        </div>
      </BikeStationUpdateProvider>
    </RootStoreProvider>
  )
}

export default App;
