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
      showCase: []
    }
  }
  componentDidMount () {
    fetch('http://localhost:3004/showcase')
    .then(response => response.json())
    .then((data) => {
      this.setState({showCase: data})
    })
  }
  render () {
    return (
      <Router>
        <div>
          <Header />
          <div className='main'>
            <div className='container'>
              <Route exact path='/' render={(...props) => (<Showcase items={this.state.showCase} />)} />
              <Route path='/produto/:slug' component={Product} />
            </div>
          </div>
        </div>
      </Router>
    )
  }
}

export default App
