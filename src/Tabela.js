function Tabela({vetor, selecionar}){
    return(
        <table className='table'>
            <thead>
                <tr>
                    <th>#</th>
                    <th>#Nome</th>
                    <th>#Marca</th>
                    <th>#Preço</th>
                    <th>#Data</th>
                    <th>#Garantia</th>
                    <th>#Selecionar</th>
                </tr>
            </thead>
        <tbody>
            {
                vetor.map((obj,indice)=>(
                    <tr key={(indice)}>
                        <td>{indice+1}</td>
                        <td>{obj.nome}</td>
                        <td>{obj.marca}</td>
                        <td>{obj.preco}</td>
                        <td>{obj.data}</td>
                        <td>{obj.garantia}</td>

                        <td><button onClick={()=>{selecionar(indice)}} className="btn btn-success">Selecionar</button></td>
                    </tr>
                ))}
        </tbody>
        </table>
    )
}
export default Tabela;