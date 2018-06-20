'use strict'
import React from 'react'
import './infor-user.scss'

const InfoUser = ({ userNome, handleChangeName, userLastName, handleChangeLastName, userEmail, handleChangeEmail }) => (
  <div className='info-user'>
    <div className='info-user__field'>
      <label htmlFor='name'>Nome:</label>
      <input type='text' name='name' value={userNome} onChange={handleChangeName} placeholder='Digite seu nome' />
    </div>
    <div className='info-user__field'>
      <label htmlFor='lastname'>Sobrenome:</label>
      <input type='text' name='lastname' value={userLastName} onChange={handleChangeLastName} placeholder='Digite seu sobrenome' />
    </div>
    <div className='info-user__field info-user__field--email'>
      <label htmlFor='email'>E-mail:</label>
      <input type='email' name='email' value={userEmail} onChange={handleChangeEmail} placeholder='Digite seu e-mail' />
    </div>
  </div>
)

export default InfoUser
