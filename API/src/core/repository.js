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

module.exports = () => {
    const db = require('../../config/dataBase.js')();
    let insert = 'insert into paciente (nome, rg, cnpjCpf, rua, numero, bairro, cep, municipio, uf, email, dddCel, celular, dddTel, telefone)';
    let repositorio = {
        inserirPaciente: (req) => {  
            db.query('insert into paciente  set ? ', req.body, (err, result) => {
                if (err)
                    return console.log(err);
                return console.log('Dados inseridos');
            });
        }
    }
    return repositorio;
}
