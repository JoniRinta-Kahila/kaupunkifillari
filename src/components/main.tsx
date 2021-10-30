import { Autocomplete, TextField } from '@mui/material';
import React, { useState } from 'react';
import styles from './main.module.scss';
import { observer } from 'mobx-react-lite';
import { useStores } from '../mst/rootStoreContext';
import { Redirect } from 'react-router';

const Main: React.FC = observer(() => {
  const { stations} = useStores();
  const [redirectTo, setRedirectTo] = useState<string>();

  if (redirectTo) return <Redirect to={`station/${redirectTo}`} />

  const onlyUnique = (value:any, index:any, self: any) => {
    return self.indexOf(value) === index;
  }

  return (
    <div className={styles.container}>
      <h1 style={{color:'azure', textAlign:'center'}}>Kaupunkifillarit</h1>
      <Autocomplete
        disablePortal
        onChange={(e:any) => setRedirectTo(e.target.textContent)}
        id="combo-box-demo"
        options={stations.map(x => x.name).filter(onlyUnique)}
        sx={{ width: 300, background:'azure' }}
        renderInput={(params) => <TextField {...params} label="Valitse polkupyöräasema" />}
      />
    </div>
  )
})

export default Main;
