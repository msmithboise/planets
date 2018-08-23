let router = require('express').Router()
let Species = require('../models/specimen')

//get all 
router.get('/', (req, res, next) => {
  Species.find({})
    .then(species => {
      return res.send(species)
    })
    .catch(err => {
      return next(err)
    })
})


// get by specimen would be router.get('/galaxy/specimen/:id')
//getbygalaxy
router.get('/galaxy/:id', (req, res, next) =>{
    Species.find({galaxyId: req.params.id})
    .then(species=> res.send(species))
    .catch(next)
})

router.get('/star/:id', (req, res, next) =>{
    Species.find({starId: req.params.id})
    .then(species=> res.send(species))
    .catch(next)
})

router.get('/planet/:id', (req, res, next) =>{
    Species.find({planetId: req.params.id})
    .then(species=> res.send(species))
    .catch(next)()
})

router.get('/moon/:id', (req, res, next) =>{
  Species.find({moonId: req.params.id})
  .then(species=> res.send(species))
  .catch(next)()
})

//get one
router.get('/:id', (req, res, next) => {
  Species.findById(req.params.id)
    .then(specimen => res.send(specimen))
    .catch(next)
})

//create one
router.post('/', (req, res, next) => {
  Species.create(req.body)
    .then(specimen => res.send(specimen))
    .catch(next)
})

//edit one
router.put('/:id', (req, res, next) => {
  Species.findByIdAndUpdate(req.params.id, req.body)
    .then(() => res.send({
      message: 'Success'
    }))
    .catch(next)
})

//delete one
router.delete('/:id', (req, res, next) => {
  Species.findByIdAndRemove(req.params.id)
    .then(() => res.send({
      message: 'successfully removed specimen'
    }))
    .catch(next)
})

module.exports = router