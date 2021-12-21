import React from 'react'
import Head from 'next/head'
import { motion } from 'framer-motion'
import { Container } from '../styles/components/Base'
import { useRouter } from 'next/router'
import IconeX from '../assets/x.svg'
import Image from 'next/image'


const Base = (props) => {
  const router = useRouter()

  const downloadCurriculo = () => {
    const elemento = document.createElement('a')
    elemento.href = '/curriculo-xalo-dev.pdf'
    elemento.setAttribute('download', 'curriculo-xalo-dev.pdf')
    elemento.click()
  }

  return (
    <Container>
      <Head>
        <title>Xalo Dev</title>
      </Head>
      <header>
        <motion.div
          style={{ width: 'min-content' }}
          whileHover={{
            position: 'relative',

            zIndex: 1,
            scale: 1.1,
            transition: {
              duration: 0.3
            }
          }}
        >
          <IconeX onClick={() => router.push('/')} />
        </motion.div>

        <div className="botoes">
          <motion.button
            onClick={downloadCurriculo}
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
            onClick={() => router.push('/contato')}
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
      <main>{props.children}</main>
      <footer>
        <div className='containerImages'>
          <div className='divImage'>
            <div style={{width: '3vh', height: '3vh', position: 'relative'}}>
              <Image layout='fill' src='/linkedin.png' alt='linkedin logo'></Image>
            </div>
          </div>
          <div className='divImage'>
            <div style={{width: '3vh', height: '3vh', position: 'relative'}}>
                <Image layout='fill' src='/mail.png' alt='mail logo'></Image>
            </div>
          </div>
          <div className='divImage'>
            <div style={{width: '3vh', height: '3vh', position: 'relative'}}>
              <Image layout='fill' src='/whatsapp.png' alt='whatsapp logo'></Image>
            </div>
          </div>
        </div>
        <span>© 2021 Xalo Dev. Todos os direitos reservados.</span>
      </footer>
    </Container>
  )
}

export default Base
