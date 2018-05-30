'use strict'
import React from 'react'

const Prices = ({ priceOrigin, priceCurrent, installmentPayment, installmentValue }) => (
  <div className='prices'>
    <p className='prices__origin'>{priceOrigin !== '' ? `De R$ ${priceOrigin}` : false}</p>
    <p className='prices__current'>Por R$ {priceCurrent}</p>
    <p className='prices__installmente'><span className='installment-payment'>{installmentPayment !== 0 ? `Ou em ${installmentPayment}x` : false}</span><span className='installment-value'>{installmentValue !== '0,00' ? ` de R$ ${installmentValue}` : false}</span></p>
  </div>
)

export default Prices