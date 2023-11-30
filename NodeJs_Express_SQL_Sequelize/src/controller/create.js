const { Sequelize } = require('sequelize')
let sequelize = require('./../model/index')
const path = require('path');
let Cliente = require(path.join(__dirname, './../model/client'))(sequelize, Sequelize.DataTypes)

module.exports = (req, res) => {
    Cliente
        .create(req.body)
        .then(() => res.redirect('/client?msg=1'))
        .catch((err) => res.redirect('/client?msg=2'))
}

