import type { AppProps } from 'next/app'

import '../services/fontawesome'

import '../styles/globals.css'

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp
