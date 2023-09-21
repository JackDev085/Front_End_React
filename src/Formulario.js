function Formulario({botao,eventoTeclado,cadastrar,obj,cancelar, remover, alterar}){
    return(
        <form>
            <input type='text' value={obj.nome} onChange={eventoTeclado} name= 'nome' placeholder='Nome' className='form-control'></input>
            <input type='text' value={obj.marca} onChange={eventoTeclado} name='marca' placeholder='Marca'className='form-control'></input>
            <input type='text' value={obj.preco} onChange={eventoTeclado} name='preco' placeholder='Preço'className='form-control'></input>
            <input type='text' value={obj.data} onChange={eventoTeclado} name='data' placeholder='Data'className='form-control'></input>
            <input type='text' value={obj.garantia} onChange={eventoTeclado} name='garantia' placeholder='Garantia'className='form-control'></input>
            {
                botao
                ?
                <input type='button' value='Cadastrar' onClick={cadastrar} className='btn btn-primary'></input>
                :
                <div>
                    <input type='button' value='Alterar'onClick={alterar}className='btn btn-warning'></input>
                    <input type='button' value='Remover' onClick ={remover}className='btn btn-danger' ></input>
                    <input type='button' value='Cancelar' onClick={cancelar} className= 'btn btn-secondary'></input>
                </div>
            }
        </form>
    )
}
export default Formulario;