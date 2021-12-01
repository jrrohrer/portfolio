import React from 'react'
import { Card, Button, Container, Row } from 'react-bootstrap'
import bookCritiq from '../pictures/screenshots/bookcritiq.png'
import yarnStasher  from '../pictures/screenshots/yarnstasher.png'
import appleExpert from '../pictures/screenshots/appleexpert.png'
import healthyBaltimore from '../pictures/screenshots/healthybaltimore.png'
import takeoutFinder from '../pictures/screenshots/takeoutfinder.png'

const Portfolio = () => {
  return (
    <div id='portfolio' tabIndex='20'>
      <hr style={{ width: '50%', height: '5px', color: '#475841', margin: 'auto'}} className='mt-5 mb-5' />
      <h1 className='text-center'>Portfolio</h1>
      <Container fluid>
        <Row xs={1} md={2} lg={3} xl={5}>
          {/* TAKEOUT FINDER */}
          <Card style={{ width: '20rem' }} className='text-center p-3 m-2 mx-auto shadow'>
            <Card.Img variant="top" src={takeoutFinder} />
            <Card.Body>
              <Card.Title>Takeout Finder</Card.Title>
              <Card.Text>
                A Procedural Ruby CLI app that finds local restaurants that offer takeout and provides the user with reviews and contact information. 
              </Card.Text>
              <a href='https://github.com/jrrohrer/takeout_finder' target='_blank' rel='noreferrer'><Button variant="primary" className='m-2 shadow'>GitHub Repo</Button></a>
              <a href='https://youtu.be/RSwm7nmCQnU' target='_blank' rel='noreferrer'><Button variant="primary" className='m-2 shadow'>Demo Video</Button></a>
            </Card.Body>
          </Card>

          {/* YARN STASHER */}
          <Card style={{ width: '20rem' }} className='text-center p-3 m-2 mx-auto shadow'>
            <Card.Img variant="top" src={yarnStasher} />
            <Card.Body>
              <Card.Title>Yarn Stasher</Card.Title>
              <Card.Text>
                A social app for fiber artists. It allows users to track their supplies, create and manage projects, and comment on their own or others' projects. Created with Ruby on Rails. Authentication using Google oauth.
              </Card.Text>
              <a href='https://github.com/jrrohrer/yarn-stasher-rails' target='_blank' rel='noreferrer'><Button variant="primary" className='m-2 shadow'>GitHub Repo</Button></a>
              <a href='https://youtu.be/CujdD9NzZUs' target='_blank' rel='noreferrer'><Button variant="primary" className='m-2 shadow'>Demo Video</Button></a>
            </Card.Body>
          </Card>

          {/* APPLE EXPERT */}
          <Card style={{ width: '20rem' }} className='text-center p-3 m-2 mx-auto shadow'>
            <Card.Img variant="top" src={appleExpert} />
            <Card.Body>
              <Card.Title>Apple Expert</Card.Title>
              <Card.Text>
                A simple app that helps you choose the right apple for a recipe. Built with a vanilla OOJS frontend and Rails API backend. 
              </Card.Text>
              <a href='https://github.com/jrrohrer/apple-expert-backend' target='_blank' rel='noreferrer'><Button variant="primary" className='m-2 shadow'>GitHub Repo</Button></a>
              <a href='https://youtu.be/owlLYth-Kfw' target='_blank' rel='noreferrer'><Button variant="primary" className='m-2 shadow'>Demo Video</Button></a>
              
            </Card.Body>
          </Card>

          {/* BOOKCRITIQ */}
          <Card style={{ width: '20rem' }} className='text-center p-3 m-2 mx-auto shadow'>
            <Card.Img variant="top" src={bookCritiq} />
            <Card.Body>
              <Card.Title>BookCritiq</Card.Title>
              <Card.Text>
                BookCritiq allows you to review your favorite books. Users can add books to the database, add reviews, and view others' reviews. A REact app styled with Bootstrap and supported by a custom Rails API backend.
              </Card.Text>
              <a href='https://github.com/jrrohrer/book-critiq-fe' target='_blank' rel='noreferrer'><Button className='m-2 shadow'>GitHub Repo</Button></a>
              <a href='https://youtu.be/M6GDx35rzkU' target='_blank' rel='noreferrer'><Button variant="primary" className='m-2 shadow'>Demo Video</Button></a>
            </Card.Body>
          </Card>

          <Card style={{ width: '20rem' }} className='text-center p-3 m-2 mx-auto shadow'>
            <Card.Img variant="top" src={healthyBaltimore} />
            <Card.Body>
              <Card.Title>Healthy Baltimore</Card.Title>
              <Card.Text>
                A React app to help users find local grocery stores. Includes information on food banks and other assistance programs. Built for the Technica 2021 hackathon. Winner of 2 awards: Best UX for Accessibility and Best Service-Oriented Hack. Collaboration with 2 other Flatiron alumnae, Jessica Bradham & Hannah Reitzel Rivera.
              </Card.Text>
              <a href='https://github.com/hanreitz/healthy-baltimore/blob/main/src/presentationComponents/Resources.js' target='_blank' rel='noreferrer'><Button className='m-2 shadow'>Github Repo</Button></a>
              <a href='https://www.youtube.com/watch?v=U7a926CVpdQ' target='_blank' rel='noreferrer'><Button variant="primary" className='m-2 shadow'>Demo Video</Button></a>
            </Card.Body>
          </Card>
        </Row>
      </Container>
    </div>
  )
}

export default Portfolio
