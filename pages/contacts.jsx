import React, { Component } from 'react'
import Head from 'next/head'
import Layout from '../components/Layout/Layout'

import Header from '../components/Layout/Header'
import ContactsGrid from '../components/Contacts/ContactsGrid'

class Contacts extends Component {

  render() {
    return (
      <Layout>
        <Head>
          <title>Как связаться со мной? - Menonro</title>
        </Head>
        <Header title="Контакты"/>
        <ContactsGrid />
      </Layout>
    )
  }
}

export default Contacts
