import React from 'react'
import Navbar from '../Navbar/Navbar'
import { Outlet } from 'react-router-dom'
import Contact from '../Contact/Contact'

const Layout = () => {
  return (
    <>
        <div>
            <Navbar/>
        </div>
        <div>
            <Outlet/>
        </div>
    </>
  )
}

export default Layout
