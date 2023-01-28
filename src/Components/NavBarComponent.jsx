import React from 'react'
import {NavLink} from 'react-router-dom'

const NavBarComponent = () => {
  return (
    <>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/contact">Contact</NavLink>
        <NavLink to="/use-callback">useCallback</NavLink>
        <NavLink to="/use-memo">useMemo</NavLink>
        <NavLink to="/use-context">useContextComponent</NavLink>
        <NavLink to="/custom-hook">Custom Hook</NavLink>
        <NavLink to="/redux">Redux</NavLink>
        <NavLink to="/class">Class</NavLink>
        <NavLink to="/hoc">HOC</NavLink>
        <NavLink to="/event">Event</NavLink>
        <NavLink to="/task1">Task 1</NavLink>
    </>
  )
}

export default NavBarComponent