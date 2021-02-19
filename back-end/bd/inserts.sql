#Esse arquivo tem como função alimentar o BD com dados básicos para facilitar a correção da atividade proposta pela RECODE PRO

-- Inserts na tabela Categorias 
INSERT INTO fullstackeletro.categorias (categoria) VALUE ('Geladeira');
INSERT INTO fullstackeletro.categorias (categoria) VALUE ('Fogão');
INSERT INTO fullstackeletro.categorias (categoria) VALUE ('Microondas');
INSERT INTO fullstackeletro.categorias (categoria) VALUE ('Lavadoura de Roupas');
INSERT INTO fullstackeletro.categorias (categoria) VALUE ('Lava-louças');

-- Inserts na tabela produtos
INSERT INTO fullstackeletro.produtos (nome, preco, preco_final, img)
VALUE ("Geladeira Frost Free Brastemo Side Inverse 540l", 6389.00, 5019.00, "geladeira2.jpeg");
INSERT INTO fullstackeletro.produtos (nome, preco, preco_final, img)
VALUE ("Geladeira Frost Free Brastemp Branca 375l", 2068.60, 1910.00, "geladeira1.jpeg");
INSERT INTO fullstackeletro.produtos (nome, preco, preco_final, img)
VALUE ("Geladeira Frost Free Consul Prata 340l", 2199.90, 2069.00, "geladeira3.jpeg");
INSERT INTO fullstackeletro.produtos (nome, preco, preco_final, img)
VALUE ("Fogão 4 Bocas Consul Inox com Mesa de Vidro", 1209.90, 1129.00, "fogao1.jpeg");
INSERT INTO fullstackeletro.produtos (nome, preco, preco_final, img)
VALUE ("Fogão de Piso 4 Bocas Atlas Monaco com Acendimento Automático", 609.98, 519.70, "fogao2.jpeg");
INSERT INTO fullstackeletro.produtos (nome, preco, preco_final, img)
VALUE ("Microondas Consul 32l Inox 220v", 580.90, 409.88, "microondas1.jpeg");
INSERT INTO fullstackeletro.produtos (nome, preco, preco_final, img)
VALUE ("Microondas 25l Espelhado Philco 220v", 508.78, 464.53, "microondas2.jpeg");
INSERT INTO fullstackeletro.produtos (nome, preco, preco_final, img)
VALUE ("Forno Microondas Electrolux 20L Branco", 459.90, 436.00, "microondas3.jpeg");
INSERT INTO fullstackeletro.produtos (nome, preco, preco_final, img)
VALUE ("Lava Louça Electrolux Inox com 10 Serviços, 06 Programas de Lavagem 127v", 3599.00, 2799.90, "lavaLouca2.jpeg");
INSERT INTO fullstackeletro.produtos (nome, preco, preco_final, img)
VALUE ("Lava Louça Compacta 8 Serviços Branca 127v Brastemp", 1970.50, 1730.00, "lavaLouca1.jpeg");
INSERT INTO fullstackeletro.produtos (nome, preco, preco_final, img)
VALUE ("Lavadora de Roupa Brastemp 11KG com Turbo Performance Branca", 1699.00, 1214.00, "lavaRoupas2.jpeg");
INSERT INTO fullstackeletro.produtos (nome, preco, preco_final, img)
VALUE ("Lavadora de Roupas Philco Inverter 12KG", 2399.90, 2179.00, "lavaRoupas1.jpeg");

-- Insert na tabela mercadorias
INSERT INTO fullstackeletro.mercadorias (id_produto, id_categoria) VALUES (1, 1);
INSERT INTO fullstackeletro.mercadorias (id_produto, id_categoria) VALUES (2, 1);
INSERT INTO fullstackeletro.mercadorias (id_produto, id_categoria) VALUES (3, 1);
INSERT INTO fullstackeletro.mercadorias (id_produto, id_categoria) VALUES (4, 2);
INSERT INTO fullstackeletro.mercadorias (id_produto, id_categoria) VALUES (5, 2);
INSERT INTO fullstackeletro.mercadorias (id_produto, id_categoria) VALUES (6, 3);
INSERT INTO fullstackeletro.mercadorias (id_produto, id_categoria) VALUES (7, 3);
INSERT INTO fullstackeletro.mercadorias (id_produto, id_categoria) VALUES (8, 3);
INSERT INTO fullstackeletro.mercadorias (id_produto, id_categoria) VALUES (9, 5);
INSERT INTO fullstackeletro.mercadorias (id_produto, id_categoria) VALUES (10, 5);
INSERT INTO fullstackeletro.mercadorias (id_produto, id_categoria) VALUES (11, 4);
INSERT INTO fullstackeletro.mercadorias (id_produto, id_categoria) VALUES (12, 4);

select produtos.id_produto, categorias.categoria, produtos.nome, produtos.preco, produtos.preco_final, produtos.img
FROM fullstackeletro.mercadorias
	inner join fullstackeletro.produtos
		on mercadorias.id_produto = produtos.id_produto
	inner join fullstackeletro.categorias
		on mercadorias.id_categoria = categorias.id_categoria;

-- Inserts na tabela clientes
INSERT INTO fullstackeletro.clientes (nome, rua, numero, bairro, estado, telefone)
VALUES ("Evander Hudson Pereira", "Rua B", 50, "Jardim Ângela", "São Paulo", 5511444445555);
INSERT INTO fullstackeletro.clientes (nome, rua, numero, bairro, estado, telefone)
VALUES ("Felipe Dantas", "Rua A", 33,"Jardim Gaivotas", "São Paulo", 5511533334444);
INSERT INTO fullstackeletro.clientes (nome, rua, numero, bairro, estado, telefone)
VALUES ("Danusa", "Rua C", 67, "Pinheiros", "São Paulo", 5511522223333);
INSERT INTO fullstackeletro.clientes (nome, rua, numero, bairro, estado, telefone)
VALUES ("Ester Soares", "Rua D", 44, "Brasilândia", "São Paulo", 5511511112222);

-- Inserts na tabela pedidos
INSERT INTO fullstackeletro.pedidos(id_cliente, id_produto, quantidade) VALUES (1, 2, 1);
INSERT INTO fullstackeletro.pedidos(id_cliente, id_produto, quantidade) VALUES (2, 5, 2);
INSERT INTO fullstackeletro.pedidos(id_cliente, id_produto, quantidade) VALUES (3, 6, 1);
INSERT INTO fullstackeletro.pedidos(id_cliente, id_produto, quantidade) VALUES (4, 8, 1);
INSERT INTO fullstackeletro.pedidos(id_cliente, id_produto, quantidade) VALUES (2, 7, 1);
INSERT INTO fullstackeletro.pedidos(id_cliente, id_produto, quantidade) VALUES (1, 10, 2);

SELECT pedidos.id_pedido, clientes.nome, produtos.nome, pedidos.quantidade
FROM fullstackeletro.pedidos
	INNER JOIN fullstackeletro.clientes
		ON pedidos.id_cliente = clientes.id_cliente
	INNER JOIN fullstackeletro.produtos
		ON pedidos.id_produto = produtos.id_produto;
        
CREATE VIEW fullstackeletro.produtos_promocao AS
SELECT id_produto, nome, preco, preco_final
FROM fullstackeletro.produtos
WHERE preco_final <= 600;

SELECT * FROM fullstackeletro.produtos_promocao;
