import React from 'react'
import {ReactComponent as Logo} from "../../assets/logo.svg"

function Header() {
  return (
    <div className='flex justify-around items-center'>
        <div className='flex items-center'>
            <Logo />
            <h3>Project Master</h3>
        </div>
        <ul className='flex'>
            <li>Features</li>
            <li>Pricing</li>
            <li>Resources</li>
            <li>Contact Us</li>
        </ul>
        <div>
            <button>Login</button>
            <button>Get Started</button>
        </div>
    </div>
  )
}

export default Header