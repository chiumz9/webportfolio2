import './screens-style.css'

import linkedlogo from '../images/linkedinlogo.png'
import gmaillogo from '../images/gmaillogo.png'
import githublogo from '../images/githublogo.png'

import resume from '../images/ChiuZhouResume.pdf'


export default function Contacts() {
  return (
    <div className="contact-container">
      <h2 className="titles">Contact</h2>
      <div>
        <div className='contact-logo-container'>
          <h3>Reach me @ </h3>
          <ul className='contact-logos'>
            <li img className='contact-logo' ><a href="mailto:chiumzhou8@gmail.com"><img src={gmaillogo} /></a></li>
            <li img className='contact-logo' ><a href="https://github.com/chiumz9"><img src={githublogo} /></a></li>
            <li img className='contact-logo' ><a href="https://www.linkedin.com/in/chiu-zhou/"><img className='linkedin-logo'  src={linkedlogo} /></a></li>
          </ul>
        </div>
      </div>
      <div className="resume-container">
        <a className="resume" href={resume} target="_blank" rel="noopener noreferrer">Resume</a>
      </div>
    </div>

  )
}
