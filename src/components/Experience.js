import React from 'react'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css'

const Experience = () => {
  return (
    <div id='experience' tabIndex='8'>
      <hr style={{ width: '50%', height: '5px', color: '#475841', margin: 'auto'}} className='mt-5 mb-5' />

      <h2 className='text-center'>Experience & Education</h2>
      <VerticalTimeline className='pt-5'>
        <VerticalTimelineElement 
          className='vertical-timeline-element-education'
          contentStyle={{background: '#ced0ce'}}
          contentArrowStyle={{borderRight: '7px solid #3f403f'}}
          date='August 2020 - November 2021'
        >
          <h3 className='vertical-timeline-element-title'>Flatiron School</h3>
          <h4 className='vertical-timeline-element-subtitle'>New York, NY</h4>
          <p>Software Engineering Certificate</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement 
          className='vertical-timeline-element-education'
          contentStyle={{background: '#ced0ce'}}
          contentArrowStyle={{borderRight: '7px solid #3f403f'}}
          date='June 2021'
        >
          <h3 className='vertical-timeline-element-title'>freeCodeCamp.org</h3>
          <p>Responsive Web Design Certificate</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement 
          className='vertical-timeline-element-work'
          contentStyle={{background: '#ced0ce'}}
          contentArrowStyle={{borderRight: '7px solid #3f403f'}}
          date='September 2018 - August 2020'
        >
          <h3 className='vertical-timeline-element-title'>John Carl Auction Co</h3>
          <h4 className='vertical-timeline-element-subtitle'>Maytown, PA</h4>
          <p>Product photographer</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement 
          className='vertical-timeline-element-education'
          contentStyle={{background: '#ced0ce'}}
          contentArrowStyle={{borderRight: '7px solid #3f403f'}}
          date='July 2017 - June 2019'
        >
          <h3 className='vertical-timeline-element-title'>MOMS Club of Elizabethtown</h3>
          <h4 className='vertical-timeline-element-subtitle'>Elizabethtown, PA</h4>
          <p>Vice President</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement 
          className='vertical-timeline-element-work'
          contentStyle={{background: '#ced0ce'}}
          contentArrowStyle={{borderRight: '7px solid #3f403f'}}
          date='September 2016 - October 2018'
        >
          <h3 className='vertical-timeline-element-title'>The Athletic Club of Hershey</h3>
          <h4 className='vertical-timeline-element-subtitle'>Hershey, PA</h4>
          <p>Childcare Provider/Email Marketing Assistant</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement 
          className='vertical-timeline-element-education'
          contentStyle={{background: '#ced0ce'}}
          contentArrowStyle={{borderRight: '7px solid #3f403f'}}
          date='July 2016 - June 2017'
        >
          <h3 className='vertical-timeline-element-title'>MOMS Club of Elizabethtown</h3>
          <h4 className='vertical-timeline-element-subtitle'>Elizabethtown, PA</h4>
          <p>Treasurer</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement 
          className='vertical-timeline-element-work'
          contentStyle={{background: '#ced0ce'}}
          contentArrowStyle={{borderRight: '7px solid #3f403f'}}
          date='February 2014 - May 2014'
        >
          <h3 className='vertical-timeline-element-title'>AWE, Inc</h3>
          <h4 className='vertical-timeline-element-subtitle'>Chester, PA</h4>
          <p>QA Contractor</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement 
          className='vertical-timeline-element-work'
          contentStyle={{background: '#ced0ce'}}
          contentArrowStyle={{borderRight: '7px solid #3f403f'}}
          date='November 2010 - September 2011'
        >
          <h3 className='vertical-timeline-element-title'>Delaware County Office of Early Intervention</h3>
          <h4 className='vertical-timeline-element-subtitle'>Upper Darby, PA</h4>
          <p>Service Coordinator Supervisor</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement 
          className='vertical-timeline-element-work'
          contentStyle={{background: '#ced0ce'}}
          contentArrowStyle={{borderRight: '7px solid #3f403f'}}
          date='October 2008 - November 2010'
        >
          <h3 className='vertical-timeline-element-title'>Delaware County Office of Early Intervention</h3>
          <h4 className='vertical-timeline-element-subtitle'>Upper Darby, PA</h4>
          <p>Service Coordinator</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement 
          className='vertical-timeline-element-work'
          contentStyle={{background: '#ced0ce'}}
          contentArrowStyle={{borderRight: '7px solid #3f403f'}}
          date='October 2007 - September 2008'
        >
          <h3 className='vertical-timeline-element-title'>Adams County Children & Youth Services</h3>
          <h4 className='vertical-timeline-element-subtitle'>Gettysburg, PA</h4>
          <p>Case Manager</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement 
          className='vertical-timeline-element-education'
          contentStyle={{background: '#ced0ce'}}
          contentArrowStyle={{borderRight: '7px solid #3f403f'}}
          date='August 2003 - May 2007'
        >
          <h3 className='vertical-timeline-element-title'>Shippensburg University</h3>
          <h4 className='vertical-timeline-element-subtitle'>Shippensburg, PA</h4>
          <p>BA in Psychology</p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  )
}

export default Experience
