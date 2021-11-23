import React from 'react'
import { Container, Row, Col, Image } from 'react-bootstrap'
import profilePhoto from '../pictures/profile-photo.jpg'

const About = () => {
  return (
    <div id='about'>
      <Container>
        <h1 className='m-3 text-center'>Hi, I'm Jessie</h1>
        <Row>
          <Col className='col-3'>
            <Image src={profilePhoto} alt='Jessie Rohrer' fluid roundedCircle className='shadow' />
          </Col>
          <Col>
            <p className='m-5'>I am a software engineer with a background in social work. I'm a recent graduate of the Flatiron School software engineering program, and I have a prior BA in Psychology from Shippensburg University. My current tech stack is Ruby, Rails, HTML, CSS, JavaScript, React, & Redux. I have been building websites for fun since high school, and decided to persue web development as a career after leaving social work to raise my two young children, who are now in elementary school. I have spent the last year learning not just the languages needed to meet that goal, but also the tools and culture surrounding them, while at the same time guiding my kids through their own online learning. I am interested in web accessibility, and am now taking dives into a11y best practices, as well as learning data structures and algorithms.</p>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default About
