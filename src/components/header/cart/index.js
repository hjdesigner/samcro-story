'use strict'
import React from 'react'
import { Link } from 'react-router-dom'
import Icon from 'components/icon'
import './cart.scss'

const Cart = ({ cartNumber }) => (
  <div className='cart'>
    <Link to='/carrinho'>
      <Icon name='cart' />
      <div className='cart__number'>{cartNumber}</div>
    </Link>
  </div>
)

export default Cart
