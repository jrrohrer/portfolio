import React from 'react'
import devtoLogo from '../pictures/dev-icon.svg'
import githubLogo from '../pictures/github_icon.svg'
import linkedinLogo from '../pictures/linkedin_icon.svg'
import twitterLogo from '../pictures/twitter_icon.svg'


const Contact = () => {
  return (
    <div id='contact' className='content text-center pt-5'>
      <h2>Thanks for stopping by!</h2>
      <p className='p-3'>Want to get connected? Reach out to me on one of these platforms:</p>
      <div className='link-container pb-3'>
        <a href='https://dev.to/jrrohrer'><img src={devtoLogo} alt='Click here to visit my blog on Dev.to' height='50px' className='m-2'/></a>
        <a href='https://github.com/jrrohrer'><img src={githubLogo} alt='Click here to visit my github profile' height='50px' className='m-2' /></a>
        <a href='https://www.linkedin.com/in/jessie-rohrer/'><img src={linkedinLogo} alt='Click here to visit my LinkedIn profile' height='50px' className='m-2' /></a>
        <a href='https://twitter.com/jrrohrer'><img src={twitterLogo} alt='Click here to visit my Twitter' height='50px' className='m-2' /></a>
      </div>
    </div>
  )
}

export default Contact
