import React from 'react'
import {NavLink} from 'react-router-dom'
import {useSelector} from 'react-redux'

const NavBarComponent = () => {
  const slice = useSelector((state) => state.loginSlice);
  const currentUser = slice.data.token;
  console.log(slice)
  return (
    <>
      <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
        <div>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/contact">Contact</NavLink>
            <NavLink to="/use-callback">useCallback</NavLink>
            <NavLink to="/use-memo">useMemo</NavLink>
            <NavLink to="/use-context">useContextComponent</NavLink>
            <NavLink to="/custom-hook">Custom Hook</NavLink>
            <NavLink to="/redux">Redux</NavLink>
            <NavLink to="/functional">Functional</NavLink>
            <NavLink to="/class">Class</NavLink>
            <NavLink to="/hoc">HOC</NavLink>
            <NavLink to="/event">Event</NavLink>
            <NavLink to="/promises">Promise Await</NavLink>
            <NavLink to="/task1">Task 1</NavLink>
            <NavLink to="/arr-func">Array Functions</NavLink>
            <NavLink to="/call-apply-bind">Function Borrowing(call-apply-bind)</NavLink>
            {!currentUser ? (
              <>
                <NavLink to="/login">Login</NavLink>
                <NavLink to="/register">Register</NavLink>
              </>
            ) : (
              <>
                <NavLink to="/profile">Profile</NavLink>
                <NavLink to="/logout">Logout</NavLink>
              </>
            )}
        </div>
        <div>
          {!slice.isLoggedIn ? null : (
              <span style={{color: 'white', justifyContent: 'flex-end'}}>
                Hi User
              </span>
          )}
        </div>
      </div>
    </>
  )
}

export default NavBarComponent
