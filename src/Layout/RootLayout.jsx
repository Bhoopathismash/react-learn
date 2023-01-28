import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../Components/Header'

const RootLayout = () => {
  return (
    <>
        <Header />
        <div className='container'>
            <Outlet />
        </div>
    </>
  )
}

export default RootLayout