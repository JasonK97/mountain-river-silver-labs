import React from 'react'
import '../App.css'
import { BrowserRouter as Router, Link } from 'react-router-dom'

function AppHeader() {
  return (
    <div className="header">
      <h1>
        <Router>
          <Link className='nav' to='/'>Home</Link> | 
          <Link className='nav' to='/litters'> Litters</Link>
        </Router>
      </h1>
    </div>
  )
}

export default AppHeader
