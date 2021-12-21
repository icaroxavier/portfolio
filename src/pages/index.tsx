import React from 'react'
import Head from 'next/head'
import { motion } from 'framer-motion'
import Base from '../components/Base'
import { Introducao } from '../styles/containers/Introducao'

const Home: React.FC = () => {
  return (
    <Base>
      <Head>
        <title>Home - Xalo Dev</title>
      </Head>
      <Introducao>
        <motion.div
          initial="hidden"
          animate="visible"
          whileHover={{
            position: 'relative',
            zIndex: 1,
            scale: 1.2,
            transition: {
              duration: 0.2
            }
          }}
          variants={{
            hidden: {
              scale: 0.8,
              opacity: 0
            },
            visible: {
              scale: 1,
              opacity: 1,
              transition: {
                delay: 0.4
              }
            }
          }}
        >
          <h1>Xalo Dev</h1>
        </motion.div>
        <motion.p
          initial="hidden"
          animate="visible"
          whileHover={{
            position: 'relative',
            zIndex: 1,
            scale: 1.2,
            transition: {
              duration: 0.2
            }
          }}
          variants={{
            hidden: {
              scale: 0.8,
              opacity: 0
            },
            visible: {
              scale: 1,
              opacity: 1,
              transition: {
                delay: 0.4
              }
            }
          }}
        >
          Full-Stack Web Develeper.
        </motion.p>
      </Introducao>
    </Base>
  )
}

export default Home
