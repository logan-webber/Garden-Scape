const express = require('express')

const db = require('../db/plants')

const router = express.Router()

router.get('/', (req, res) => {
  db.getPlants()
    .then(results => {
      res.json(results)
      return null
    })
    .catch(err => {
      console.log(err)
      res.status(500).json({ message: 'REEEEEEEEEEEEE' })
    })
})

router.get('/:id', (req, res) => {
  plantId = req.params.id
  db.getPlantById(plantId)
  .then(results => {
    res.json(results)
    return null
  })
  .catch(err => {
    console.log(err)
    res.status(500).json({ message: 'REEEEEEEEEEEEE' })
  })
})

router.post('/', (req, res) => {
  plant = {
    species: req.body.species,
    typeOf: req.body.typeOf,
    origin: req.body.origin,
    humidity: req.body.humidity,
    temprature: req.body.temprature,
    climate: req.body.climate
  }
  db.addPlant(plant)
  .then(results => {
    res.json({results: results })
    return null
  })
    .catch(err => {
      console.log(err)
      res.status(500).json({ message: 'REEEEEEEEEEEEE' })
    })
})

module.exports = router
