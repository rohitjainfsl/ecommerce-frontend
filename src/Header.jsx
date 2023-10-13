import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <header>
        <h1>FSL Ecommerce</h1>
        <nav>
            <ul>
                <li><Link to="#">About Us</Link></li>
                <li><Link to="/login">Login / Register</Link></li>
                <li><Link to="#">Career</Link></li>
            </ul>
        </nav>
    </header>
  )
}

export default Header