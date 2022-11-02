import { Autocomplete, TextField } from '@mui/material'
import React, { useState } from 'react'
import styles from '../styles/search.module.scss'
import { observer } from 'mobx-react-lite'
import { useStores } from '../mst/rootStoreContext'
import { Station, StationModel, StationSnapshot } from '../mst'
import { IModelType } from 'mobx-state-tree'
//import { Redirect } from 'react-router'
import { useRouter } from 'next/router'

type SearchProps = {
  displayHeader?: boolean,
}

const Search: React.FC<SearchProps> = observer(({displayHeader = true}) => {
  const { stations } = useStores();
  const router = useRouter();
  //const [redirectTo, setRedirectTo] = useState<string>();

  //if (redirectTo) return <Redirect to={`/station/${redirectTo}`} />

  const onlyUnique = (value:any, index:any, self: any) => {
    return self.indexOf(value) === index;
  }

  const handleChange = (id?: string) => {
    if (!id) return;

    router.push(`/station/${id}`)
  }

  return (
    <div className={styles.container}>
      {
        displayHeader
        ? <h1 style={{color:'azure', textAlign:'center'}}>Omat kaupunkifillarit</h1>
        : null
      }
      <Autocomplete
        onChange={(event, value) => handleChange(value?.id)}
        renderOption={(props, option, asd) => {
          return (
            <li {...props} key={option.id}>
              {option.name}
            </li>
          )
        }}
        disablePortal
        //onChange={(e, a) => setRedirectTo(a?.id)}
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