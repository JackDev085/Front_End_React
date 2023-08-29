import React, { useEffect, useState } from "react";
import './App.css';
import Formulario from './Formulario';
import Tabela from './Tabela';

function App() {

  //objeto produto
  const produto = {

    codigo :0,
    nome :'',
    marca:''
  }
  //useState
  const [btnCadastrar,setBtnCadastrar]=useState(true);
  const[produtos,setProdutos]=useState([]);
  const[objProduto, setObjProduto]=useState(produto);

  //UseEffect
  useEffect(()=>{
    fetch("http://localhost:8080/listar").then(retorno=>retorno.json())
    .then(retorno_convertido=>setProdutos(retorno_convertido))
  },[]);

  //obtendo os dados do formulário
  const aoDigitar=(e)=>{
    setObjProduto({...objProduto,[e.target.name]:e.target.value});
  }

  //Método cadastrar produto
  const cadastrar = () => {
    fetch('http://localhost:8080/cadastrar',{
      method:'post',
      body:JSON.stringify(objProduto),
      headers:{
        'Content-type':'application/json',
        'Accept':'application/json'
      }
    })
    .then(retorno => retorno.json())
    .then(retorno_convertido=>{

      if(retorno_convertido.mensagem !== undefined){
        alert(retorno_convertido.mensagem);
      }else{
        setProdutos([...produtos,retorno_convertido]);
        alert('Produto cadastrado com sucesso!');
      }
  })
}
  //retorno
  return (
    <div>
      <Formulario botao={btnCadastrar} eventoTeclado={aoDigitar}cadastrar={cadastrar}
      />
      <Tabela vetor={produtos}/>
    </div>
  );
}

export default App;
