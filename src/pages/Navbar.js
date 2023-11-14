import React from 'react';
import { NavLink } from 'react-router-dom';
import './navbar.css'
import leetcode from './leetcode.png'
function Navbar() {
  return (
    <div className="header">
        <nav>
            <div className='logo'>
                
                <img src={leetcode} className='leetcodeimg'></img>
          
          <h4 className='logotext'>
          <NavLink to={'/'}>LeetCode</NavLink>
          </h4>
            </div>
            <ul>
                <li>
                <NavLink to={'/'}>Explore</NavLink>
                </li>
                <li>
                <NavLink to={'/problem'}>Problems</NavLink>
                </li>
                <li>
                <NavLink to={'/solve'}>Code</NavLink>
                </li>
                <li>
                <NavLink to={'/contest'}>Contest</NavLink>
                </li>
                <li>
                <NavLink to={'/login'}>Sinin</NavLink>
                </li>
           
            </ul>
        </nav>
    </div>
  )
}

export default Navbar