const { Sequelize } = require('sequelize')
let sequelize = require('./../model/index')
const path = require('path')
let Cliente = require(path.join(__dirname, './../model/client'))(sequelize, Sequelize.DataTypes)

module.exports = (req, res) => {
    Cliente
        .findOne({
            where: {
                id: req.params.id
            }
        }).then((client) => {
            console.log(client)
        })
        .catch((err) => {
            console.log(err)
        })
}


