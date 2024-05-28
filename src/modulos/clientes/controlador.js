const db = require('../../DB/mysql')

const tableName = 'clientes'

function getAll () {
    return db.getAll(tableName);
}

module.exports = {
    getAll,
    
}