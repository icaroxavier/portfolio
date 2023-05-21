import { AppProps } from 'next/app';

import '@portfolio/styles/globals.css'

export default function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
