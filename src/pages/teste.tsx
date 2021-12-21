import React from 'react'
import Head from 'next/head'

import { Container } from '../styles/components/Base'
import { useRouter } from 'next/router'

const Home: React.FC = () => {
  const router = useRouter()

  return (
    <Container>
      <Head>
        <title>Xalo Dev</title>
      </Head>
      <div>
        <h1 onClick={() => router.push('/')}>Teste</h1>
      </div>
      <p>Testando!</p>
    </Container>
  )
}

export default Home
