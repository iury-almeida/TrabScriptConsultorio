module.exports = (app) => {
    let controller = require('../../core/controller.js')(app);
    app.post('/cadastroPaciente', controller.cadastroPaciente);
}