import React from 'react'
import { Container, Row, Col, Image } from 'react-bootstrap'
import profilePhoto from '../pictures/profile-photo.jpg'

const About = () => {
  return (
    <div id='about' tabIndex='7' className="py-5">
      <Container>
        <h1 className='mb-5 text-center fw-bold'>Hi, I'm Jessie</h1>
        <Row xs={1} md={1} lg={2} className='align-items-center g-4 g-lg-5'>
          <Col xs={12} md={5} lg={4} className="text-center" >
            <Image 
              src={profilePhoto} 
              alt='Jessie Rohrer' 
              fluid 
              roundedCircle 
              className='shadow-sm w-75 w-md-100' />
          </Col>
          <Col xs={12} md={7} lg={8}>
            <div className="text-center text-md-start px-2">
              <p className='mb-3'>
                I'm a software engineer with a background in social work. I am a graduate of Shippensburg University, where I earned a BA in Psychology. I also 
                completed the software engineering program at the Flatiron School in 2021. I have been building websites for fun since high school, and decided to pursue
                web development as a career after leaving social work to raise my two kids, who are now in middle and high school. 
              </p>
              <p className='mb-3'>
                I spent 2022-2025 working for Slope Clinical as a Rails developer, and as their de-facto frontend developer. I worked directly with designers, product managers, customers, and stakeholders to make
                the user experience the best it could be. Following my time there, I worked as a contractor for a stealth health-tech startup, building a prototype mobile app using
                Flutter and Dart.
              </p>
              <p className='mb-3'>
                I'm interested in working with a dedicated team to make the best possible user experience for any product I work on, including adding accessibility features, improving navigation
                systems, and removing barriers to allow users to complete their tasks successfully.
              </p>
              <p className='mb-0'>
                <strong>My non-tech interests include:</strong> fiber arts (such as knitting, crochet, and spinning), casual hiking & biking, car camping with my family, playing trombone with my kids, and target archery.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default About
