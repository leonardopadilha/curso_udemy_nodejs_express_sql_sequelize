const { Sequelize } = require('sequelize')
let sequelize = require('./../model/index')
const path = require('path');
let Cliente = require(path.join(__dirname, './../model/client'))(sequelize, Sequelize.DataTypes)

module.exports = (req, res) => {
    Cliente
        .findAll()
        .then((clients) => {
            console.log(clients)
        })
        .catch((err) => {
            console.log(err)
        })
}