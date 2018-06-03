'use strict'
import React from 'react'
import { Link } from 'react-router-dom'
import './totalStand.scss'

const TotalStand = ({ cartNumber, totalStand, handleFinish }) => (
  <div className='total-stand'>
    <h2>Subtotal</h2>
    <ul>
      <li>
        <span className='total-stand__title'>{cartNumber} produtos</span>
        <span className='total-stand__price'>R$ {totalStand}</span>
      </li>
      <li>
        <span className='total-stand__title'>frete</span>
        <span className='total-stand__price'>-</span>
      </li>
    </ul>
    <h3>Total: R$ {totalStand}</h3>
    <div className='total-stand__button'>
      <Link to='/sucesso' onClick={handleFinish}>Finalizar comprar</Link>
    </div>
  </div>
)

export default TotalStand
