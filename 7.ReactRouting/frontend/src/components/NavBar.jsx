import React from 'react'
import './NavBar.css'
import { Link, NavLink } from 'react-router-dom'
const NavBar = () => {
  return (
    <div>
      <div className='nav-container'>
       <div className='nav-link'>
        <NavLink to='/'className= {({isActive})=>isActive?"link":""}>Home</NavLink>
        <NavLink to='/about'className={({isActive})=>isActive?"link":""}>About</NavLink>
        <NavLink to='/dashboard'className={({isActive})=>isActive?"link":""}>Dashboard</NavLink>
       </div>
      </div>
    </div>
  )
}

export default NavBar
