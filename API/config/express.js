let express = require('express');
let bodyParser = require('body-parser');
let app = express();
let load = require('express-load');

module.exports = () => {
load('core', { cwd: 'src' })
.then('api/routes/cadastro.js')
.into(app);

app.use(bodyParser());
app.set('port', 3000);


    return app;
}