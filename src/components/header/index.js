'use strict'
import React from 'react'
import { Link } from 'react-router-dom'
import logo from './logo.jpg'
import Cart from './cart'
import './header.scss'

const Header = ({ cartNumber }) => (
  <header className='header'>
    <div className='container'>
      <div className='header__logo'>
        <Link to='/'>
          <img src={logo} alt='Samcro Store' />
        </Link>
      </div>
      <div className='header__cart'>
        <Cart cartNumber={cartNumber} />
      </div>
    </div>
  </header>
)

export default Header
