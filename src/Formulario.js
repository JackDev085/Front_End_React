function Formulario({botao,eventoTeclado,cadastrar,obj}){
    return(
        <form>
            <input type='text' value={obj.nome} onChange={eventoTeclado} name= 'nome' placeholder='Nome' className='form-control'></input>
            <input type='text' value={obj.marca} onChange={eventoTeclado} name='marca' placeholder='Marca'className='form-control'></input>
            {
                botao
                ?
                <input type='button' value='Cadastrar' onClick={cadastrar} className='btn btn-primary'></input>
                :
                <div>
                    <input type='button' value='Alterar'className='btn btn-warning'></input>
                    <input type='button' value='Remover'className='btn btn-danger'></input>
                    <input type='button' value='Cancelar'className='btn btn-secondary'></input>
                </div>
            }
            
           
        </form>
    )
}
export default Formulario;