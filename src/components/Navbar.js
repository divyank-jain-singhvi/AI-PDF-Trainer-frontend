import React from 'react'
import AI_Planet_Logo from '../asserts/AI Planet Logo.png'
import './Navbar.css'

export default function Navbar() {
    
  return (
    <>
        <div className='shadow bg-white d-flex nav-bar-top'>
            <div>
                <img src={AI_Planet_Logo} alt=''></img>
            </div>
            <div className='d-flex'>
                <input type='file' className='file'></input>
            </div>
        </div>
    </>
  )
}
