import React from 'react'
import './navbar.scss'
export default function Navbar() {
  return (
    <nav className='navbar'>
        <div className='container'>
        <div className='logo'>Logo</div>
    <ul>
        <li>Home</li>
        <li>Favorite</li>
        <li>Detestable</li>
    </ul>
        </div>
    </nav>
  )
}
