import React from 'react'
import Head from 'next/head'
import { motion } from 'framer-motion'
import { BaseLayoutContainer } from '../styles/containers/base-layout.style'
import { useRouter } from 'next/router'
import X from '../assets/x.svg'
import Image from 'next/image'


const Base = (props) => {
  const router = useRouter()

  const downloadCurriculo = () => {
    const elemento = document.createElement('a')
    //elemento.href = '/cv-icaro-gabriel.pdf'
    elemento.href = 'https://docs.google.com/document/d/1a7oAxJpBjAHajNZwD27PHtzeS7SNrYMh3J8Lwxb1NC8/edit?usp=sharing'
    elemento.target = '_blank'
    elemento.setAttribute('download', 'cv-icaro-gabriel.pdf')
    elemento.click()
  }

  return (
    <BaseLayoutContainer>
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
          <X onClick={() => router.push('/')} />
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
            Meu Currículo
          </motion.button>
          <motion.button
            onClick={() => router.push('/contact')}
            whileHover={{
              position: 'relative',
              zIndex: 1,
              scale: 1.1,
              transition: {
                duration: 0.2
              }
            }}
          >
            Entre em contato
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
              <Image layout='fill' src='/linkedin.png' alt='linkedin logo'></Image>
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
                <Image layout='fill' src='/github.png' alt='github logo'></Image>
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
              <Image layout='fill' src='/whatsapp.png' alt='whatsapp logo'></Image>
            </div>
          </motion.a>
        </div>
        <span>© 2021 Xalo Dev. Todos os direitos reservados.</span>
      </footer>
    </BaseLayoutContainer>
  )
}

export default Base
