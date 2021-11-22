import { Navbar, Nav, Container } from 'react-bootstrap'
// import logo from '../logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

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
                <Nav.Link href='/'>Home</Nav.Link>
                <Nav.Link href='/about'>About</Nav.Link>
                <Nav.Link href='/experience'>Experience</Nav.Link>
                <Nav.Link href='/portfolio'>Portfolio</Nav.Link>
                <Nav.Link href='/contact'>Contact</Nav.Link>
              </Nav>
            </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
}

export default NavBar
