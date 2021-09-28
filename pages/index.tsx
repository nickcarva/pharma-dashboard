import type { NextPage } from 'next'
import Head from 'next/head'

import Header from '../components/Header'
import Main from '../components/Main'
import PacientList from '../components/PacientList'

const Home: NextPage = () => {
  return (
    <div className="min-h-screen bg-gray-200">
      <Head>
        <title>Pharma Inc - Dashboard</title>
        <meta name="description" content="Pacient list - Pharma Inc" />
      </Head>

      <Header />

      <Main>
        <PacientList />
      </Main>
    </div>
  )
}

export default Home
