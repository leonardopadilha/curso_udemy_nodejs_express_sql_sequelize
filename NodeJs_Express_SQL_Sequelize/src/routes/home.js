const express = require('express');
const router = express.Router() 

router.get('/', (req, res) => {
    res.send('Hello World')
})

router.get('/welcome', (req, res) => {
    res.render('home', {
        message: "Hello World"
    })
    //res.send('Welcome to Express')
})

router.get('/requests/:name', (req, res) => {
    res.send(req.params.name)
})

router.post('/body', (req, res) => {
    res.json(req.body)
})

router.get('/response', (req, res) => {
    res.status(202).json({
        error: 'Bad Request',
        name: "teste",
        "lastname": "da silva"
    })
})

module.exports = router;