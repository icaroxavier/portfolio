import React from 'react'
import { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'
import { motion } from 'framer-motion'

import GlobalStyle from '../styles/global'
import theme from '../styles/theme'

const MyApp: React.FC<AppProps> = ({ Component, pageProps, router }) => {
  return (
    <ThemeProvider theme={theme}>
      <motion.div
        key={router.route}
        initial="pageInitital"
        animate="pageAnimate"
        variants={{
          pageInitial: {
            opacity: 0
          },
          pageAnimate: {
            opacity: 1
          }
        }}
      >
        <Component {...pageProps} />
      </motion.div>
      <GlobalStyle />
    </ThemeProvider>
  )
}

export default MyApp
