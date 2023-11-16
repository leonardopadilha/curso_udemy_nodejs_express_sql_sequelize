const express = require('express');
const router = express.Router() 
let create = require('./../controller/create')
let update = require('./../controller/update')

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

module.exports = router;