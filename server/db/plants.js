const connection = require('./connection')

function getPlants (db = connection){
    return db('plants').select()
}

function getPlantById (id, db = connection){
    return db('plants').select().where('id', id)
}

function addPlant (plant, db = connecttion){
    return db('plants').insert(plant)
        .then(ids => ids[0])
}

module.exports = {
    getPlants,
    getPlantById,
    addPlant
}