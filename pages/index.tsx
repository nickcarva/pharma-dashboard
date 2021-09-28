import type { NextPage } from 'next'
import Head from 'next/head'

import Header from '../components/Header'

const Home: NextPage = () => {
  return (
    <div className="min-w-screen min-h-screen bg-gray-200">
      <Head>
        <title>Pharma Inc - Dashboard</title>
        <meta name="description" content="Pacient list - Pharma Inc" />
      </Head>

      <Header />
    </div>
  )
}

export default Home
