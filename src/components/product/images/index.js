'use strict'
import React from 'react'

const Image = ({ image, name }) => (
  <figure>
    <img src={image} alt={name} />
  </figure>
)

export default Image