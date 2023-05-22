import { AppProps } from 'next/app';

import '@portfolio/styles/globals.css'
import Script from 'next/script';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Script
        async
        strategy='afterInteractive'
        src="https://www.googletagmanager.com/gtag/js?id=G-1T7PJKTWL8"
      />
      <Script id='google-analytics' strategy='afterInteractive'>
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-1T7PJKTWL8');
        `}
      </Script>
      <Component {...pageProps} />
    </>
  )
}
