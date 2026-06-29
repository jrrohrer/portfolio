import React from 'react'
import { Card, Button, Container, Row, Col } from 'react-bootstrap'
import arrowStorm from '../pictures/screenshots/arrowStorm.png'
import bookCritiq from '../pictures/screenshots/bookcritiq.png'
import yarnStasher  from '../pictures/screenshots/yarnstasher.png'
import appleExpert from '../pictures/screenshots/appleexpert.png'
import healthyBaltimore from '../pictures/screenshots/healthybaltimore.png'
import takeoutFinder from '../pictures/screenshots/takeoutfinder.png'

const Portfolio = () => {
  return (
    <div id='portfolio' tabIndex='20' className='py-4'>
      <hr style={{ width: '50%', height: '5px', color: '#475841', margin: 'auto'}} className='mt-5 mb-5' />
      <h1 className='text-center mb-5 fw-bold'>Portfolio</h1>
      
      <Container fluid className='px-md-5'>
        {/* Added g-4 for consistent structural spacing between cards row/col intersections */}
        <Row xs={1} md={2} lg={3} xl={3} className='g-4 justify-content-center'>

          {/* ARROWSTORM */}
          <Col className='d-flex'>
            <Card className='text-center p-3 shadow h-100 d-flex flex-column w-100'>
              <Card.Img variant="top" src={arrowStorm} className='img-fluid rounded' />
              <Card.Body className='d-flex flex-column h-100 p-2'>
                <Card.Title className='fw-bold mt-2'>ArrowStorm</Card.Title>
                <Card.Text className='text-muted flex-grow-1'>
                  A Next.js app using Serwist that allows users to use the app on mobile as a PWA. A personal scoring app for archers.
                </Card.Text>
                {/* mt-auto forces this button container directly to the bottom of the Card.Body flex area */}
                <div className='mt-auto pt-3'>
                  <a href='https://arrowstormarchery.com' target='_blank' rel='noreferrer'>
                    <Button className='m-1 shadow-sm w-100'>Visit ArrowStorm</Button>
                  </a>
                </div>
              </Card.Body>
            </Card>
          </Col>

          {/* HEALTHY BALTIMORE */}
          <Col className='d-flex'>
            <Card className='text-center p-3 shadow h-100 d-flex flex-column w-100'>
              <Card.Img variant="top" src={healthyBaltimore} className='img-fluid rounded' />
              <Card.Body className='d-flex flex-column h-100 p-2'>
                <Card.Title className='fw-bold mt-2'>Healthy Baltimore</Card.Title>
                <Card.Text className='text-muted flex-grow-1' style={{ fontSize: '0.95rem' }}>
                  A React app to help users find local grocery stores and food assistance programs. Built for the Technica 2021 hackathon. Winner of 2 awards: Best UX for Accessibility and Best Service-Oriented Hack. Collaboration with Jessica Bradham & Hannah Reitzel Rivera.
                </Card.Text>
                <div className='mt-auto pt-3 d-flex flex-column gap-2'>
                  <a href='https://github.com/hanreitz/healthy-baltimore/blob/main/src/presentationComponents/Resources.js' target='_blank' rel='noreferrer'>
                    <Button variant="outline-primary" className='shadow-sm w-100'>GitHub Repo</Button>
                  </a>
                  <a href='https://www.youtube.com/watch?v=U7a926CVpdQ' target='_blank' rel='noreferrer'>
                    <Button variant="primary" className='shadow-sm w-100'>Demo Video</Button>
                  </a>
                </div>
              </Card.Body>
            </Card>
          </Col>

          {/* BOOKCRITIQ */}
          <Col className='d-flex'>
            <Card className='text-center p-3 shadow h-100 d-flex flex-column w-100'>
              <Card.Img variant="top" src={bookCritiq} className='img-fluid rounded' />
              <Card.Body className='d-flex flex-column h-100 p-2'>
                <Card.Title className='fw-bold mt-2'>BookCritiq</Card.Title>
                <Card.Text className='text-muted flex-grow-1'>
                  BookCritiq allows you to review your favorite books. Users can add books to the database, add reviews, and view others' reviews. A React app styled with Bootstrap and supported by a custom Rails API backend.
                </Card.Text>
                <div className='mt-auto pt-3 d-flex flex-column gap-2'>
                  <a href='https://github.com/jrrohrer/book-critiq-fe' target='_blank' rel='noreferrer'>
                    <Button variant="outline-primary" className='shadow-sm w-100'>GitHub Repo</Button>
                  </a>
                  <a href='https://youtu.be/M6GDx35rzkU' target='_blank' rel='noreferrer'>
                    <Button variant="primary" className='shadow-sm w-100'>Demo Video</Button>
                  </a>
                </div>
              </Card.Body>
            </Card>
          </Col>

          {/* YARN STASHER */}
          <Col className='d-flex'>
            <Card className='text-center p-3 shadow h-100 d-flex flex-column w-100'>
              <Card.Img variant="top" src={yarnStasher} className='img-fluid rounded' />
              <Card.Body className='d-flex flex-column h-100 p-2'>
                <Card.Title className='fw-bold mt-2'>Yarn Stasher</Card.Title>
                <Card.Text className='text-muted flex-grow-1'>
                  A social app for fiber artists. It allows users to track their supplies, create and manage projects, and comment on their own or others' projects. Created with Ruby on Rails. Authentication using Google OAuth.
                </Card.Text>
                <div className='mt-auto pt-3 d-flex flex-column gap-2'>
                  <a href='https://github.com/jrrohrer/yarn-stasher-rails' target='_blank' rel='noreferrer'>
                    <Button variant="outline-primary" className='shadow-sm w-100'>GitHub Repo</Button>
                  </a>
                  <a href='https://youtu.be/CujdD9NzZUs' target='_blank' rel='noreferrer'>
                    <Button variant="primary" className='shadow-sm w-100'>Demo Video</Button>
                  </a>
                </div>
              </Card.Body>
            </Card>
          </Col>

          {/* APPLE EXPERT */}
          <Col className='d-flex'>
            <Card className='text-center p-3 shadow h-100 d-flex flex-column w-100'>
              <Card.Img variant="top" src={appleExpert} className='img-fluid rounded' />
              <Card.Body className='d-flex flex-column h-100 p-2'>
                <Card.Title className='fw-bold mt-2'>Apple Expert</Card.Title>
                <Card.Text className='text-muted flex-grow-1'>
                  A simple app that helps you choose the right apple for a recipe. Built with a vanilla OOJS frontend and Rails API backend.
                </Card.Text>
                <div className='mt-auto pt-3 d-flex flex-column gap-2'>
                  <a href='https://github.com/jrrohrer/apple-expert-backend' target='_blank' rel='noreferrer'>
                    <Button variant="outline-primary" className='shadow-sm w-100'>GitHub Repo</Button>
                  </a>
                  <a href='https://youtu.be/owlLYth-Kfw' target='_blank' rel='noreferrer'>
                    <Button variant="primary" className='shadow-sm w-100'>Demo Video</Button>
                  </a>
                </div>
              </Card.Body>
            </Card>
          </Col>

          {/* TAKEOUT FINDER */}
          <Col className='d-flex'>
            <Card className='text-center p-3 shadow h-100 d-flex flex-column w-100'>
              <Card.Img variant="top" src={takeoutFinder} className='img-fluid rounded' />
              <Card.Body className='d-flex flex-column h-100 p-2'>
                <Card.Title className='fw-bold mt-2'>Takeout Finder</Card.Title>
                <Card.Text className='text-muted flex-grow-1'>
                  A Procedural Ruby CLI app that finds local restaurants that offer takeout and provides the user with reviews and contact information.
                </Card.Text>
                <div className='mt-auto pt-3 d-flex flex-column gap-2'>
                  <a href='https://github.com/jrrohrer/takeout_finder' target='_blank' rel='noreferrer'>
                    <Button variant="outline-primary" className='shadow-sm w-100'>GitHub Repo</Button>
                  </a>
                  <a href='https://youtu.be/RSwm7nmCQnU' target='_blank' rel='noreferrer'>
                    <Button variant="primary" className='shadow-sm w-100'>Demo Video</Button>
                  </a>
                </div>
              </Card.Body>
            </Card>
          </Col>

        </Row>
      </Container>
    </div>
  )
}

export default Portfolio
