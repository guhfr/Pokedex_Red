import {Link, useNavigate} from "react-router-dom";
import React from "react";
import postUser from '../services/postUser'
import './style.css'

async function cadastrar(){ 
    let email = document.querySelector('#inputEmail').value
    let senha = document.querySelector('#inputSenha').value
    let senhaCheck = document.querySelector('#inputSenhaCheck').value
    if (senha!=senhaCheck){
      return alert("As senhas não coincidem")
    }
    const response = await postUser({email,senha})
    if (response.status==201){
      return response.status
    }else{
      return null //response.MessageError 
    }
  }



function FormCad(){
const navigate= useNavigate()
return (
  <div>
    <div className="backToLogin">
    <Link to="/">&lt;Login</Link>
    </div>
    <div className='formul'>
      <form>
        <div className='campo'>
          <label className='field-user'>E-mail</label>
          <input className="inputCad" type="text" id='inputEmail' name="email" />
        </div>
        <div className='campo'>
          <label className='field-user'>Senha</label>
          <input className="inputCad" type="password" id='inputSenha' name="password-sign" />
        </div>
        <div className='campo'>
          <label className='field-user'>Confirme sua senha</label>
          <input className="inputCad" type="password" id="inputSenhaCheck" name="password-check" />
        </div>
        <div className="forgot">
          <a>Esqueci minha senha</a>
        </div>
      </form>
      <div className="divButton">
            <button  className="ButtonIn" onClick={async ()=>{await cadastrar()=='201'? navigate('/home'):null}}>Entrar</button>
      </div>
    </div>
    </div>
)
}

export default FormCad