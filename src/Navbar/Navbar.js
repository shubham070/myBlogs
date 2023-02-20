import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav className='navbar'>
        <h1> My Basic Blog </h1>
        <div className='links'>
            <Link to="/">Home</Link>
            <Link to="/create"> New Blog </Link>
            <Link to="/thankyou">Logout</Link>
        </div>
        
    </nav>
  )
}

export default Navbar