import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/login.js";
import Cadastro from "./components/cadastro.js";
import Home from "./components/home.js";
import Entrada from "./components/entrada.js";
import Saida from "./components/saida.js";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path="/cadastro" element={<Cadastro />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/nova-entrada" element={<Entrada />}></Route>
        <Route path="/nova-saida" element={<Saida />}></Route>
      </Routes>
    </BrowserRouter>
  );
}