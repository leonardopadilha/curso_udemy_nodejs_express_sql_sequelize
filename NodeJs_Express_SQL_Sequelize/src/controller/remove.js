const { Sequelize, where } = require('sequelize')
let sequelize = require('./../model/index')
const path = require('path');
let Cliente = require(path.join(__dirname, './../model/client'))(sequelize, Sequelize.DataTypes)

module.exports = (req, res) => {
    Cliente
        .destroy({
            where: {
                id: req.params.id
            }
        })
        .then(() => res.redirect('/client?msg=5'))
        .catch(() => res.redirect('/client?msg=6'))
}