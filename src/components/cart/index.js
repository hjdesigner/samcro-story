'use strict'
import React from 'react'
import Showcase from './showcase'
import TotalStand from './totalStand'
import './cart.scss'

const Cart = ({ items, cartNumber, totalStand, handleRemoveProduct, handleFinish }) => (
  <div className='page-cart'>
    <h1>Carrinho</h1>
    <Showcase items={items} handleRemoveProduct={handleRemoveProduct} />
    <TotalStand cartNumber={cartNumber} totalStand={totalStand} handleFinish={handleFinish} />
  </div>
)

export default Cart
