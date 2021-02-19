const Categoria = () => {

    function exibirCategorias(event){
        let categoria = event.target;
        console.log(categoria.id);
        
        let caixaDeProdutos = document.getElementsByClassName('box-produto');
    
        for(let i=0; i < caixaDeProdutos.length; i++){
            if(categoria.id == caixaDeProdutos[i].id){
                caixaDeProdutos[i].style = "display:inline-block";
            }else{
                caixaDeProdutos[i].style = "display:none";
            }
        }
    }
    
    function exibirTodos(event){
            // let categoria = event.target;

            let caixaDeProdutos = document.getElementsByClassName('box-produto');
        
            for(let i=0; i<caixaDeProdutos.length; i++){
            caixaDeProdutos[i].style = "display:inline-block";
        }
    }
    
    return (
        <section className="col-3" id="categorias">
            <h4 className="h4 mb-3">Categorias</h4>
            <div className="list-group">
                <button id="Todos" type="button" className="list-group list-group-item-action p-1 border-0" onClick={exibirTodos}>Todos (12)</button>
                <button id="Geladeira" type="button" className="list-group list-group-item-action p-1 border-0" onClick={exibirCategorias}>Geladeiras (3)</button>
                <button id="Fogão" type="button" className="list-group list-group-item-action p-1 border-0" onClick={exibirCategorias}>Fogões (2)</button>
                <button id="Microondas" type="button" className="list-group list-group-item-action p-1 border-0" onClick={exibirCategorias}>Microondas (3)</button>
                <button id="Lavadoura de Roupas" type="button" className="list-group list-group-item-action p-1 border-0" onClick={exibirCategorias}>Lavadoura de roupas (2)</button>
                <button id="Lava-louças" type="button" className="list-group list-group-item-action p-1 border-0" onClick={exibirCategorias}>Lava-louças (2)</button>
            </div>
        </section>
    );
}
