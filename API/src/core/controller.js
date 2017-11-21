module.exports = (app) => {
    let repositorio = require('./repository.js')();
    // let mysql = require('../../config/dataBase.js');
    // let con = mysql.call();
    let controller = {
        cadastroPaciente: (req, res) => {
            repositorio.inserirPaciente(req);
        }
    }   
    return controller;
}