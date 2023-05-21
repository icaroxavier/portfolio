import React from 'react'
import { ThemeProvider } from 'styled-components'
import { motion, AnimatePresence } from 'framer-motion'
import { ChakraProvider } from '@chakra-ui/react'
import AlertTemplate from 'react-alert-template-basic'
import { transitions, positions, Provider as AlertProvider } from 'react-alert'
import Script from 'next/script'

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
    <>
      <Script strategy="afterInteractive" src="https://www.googletagmanager.com/gtag/js?id=G-2LMYJ359V4"/>
      <Script
        id='google-analytics'
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-2LMYJ359V4', {
            page_path: window.location.pathname,
            });
          `,
        }}
    />
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
    </>
  )
}

export default MyApp
