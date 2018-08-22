let router = require('express').Router()
let Galaxies = require('../models/galaxy')

//get all
router.get('/', (req, res, next) => {
    Galaxies.find({})
        .then(galaxies => {
            return res.send(galaxies)
        })
        .catch(err => {
            return next(err)
        })
})

// get one

router.get('/:id', (req, res, next) =>{
    Galaxies.findById(req.params.id)
    .then(galaxy = res.send(galaxy))
    .catch(next)
})

//create one

router.post('/', (req, res, next) => {
    Galaxies.create(req.body)
    .then(galaxy => res.send(galaxy))
    .catch(next)
})

//edit one
router.put('/':id, (req, res, next) =>{
    Galaxies.findByIdAndUpdate(req.params.id, req.body)
    .then(() => res.send({
        message: 'Success'
    }))
    .catch(next)
})

//delete one
router.delete('/:id', (req, res, next) => {
    Galaxies.findByIdAndRemove(req.params.id)
    .then(() => res.send({
        message: 'succesfully removed galaxy'
    }))
    .catch(next)
})

module.exports = router