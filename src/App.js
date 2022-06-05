import './App.css';
import { Routes, Route } from "react-router-dom";

import Navbar from './components/Navbar.jsx'

import Home from './screens/Home.jsx'
import About from './screens/About.jsx'
import Projects from './screens/Projects.jsx'
import Contact from './screens/Contact.jsx'

function App() {

   return (
      <div className="App">
         <div className='navbar-container'>
            <div id="navbar">
               <Navbar />
            </div>
         </div>
         <div className="screens" id="home"><Home/></div>
         <div className="screens" id="about"><About/></div>
         <div className="screens" id="projects"><Projects/></div>
         <div className="screens" id="contact"><Contact/></div>
      </div>
   )
}
export default App;
