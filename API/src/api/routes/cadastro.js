module.exports = (app) => {
    app.get('/cadastroPaciente', (req, res) => {
        console.log(req.body);
    });

}