import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { RootStoreProvider } from '../mst/rootStoreContext'
import { useEffect, useState } from 'react'
import { RootStore } from '../mst'
import { setupRootStore } from '../mst/setup'
import BikeStationUpdateProvider from '../context/bikeStationUpdateProvider'
import LocationContextProvider from '../context/locationContextProvider'

export default function App({ Component, pageProps }: AppProps) {
  const [rootTree, setRootTree] = useState<RootStore>()
  useEffect(() => setRootTree(setupRootStore()), [])

  if (!rootTree) return null

  return (
    <RootStoreProvider value={rootTree}>
      <LocationContextProvider>
        <BikeStationUpdateProvider>
          <Component {...pageProps} />
        </BikeStationUpdateProvider>
      </LocationContextProvider>
    </RootStoreProvider>
  )
}
