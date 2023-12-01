const { Sequelize } = require('sequelize')
let sequelize = require('../model/index')
const path = require('path');
let Cliente = require(path.join(__dirname, './../model/client'))(sequelize, Sequelize.DataTypes)

module.exports = (req, res) => {
    let msg = 0

    if (req.query.msg == 1) {
        msg = 1
    }

    Cliente
        .findAll()
        .then((clients) => {
            return res.render('client_list', {
                title: "Lista de Clientes",
                clients: clients,
                msg: req.query.msg
            })
        })
        .catch((err) => {
            console.log(err)
        })
}