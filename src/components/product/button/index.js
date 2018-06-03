'use strict'
import React from 'react'
import './button.scss'

const Button = ({ text, handleClickProduct, addItem }) => (
  <button className={addItem} onClick={handleClickProduct}>{text}</button>
)

export default Button
