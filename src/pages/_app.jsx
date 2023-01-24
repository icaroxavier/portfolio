import React from 'react'
import { ThemeProvider } from 'styled-components'
import { motion, AnimatePresence } from 'framer-motion'
import { ChakraProvider } from '@chakra-ui/react'
import AlertTemplate from 'react-alert-template-basic'
import { transitions, positions, Provider as AlertProvider } from 'react-alert'

import GlobalStyle from '../styles/global.style'
import theme from '../styles/theme'

const options = {
 
  position: positions.TOP_CENTER,
  timeout: 5000,
  offset: '30px',
  
  transition: transitions.SCALE
}


const MyApp = ({ Component, pageProps }) => {
  return (
    <ChakraProvider>
      <ThemeProvider theme={theme}>
        <AnimatePresence exitBeforeEnter>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            variants={{
              initial: {
                scale: 0.8,
                opacity: 0
              },
              animate: {
                scale: 1,
                opacity: 1,
                transition: {
                  delay: 0.4
                }
              }
            }}
          >
            <AlertProvider template={AlertTemplate} {...options}>
              <Component {...pageProps} />
            </AlertProvider>
          </motion.div>
        </AnimatePresence>
        <GlobalStyle />
      </ThemeProvider>
    </ChakraProvider>
  )
}

export default MyApp
