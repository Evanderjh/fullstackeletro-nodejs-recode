const Vitrine = () => {

    const [produto, setProduto] = React.useState([]);

    React.useEffect(async () => {
        const url = "http://localhost:3333/produtos";

        const response = await fetch(url);
        setProduto(await response.json());
    }, [])

    function destacar(event){
        let destaque = event.target;

        if(destaque.height == 120){
            destaque.style = "height: 150px;";
        }else{
            destaque.style = "height: 120px;";
        }
    }

    return (
        <section className="col-9 mb-5" id="produtos">
            {produto.map((element) => {
                return (
                    < div key={element.id_produto} className="d-inline-block col-3 mr-3 ml-3 text-center align-botton">
                        <div id={element.categoria} className="box-produto">
                            <img src={"./imagens/" + element.img} onClick={destacar} style={{height: "120px"}} />
                            <br /><br />
                            <p>{element.nome}</p>
                            <hr />
                            <p><s>R$ {parseInt(element.preco).toFixed(2)}</s></p>
                            <h4 className="text-danger">R$ {parseInt(element.preco_final).toFixed(2)}</h4>
                            <br />
                        </div>
                    </div >
                );
            })}
        </section>
    );
}
