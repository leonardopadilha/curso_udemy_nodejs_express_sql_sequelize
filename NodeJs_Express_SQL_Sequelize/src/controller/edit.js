const { Sequelize } = require('sequelize')
let sequelize = require('./../model/index')
const path = require('path');
let Cliente = require(path.join(__dirname, './../model/client'))(sequelize, Sequelize.DataTypes)

module.exports = (req, res) => {
    Cliente
        .findByPk(req.params.id)
        .then((client) => {
            return res.render('client_edit', {
                client: client,
            })
        })
}