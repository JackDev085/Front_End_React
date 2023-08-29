import React, { useEffect, useState } from "react";
import './App.css';
import Formulario from './Formulario';
import Tabela from './Tabela';

function App() {
  //useState
  const [btnCadastrar,setBtnCadastrar]=useState(true);
  const[produtos,setProdutos]=useState({});
  //UseEffect
  useEffect(()=>{
    fetch("http://localhost:8080/listar").then(retorno=>retorno.json())
    .then(retorn_convertido=>setProdutos(retorn_convertido))
  },[]);
  //retorno
  return (
    <div>
      <Formulario botao={btnCadastrar} />
      <Tabela vetor={produtos}/>
    </div>
  );
}

export default App;
