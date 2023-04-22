import React from 'react'
import Navbar from './Navbar'
import { Outlet } from 'react-router-dom'
import LoadingBar from 'react-top-loading-bar'

const Layout = ({progress}) => {
  return (
    <>
      <LoadingBar height='5px' color='#f11946' progress={progress} /> 
      <Navbar/>
      <Outlet/>
    </>
  )
}

export default Layout

