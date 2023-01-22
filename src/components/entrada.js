import styled  from 'styled-components'
import { Link} from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';
import Home from './home';



export default function Entrada (){
    const navigate = useNavigate();
    const[valor,setvalor]=useState('')
    const[descrição,setdescrição]=useState('')

    function Home(){
        navigate("/home")
    }
    return(
        <Tela>
            <Titulo>
                Nova entrada
            </Titulo> 
            <Input>
        <input onChange={event => setvalor(event.target.value)} placeholder="Valor"></input>
      </Input>
      <Input>
        <input onChange={event => setdescrição(event.target.value)} placeholder="Descrição"></input>
      </Input>
      <Botao>
        <button onClick={Home}>Salvar entrada</button>
      </Botao>
        </Tela>
    )
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
const Titulo = styled.div `
padding-right: 130px;
margin: 10px;
color:white;
font-size: 26px;
font-weight: 700;
`
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
`
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
`