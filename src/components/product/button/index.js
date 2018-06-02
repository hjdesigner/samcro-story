'use strict'
import React from 'react'
import './button.scss'

const Button = ({ text, handleClickProduct }) => (
  <button onClick={handleClickProduct}>{text}</button>
)

export default Button
