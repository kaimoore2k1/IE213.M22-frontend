import React from 'react'
import Header from './Header';
import Navigation from '../core/Navigation';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <>
      <Header />
      <Navigation />
      <Outlet />
      <h1>FOOTER</h1>
    </>

  )
}

export default Layout