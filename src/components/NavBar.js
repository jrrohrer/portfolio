import { Navbar, Nav, Container } from 'react-bootstrap'
import logo from '../logo.png'

import React from 'react'

const NavBar = () => {
  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
          <Container>
            <Navbar.Brand href="/"><img src={logo} alt="navbar logo"/></Navbar.Brand>
            <Navbar.Toggle aria-controls='responsive-navbar-nav' />
            <Navbar.Collapse id='responsive-navbar-nav'>
              <Nav className="ms-auto">
                <Nav.Link href='#'>Home</Nav.Link>
                <Nav.Link href='#'>About</Nav.Link>
                <Nav.Link href='#'>Experience</Nav.Link>
                <Nav.Link href='#'>Portfolio</Nav.Link>
                <Nav.Link href='#'>Contact</Nav.Link>
              </Nav>
            </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
}

export default NavBar
