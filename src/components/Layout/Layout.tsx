import React from 'react'
import Header from './Header';
import Navigation from '../core/Navigation';
import { Outlet } from 'react-router-dom';
import Footer from './Footer'

const Layout = () => {
  return (
    <>
      <Header />
      <Navigation />
      <Outlet />
      <Footer />
    </>

  )
}

export default Layout