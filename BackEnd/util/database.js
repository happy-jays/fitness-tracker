const Sequelize = require('sequelize');

const sequelize = new Sequelize('node-complete', 'root', 'happy&2001', {
    dialect: 'mysql',
    host: 'localhost'
});

module.exports = sequelize;