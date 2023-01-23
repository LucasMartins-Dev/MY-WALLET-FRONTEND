import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/login.js";
import Cadastro from "./components/cadastro.js";
import Balance from "./components/home.js";
import Entrada from "./components/entrada.js";
import Saida from "./components/saida.js";
import Globalstyle from "./components/globalstyle.js";
import { UserContext } from "./components/token";
import { useState } from "react";

export default function App() {
  const [User, setUser] = useState({});

  const [usuname,setusuname] = useState('fulano')
  

  return (
    
    <BrowserRouter>
    <UserContext.Provider value={{User, setUser}}>
    <Globalstyle/>
      <Routes>
        <Route path="/" element={<Login setusuname={setusuname}/>}></Route>
        <Route path="/cadastro" element={<Cadastro />}></Route>
        <Route path="/home" element={<Balance usuname = {usuname} User ={User} />}></Route>
        <Route path="/nova-entrada" element={<Entrada User={User}/>}></Route>
        <Route path="/nova-saida" element={<Saida User={User} />}></Route>
      </Routes>
      </UserContext.Provider>
    </BrowserRouter>
    
  );
}