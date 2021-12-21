import React from 'react'
import { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'
import { motion, AnimatePresence } from 'framer-motion'
import { ChakraProvider } from '@chakra-ui/react'

import GlobalStyle from '../styles/global'
import theme from '../styles/theme'

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
            <Component {...pageProps} />
          </motion.div>
        </AnimatePresence>
        <GlobalStyle />
      </ThemeProvider>
    </ChakraProvider>
  )
}

export default MyApp