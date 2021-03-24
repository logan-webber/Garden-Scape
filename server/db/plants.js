const connection = require('./connection')

function getPlants (db = connection){
    return db('plants').select()
}

function getPlantById (id, db = connection){
    return db('plants').select().where('id', id)
}

function addPlant (plant, db = connection){
    return db('plants').insert(plant)
        .then(ids => ids[0])
}

function deletePlant (id, db = connection){
    return db('plants').delete().where('id', id)
    .then(rowCount => {
        console.log(rowCount)
        return rowCount
    })
}

module.exports = {
    getPlants,
    getPlantById,
    addPlant,
    deletePlant
}