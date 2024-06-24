import React from 'react'
import { NavLink } from 'react-router-dom'
import "./Navbar.css";
import { useAuth } from '../store/auth';

const Navbar = () => {
  const { isLoggedIn } = useAuth();
  return (
    <div >
      <nav className='navbar'>
        <div className='logo-brand'>
          Mern
        </div>
        <div>
          <ul >
            <li><NavLink to="/" >Home</NavLink></li>
            <li><NavLink to="/about" >About</NavLink></li>
            <li><NavLink to="/contact" >Contact</NavLink></li>
            <li><NavLink to="/services" >Service</NavLink></li>
            {isLoggedIn ?
              (<li><NavLink to="/logout" >Logout</NavLink></li>)
              : (
                <div style={{display:'flex',gap:'1rem'}}>
                <li><NavLink to="/login" >Login</NavLink></li>
                <li><NavLink to="/register" >Signup</NavLink></li>
                </div>
              )}

            

          </ul>

        </div>

      </nav>

    </div>
  )
}

export default Navbar
