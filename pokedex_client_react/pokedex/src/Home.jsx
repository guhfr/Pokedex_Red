import './Home.css'
import Logos from './imgs/Group 15.png'
import Logout from './imgs/log-out.png'
import Pokedex from './components/Pokedex'
import MyList from './components/MyList'
import MyPokemons from './components/MyPokemons'
import { useState } from 'react'
import {useNavigate} from "react-router-dom";

export default function Home() {

  const navigate= useNavigate()

const [screenRender, setScreenRender] = useState(0)




    return (
      <div className='allScreen'>
        <div className="side-menu">
          <div className='LogoandMenu'>
          <div className='homeImg'>
            <img src={Logos} className="imag" onClick={()=>{setScreenRender(0)}}></img>
          </div>
          <div className='Menu'>
            <div className='menuItem1'>
              <a onClick={()=>{setScreenRender(0)}} style={screenRender==0?{color:'#FFCB05'}:{color:'white'}}>Todos os pokémons</a>
            </div>
            <div className='menuItem2'>
            <a onClick={()=>{setScreenRender(1)}} style={screenRender==1?{color:'#FFCB05'}:{color:'white'}}>Minhas listas</a>
            </div>
            <div className='menuItem3'>
            <a onClick={()=>{setScreenRender(2)}} style={screenRender==2?{color:'#FFCB05'}:{color:'white'}}>Meus Pokémons</a>
            </div>
            <div className='menuItem'>
            <a onClick={()=>{alert('Modal de Criação de lista')}}>Criar nova lista</a>
            </div>
            <div className='menuItem'>
            <a onClick={()=>{alert('Modal de Criação de pokemon')}}>Criar novo pokémon</a>
            </div>
          </div>
          </div>
          <div className='Logout-button' onClick={()=>{navigate('/')}}>
            <img className='exitIcon' src={Logout}/>Sair
        </div>
        </div>
        
        {
          screenRender==0?<Pokedex/>:
          screenRender==1?<MyList/>:
          screenRender==2?<MyPokemons/>:null
        }
      </div>
    );
  }