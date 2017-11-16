let app = require('./config/express.js')();

app.listen(app.get('port'), () => {
    console.log('Aplicação rodando na porta: ' + app.get('port'));
});