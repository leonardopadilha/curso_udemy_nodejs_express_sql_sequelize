const express = require('express');
const router = express.Router() 

let edit = require('./../controller/edit')
let findOne = require('./../controller/findOne')
let findAll = require('./../controller/findAll') 
let create = require('./../controller/create')
let update = require('./../controller/update')
let remove = require('./../controller/remove')

router.get('/:id', findOne)
router.get('/', findAll)

/* router.get('/welcome', (req, res) => {
    res.send('Welcome to client page')
}) */


router.get('/new', (req, res) => {
    res.render('client_new')
})

router.get('/edit/:id', edit)
router.post('/', create)
router.put('/:id', update)
router.delete('/:id', remove)

module.exports = router;