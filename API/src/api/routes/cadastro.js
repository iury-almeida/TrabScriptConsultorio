module.exports = (app) => {
    let controller = require('../../core/controller.js')(app);
    app.post('/cadastroPaciente', controller.cadastroPaciente);
    app.post('/cadastroConsulta', controller.cadastroConsulta);
    app.get('/buscarTodosNomes', controller.buscarTodosNomes);
}