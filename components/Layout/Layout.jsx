import React from 'react'
import Preloader from '../Preloader/Preloader'

const Layout = ({ children }) => (
  <>
    <Preloader />
    {children}
  </>
)

export default Layout
