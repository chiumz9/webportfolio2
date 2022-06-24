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
            <li img className='contact-logo' ><a href="https://www.linkedin.com/in/chiu-zhou/"><img className='linkedin-logo'  src={linkedlogo} /></a></li>
            <li img className='contact-logo' ><a href="https://github.com/chiumz9"><img src={githublogo} /></a></li>
          </ul>
        </div>
      </div>
        <a className="resume" href={"https://docs.google.com/document/d/1MaK_nBSgwQak2Vi5dz2X3whaJBJ_jCTjht8J4SB6reE/edit?usp=sharing"} >Download Resume</a>
    </div>

  )
}
