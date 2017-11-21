module.exports = (app) => {
    let repositorio = require('./repository.js')();
    // let mysql = require('../../config/dataBase.js');
    // let con = mysql.call();
    let controller = {
        cadastroPaciente: (req, res) => {
            repositorio.inserirPaciente(req);
        },
        cadastroConsulta: (req, res) => {
            repositorio.inserirConsulta(req);
        },
        buscarTodosNomes: (req, res) => {
            repositorio.buscarTodosNomes(req, res, (err, result) => {
                if (err) {
                    console.log(err);
                    return res.status(500).send('Deu Pau');
                }
                else {
                    console.log(result);
                    return res.status(200).send(result);
                }
            });
        }
    }   
    return controller;
}