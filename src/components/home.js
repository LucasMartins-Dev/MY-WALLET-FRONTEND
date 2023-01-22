import styled  from 'styled-components'
import { Link} from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';



export default function Home (){
    const navigate = useNavigate();
    function Logout(){
        navigate("/")
    }
    function NewIn(){
        navigate("/nova-entrada")
    }
    function NewOut(){
        navigate("/nova-saida")
    }

    return(
        <Tela>
            <Top>
            <Titulo>
                Olá , Fulano
            </Titulo>
            <Icon><ion-icon onClick={Logout} name="log-out-outline"></ion-icon></Icon>
            </Top>
            <Registros>

            </Registros>
            <Botoes>
                <Entrada onClick={NewIn}>
                <ion-icon name="add-circle-outline"></ion-icon>
                <h1>Nova entrada</h1>
                </Entrada>
                <Saida onClick={NewOut}>
                <ion-icon name="remove-circle-outline"></ion-icon>
                <h1>Nova saida</h1>
                </Saida>
            </Botoes>
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

const Top = styled.div`
margin: 10px;
display: flex;
align-items: flex-start;
justify-content: flex-start;

`
const Titulo = styled.div `
padding-right: 130px;
margin: 10px;
color:white;
font-size: 26px;
font-weight: 700;
`
const Icon = styled.div`

margin: 10px;
color:white;
ion-icon{
    font-size: 25px;
}
`

const Registros = styled.div`
background-color: white;
width: 326px;
height: 446px;
border-radius: 5px ;
`
const Entrada = styled.div`
box-sizing: border-box;
padding: 10px;
width: 155px;
height: 114px;
background-color: #A328D6;
margin-top: 15px;
margin-right: 15px ;
border-radius: 5px ;
color: white;
ion-icon{
    font-size: 30px;
}
h1{
    font-size: 17px;
    font-weight: 700;
}
`

const Saida = styled.div`
box-sizing: border-box;
padding: 10px;
color: white;
margin-top: 15px;
width: 155px;
height: 114px;
background-color: #A328D6;
border-radius: 5px ;
ion-icon{
    font-size: 30px;
}
h1{
    font-size: 17px;
    font-weight: 700;
}
`
const Botoes = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
`