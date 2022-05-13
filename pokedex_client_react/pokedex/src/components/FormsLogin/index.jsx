import { Link, useNavigate} from "react-router-dom";
import React from "react";
import getUser from "../services/getUser"
import './style.css'

async function login(){
  let email = document.querySelector('#Email').value
  let senha = document.querySelector('#Senha').value
  const user = await getUser(email) 
  if (!user.data){
    return alert('Usuário não encontrado')
  }
  if (user.data.senha!=senha){
    return alert('Senha incorreta')
  }
  return user.status
}

function FormLogin() {
  const navigate=useNavigate()
  return(
    <div className="AllItensLogin">
        <div className='formul'>
          <form>
            <div className="campo">
              <label className='field-user'>Usuário</label>
              <input className="inputLogin" type="text" id='Email' name="user" />
            </div>
            <div  className="campo">
              <label className='field-user'>Senha</label>
              <input className="inputLogin" type="password" id='Senha' name="password" />
            </div>
            <div className="forgot">
              <p>Esqueci minha senha</p>
            </div>
          </form>
          <div className="divButton">
              <button className="ButtonIn" onClick={async ()=>{await login()=='200'? navigate('/home'):null}}>Entrar</button>
          </div>
        </div>
        <div className='cadastro-modal'>
        <Link to="/register">Fazer cadastro</Link>
        </div>
        </div>
  )
}

export default FormLogin