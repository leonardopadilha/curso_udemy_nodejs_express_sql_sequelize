const { Sequelize } = require('sequelize')
let sequelize = require('../model/index')
const path = require('path');
let Cliente = require(path.join(__dirname, './../model/client'))(sequelize, Sequelize.DataTypes)
const msg = require('./message')

module.exports = (req, res) => {
    let result;

    if (req.query.msg) {
        result = msg(req.query.msg)
    }

    Cliente
        .findAll()
        .then((clients) => {
            return res.render('client_list', {
                title: "Lista de Clientes",
                clients: clients,
                flash: result
            })
        })
        .catch((err) => {
            console.log(err)
        })
}