const express = require('express');
const router = express.Router() 

router.get('/', (req, res) => {
    res.send('Hello World')
})

router.get('/welcome', (req, res) => {
    res.send('Welcome to Express')
})

router.get('/requests/:name', (req, res) => {
    res.send(req.params.name)
})

router.post('/body', (req, res) => {
    res.json(req.body)
})

module.exports = router;