import React, { Component } from 'react'
import Head from 'next/head'
import PreviewLogo from '../components/PreviewLogo/PreviewLogo'
import FirstScreen from '../components/FirstScreen/FirstScreen'

import Layout from '../components/Layout/Layout'

class Home extends Component {
  constructor () {
    super()
  }

  componentDidMount() {
    if (window.pageYOffset < 100) {
      window.addEventListener('scroll', this.handleScroll)
    }
  }
  componentWillUnmount () {
    window.removeEventListener('scroll', this.handleScroll)
  }
  handleScroll = () => {
    if (window.pageYOffset < 100) {
      window.scrollTo({
        top: window.innerHeight,
        behavior: "smooth"
      });
      window.removeEventListener('scroll', this.handleScroll)
    }
  }

  render() {
    return (
      <Layout>
        <div>
          <Head>
            <title>Menonro</title>
          </Head>
          <FirstScreen />
          <PreviewLogo />
          <style jsx>{`
          `}</style>
        </div>
      </Layout>
    )
  }
}

export default Home
