import React from 'react'
import Head from 'next/head'
import Nav from '../components/nav'
import PreviewLogo from '../components/PreviewLogo/PreviewLogo'

const Home = () => (
  <div>
    <Head>
      <title>Menonro</title>
    </Head>

    <Nav />
    <PreviewLogo/>

    <style jsx>{`
    `}</style>
  </div>
)

export default Home
