import React from 'react'
import Head from 'next/head'
import { motion } from 'framer-motion'
import { BaseLayoutContainer } from '../styles/containers/base-layout.style'
import { useRouter } from 'next/router'
import Image from 'next/image'

const Base = (props) => {
  const router = useRouter()

  return (
    <BaseLayoutContainer>
      <Head>
        <title>Xalo Dev</title>
      </Head>
      <header>
        <motion.div
          style={{ width: 'fit-content' }}
          whileHover={{
            position: 'relative',
            zIndex: 1,
            scale: 1.1,
            transition: {
              duration: 0.3
            }
          }}
        >
          <h1 onClick={() => router.push('/')}  className="titulo" style={{ height: '100%', fontSize: '40px', justifyContent: 'center', alignItems: 'center', cursor: 'pointer'}}>Xalo Dev</h1>
        </motion.div>

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
            <a href='#contatos'>Entre em contato</a>
          </motion.button>
        </div>
      </header>
      <main>{props.children}</main>
      <footer style={{marginTop: '5vh'}}>
        <div className='containerImages'>
          <motion.a 
            className='divImage' 
            rel='noreferrer' 
            href='https://www.linkedin.com/in/%C3%ADcaro-gabriel-67148b1ba/' 
            target="_blank"
            whileHover={{
              position: 'relative',
              zIndex: 1,
              scale: 1.1,
              transition: {
                duration: 0.2
              }
            }}
          >
            <div style={{width: '3vh', height: '3vh', position: 'relative'}}>
              <Image layout='fill' src='/linkedin.png' alt='linkedin logo' priority></Image>
            </div>
          </motion.a>
          <motion.a  
            className='divImage' 
            rel='noreferrer' 
            href='https://github.com/XaloDev' 
            target="_blank"
            whileHover={{
              position: 'relative',
              zIndex: 1,
              scale: 1.1,
              transition: {
                duration: 0.2
              }
            }}
          >
            <div style={{width: '3vh', height: '3vh', position: 'relative'}}>
                <Image layout='fill' src='/github.png' alt='github logo' priority></Image>
            </div>
          </motion.a>
          <motion.a  
            className='divImage' 
            rel='noreferrer' 
            href='https://wa.me/5585998164001?text=Oi,%20tudo%20bem?' 
            target="_blank"
            whileHover={{
              position: 'relative',
              zIndex: 1,
              scale: 1.1,
              transition: {
                duration: 0.2
              }
            }}
          >
            <div style={{width: '3vh', height: '3vh', position: 'relative'}}>
              <Image layout='fill' src='/whatsapp.png' alt='whatsapp logo' priority></Image>
            </div>
          </motion.a>
        </div>
        <span>© {new Date().getFullYear} Xalo Dev. Todos os direitos reservados.</span>
      </footer>
    </BaseLayoutContainer>
  )
}

export default Base
