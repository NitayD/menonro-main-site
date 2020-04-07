import React, { Component } from 'react'
import Head from 'next/head'
import FirstScreen from '../components/FirstScreen/FirstScreen'

import Layout from '../components/Layout/Layout'

class Home extends Component {

  render() {
    return (
      <Layout>
        <Head>
          <title>Menonro</title>
        </Head>
        <FirstScreen />
      </Layout>
    )
  }
}

export default Home
