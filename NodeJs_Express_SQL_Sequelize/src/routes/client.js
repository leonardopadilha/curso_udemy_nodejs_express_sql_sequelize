const express = require('express');
const router = express.Router() 
let create = require('./../controller/create')
let update = require('./../controller/update')
let remove = require('./../controller/remove')

router.get('/', (req, res) => {
    res.render('client_list')
})

/* router.get('/welcome', (req, res) => {
    res.send('Welcome to client page')
}) */


router.get('/new', (req, res) => {
    res.render('client_new')
})

router.post('/', create)
router.put('/:id', update)
router.delete('/:id', remove)

module.exports = router;