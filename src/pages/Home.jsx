import React from 'react'
import Portfolio from '../components/Elements/Portfolio'
import Work from '../components/Elements/Work'
import Cards from '../components/Elements/Cards'
import About from '../components/Elements/About'
import Contact from '../components/Elements/Contact'

const Home = () => {
  return (
    <>
      <Portfolio/>
      <Cards/>
      <About/>
      <Work/>
      <Contact/>
    </>
  )
}

export default Home