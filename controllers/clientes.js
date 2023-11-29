const ClienteDAO = require('../dao/ClienteDao')
module.exports = app => {
    app.get('/clientes', (request, response) => {
        ClienteDAO.all((err, clientes) => {
            response.header("Acess-Control-Allow-Origin", "*");
            if (err = null) {
                responde.send(clientes);
            } else {
                response.status(404).send('Not found');
            }
        })
    })
}