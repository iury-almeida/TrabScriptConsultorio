let app = require('./config/express.js')();

// app.use(function(req, res, next) {
//     res.header("Access-Control-Allow-Origin", "*");
//     res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//     next();
//   });

app.listen(app.get('port'), () => {
    console.log('Aplicação rodando na porta: ' + app.get('port'));
});