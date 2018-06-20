'use strict'
import React from 'react'
import Showcase from 'components/showcase'

const Home = ({ showCase, handleShowCase }) => (
  <div className='main'>
    <div className='container'>
      <Showcase items={showCase} handleShowCase={handleShowCase} />
    </div>
  </div>
)

export default Home
