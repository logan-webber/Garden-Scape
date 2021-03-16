const connection = require('./connection')

function getPlants (db = connection){
    return db('plants').select()
}

function getPlantById (id, db = connection){
    return db('plants').select().where('id', id)
}

module.exports = {
    getPlants,
    getPlantById
}