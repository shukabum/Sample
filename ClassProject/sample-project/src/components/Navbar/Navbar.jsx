import React from 'react'
import logo from '../../th.jpeg'
import './Navbar.css'
import { NavLink } from 'react-router-dom'

const Navbar = ({name,year}) => {
  return (
   <>
    <div className='nav'>
        <img src={logo}  height={100} width={100}/>
        <div className='links'>

            <ul>
                <li><NavLink exact="true" to="/" active="active" >Home</NavLink></li>
                <li><NavLink exact="true" to="about">About</NavLink></li>
                <li><NavLink exact="true" to="contact">Contact</NavLink></li>
                <li><NavLink exact="true" to="form">form</NavLink></li>
                {/* <li>{name}</li>
                <li>{year}</li> */}
            </ul>
        </div>

    </div>
   </>
  )
}

export default Navbar
