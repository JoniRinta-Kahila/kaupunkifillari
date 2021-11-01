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
import Help from './components/help';
import CookieConsent from "react-cookie-consent";
import LocationContextProvider from './context/locationContextProvider';

const App: React.FC = () => {
  const [rootTree, setRootTree] = useState<RootStore|undefined>();
  useEffect(() => {
    setRootTree(setupRootStore());
  }, []);

  if (!rootTree) return null; //activityindicator;

  return (
    <RootStoreProvider value={rootTree}>
      <LocationContextProvider>
        <BikeStationUpdateProvider>
          <div className={styles.container}>
            <Switch>
              <Route exact path='/' component={Main} />
              <Route exact path='/search' component ={Search} />
              <Route exact path='/station/:stationId' component={StationInfo} />
              <Route exact path='/help' component={Help} />
            </Switch>
            <CookieConsent
              buttonText='Ymmärrän'
              location='bottom'
              visible="byCookieValue"
            >
              Omat kaupunkifillarit käyttää keksejä paremman käyttökokemuksen luomiseen. Lisää tietoa evästeistä voit lukea täällä <a href='https://policies.google.com/technologies/cookies?hl=fi-FI'>Googlen evästekäytäntö</a>
            </CookieConsent>
          </div>
        </BikeStationUpdateProvider>
      </LocationContextProvider>
    </RootStoreProvider>
  )
}

export default App;
