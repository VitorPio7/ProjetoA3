const sqlite = require('sqlite3').verbose() /*configuracao de conexao com o banco*/
const db = new sqlite.Database('vendas.db')

module.exports = db