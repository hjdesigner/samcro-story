'use strict'
import React from 'react'
import Showcase from './showcase'
import TotalStand from './totalStand'
import './cart.scss'

const Cart = ({
  items,
  cartNumber,
  totalStand,
  handleRemoveProduct,
  handleFinish,
  handleChangeName,
  userNome,
  userLastName,
  handleChangeLastName,
  userEmail,
  handleChangeEmail,
  statusFinish }) => (
    <div className='page-cart'>
      <h1>Carrinho</h1>
      <Showcase items={items} handleRemoveProduct={handleRemoveProduct} />
      <TotalStand
        userNome={userNome}
        handleChangeName={handleChangeName}
        cartNumber={cartNumber}
        totalStand={totalStand}
        handleFinish={handleFinish}
        userLastName={userLastName}
        handleChangeLastName={handleChangeLastName}
        userEmail={userEmail}
        handleChangeEmail={handleChangeEmail}
        statusFinish={statusFinish} />
    </div>
)

export default Cart
