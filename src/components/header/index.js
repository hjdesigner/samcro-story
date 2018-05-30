'use strict'
import React from 'react'
import logo from './logo.jpg'
import './header.scss'

const Header = () => (
  <header className='header'>
    <div className='container'>
      <div className='header__logo'>
        <img src={logo} alt='Samcro Store' />
      </div>
    </div>
  </header>
)

export default Header
