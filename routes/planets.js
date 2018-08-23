let router = require('express').Router()
let Planets = require('../models/planet')

//get all 
router.get('/', (req, res, next) => {
  Planets.find({})
    .then(planets => {
      return res.send(planets)
    })
    .catch(err => {
      return next(err)
    })
})


// get by planet would be router.get('/galaxy/planet/:id')
//getbygalaxy
router.get('/galaxy/:id', (req, res, next) =>{
    Planets.find({galaxyId: req.params.id})
    .then(planets=> res.send(planets))
    .catch(next)
})

router.get('/star/:id', (req, res, next) =>{
    Planets.find({starId: req.params.id}).then()
})

//get one
router.get('/:id', (req, res, next) => {
  Planets.findById(req.params.id)
    .then(planet => res.send(planet))
    .catch(next)
})

//create one
router.post('/', (req, res, next) => {
  Planets.create(req.body)
    .then(planet => res.send(planet))
    .catch(next)
})

//edit one
router.put('/:id', (req, res, next) => {
  Planets.findByIdAndUpdate(req.params.id, req.body)
    .then(() => res.send({
      message: 'Success'
    }))
    .catch(next)
})

//delete one
router.delete('/:id', (req, res, next) => {
  Planets.findByIdAndRemove(req.params.id)
    .then(() => res.send({
      message: 'successfully removed planet'
    }))
    .catch(next)
})

module.exports = router