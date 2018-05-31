'use strict'
import React from 'react'
import './salesman.scss'

const Salesman = ({ name }) => (
  <div className='sales-man'>
    <p className='sales-man__text'>Vendido por: {name}</p>
  </div>
)

export default Salesman
