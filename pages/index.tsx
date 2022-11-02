import Head from 'next/head'
import Image from 'next/image'
import Favorites from '../components/favorites'
import NearestPlaces from '../components/nearestPlaces'
import Search from '../components/search'
import styles from '../styles/index.module.scss'
import fillari from '../media/fillari192.png'

export default function Home() {
  return (
    <div className={styles.container}>
      <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
        <Image src={fillari} alt='fillari' />
      </div>
      <NearestPlaces />
      <Search displayHeader={false} />
      <Favorites />
    </div>
  )
}
