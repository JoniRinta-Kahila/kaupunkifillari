import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Main from './components/main';
import StationInfo from './components/stationInfo';
import styles from './App.module.scss';


const App: React.FC = () => {
  return (
    <div className={styles.container}>
      <Switch>
        <Route exact path='/' component={Main} />
        <Route exact path='/station/:stationName' component={StationInfo} />
      </Switch>
    </div>
  )
}

export default App
