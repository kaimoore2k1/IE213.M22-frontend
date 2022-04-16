import React from 'react'
import Header from '../../modules/Home/Header';
import Navigation from '../../modules/Home/Navigation';
import { Outlet } from 'react-router-dom';

const Homepage = () => {
  return (
    <>
      <Header />
      <Navigation />
      <Outlet />
      <h1>FOOTER</h1>
    </>

  )
}

export default Homepage