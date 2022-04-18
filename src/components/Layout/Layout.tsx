import React from 'react'
import Header from './Header';
import Navigation from '../core/Navigation';
import { Outlet } from 'react-router-dom';
import Footer from './Footer'
import {ScrollToTop} from '../core';

const Layout = () => {
  return (
    <>
      <Header />
      <Navigation />
      <ScrollToTop />
      <Outlet />
      <Footer />
    </>

  )
}

export default Layout