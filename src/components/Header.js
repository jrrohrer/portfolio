import React from 'react'
import headerLogo from '../logo.png'
import { Button } from 'react-bootstrap'

const Header = () => {
  return (
    <div className='header-wrapper'>
      <div className='main-info'>
        <img src={headerLogo} alt="Jessie Rohrer: Software Engineer" />
        <Button variant='secondary' className='shadow'>Contact Me</Button>
      </div>
    </div>
  )
}

export default Header
