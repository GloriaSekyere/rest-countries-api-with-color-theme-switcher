// assets
import LightMode from '../assets/lightMode.svg'

//styles
import './Header.css';

import React from 'react'

function Header() {
  return (
    <div className='header'>
      <h1>Where in the world?</h1>
      <div className='mode-selector'>
        <img src={LightMode} alt="light-mode-icon" />
        <span>Dark Mode</span>
      </div>
    </div>
  )
}

export default Header