const Sequelize = require('sequelize');

const sequelize = new Sequelize('node-complete', 'root', 'happy&2001', {
    dialect: 'mysql',
    port:'3307',
    host: 'mysql_db'
});

module.exports = sequelize;