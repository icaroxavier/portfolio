import React from 'react'
import Head from 'next/head'
import { motion } from 'framer-motion'

import { Container } from '../styles/pages/Home'

const Home: React.FC = () => {
  return (
    <Container>
      <Head>
        <title>Xalo Dev</title>
      </Head>
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
        whileHover={{
          position: 'relative',
          zIndex: 1,
          scale: 1.2,
          transition: {
            duration: 0.2
          }
        }}
      >
        Seja bem-vindo ao meu portfólio on-line!
      </motion.p>
    </Container>
  )
}

export default Home
