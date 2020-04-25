import React, { Component } from 'react'
import Head from 'next/head'
import Layout from '../components/Layout/Layout'

import Header from '../components/Layout/Header'
import BiographyGrid from '../components/Biography/BiographyGrid'

class About extends Component {

  render() {
    return (
      <Layout>
        <Head>
          <title>Биография - Menonro</title>
        </Head>
        <Header title="Биография"/>
        <BiographyGrid />
      </Layout>
    )
  }
}

export default About
