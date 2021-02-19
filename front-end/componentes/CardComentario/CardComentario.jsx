const CardComentario = () => {

    const [comentario, setComentario] = React.useState([]);
    const [render, setRender] = React.useState(false);
    const [validar, setValidar] = React.useState(false);

    React.useEffect(async () => {
        const url = "http://localhost:3333/comentarios";

        const response = await fetch(url);
        setComentario(await response.json());
    }, [render])

    function registroDeComentario(event) {
        event.preventDefault();

        let nome = event.target.nome.value;
        let msg  = event.target.msg.value;
    
        const url = "http://localhost:3333/comentarios";

        fetch(url,{
            method: "POST",
            body: JSON.stringify({
                nome, msg
            }),
            headers: {
                'Content-Type': 'application/json'
            },
        }).then((response) => response.json()).then((dados) => {
            setRender(!render);
            setValidar(dados);
            setTimeout(() => {
                setValidar(false)
            }, 5000);
        })
    }


    return (
        <React.Fragment>
            <div className="container">
                <div className="card">
                    <form className="form" onSubmit={registroDeComentario}>
                        <label htmlFor="nome"><b>Nome: </b></label>
                        <input className="form-control" type="text" id="nome" name="nome" placeholder="Digite seu nome" />
                        <label className="my-1" htmlFor="msg"><b>Mensagem: </b></label>
                        <input className="form-control" type="text" id="msg" name="msg" placeholder="Digite sua mensagem" />
                        <button className="btn btn-primary btn-block mt-2">Enviar</button>
                    </form>
                </div>
            </div>

            {validar && <div className="alert alert-success mx-auto mt-4 w-75" role="alert">
                Comentário feito com sucesso!    
            </div>}

            <div className="container my-5">
                <h2>Comentários</h2>
                {comentario.map((element) => {
                    return (
                        <div key={element.id_comentario} className="card my-1">
                            <div className="card-body">
                                <p className="card-text">
                                    <b>Data:</b> {element.data}<br />
                                    <b>Nome:</b> {element.nome}<br />
                                    <b>Mensagem:</b> {element.msg}
                                </p>
                            </div>
                        </div>
                    );
                })}
            </div>


        </React.Fragment>
    );
}