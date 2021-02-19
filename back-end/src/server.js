import express from 'express';
import cors from 'cors';
import mysql from 'mysql';

const server = express();

server.use(express.json());
server.use(cors());

const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "fullstackeletro"
});

server.get("/produtos", (req, res) => {
    connection.query(
        `SELECT produtos.id_produto, categorias.categoria, produtos.nome, produtos.preco, produtos.preco_final, produtos.img 
            FROM fullstackeletro.mercadorias 
                INNER JOIN fullstackeletro.produtos 
                    ON mercadorias.id_produto = produtos.id_produto 
                INNER JOIN fullstackeletro.categorias 
                    ON mercadorias.id_categoria = categorias.id_categoria 
            ORDER BY id_produto ASC;`, (erro, result) => {
        if (erro) {
            res.send(erro);
        } else {
            res.send(result);
        }
    });
});

server.get("/comentarios", (req, res) => {
    connection.query(`SELECT * FROM comentarios;`, (erro, result) => {
        if (erro) {
            res.send(erro);
        } else {
            res.send(result);
        }
    })
});

server.post("/comentarios", (req, res) => {
    const { nome } = req.body;
    const { msg } = req.body;

    connection.query(`INSERT INTO comentarios (nome, msg) VALUES ('${nome}', '${msg}')`, (erro, result) => {
        if (erro) {
            res.send(erro);
        } else {
            res.status(201).json({mensagem: "Cadastro feito com sucesso!"});
        }
    });
});

server.get("/clientes", (req, res) => {
    connection.query(`SELECT * FROM clientes;`, (erro, result) => {
        if (erro) {
            res.send(erro);
        } else {
            res.send(result);
        }
    });
});

server.get("/pedidos", (req, res) => {
    connection.query(
        `SELECT pedidos.id_produto, clientes.nome, produtos.nome as produto, pedidos.quantidade
        FROM fullstackeletro.pedidos
            INNER JOIN fullstackeletro.clientes
                ON pedidos.id_cliente = clientes.id_cliente
            INNER JOIN fullstackeletro.produtos
                ON pedidos.id_produto = produtos.id_produto
        ORDER BY id_pedido ASC;`, (erro, result) => {
        if (erro) {
            res.send(erro);
        } else {
            res.send(result);
        }
    });
});


server.listen(3333);