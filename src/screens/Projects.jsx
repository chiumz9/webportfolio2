import './screens-style.css'

import cryptoimg from '../images/cryptoapi.png'
import tohimg from '../images/towerofhanoi.png'
import peakscout from '../images/peakscout.png'
import linkedfin from '../images/linkedfin.png'

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
      <h3 className="title">
        Projects & Collaborations
      </h3>
      <div className='project-card'>
        <img className="project-image" src={cryptoimg} />
        <div className="project-description">
          <h3>"CrytoAPI"</h3>
          <p>
            "Creating a front-end that displays crypto-currency informations
            fed from a third party API from a fellow General Assembly member."
          </p>
          <br/>
          <br/>
          <div className="launch">
            <img className="launch-logo" src={launch} onClick={() => handleClick(crpytolnk)}></img>
          <p> -launch</p>
          </div>
        </div>
      </div>
      <div className='project-card'>
        <div className='project-description'>
          <h3>"Tower of Hanoi"</h3>
          <p>
            "Reacreation of the classic puzzle. 3 different difficulty levels.
            Tracks the last scores so you can challenge yourself!"
          </p>
          <br/>
          <br/>
          <div className="launch">
            <img className="launch-logo" src={launch} onClick={() => handleClick(tohlnk)}></img>
          <p> -launch</p>
          </div>
        </div>
        <img className="project-image" src={tohimg} />
      </div>
      <div className='project-card'>
        <img className="project-image" src={peakscout} />
        <div className='project-description'>
          <div className="project-title">
            <h3>"Peak Scout"</h3>
            <p> - group collab. </p>
          </div>
          <p>
            "Find the best Rock Climbing Gym in NYC that suits your needs.
            Full-stack application using MongoDB as backend
            with Full CRUD capabilities. Create, Read, Update
            or Delete a gym"
          </p>
          <br/>
          <br/>
          <div className="launch">
            <img className="launch-logo" src={launch} onClick={() => handleClick(peaklnk)}></img>
          <p> -launch</p>
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
          <p> -launch</p>
          </div>
        </div>
        <img className="project-image" src={linkedfin} />
      </div>

    </div >
  )
}
