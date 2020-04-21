import React, { Component } from 'react'
import Head from 'next/head'
import Layout from '../components/Layout/Layout'

import Header from '../components/Layout/Header'
import AboutGrid from '../components/About/AboutGrid'

class About extends Component {

  render() {
    return (
      <Layout>
        <Head>
          <title>Обо мне - Menonro</title>
        </Head>
        <Header title="Обо мне"/>
        <AboutGrid />
      </Layout>
    )
  }
}

export default About
