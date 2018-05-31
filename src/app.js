'use strict'
import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Header from './components/header'
import Showcase from './components/showcase'
import Product from './components/product'
import './default.scss'

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      showCase: [],
      product: {}
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
          <Header />
          <div className='main'>
            <div className='container'>
              <Route exact path='/' render={(...props) => (<Showcase items={this.state.showCase} handleShowCase={this.handleShowCase} />)} />
              <Route exact path='/produto/:slug' render={(...props) => (<Product item={this.state.product} />)} />
            </div>
          </div>
        </div>
      </Router>
    )
  }
}

export default App
