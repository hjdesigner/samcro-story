'use strict'
import React from 'react'
import './prices.scss'

const Prices = ({ priceOrigin, priceCurrent, installmentPayment, installmentValue }) => (
  <div className='prices'>
    <p className='prices__origin'>{priceOrigin !== '' ? `De R$ ${priceOrigin}` : false}</p>
    <p className='prices__current'>Por R$ {priceCurrent}</p>
    <p className='prices__installmente'><span className='installment-payment'>{installmentPayment !== '' ? `Ou em ${installmentPayment}x` : false}</span><span className='installment-value'>{installmentValue !== '' ? ` de R$ ${installmentValue}` : false}</span></p>
  </div>
)

export default Prices
