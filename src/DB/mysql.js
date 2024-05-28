const mysql = require('mysql')
const config = require('../config')

const dbconfig = {
    host: config.mysql.host,
    user: config.mysql.user,
    password: config.mysql.password,
    database: config.mysql.database
}

let conexion ;

function conexionBD () {
    conexion = mysql.createConnection(dbconfig)

    conexion.connect((err) => {
        if(err){
            console.log('Ups, ocurrió un problema al conectar a la base de datos', err);
            setTimeout(conexionBD, 1000)
        }else{
            console.log('¡Conexión a base de datos exitosa!');
        }
    })

    conexion.on('error', err => {
        console.log('Error en la base de datos', err);
        if(err.code == 'PROTOCOL_CONNECTION_LOST'){
            conexionBD();
        }else{
            throw err;
        }
    })
}

conexionBD();

function getAll (table) {
    return new Promise((resolve,reject) => {
        conexion.query(`SELECT * FROM ${table}`, (error, result) => {
            if(error) return reject(error);
            resolve(result)
        })
    })
}

function getOne (table, id) {
    return new Promise((resolve,reject) => {
        conexion.query(`SELECT * FROM ${table} WHERE client_id = ${id}`, (error, result) => {
            if(error) return reject(error);
            resolve(result)
        })
    })
}

function create (table, data) {

}

function deleteOne (table, id) {

}

module.exports = {
    getAll,
    getOne,
    create,
    deleteOne
}