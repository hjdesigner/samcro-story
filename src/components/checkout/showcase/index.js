'use strict'
import React from 'react'
import './showcase.scss'

const Showcase = ({ items, handleRemoveProduct }) => (
  <ul className='cart__showcase'>
    {items.map((item, index) =>
      <li key={index}>
        <figure>
          <img src={item.image} alt={item.name} />
        </figure>
        <h2>{item.name} <span className='cart__salesman'>Vendido por: {item.salesman}</span></h2>
        <div className='cart__prices'>
          <p className='cart__price-current'>Por R$ {item.value}</p>
        </div>
        <div className='cart__remove'>
          <button onClick={handleRemoveProduct} data-id={item.id} data-price={item.value}>Remover</button>
        </div>
      </li>
    )}
  </ul>
)

export default Showcase
