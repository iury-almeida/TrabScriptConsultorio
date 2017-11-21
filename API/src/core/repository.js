//`values(${p.nome},${p.rg},${p.cpf},${p.rua},${p.numero},${p.bairro},${p.cep},${p.municipio},${p.uf},${p.email},${p.dddCelular},${p.celular},${p.dddTelefone},${p.telefone})
//(nome, rg, cnpjCpf, rua, numero, bairro, cep, municipio, uf, email, dddCel, celular, dddTel, telefone)

/*{
    nome: req.nome,
    rg: req.rg,
    cnpjCpf: req.cnpjCpf,
    rua: req.rua,
    numero: req.numero,
    bairro: req.bairro,
    cep: req.cep,
    municipio: req.municipio,
    uf: req.uf,
    email: req.email,
    dddCel: req.dddCel,
    celular: req.celular,
    dddTel: req.dddTel,
    telefone: req.telefone,
}*/

//let insert = 'insert into paciente (nome, rg, cnpjCpf, rua, numero, bairro, cep, municipio, uf, email, dddCel, celular, dddTel, telefone)';



module.exports = () => {
    const db = require('../../config/dataBase.js')();
    let repositorio = {
        inserirPaciente: (req) => {
            db.query('insert into paciente set ? ', req.body, (err, result) => {
                if (err)
                    return console.log(err);
                return console.log('Dados inseridos');
            });
        },
        inserirConsulta: (req) => {
            console.log(req.body);
            db.query('insert into Consulta set ? ', req.body, (err, result) => {
                if (err)
                    return console.log(err);
                return console.log('Dados inseridos');
            });
        },
        buscarTodosNomes: (req, res) => {
            db.query('select id, nome from paciente', (err, result) => {
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
    return repositorio;
}
