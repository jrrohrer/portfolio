import React from 'react'
import headerLogo from '../pictures/logo.png'

const Home = () => {
  return (
    <div id='home' className='header-wrapper'>
      <div className='main-info'>
        <img src={headerLogo} alt="Logo which reads: 'Jessie Rohrer: Software Engineer' on a dark background with fern leaves" className="img-fluid"/>
      </div>
    </div>
  )
}

export default Home;
