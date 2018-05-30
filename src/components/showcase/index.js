'use strict'
import React from 'react'
import { Link } from 'react-router-dom'
import './showcase.scss'

const Showcase = ({ items }) => (
  <ul className='showcase'>
    {items.map((item, index) =>
      <li key={index}>
        <Link to={item.url}>
          <figure>
            <img src={item.image} alt={item.name} />
          </figure>
          <h2>{item.name}</h2>
          <div className='prices'>
            <p className='price-origin'>{item.priceOrigin !== '' ? `De R$ ${item.priceOrigin}` : false}</p>
            <p className='price-current'>Por R$ {item.priceCurrent}</p>
          </div>
        </Link>
      </li>
    )}
  </ul>
)

export default Showcase
