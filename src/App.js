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
    },[]
    );

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
          limparFormulário();

        }
      })
    }

    //Método remover produto
    const remover = () => {
      fetch('http://localhost:8080/remover/'+objProduto.codigo,{
        method:'delete',
        headers:{
          'Content-type':'application/json',
          'Accept':'application/json'
          }}).then(retorno => retorno.json())
          .then(retorno_convertido=>{
    //mensagem
      alert(retorno_convertido.mensagem);

      //copia do vetor de produtos
      let vetorTemp = [...produtos]

      //Índice
      let indice = vetorTemp.findIndex((p)=>{
        return p.codigo === objProduto.codigo;
      })

      vetorTemp.splice(indice,1)

      //atualizando o vetor de produtos
      setProdutos(vetorTemp);

      //Limpar formulário
      limparFormulário();
    })}


      //Método alterar produto
    const alterar = () => {
      fetch('http://localhost:8080/alterar',{
        method:'put',
        body:JSON.stringify(objProduto),
        headers:{
          'Content-type':'application/json',
          'Accept':'application/json'}}).then(retorno => retorno.json())
          .then(retorno_convertido=>{

      if(retorno_convertido.mensagem !== undefined){
        alert(retorno_convertido.mensagem);
      }else{

        //mensagem
        alert('Produto alterado com sucesso!');

        //copia do vetor de produtos
        let vetorTemp = [...produtos]

        //Índice
        let indice = vetorTemp.findIndex((p)=>{
        return p.codigo === objProduto.codigo;
      })
        //alterar produto do vetor
        vetorTemp[indice]=objProduto;

        //atualizando o vetor de produtos
        setProdutos(vetorTemp);

        //limpar o formulário
        limparFormulário();
      }})}
        //limpar formulário

    const limparFormulário =() => {
      setObjProduto(produto);
      setBtnCadastrar(true);
    }
        //selecionar produto
    const selecionarProduto=(indice)=>{
      setObjProduto(produtos[indice]);
      setBtnCadastrar(false);
    }
        //retorno
    return (
      <div>
          <Formulario botao={btnCadastrar} eventoTeclado={aoDigitar}cadastrar={cadastrar} obj={objProduto} remover={remover} alterar={alterar}
          cancelar = {limparFormulário}/>
          <Tabela vetor={produtos} selecionar={selecionarProduto}/>
      </div>
    );}

  export default App;
