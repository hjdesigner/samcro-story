'use strict'
import React from 'react'
import './success.scss'

const Success = ({ payableSuccess, idOrder }) => (
  <div className='page-success'>
    <h1>Compra finalizada com sucesso</h1>
    <div className='page-success__order'>
      <p>Numero do pedido: {idOrder}</p>
      <p>Detalhes do pedido:</p>
      <p>Vendedor: 60% - {payableSuccess[0]}</p>
      <p>Samcro: 25% - {payableSuccess[1]}</p>
      <p>Socio: 15% = {payableSuccess[2]}</p>
    </div>
  </div>
)

export default Success
