import React from 'react'
import './Navbar.css'
import {Link} from 'react-router-dom'
const Navbar = () => {
  return (
    <div>
        <div className='header'>
        <h1 className='header-2'>Ocean Net </h1>
      <ul>
        <Link to='/'>
          <li>Home</li>
          </Link>
        <Link to='/Technology'>
          <li>Technologies</li>
          </Link>
          <Link to='/Services'>
          <li>Plans & Services</li>
          </Link>
          <Link to='/About'>
          <li>Why Ocean Net</li>
          </Link>
          <Link to='/contact'>
          <li>Contact us</li>
          </Link>
      </ul>
      </div>
    </div>
  )
}

export default Navbar
