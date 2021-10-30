import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Main from './components/main';
import StationInfo from './components/stationInfo';


const App: React.FC = () => {
  return (
    <Switch>
      <Route exact path='/' component={Main} />
      <Route exact path='/station/:stationName' component={StationInfo} />
    </Switch>
  )
}

export default App
