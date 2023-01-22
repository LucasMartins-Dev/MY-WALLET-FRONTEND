import styled  from 'styled-components'
import { Link } from "react-router-dom";
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function Cadastro() {
  const navigate = useNavigate();
    const[email,setemail]=useState('')
    const[senha,setsenha]=useState('')
    const[image,setimage]=useState('')
    const[name,setname]=useState('')
    const[info,setinfo]=useState([])
    console.log(info)

    function Cadastrar(){
        const cadastro = axios.post('https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/sign-up',
        {
            email: email,
            name: name,
            image: image,
            password: senha
        }
        )
        cadastro.then(deucerto)
    }

    function deucerto(response){
        setinfo(response.data)
        navigate("/")
    }


  return (
    <Tela>
      
      <Titulo>MyWallet</Titulo>
      <Input>
        <input  onChange={event => setname(event.target.value)} placeholder="Nome"></input>
      </Input>
      <Input>
        <input onChange={event => setemail(event.target.value)} placeholder="E-mail"></input>
      </Input>
      <Input>
        <input onChange={event => setsenha(event.target.value)} placeholder="Senha"></input>
      </Input>
      
      <Input>
        <input  onChange={event => setimage(event.target.value)} placeholder="Confirme a senha"></input>
      </Input>
      <Botao>
        <button  onClick={Cadastrar}>Cadastrar</button>
      </Botao>
      <Link to="/">
        <Logar>Já tem uma conta? Faça login!</Logar>
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

const Logar = styled.div`

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