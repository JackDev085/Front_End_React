function Formulario(){
    return(
        <form>
            <input type='text' placeholder='Nome' className='form-control'></input>
            <input type='text' placeholder='Marca'className='form-control'></input>

            <input type='button' value='Cadastrar'className='btn btn-primary'></input>
            <input type='button' value='Alterar'className='btn btn-warning'></input>
            <input type='button' value='Remover'className='btn btn-danger'></input>
            <input type='button' value='Cancelar'className='btn btn-secondary'></input>
        </form>
    )
}
export default Formulario;