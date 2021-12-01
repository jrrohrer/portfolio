import { Navbar, Nav, Container } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { NavHashLink } from 'react-router-hash-link'

import React from 'react'

const NavBar = () => {
  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
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
                <Nav.Link as={NavHashLink} to='/#' href='/#' tabIndex='1'>Home</Nav.Link>
                <Nav.Link as={NavHashLink} to='/#about' href='/#about' tabIndex='2'>About</Nav.Link>
                <Nav.Link as={NavHashLink} to='/#experience' href='/#experience' tabIndex='3'>Experience</Nav.Link>
                <Nav.Link as={NavHashLink} to='/#portfolio' href='/#portfolio' tabIndex='4'>Portfolio</Nav.Link>
                <Nav.Link as={NavHashLink} to='/#contact' href='/#contact' tabIndex='5'>Contact</Nav.Link>
                <Nav.Link href='https://dev.to/jrrohrer' target='_blank' tabIndex='6'>Blog</Nav.Link>
              </Nav>
            </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
}

export default NavBar
