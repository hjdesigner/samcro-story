'use strict'
import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Header from './components/header'
import Showcase from './components/showcase'
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
              <Showcase items={this.state.showCase} />
            </div>
          </div>
        </div>
      </Router>
    )
  }
}

export default App
