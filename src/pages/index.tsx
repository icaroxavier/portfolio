import React from 'react'
import Head from 'next/head'
import { motion } from 'framer-motion'

import { Container } from '../styles/pages/Home'
import { useRouter } from 'next/router'
import IconeX from '../assets/x.svg'

const Home: React.FC = () => {
  const router = useRouter()

  return (
    <Container>
      <Head>
        <title>Xalo Dev</title>
      </Head>
      <header>
        <div className="fundoHeader" />
        <IconeX />
        <div className="botoes">
          <motion.button
            whileHover={{
              position: 'relative',
              zIndex: 1,
              scale: 1.1,
              transition: {
                duration: 0.2
              }
            }}
          >
            Meu CV
          </motion.button>
          <motion.button
            whileHover={{
              position: 'relative',
              zIndex: 1,
              scale: 1.1,
              transition: {
                duration: 0.2
              }
            }}
          >
            Entre em contato!
          </motion.button>
        </div>
      </header>
      <div className="introducao">
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
          Full-Stack Web Develeper.
        </motion.p>
      </div>
    </Container>
  )
}

export default Home
