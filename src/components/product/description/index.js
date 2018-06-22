'use strict'
import React from 'react'
import './description.scss'

const Description = ({ text }) => (
  <article className='description'>
    <h2>Descrição</h2>
    <p>{text}</p>
  </article>
)

export default Description
