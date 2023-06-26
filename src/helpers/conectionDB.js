import mySql from 'mysql';

export const creteUser = () => {

const conection = mySql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'appDB',
})

conection.connect((err) =>{
    if (err) throw err
    console.log('connected success');
})

const insert = `INSERT INTO users (
    id, 
    name, 
    lastname, 
    email, 
    phone, 
    message, 
    password, 
    repassword) 

    VALUES (
    NULL, 
    'John', 
    'Doe', 
    'john@example.com', 
    '123456789', 
    'Message from front', 
    'password', 
    'repassword'
    )`;


  conection.query(insert, (err, rows) =>{
    if (err) throw err
})

conection.query('SELECT * from users', (err, rows) =>{
    if (err) throw err
    console.log('Data table:');
    console.log(rows);
    console.log('Data quantity');
    console.log(rows.length);
})


conection.end();

}


