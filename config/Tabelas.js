const conexao = require('./conexao')
const ClienteDAO = require('../dao/ClienteDao')
const ProdutoDAO = require('../dao/ProdutoDao')
const Cliente = require('../models/Cliente')
const Produto = require('../models/Produto')
class Tabelas {
    init() {
        conexao.serialize(() => {
            conexao.run('CREATE TABLE IF NOT EXISTS clientes (id INTEGER PRIMARY KEY, nome varchar(255) NOT NULL, email varchar(255) NOT NULL, senha varchar(255) NOT NULL)')
            conexao.run('CREATE TABLE IF NOT EXISTS produtos (id INTEGER PRIMARY KEY, nome varchar(255) NOT NULL, valor real NOT NULL, quantidade integer NOT NULL)')
            conexao.run('CREATE TABLE IF NOT EXISTS vendas (id INTEGER PRIMARY KEY, id_cliente INTEGER NOT NULL, id_estoque INTEGER NOT NULL, valor_total real NOT NULL, quantidade integer NOT NULL,FOREIGN KEY(id_cliente) REFERENCES cliente(id), FOREIGN KEY(id_estoque) REFERENCES estoque(id))')
        })
    }
    seed() {
        ClienteDAO.total((err, total) => {
            if (total == 0) {
                ClienteDAO.adicionar(new Cliente('Marcos', 'Marcos@gmail.com', '23568'));
                ClienteDAO.adicionar(new Cliente('Sander', 'Sander@gmail.com', '56895'));
                ClienteDAO.adicionar(new Cliente('Vitor', 'Vitor@gmail.com', '10568'));
                ClienteDAO.adicionar(new Cliente('Pedro', 'Pedro@gmail.com', '104456'));
                ClienteDAO.adicionar(new Cliente('Lucas', 'Lucas@gmail.com', '458625'));
            }
        })
        ProdutoDAO.total((err, total) => {
            if (total == 0) {
                ProdutoDAO.adicionar(new Produto('Celular Apple Iphone 14', '3900'))
                ProdutoDAO.adicionar(new Produto('Placa de video GTX 750ti', '450'))
                ProdutoDAO.adicionar(new Produto('Placa de Audio Audiobox USB96', '900'))
                ProdutoDAO.adicionar(new Produto('Monitor Samsung SyncMaster S23B550', '950'))
                ProdutoDAO.adicionar(new Produto('Placa de video GTX 960', '900'))
                ProdutoDAO.adicionar(new Produto('Fone Samson SB850', '200'))
                ProdutoDAO.adicionar(new Produto('molden Link-One', '90'))
                ProdutoDAO.adicionar(new Produto('Memoria ram 8gb', '350'))
                ProdutoDAO.adicionar(new Produto('Gabinete', '150'))
                ProdutoDAO.adicionar(new Produto('Processador Ryzen r3', '300'))
            }
        })
    }

}
module.exports = new Tabelas;