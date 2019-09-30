import React, { Component } from 'react'
import Head from 'next/head'
import PreviewLogo from '../components/PreviewLogo/PreviewLogo'
import FirstScreen from '../components/FirstScreen/FirstScreen'

import Contacts from '../components/Contacts/Contacts'

import Layout from '../components/Layout/Layout'

class Home extends Component {
  constructor () {
    super()
    this.state = {
      added: false
    }
  }

  componentDidMount() {
    if (window.pageYOffset < 100) {
      this.setState({ added: true })
      window.addEventListener('scroll', this.handleScroll)
    }
  }
  componentWillUnmount () {
    if (this.state.added) {
      window.removeEventListener('scroll', this.handleScroll)
      this.setState({ added: false })
    }
  }
  handleScroll = () => {
    if (window.pageYOffset < 100) {
      window.scrollTo({
        top: window.innerHeight,
        behavior: "smooth"
      });
      this.setState({ added: false })
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

          <Contacts />
          <PreviewLogo />
          <style jsx>{`
          `}</style>
        </div>
      </Layout>
    )
  }
}

export default Home
