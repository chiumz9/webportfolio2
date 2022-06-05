import './screens-style.css'

import htmllogo from '../images/htmllogo.png'
import csslogo from '../images/csslogo.png'
import jslogo from '../images/jslogo.png'
import pythonlogo from '../images/pythonlogo.png'
import profileimg from '../images/profileimg.jpg'

export default function Home() {
  return (
    <div className="home-container">
      <div className="home-content">
      <div className='home-welcome'>
        <h2 className="header-1">Welcome to my page!</h2>
      </div>
      <div className="home-body">
        <h1 className="header-2">CHIU ZHOU</h1>
      </div>
      <div className="home-footer">
        <h4 className='header-3'>Full-Stack Developer</h4>
      </div>
       <div className="logo-container">
         <img className="logos" src={htmllogo} />
         <img className="logos" src={csslogo} />
         <img className="logos" src={jslogo} />
         <img className="logos" src={pythonlogo} />
      </div>
    </div>

      <div className="profileimg-container" ><img className="profileimg" src={profileimg}/></div>
    </div>
  )
}
