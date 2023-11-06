const express = require('express');
const router = express.Router() 

router.get('/', (req, res) => {
    res.send('Client Page')
})

router.get('/welcome', (req, res) => {
    res.send('Welcome to client page')
})

module.exports = router;