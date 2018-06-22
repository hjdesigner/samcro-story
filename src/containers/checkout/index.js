'use strict'
import React from 'react'
import Showcase from 'components/checkout/showcase'
import TotalStand from 'components/checkout/totalStand'
import './cart.scss'

const Checkout = ({
  items,
  cartNumber,
  totalStand,
  handleRemoveProduct,
  handleFinish,
  handleChangeName,
  userNome,
  userError,
  userLastName,
  handleChangeLastName,
  userEmail,
  handleChangeEmail,
  statusFinish }) => (
    <main className='main'>
      <div className='container'>
        <div className='page-cart'>
          <h1>Carrinho</h1>
          <Showcase items={items} handleRemoveProduct={handleRemoveProduct} />
          <TotalStand
            userError={userError}
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
      </div>
    </main>
)

export default Checkout
