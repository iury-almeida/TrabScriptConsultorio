let express = require('express');
let bodyParser = require('body-parser');
let app = express();
let load = require('express-load');
let cors = require('cors');

// app.use(function(req, res, next) {
//     res.header("Access-Control-Allow-Origin", "*");
//     res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//     next();
//   });

// app.use(cors());
app.use(bodyParser.urlencoded());
app.use(bodyParser.json());


module.exports = () => {
load('core', { cwd: 'src' })
.then('api/routes/cadastro.js')
.into(app);


app.set('port', 3001);


    return app;
}