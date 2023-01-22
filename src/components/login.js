import styled  from 'styled-components'
import { Link} from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';

export default function Login() {
  const navigate = useNavigate();
  const[email,setemail]=useState('')
  const[senha,setsenha]=useState('')
  const[info,setinfo]=useState(null)
  console.log(email)
  console.log(info)

function logar (){

  const logando = axios.post("http://localhost:5000/sign-in",
  {
    email: email,
    password: senha
  }
  )
  logando.then(respondeu)
  logando.catch((response)=>alert(response.data.message))
  
 
}

function respondeu(response){
  setinfo(response.data)
  navigate("/hoje")
    console.log('oi')
}

  return (
    <Tela>
     
      <Titulo>MyWallet</Titulo>
      <Input>
        <input onChange={event => setemail(event.target.value)} placeholder="E-mail"></input>
      </Input>
      <Input>
        <input onChange={event => setsenha(event.target.value)} placeholder="Senha"></input>
      </Input>
      <Botao>
        <button onClick={logar}>Entrar</button>
      </Botao>
      <Link  to="/cadastro">
        <Cadastro>Primeira vez? Cadastre-se!</Cadastro>
      </Link>
    </Tela>
  );
}

const Tela = styled.div`
display:flex;
flex-direction: column;
align-items:center;
justify-content: center;
width: 375px;
height: 667px;
background-color: #8C11BE;
`

const Cadastro = styled.div`

color: white;
`;
const Titulo = styled.div`
display: flex;
align-items: center;
justify-content: center;
  font-family: 'Playball', cursive;
  font-weight: 400;
  font-size: 32px;
  color: white;
`;

const Input = styled.div`
  input {
    box-sizing: border-box;
    padding-left: 10px;
  
    margin-bottom:5px ;
    border-radius: 5px;
    border: 1px solid #d4d4d4;
    width: 303px;
    height: 45px;
  }
`;
const Botao = styled.div`
  button {
    border-radius: 5px;
   
    margin-bottom:5px ;
    border: none;
    width: 303px;
    height: 45px;
    background-color:#A328D6;
;
    color: white;
  }
`;