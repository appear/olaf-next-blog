import React from 'react'
import { AppProps, Container } from 'next/app'
import Head from 'next/head'

import ResetStyles from '../src/components/reset-styles'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Container>
      <Head>
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdn.jsdelivr.net/gh/moonspam/NanumSquare@1.0/nanumsquare.css"
        />
      </Head>
      <ResetStyles />
      <Component {...pageProps} />
    </Container>
  )
}

export default MyApp
