import React from 'react'
import { HashLink } from 'react-router-hash-link'

const Footer = () => {
  return (
    <footer className='footer mt-auto py-3 bg-dark text-center'>
      <HashLink to='/#top' href='/#top' className='footer-nav-link'>Back to Top</HashLink>
      <br/>
      <p className='text-muted mt-3'>
        &copy; {new Date().getFullYear()} Jessie Rohrer
      </p>
    </footer>
  )
}

export default Footer
