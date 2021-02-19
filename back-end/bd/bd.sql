DROP DATABASE IF EXISTS fullstackeletro;
CREATE DATABASE IF NOT EXISTS fullstackeletro;

CREATE TABLE fullstackeletro.categorias (
	id_categoria INT AUTO_INCREMENT PRIMARY KEY,
    categoria VARCHAR(50) NOT NULL
)ENGINE = innoDB;

CREATE TABLE fullstackeletro.produtos (
	id_produto INT AUTO_INCREMENT PRIMARY KEY,
	nome VARCHAR(200) NULL,
    preco FLOAT NOT NULL,
    preco_final FLOAT NOT NULL,
    img VARCHAR(80) NOT NULL
)ENGINE = innoDB;

CREATE TABLE fullstackeletro.mercadorias (
	id_produto INT,
    id_categoria INT,    
    FOREIGN KEY (id_produto) REFERENCES fullstackeletro.produtos (id_produto),
    FOREIGN KEY (id_categoria) REFERENCES fullstackeletro.categorias (id_categoria)
)ENGINE = innoDB;

CREATE TABLE fullstackeletro.clientes (
	id_cliente INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    rua VARCHAR(80) NOT NULL,
    numero INT NOT NULL,
    bairro VARCHAR(60),
    estado VARCHAR(40),
    telefone VARCHAR(13)
)ENGINE = innoDB;

CREATE TABLE fullstackeletro.pedidos(
	id_pedido INT AUTO_INCREMENT PRIMARY KEY,
    id_cliente INT,
    id_produto INT,
    quantidade INT NOT NULL,
    FOREIGN KEY (id_cliente) REFERENCES fullstackeletro.clientes (id_cliente),
    FOREIGN KEY (id_produto) REFERENCES fullstackeletro.produtos (id_produto)
)ENGINE = innoDB;

CREATE TABLE fullstackeletro.comentarios(
	id_comentario INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100),
    msg VARCHAR(250),
    `data` DATETIME DEFAULT now()/*Pega a hora do "AGORA"*/
)Engine = innoDB;

CREATE VIEW teste AS
SELECT column1, column2, ...
FROM table_name
WHERE condition;