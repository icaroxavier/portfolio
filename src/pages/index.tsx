import React from 'react'
import Head from 'next/head'
import { motion } from 'framer-motion'

import { Container } from '../styles/pages/Home'
import { useRouter } from 'next/router'

const Home: React.FC = () => {
  const router = useRouter()

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
          scale: [1, 1.4, 1.2],
          rotate: [0, 10, -10, 0],
          filter: [
            'hue-rotate(0) contrast(100%)',
            'hue-rotate(360deg) contrast(200%)',
            'hue-rotate(45deg) contrast(300%)',
            'hue-rotate(0) contrast(100%)'
          ],
          transition: {
            duration: 0.5
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
        <h1 onClick={() => router.push('/teste')}>Xalo Dev</h1>
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
        Seja bem-vindo ao meu portfólio on-line!
      </motion.p>
    </Container>
  )
}

export default Home
