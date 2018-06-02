'use strict'
import React from 'react'
import url from './sprite.svg'

const Icon = ({ name, link }) => (
  <svg viewBox='0 0 16 16' className={`icon icon-${name}`}>
    <use xlinkHref={`${url}#icon-${name}`} />
  </svg>
)

export default Icon
