import React from 'react'
import '../App.css'
import { Link } from 'react-router-dom'

function AppHeader() {

  return (
    // <div className='header'>
    //   <h1 className='logo'>Mountain River Silver Labs</h1>
    //   <div className='header-links'>
    //     <Link className='nav' to='/'>Home</Link>
    //     <Link className='nav' to='/litters'>Litters</Link>
    //     <Link className='nav' to='/blog'>Blog</Link>
    //   </div>
    // </div>
    <div>
      <nav className='navbar fixed-top navbar-expand-lg navbar-dark bg-dark'>
        <Link className='navbar-brand logo' to='/'>Mountain River Silver Labs</Link>
        <button className='navbar-toggler' type='button' data-toggle='collapse' data-target='#navbarNavAltMarkup' aria-controls='navbarNavAltMarkup' aria-expanded='false' aria-label='Toggle navigation'>
          <span className='navbar-toggler-icon'></span>
        </button>
        <div className='collapse navbar-collapse' id='navbarNavAltMarkup'>
          <div className='navigation-links'>
            <div className='navbar-nav'>
              <Link className='nav-item nav-link' to='/'>Home</Link>
              <Link className='nav-item nav-link' to='/litters'>Litters</Link>
              <Link className='nav-item nav-link' to='/blog'>Blog</Link>
              <Link className='nav-item nav-link' to='/contact'>Contact Us</Link>
            </div>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default AppHeader
