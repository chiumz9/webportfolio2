import './navbar-style.css'
import { HashLink as Link } from 'react-router-hash-link';

import Home from '../screens/Home.jsx'
import About from '../screens/About.jsx'
import Projects from '../screens/Projects.jsx'
import Contact from '../screens/Contact.jsx'

export default function Navbar() {



  return (
    <div>
      <ul className="navbar-list">
        <li className='nav-item'><Link to="/#home">Home</Link></li>
        <li className='nav-item'><Link to="/#about">About</Link></li>
        <li className='nav-item'><Link to="/#projects">Projects</Link></li>
        <li className='nav-item'><Link to="/#contact">Contact</Link></li>
      </ul>
    </div>
  )
}
