import React from 'react'
import Head from 'next/head'
import dynamic from 'next/dynamic'
import Base from '../components/Base'
import { Introducao } from '../styles/containers/Introducao'
import VoxelDogLoader from '../components/voxel-dog-loader'
import { motion } from 'framer-motion'
const LazyVoxelDog = dynamic(() => import('../components/voxel-dog'), {
  ssr: false,
  loading: () => <VoxelDogLoader />
})

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.5
    }
  }
}

const itemH1 = {
  hidden: { opacity: 0 },
  show: { 
    opacity: 1, 
    transition: { delay: 0.3 }}
}

const itemP = {
  hidden: { opacity: 0 },
  show: { opacity: 1 }
}



const Home = () => {
  return (
    <Base>
      <Head>
        <title>Home - Xalo Dev</title>
      </Head>
      <Introducao>
        <motion.div 
          className='titulo'
          initial="hidden"
          animate="show"
          variants={container}
        >
          <motion.h1 variants={itemH1}>Xalo Dev</motion.h1>
          <motion.p variants={itemP}>Full-Stack Web Develeper.</motion.p>
        </motion.div>
        <LazyVoxelDog />
      </Introducao>
    </Base>
  )
}

export default Home
