'use strict'
import React from 'react'
import './comments.scss'

const Comments = () => (
  <div className='comments'>
    <h2>Comente</h2>
    <form>
      <textarea className='comments__textarea' placeholder='Faça sua pergunta (ou um elogio querido) ao vendedor' />
      <button className='comment__button'>Enviar</button>
    </form>
  </div>
)

export default Comments
