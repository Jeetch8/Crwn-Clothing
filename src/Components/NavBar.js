import React from 'react'
import {BsBag}from 'react-icons/bs'
import './NavBar.css'
const NavBar = ({cart}, props) => {
  console.log(props)
  return (
    <div className='Main__Navbar'>
        <div>Logo</div>
        <ul>
            <li>SHOP</li>
            <li>CONTACT</li>
            <li>SIGN IN</li>
            <li className='navbar__bag'><BsBag/> <span className='number'>{cart}</span></li>
        </ul>
    </div>
  )
}

export default NavBar