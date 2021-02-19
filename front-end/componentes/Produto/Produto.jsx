const Produto = () => {
    return (
        <React.Fragment>
            <Header />
            <main className="container">
                <h1 className="mt-4">Produtos</h1>
                <hr />
                <div className="row">
                    <Categoria />
                    <Vitrine />
                </div>
            </main>
            <Footer />
        </React.Fragment >
    );
}
