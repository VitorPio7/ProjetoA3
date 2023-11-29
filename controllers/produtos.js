const ProdutoDAO = require('../dao/ProdutoDao')
module.exports = app => {
    app.get('/produtos', (request, response) => {
        ProdutoDAO.all((err, produtos) => {
            response.header("Acess-Control-Allow-Origin", "*");
            if (err = null) {
                responde.send(produtos);
            } else {
                response.status(404).send('Not found');
            }
        })
    })
}