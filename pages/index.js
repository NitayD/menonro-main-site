import React, { Component } from 'react'
import Head from 'next/head'
import Nav from '../components/nav'
import PreviewLogo from '../components/PreviewLogo/PreviewLogo'

import Layout from '../components/Layout/Layout'

class Home extends Component {
  render() {
    return (
      <Layout>
        <div>
          <Head>
            <title>Menonro</title>
          </Head>
          <Nav />
          <PreviewLogo />
          <style jsx>{`
          `}</style>
        </div>
      </Layout>
    )
  }
}

export default Home
