const connection = require('./connection')

function getPlants (db = connection){
    return db('plants').select()
}

module.exports = {
    getPlants
}