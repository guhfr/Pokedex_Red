import Charmander from './imgs/Charmander.jpg'
import Elipse from './imgs/Ellipse 5.png'
import Line from './imgs/Line 4.png'
import Logos from './imgs/Group 15.png'
import './Register.css'

import FormCad from './components/FormsCad'


function Register() {

  return (
    <div className="App">
      <div className='login-screen'>
        <div className='logos'>
            <img src={Logos}></img>
        </div>
      <FormCad/>
      </div>
      <div className='side-img'>
        <img src={Elipse} className='elipse'></img>
        <img src={Line} className='line'></img>
        <img src={Charmander} className='back-img'></img>
      </div>
    </div>
  )
}

export default Register
