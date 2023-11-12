const express = require('express');
const router = express.Router() 

router.get('/', (req, res) => {
    res.render('client_list')
})

/* router.get('/welcome', (req, res) => {
    res.send('Welcome to client page')
}) */


router.get('/new', (req, res) => {
    res.render('client_new')
})

module.exports = router;