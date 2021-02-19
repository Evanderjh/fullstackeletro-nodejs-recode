const CardLojas = () => {
    return (
        <main className="container mb-4">
            <h1 className="mt-4">Nossas Lojas</h1>
            <hr />
            <section className="row justify-content-center">
                <div className="card col-3 mx-3 p-1">
                    <div className="card-body">
                        <h3 className="card-title">Rio de Janeiro</h3>
                        <p className="card-text">Avenida Presidente Vargas, 5000</p>
                        <p className="card-text">10 &ordm; andar</p>
                        <p className="card-text">Centro</p>
                        <p className="card-text">(21) 3333-3333</p>
                    </div>
                </div>
                <div className="card col-3 mx-3 p-1">
                    <div className="card-body">
                        <h3 className="card-title">São Paulo</h3>
                        <p className="card-text">Avenida Paulista, 985</p>
                        <p className="card-text">3 &ordm; andar</p>
                        <p className="card-text">Jardins</p>
                        <p className="card-text">(11) 4444-4444</p>
                    </div>
                </div>
                <div className="card col-3 mx-3 p-1">
                    <div className="card-body">
                        <h3 className="card-title">Santa Catarina</h3>
                        <p className="card-text">Rua Major &Aacute;vila, 370</p>
                        <p className="card-text">Vila Mariana</p>
                        <p className="card-text">(47) 5555-5555</p>
                    </div>
                </div>
            </section>
        </main>
    );
}
