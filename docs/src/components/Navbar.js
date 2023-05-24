import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav className='navBar'>
      <Link to="/" className='siteName' id='nameText'> Daniel A. Hernandez</Link>
        <ul>
            <li className='nav-link-list'>
                <Link to="/project" className='nav-link'>Projects</Link>
                <Link to="/resume" className='nav-link'>Resume</Link>
                <Link to="/contact" className='nav-link'>Contact Me</Link>
            </li>
        </ul>
    </nav>
  )
}

export default Navbar