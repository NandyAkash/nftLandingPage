import React from 'react'
import Client from './components/Client'
import Footer from './components/Footer'
import Free from './components/Free'
import Home from './components/Home'
import Like from './components/Like'
import Navbar from './components/Navbar'
import Release from './components/Release'
import ScrollToTop from './components/ScrollToTop'
import SignUp from './components/SignUp'
import SuperRare from './components/SuperRare'

export default function Hello() {
  return (
    <div className='app-container'>
      <ScrollToTop />
      <Navbar />
      <Home />
      <Free />
      <Client />
      <SuperRare />
      <Release />
      <Like />
      <SignUp />
      <Footer />
    </div>
  )
}
