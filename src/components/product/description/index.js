'use strict'
import React from 'react'
import './description.scss'

const Description = ({ text }) => (
  <div className='description'>
    <h2>Descrição</h2>
    <p>{text}</p>
  </div>
)

export default Description
