/* const http = require('http');
const handle = require('./handle');

let server = http.createServer(handle);
server.listen(3000, () => {
    console.log("Servidor rodando na porta 3000");
}); */

const path = require('path')
const express = require('express');
const bodyParser = require('body-parser')
const home = require('./routes/home')
const client = require('./routes/client')
const app = express()
const port = 3000;

app.set('view engine', 'pug')
app.set('views', path.join(__dirname + '/views'))

app.use('/assets', express.static('./assets'))

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

/* app.use((req, res, next) => {
    console.log('Middleware successfully executed')
    next()
}) */

/* app.get('/middleware', (req, res) => {
    res.send('Welcome to middleware')
}) */

app.use('/', home)
app.use('/client', client)

/* app.use((err, req, res, next) => {
    res.status(500).json( {message: 'Something wrong!'} )
}) */

app.listen(port, () => console.log(`App listening http://localhost:${port}`))