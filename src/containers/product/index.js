'use strict'
import React from 'react'
import Image from 'components/product/images'
import Title from 'components/product/title'
import Prices from 'components/product/prices'
import Button from 'components/product/button'
import Salesman from 'components/product/salesman'
import Comments from 'components/product/comments'
import Description from 'components/product/description'
import './product.scss'

const Product = ({ item, handleClickProduct, addItem }) => (
  <main className='main'>
    <div className='container'>
      <div className='product'>
        <section className='product__image'>
          <Image image={item.image} name={item.name} />
        </section>
        <section className='product__details'>
          <Title title={item.name} />
          <Prices
            priceOrigin={item.priceOrigin}
            priceCurrent={item.priceCurrent}
            installmentPayment={item.installmentPayment}
            installmentValue={item.installmentValue} />
          <Button text='Eu quero' handleClickProduct={handleClickProduct} addItem={addItem} />
          <Salesman name={item.salesman} />
          <Comments />
        </section>
        <section className='product__info'>
          <Description text={item.descriptiom} />
        </section>
      </div>
    </div>
  </main>
)

export default Product
