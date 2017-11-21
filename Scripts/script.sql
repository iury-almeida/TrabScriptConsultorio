create database Consultorio
use Consultorio

create table paciente (
	id int primary key AUTO_INCREMENT,
    nome varchar(50),
    rg varchar(50),
    cnpjCpf varchar(50),
    rua varchar(50),
    numero varchar(50),
    bairro varchar(50),
    cep varchar(50),
    municipio varchar(50),
    uf varchar(50),
    email varchar(50),
    dddCel varchar(50),
    celular varchar(50),
    dddTel varchar(50),
    telefone varchar(50)
)


select * from paciente

create table Consulta(
	id 				int 	primary key 	AUTO_INCREMENT,
	idPaciente 		int,
    dataConsulta 	date,
    horaConsulta	time,
    sintomas		varchar(2000),
    gravidade		varchar(2),
    foreign key 	(idPaciente)	references Paciente(id)
)

select * from Consulta
