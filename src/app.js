'use strict'
import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import pagarme from 'pagarme'
import Header from 'containers/header'
import Home from 'containers/home'
import Product from 'containers/product'
import Checkout from 'containers/checkout'
import Success from 'containers/success'
import './default.scss'

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      showCase: [],
      product: {},
      cartNumber: 0,
      itemsCart: [],
      totalStand: 0,
      payableSuccess: [],
      idOrder: '',
      userNome: '',
      userLastName: '',
      userEmail: '',
      statusFinish: 'disable',
      addItem: '',
      statusProduct: false
    }
    this.handleChangeName = (e) => {
      const cartLength = this.state.itemsCart
      const emailLength = this.state.userEmail
      const nameValue = e.target.value
      this.setState({ userNome: nameValue })
      if (cartLength.length >= 1 && emailLength.length > 1 && nameValue.length > 1) {
        this.setState({ statusFinish: '' })
      } else {
        this.setState({ statusFinish: 'disable' })
      }
    }
    this.handleChangeLastName = (e) => {
      this.setState({ userLastName: e.target.value })
    }
    this.handleChangeEmail = (e) => {
      const cartLength = this.state.itemsCart
      const emailValue = e.target.value
      const nameLength = this.state.userNome
      this.setState({ userEmail: emailValue })
      if (cartLength.length >= 1 && nameLength.length > 1 && emailValue.length > 1) {
        this.setState({ statusFinish: '' })
      } else {
        this.setState({ statusFinish: 'disable' })
      }
    }
    this.handleShowCase = (id) => () => {
      const idProduct = id
      fetch(`http://localhost:3004/product/${idProduct}`)
        .then(response => response.json())
        .then((data) => {
          const result = data
          this.setState({
            product: result,
            addItem: '',
            statusProduct: true
          })
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
        totalStand: valueTotal,
        payableSuccess: [],
        idOrder: '',
        addItem: 'add'
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
      if (numberState === 0) {
        this.setState({ statusFinish: 'disable' })
      }
    }
    this.formatValue = (number) => {
      let numberFormat = number.toFixed(2).split('.')
      numberFormat[0] = 'R$ ' + numberFormat[0].split(/(?=(?:...)*$)/).join('.')
      return numberFormat.join(',')
    }
    this.payables = (id) => {
      pagarme.client.connect({ api_key: 'ak_test_XzD2zWz0jO5cgkLngiROTgQvCBoNfK' })
        .then(client => client.payables.find({
          transactionId: id
        }))
        .then(payables => {
          const sortPay = payables.sort((a, b) => b.amount - a.amount)
          const value = sortPay.map(item => this.formatValue(item.amount / 100))
          this.setState({
            payableSuccess: value,
            idOrder: id,
            product: {},
            cartNumber: 0,
            itemsCart: [],
            totalStand: 0
          })
        })
    }
    this.handleFinish = () => {
      const items = this.state.itemsCart
      const itemsPagarme = []
      items.forEach(item => {
        itemsPagarme.push({
          id: item.id.toString(),
          title: item.name,
          unit_price: parseInt(item.value.replace(',', '.') * 100),
          quantity: 1,
          tangible: true
        })
      })
      pagarme.client.connect({ api_key: 'ak_test_XzD2zWz0jO5cgkLngiROTgQvCBoNfK' })
        .then(client => client.transactions.create({
          'amount': this.state.totalStand * 100,
          'card_number': '4111111111111111',
          'card_cvv': '123',
          'card_expiration_date': '0922',
          'card_holder_name': 'Morpheus Fishburne',
          'customer': {
            'external_id': '#3311',
            'name': 'Morpheus Fishburne',
            'type': 'individual',
            'country': 'br',
            'email': 'mopheus@nabucodonozor.com',
            'documents': [
              {
                'type': 'cpf',
                'number': '00000000000'
              }
            ],
            'phone_numbers': ['+5511999998888', '+5511888889999'],
            'birthday': '1965-01-01'
          },
          'billing': {
            'name': 'Trinity Moss',
            'address': {
              'country': 'br',
              'state': 'sp',
              'city': 'Cotia',
              'neighborhood': 'Rio Cotia',
              'street': 'Rua Matrix',
              'street_number': '9999',
              'zipcode': '06714360'
            }
          },
          'shipping': {
            'name': 'Neo Reeves',
            'fee': 0,
            'delivery_date': '2000-12-21',
            'expedited': true,
            'address': {
              'country': 'br',
              'state': 'sp',
              'city': 'Cotia',
              'neighborhood': 'Rio Cotia',
              'street': 'Rua Matrix',
              'street_number': '9999',
              'zipcode': '06714360'
            }
          },
          'items': itemsPagarme,
          'split_rules': [
            {
              'recipient_id': 're_cjhxy6d4701l4sh6e6h0qlrqo',
              'percentage': 60,
              'liable': true,
              'charge_processing_fee': true
            },
            {
              'recipient_id': 're_cjhxy63kq01sxdy6dyq8f8jv5',
              'percentage': 25,
              'liable': true,
              'charge_processing_fee': true
            },
            {
              'recipient_id': 're_cjhxsk18e01bytb6e5pyom958',
              'percentage': 15,
              'liable': true,
              'charge_processing_fee': true
            }
          ]
        }))
        .then(transaction => this.payables(transaction.id))
    }
  }
  componentDidMount () {
    fetch('http://localhost:3004/showcase')
    .then(response => response.json())
    .then((data) => {
      const result = data
      this.setState({showCase: result})
    })
    const url = window.location.href
    const idProduct = url.split('-').slice(-1)[0]
    if (idProduct > 0 && this.state.statusProduct === false) {
      fetch(`http://localhost:3004/product/${idProduct}`)
        .then(response => response.json())
        .then((data) => {
          const result = data
          this.setState({
            product: result,
            addItem: '',
            statusProduct: false
          })
        })
    }
  }
  render () {
    return (
      <Router>
        <div>
          <Header cartNumber={this.state.cartNumber} />
          <Route exact path='/' render={(...props) => (<Home showCase={this.state.showCase} handleShowCase={this.handleShowCase} />)} />
          <Route exact path='/produto/:slug' render={(...props) => (<Product
            item={this.state.product}
            handleClickProduct={this.handleClickProduct}
            addItem={this.state.addItem} />)} />
          <Route exact path='/carrinho' render={(...props) => (<Checkout
            items={this.state.itemsCart}
            cartNumber={this.state.cartNumber}
            totalStand={this.state.totalStand}
            handleRemoveProduct={this.handleRemoveProduct}
            handleFinish={this.handleFinish}
            handleChangeName={this.handleChangeName}
            handleChangeLastName={this.handleChangeLastName}
            handleChangeEmail={this.handleChangeEmail}
            userNome={this.state.userNome}
            userLastName={this.state.userLastName}
            userEmail={this.state.userEmail}
            statusFinish={this.state.statusFinish} />)} />
          <Route exact path='/sucesso' render={(...props) => (<Success payableSuccess={this.state.payableSuccess} idOrder={this.state.idOrder} />)} />
        </div>
      </Router>
    )
  }
}

export default App
