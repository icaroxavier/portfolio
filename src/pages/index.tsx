import React from 'react'
import Head from 'next/head'
import dynamic from 'next/dynamic'
import Base from '../components/Base'
import { Introducao } from '../styles/containers/Introducao'
import VoxelDogLoader from '../components/voxel-dog-loader'
const LazyVoxelDog = dynamic(() => import('../components/voxel-dog'), {
  ssr: false,
  loading: function load() {
    return <VoxelDogLoader />
  }
})

const Home: React.FC = () => {
  return (
    <Base>
      <Head>
        <title>Home - Xalo Dev</title>
      </Head>
      <Introducao>
        <div>
          <h1>Xalo Dev</h1>
        </div>
        <p>Full-Stack Web Develeper.</p>
        <LazyVoxelDog />
      </Introducao>
    </Base>
  )
}

export default Home
