import React from 'react'
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <nav>
    <a href="/home"><NavLink>Home</NavLink></a>
    <a href="/login"><NavLink>Login</NavLink></a>
    <a href="/about"><NavLink>About</NavLink></a>
      </nav>
    </div>
  )
}

export default Navbar
