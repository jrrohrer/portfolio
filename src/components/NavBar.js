import { Navbar, Nav, Container } from 'react-bootstrap'
// import logo from '../logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { NavHashLink } from 'react-router-hash-link'

import React from 'react'

const NavBar = () => {
  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
          <Container>
            {/* <Navbar.Brand href="/"><img src={logo} alt="navbar logo"/></Navbar.Brand> */}
            <Navbar.Toggle aria-controls="basic-navbar-nav" className='ms-auto'>
              <span>
                <FontAwesomeIcon
                  icon={faBars}
                  style={{color: '#ac9c6c'}}
                />
              </span>
            </Navbar.Toggle>
            <Navbar.Collapse id='responsive-navbar-nav'>
              <Nav className='m-auto'>
                <NavHashLink to='/#home' class='nav-link'>Home</NavHashLink>
                <NavHashLink to='/#about' class='nav-link'>About</NavHashLink>
                <NavHashLink to='/#experience' class='nav-link'>Experience</NavHashLink>
                <NavHashLink to='/#portfolio' class='nav-link'>Portfolio</NavHashLink>
                <NavHashLink to='/#contact' class='nav-link'>Contact</NavHashLink>
              </Nav>
            </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
}

export default NavBar
