const Seq = require('sequelize')
const Sequelize = new Seq(
    'mysql://root:123456@127.0.0.1/crud_node', {
        operatorAliases: Seq.Op
    })

Sequelize
    .authenticate()
    .then(() => console.log('Sequelize OK'))
    .catch(() => console.log('Error on Connection with sequelize'))

  Sequelize.sync()

  module.exports = Sequelize