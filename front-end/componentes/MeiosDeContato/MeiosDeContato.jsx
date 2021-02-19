const MeiosDeContato = () => {
    return (
        <div className="container mb-5">
            <h1 className="mt-4">Contato</h1>
            <hr />
            <section className="row mt-4 text-center">
                <div className="col-md">
                    <img src="./imagens/email.png" style={{height: "15vh"}} />
                    <p className="mt-4"><b>contato@fullstackeletro.com</b></p>
                </div>
                <div className="col-md">
                    <img src="./imagens/whatsapp.jpeg" style={{height: "15vh"}} />
                    <p className="mt-4"><b>(11) 99999-9999</b></p>
                </div>
            </section>
        </div>
    );
}
