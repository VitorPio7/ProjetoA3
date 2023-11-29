const db = require('../config/conexao');

/*Essa pasta é responsável por encapisular os comandos de acesso ao banco de dados*/

class ProdutoDAO {
    adicionar(produto) {
        let sql = '';
        if (produto.id !== undefined) {
            sql = `UPDATE produtos SET nome = '${produto.nome}',valor = '${produto.valor}, quantidade = '${produto.quantidade}' ',
            'WHERE id ${produto.id}`;
        } else {
            sql = `INSERT INTO produto(nome,valor,quantidade)
            VALUES('${produto.nome}','${produto.valor}', '${produto.quantidade}')`;
        }
        db.run(sql)
    }
    get(id, callback) {
        db.get('SELECT*FROM produtos WHERE id =?', [id], (err, produto) => {
            if (err || produto == undefined) {
                callback("not found", null);
            } else {
                callback(null, produto)
            }
        });
    }

    all(callback) {
        db.all('SELECT*FROM produtos ', [], (err, produtos) => {
            if (err || produtos == undefined) {
                callback("not found", null);
            } else {
                callback(null, produtos)
            }
        })
    }
    total(callback) {
        db.get('SELECT count(*) as count FROM produtos', [], (err, total) => {
            if (err || total == undefined) {
                callback("not found", null);
            } else {
                callback(null, total.count);
            }
        });
    }
}

module.exports = new ProdutoDAO();