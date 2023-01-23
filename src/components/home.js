import styled  from 'styled-components'
import { isRouteErrorResponse, useNavigate } from 'react-router-dom';
import { useState , useEffect , useContext } from 'react';
import axios from 'axios';
import { UserContext } from './token';




export default function Balance ({User, usuname}){
    let soma;
    
  
    const [items, setItems] = useState([]);

  
  const navigate = useNavigate();


  useEffect(() => {        
    const config = {headers:{ 'Authorization': `Bearer ${User} `}}

    const request = axios.get("http://localhost:5000/balance", config)
    request.then(resposta => {  
        
        setItems(resposta.data);
    });
}, []);

     function somandor(){
       let somando = 0;
        for(let i=0;i<items.length;i++){
            if(items[i].type === 'entrada'){
                somando = somando + parseFloat(items[i].value)
            }else{
                somando = somando - parseFloat(items[i].value)
            }
        }

        soma = somando.toFixed(2)
        return soma
     } 


somandor()
    function Logout(){

        window.location.href = "http://localhost:3000/"
       
    }
    function NewIn(){
        navigate("/nova-entrada")
    }
    function NewOut(){
        navigate("/nova-saida")
    }

    if(items.length === 0){

        return(
            <Tela>
                <Top>
                <Titulo>
                Olá, {usuname}
                </Titulo>
                <Icon><ion-icon onClick={Logout} name="log-out-outline"></ion-icon></Icon>
                </Top>
                <Registross>
                Não há registros de entrada ou saída.
                </Registross>
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

    } else{
        return(
            <Tela>
                <Top>
                <Titulo>
                Olá, {usuname}
                </Titulo>
                <Icon><ion-icon onClick={Logout} name="log-out-outline"></ion-icon></Icon>
                </Top>
                <Registros>
                    
                   <div>{items.map(item=>{
                    return(
                        <ItensW key={item._id}>
                            <Data >{item.date}</Data>
                            <Divz>
                                <Descricao>{item.description}</Descricao>
                                <Valor cor={item.type}>{item.value}</Valor>
                            </Divz>
                        </ItensW>)
                   })}</div>
                 <Saldo saldo={soma}>
                    <h1>SALDO </h1>
                    <span>{soma}</span>
                 </Saldo>
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
  
}
const Registross = styled.div`
background-color: white;
display: flex;
align-items: center;
justify-content: center;
width: 326px;
height: 446px;
border-radius: 5px ;
font-size: 20px;
font-weight: 400;
color:#868686;
padding-left: 70px;
padding-right: 50px;
box-sizing: border-box;
font-family: 'Raleway', sans-serif;
`

const Saldo = styled.div`
display: flex;
flex-direction: row;
width: 100%;
justify-content: space-between;
span{
    font-family: 'Raleway', sans-serif;
    font-size: 17px;
    font-weight: 400;
color:${item=>item.saldo<0?"C70000":"#03AC00"}
}
h1{
    font-size: 17px;
font-weight: 700;
font-family: 'Raleway', sans-serif;
}
`


const Divz = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
width: 281px;
box-sizing: border-box;

`

const Itens = styled.div`
`

const Descricao = styled.p`
display: flex;
margin-left: 8px;
font-size: 16px;
font-weight: 400;
font-family: 'Raleway', sans-serif;
color: #000000;
`
const Valor = styled.p`
display: flex;
font-size: 16px;
font-weight: 400;
font-family: 'Raleway', sans-serif;
color: ${i => 
    {if(i.cor === "entrada"){return "#03AC00"}
    else{return "#C70000"}}};
margin-right: 10px;
`

const Data = styled.p`
font-size: 16px;
font-weight: 400;
font-family: 'Raleway', sans-serif;
color: #C6C6C6;
`

const ItensW = styled.div`
display: flex;
font-family: 'Raleway', sans-serif;
justify-content: space-between;
flex-direction: row;
margin-bottom: 1px;
margin-top: 10px;
font-size: 16px;
font-weight: regular;
`


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
padding: 10px;
display: flex;
flex-direction: column;
justify-content: space-between;
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