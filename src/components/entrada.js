import styled  from 'styled-components'
import { Link} from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';
import Home from './home';
import dayjs from 'dayjs';


export default function Entrada ({User}){
    const navigate = useNavigate();
    let valor = 0;
    let descrição = ""

    function Valores(event) {
      valor = Number(Math.round(event.target.value * 100) / 100).toFixed(2);//event.target.value
  }
  function Descricao(event) {
      descrição = event.target.value
  }

    function Send(){
      if(valor === 0) {return console.log("Valor não pode ser 0")}
      if(descrição === ""){return console.log("Descrição não pode ficar em branco")}
      let Envio = {description: descrição , value: valor , type:'entrada'}
        const config = {headers:{ 'Authorization': `Bearer ${User} `}}
        const request = axios.post(`${process.env.REACT_APP_API_URL}/nova-entrada`, Envio ,config)
            .then(resp)
            .catch(err => console.log(err))
        navigate("/home")
    }

    function resp(res){
      
    }
    return(
        <Tela>
            <Titulo>
                Nova entrada
            </Titulo> 
            <Input>
        <input onChange={Valores} placeholder="Valor"></input>
      </Input>
      <Input>
        <input onChange={Descricao} placeholder="Descrição"></input>
      </Input>
      <Botao>
        <button onClick={Send}>Salvar entrada</button>
      </Botao>
        </Tela>
    )
}

const Tela = styled.div`
display:flex;
flex-direction: column;
align-items:center;
justify-content: start;
width: 375px;
height: 667px;
background-color: #8C11BE;
`
const Titulo = styled.div `
 font-family: 'Raleway', sans-serif;
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
    font-family: 'Raleway', sans-serif;
    font-size: 20px;
    font-weight: 400;
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
    font-family: 'Raleway', sans-serif;
    font-size: 20px;
    font-weight: 700;
    margin-bottom:5px ;
    border: none;
    width: 303px;
    height: 45px;
    background-color:#A328D6;
;
    color: white;
  }
`