import React from 'react'
import Header from '../modules/Home/Header';
import Contact from '../modules/Home/Contact';
import Slider from '../modules/Home/Slider';
import Navigation from '../modules/Home/Navigation';

const Homepage = () => {
  return (
    <>
      <Header />
      <Navigation />
      <Slider />
      <Contact />
    </>

  )
}

export default Homepage