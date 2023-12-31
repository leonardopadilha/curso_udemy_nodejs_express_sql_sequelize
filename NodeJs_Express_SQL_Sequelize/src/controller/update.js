const { Sequelize } = require('sequelize')
let sequelize = require('./../model/index')
const path = require('path');
let Cliente = require(path.join(__dirname, './../model/client'))(sequelize, Sequelize.DataTypes)

module.exports = (req, res) => {
    Cliente
        .update(req.body, {
            where: {
                id: req.params.id
            }
        })
        .then(() => res.redirect('/client?msg=3'))
        .catch(() => res.redirect('/client?msg=4'))
}