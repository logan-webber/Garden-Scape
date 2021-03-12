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

module.exports = router
