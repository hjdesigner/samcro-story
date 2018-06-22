'use strict'
import React from 'react'
import { Link } from 'react-router-dom'
import logo from './logo.jpg'
import Cart from 'components/header/cart'
import './header.scss'

const Header = ({ cartNumber }) => (
  <header className='header'>
    <div className='container'>
      <section className='header__logo'>
        <Link to='/'>
          <img src={logo} alt='Samcro Store' />
        </Link>
      </section>
      <section className='header__cart'>
        <Cart cartNumber={cartNumber} />
      </section>
    </div>
  </header>
)

export default Header
