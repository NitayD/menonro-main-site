import React, { Component } from 'react'
import Head from 'next/head'
import Layout from '../components/Layout/Layout'

class About extends Component {

  render() {
    return (
      <Layout>
        <Head>
          <title>Обо мне - Menonro</title>
        </Head>
        <Cases />
      </Layout>
    )
  }
}

export default About
