const { Sequelize } = require('sequelize')
let sequelize = require('../model/index')
const path = require('path');
let Cliente = require(path.join(__dirname, './../model/client'))(sequelize, Sequelize.DataTypes)

module.exports = (req, res) => {
    Cliente
        .findAll()
        .then((clients) => {
            return res.render('client_list', {
                title: "Lista de Clientes",
                clients: clients
            })
        })
        .catch((err) => {
            console.log(err)
        })
}