'use strict'
import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Header from './components/header'
import Showcase from './components/showcase'
import Product from './components/product'
import Cart from './components/cart'
import './default.scss'

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      showCase: [],
      product: {},
      cartNumber: 0,
      itemsCart: [],
      totalStand: 0
    }
    this.handleShowCase = (e) => {
      const idProduct = e.target.closest('a').getAttribute('data-id')
      fetch(`http://localhost:3004/product/${idProduct}`)
        .then(response => response.json())
        .then((data) => {
          const result = data
          this.setState({product: result})
        })
    }
    this.handleClickProduct = () => {
      let total = this.state.totalStand
      const numberState = this.state.cartNumber + 1
      const product = this.state.product
      let valueTotal = parseInt(product.priceCurrent.replace(',', '.')) + total
      let cart = this.state.itemsCart
      let item = {
        id: product.id,
        image: product.image,
        name: product.name,
        value: product.priceCurrent,
        salesman: product.salesman
      }
      cart.push(item)
      this.setState({
        cartNumber: numberState,
        totalStand: valueTotal
      })
    }
    this.handleRemoveProduct = (e) => {
      const idProduct = parseInt(e.target.getAttribute('data-id'))
      const productValue = parseInt(e.target.getAttribute('data-price').replace(',', '.'))
      const items = this.state.itemsCart
      const numberState = this.state.cartNumber - 1
      let total = this.state.totalStand
      let valueTotal = total - productValue
      const newItems = items.filter(item => item.id !== idProduct ? item : '')
      this.setState({
        itemsCart: newItems,
        cartNumber: numberState,
        totalStand: valueTotal
      })
    }
  }
  componentDidMount () {
    fetch('http://localhost:3004/showcase')
    .then(response => response.json())
    .then((data) => {
      const result = data
      this.setState({showCase: result})
    })
  }
  render () {
    return (
      <Router>
        <div>
          <Header cartNumber={this.state.cartNumber} />
          <div className='main'>
            <div className='container'>
              <Route exact path='/' render={(...props) => (<Showcase items={this.state.showCase} handleShowCase={this.handleShowCase} />)} />
              <Route exact path='/produto/:slug' render={(...props) => (<Product item={this.state.product} handleClickProduct={this.handleClickProduct} />)} />
              <Route exact path='/carrinho' render={(...props) => (<Cart
                items={this.state.itemsCart}
                cartNumber={this.state.cartNumber}
                totalStand={this.state.totalStand}
                handleRemoveProduct={this.handleRemoveProduct} />)} />
            </div>
          </div>
        </div>
      </Router>
    )
  }
}

export default App
