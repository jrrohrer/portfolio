import { Navbar, Nav, Container, Button } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faDownload } from '@fortawesome/free-solid-svg-icons' // Imported faDownload
import { NavHashLink } from 'react-router-hash-link'

import React from 'react'

const NavBar = () => {
  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" id='top'>
          <Container>
            <Navbar.Toggle aria-controls="basic-navbar-nav" className='ms-auto'>
              <span>
                <FontAwesomeIcon
                  icon={faBars}
                  style={{color: '#6CAC9C'}}
                />
              </span>
            </Navbar.Toggle>
            <Navbar.Collapse id='responsive-navbar-nav'>
              <Nav className='m-auto align-items-center'> {/* Added align-items-center to keep everything vertically level */}
                <Nav.Link as={NavHashLink} to='/#' href='/#' tabIndex='1'>Home</Nav.Link>
                <Nav.Link as={NavHashLink} to='/#about' href='/#about' tabIndex='2'>About</Nav.Link>
                <Nav.Link as={NavHashLink} to='/#skills' href='/#skills' tabIndex='3'>Skills</Nav.Link>
                <Nav.Link as={NavHashLink} to='/#portfolio' href='/#portfolio' tabIndex='4'>Portfolio</Nav.Link>
                <Nav.Link as={NavHashLink} to='/#contact' href='/#contact' tabIndex='5'>Contact</Nav.Link>
                
                {/* RESUME DOWNLOAD LINK */}
                <Nav.Link 
                  href={`${process.env.PUBLIC_URL}/Jessie_Rohrer_Resume.pdf`} 
                  download="Jessie_Rohrer_Resume.pdf"
                  target="_blank" 
                  rel="noreferrer"
                  tabIndex='6'
                  className='ms-lg-3 mt-2 mt-lg-0' // Adds a little gap on desktop, pushes down slightly when stacked on mobile
                >
                  <Button size="sm" variant="outline-light" style={{ borderColor: '#6CAC9C', color: '#6CAC9C' }} className='px-3 shadow-sm'>
                    <FontAwesomeIcon icon={faDownload} className='me-2' />
                    Resume
                  </Button>
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
}

export default NavBar
