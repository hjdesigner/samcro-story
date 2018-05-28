'use strict'
import React from 'react'
import { Link } from 'react-router-dom'

const Showcase = () => (
  <ul>
    <li>
      <Link to='/camisa-levis'>
        <figure>
          <img src='https://res-3.cloudinary.com/enjoei/image/upload/a_0,c_fill,fl_lossy.progressive,g_center,h_294,q_70,w_276/xdhrdbpszre2sqjdzpmz.jpg' />
        </figure>
      </Link>
    </li>
  </ul>
)

export default Showcase
