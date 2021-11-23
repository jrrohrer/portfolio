import { Navbar, Nav, Container } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { NavHashLink } from 'react-router-hash-link'

import React from 'react'

const NavBar = () => {
  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" className='sticky-top'>
          <Container>
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
                <Nav.Link as={NavHashLink} to='/#' href='/#'>Home</Nav.Link>
                <Nav.Link as={NavHashLink} to='/#about' href='/#about'>About</Nav.Link>
                <Nav.Link as={NavHashLink} to='/#experience' href='/#experience'>Experience</Nav.Link>
                <Nav.Link as={NavHashLink} to='/#portfolio' href='/#portfolio'>Portfolio</Nav.Link>
                <Nav.Link as={NavHashLink} to='/#contact' href='/#contact'>Contact</Nav.Link>
              </Nav>
            </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
}

export default NavBar
