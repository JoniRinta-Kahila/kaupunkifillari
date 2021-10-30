import React from 'react';
import Favorites from './favorites';
import Search from './search';

type MainProps = {

}

const Main: React.FC<MainProps> = () => {
  return (
    <div>
      <Search />
      <Favorites />
    </div>
  )
}

export default Main;
