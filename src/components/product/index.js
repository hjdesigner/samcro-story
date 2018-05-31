'use strict'
import React from 'react'
import Image from './images'
import Title from './title'
import Prices from './prices'
import Button from './button'
import Salesman from './salesman'
import Comments from './comments'
import Description from './description'
import './product.scss'

const Product = ({ item }) => (
  <div className='product'>
    <div className='product__image'>
      <Image image={item.image} name={item.name} />
    </div>
    <div className='product__details'>
      <Title title={item.name} />
      <Prices
        priceOrigin={item.priceOrigin}
        priceCurrent={item.priceCurrent}
        installmentPayment={item.installmentPayment}
        installmentValue={item.installmentValue} />
      <Button text='Eu quero' />
      <Salesman name={item.salesman} />
      <Comments />
    </div>
    <div className='product__info'>
      <Description text={item.descriptiom} />
    </div>
  </div>
)

export default Product
