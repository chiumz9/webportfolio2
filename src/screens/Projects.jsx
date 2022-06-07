import './screens-style.css'

import cryptoimg from '../images/cryptoapi.png'
import tohimg from '../images/towerofhanoi.png'
import peakscout from '../images/peakscout.png'
import linkedfin from '../images/linkedfin.png'
import githublogo from '../images/githublogo.png'

import launch from '../images/launchlogo.png'


export default function Projects() {
  const crpytolnk = "https://cosmic-malasada-35de58.netlify.app"
  const tohlnk = "https://pages.git.generalassemb.ly/asdfzo9/Tower-of-Hanoi/"
  const peaklnk = "https://earnest-profiterole-786338.netlify.app/"
  const finlnk = "https://github.com/chiumz9/linkedfin/tree/main"

  function handleClick(target) {
    console.log(target)
    javascript: document.location.href = target
  }

  return (
    <div className="projects-container">
      <h3 className="titles">Projects & Collaborations</h3>


      <div className='project-card'>
        <div className="launch">
          <img className="project-image" src={cryptoimg} />
          <ul className='contact-logos'>
            <li><img className="launch-logo" src={launch} onClick={() => handleClick(crpytolnk)}/></li>
            <li><img className='launch-logo' src={githublogo} onClick={() => handleClick(crpytolnk)}/></li>
          </ul>
        </div>
        <div className="project-description">
          <h3>"CrytoAPI"</h3>
          <p>
            "Creating a front-end that displays crypto-currency informations
            fed from a third party API from a fellow General Assembly member."
          </p>
        </div>
      </div>


      <div className="project-card">
        <div className='project-description'>
          <h3>"Tower of Hanoi"</h3>
          <p>
            "Reacreation of the classic puzzle. 3 different difficulty levels.
            Tracks the last scores so you can challenge yourself!"
          </p>
        </div>
        <div className="launch">
          <img className="project-image" src={tohimg} />
          <ul className='contact-logos'>
            <li><img className="launch-logo" src={launch} onClick={() => handleClick(tohlnk)}/></li>
            <li><img className='launch-logo' src={githublogo} onClick={() => handleClick(crpytolnk)}/></li>
          </ul>
        </div>
      </div>


      <div className='project-card'>
        <div className="launch">
          <img className="project-image" src={peakscout} />
          <ul className='contact-logos'>
            <li><img className="launch-logo" src={launch} onClick={() => handleClick(peaklnk)}/></li>
            <li><img className='launch-logo' src={githublogo} onClick={() => handleClick(crpytolnk)}/></li>
          </ul>
        </div>
        <div className='project-description'>
          <div className="project-title">
            <h3>"Peak Scout"</h3>
            <p> - group collab. </p>
            <p>
              "Find the best Rock Climbing Gym in NYC that suits your needs.
              Full-stack application using MongoDB as backend
              with CRUD capabilities. <br/>Create, Read, Update
              or Delete a gym"
            </p>
          </div>
        </div>
      </div>


      <div className='project-card'>
        <div className='project-description'>
          <div className="project-title">
            <h3>"LinkedFin"</h3>
            <p> - group collab. </p>
          </div>
          <p>
            "Connect with a fellow programmer. Full-Stack application,
            create your own profile user, add a project and share with
            other fellow "Fin" members"
          </p>
          <br/>
          <br/>
          <div className="launch">
            <img className="launch-logo" src={launch} onClick={() => handleClick(tohlnk)}></img>
          </div>
        </div>
        <div className="launch">
          <img className="project-image" src={linkedfin} />
          <ul className='contact-logos'>
            <li><img className="launch-logo" src={launch} onClick={() => handleClick(peaklnk)}/></li>
            <li><img className='launch-logo' src={githublogo} onClick={() => handleClick(crpytolnk)}/></li>
          </ul>
        </div>
      </div>
    </div >
  )
}
