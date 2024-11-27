import React, { useState } from 'react'
import Header from './Header'

const Fruits = () => {
  const [fruit, setFruit]= useState('Grape');
  const fruit1 = 'Banana';
  const fruit2 = 'Watermelon';
  return (
    <div>
      <ol>
        <li className='apple'>Apple</li>
        <li className='banana'>{fruit1}</li>
        <li className='watermelon'>{fruit2.toUpperCase()}</li>
        <li>{fruit}</li>
      </ol>
      <button type='button' onClick={() => setFruit('Dragonfruit')  }>Change Fruit</button>
    </div>
  )
}

export default Fruits