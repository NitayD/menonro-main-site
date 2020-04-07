import React, { Component } from 'react'
import Head from 'next/head'
import Layout from '../components/Layout/Layout'

import Cases from '../components/Cases/Cases'

class Home extends Component {

  render() {
    return (
      <Layout>
        <Head>
          <title>Menonro</title>
        </Head>
        <Cases />
      </Layout>
    )
  }
}

export default Home
