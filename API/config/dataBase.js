module.exports = () => {
    let mysql = require('mysql');

    const con = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'Consultorio'
    });

    con.connect((err) => {
        if (err)
            console.log(err);
        else
            console.log('MYSQL Connected');
    });

    return con;
}