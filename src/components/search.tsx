import { Autocomplete, TextField } from '@mui/material';
import React, { useState } from 'react';
import styles from './search.module.scss';
import { observer } from 'mobx-react-lite';
import { useStores } from '../mst/rootStoreContext';
import { Redirect } from 'react-router';

type SearchProps = {
  displayHeader?: boolean,
}

const Search: React.FC<SearchProps> = observer(({displayHeader = true}) => {
  const { stations } = useStores();
  const [redirectTo, setRedirectTo] = useState<string>();

  if (redirectTo) return <Redirect to={`/station/${redirectTo}`} />

  const onlyUnique = (value:any, index:any, self: any) => {
    return self.indexOf(value) === index;
  }

  return (
    <div className={styles.container}>

      {
        displayHeader
        ? <h1 style={{color:'azure', textAlign:'center'}}>Kaupunkifillarit</h1>
        : null
      }
      <Autocomplete
        renderOption={(props, option, asd) => {
          return (
            <li {...props} key={option.id}>
              {option.name}
            </li>
          )
        }}
        disablePortal
        onChange={(e, a) => setRedirectTo(a?.id)}
        getOptionLabel={(option) => option.name}
        id="combo-box-demo"
        // options={stations.map(x => x.name).filter(onlyUnique)}
        options={stations.map(x => x).filter(onlyUnique)}
        sx={{ width: 300, background:'azure' }}
        renderInput={(params) => <TextField {...params} label="Valitse polkupyöräasema" />}
      />
    </div>
  )
})

export default Search;
