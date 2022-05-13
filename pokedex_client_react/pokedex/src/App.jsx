import Pikachu from './imgs/Pikachu.jpg'
import React, {useEffect, useState } from 'react'
import Elipse from './imgs/Ellipse 5.png'
import Line from './imgs/Line 4.png'
import Logos from './imgs/Group 15.png'
import './App.css'

import FormLogin from './components/FormsLogin'

function App() {

  return (
    <div className="App">
      <div className='login-screen'>
        <div className='logos'>
            <img className='logo' src={Logos}></img>
        </div>
        <FormLogin/>
      </div>
      <div className='side-img'>
        <img src={Elipse} className='elipse'></img>
        <img src={Line} className='line'></img>
        <img src={Pikachu} className='back-img'></img>
      </div>
    </div>
  )
}

export default App
