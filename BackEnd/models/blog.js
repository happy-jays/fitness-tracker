const { type } = require('express/lib/response');
const Sequelize = require('sequelize');

const sequelize = require('../util/database');

const Blog = sequelize.define('blog', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    content: {
        allowNull: false,
        type: Sequelize.STRING
    },
    author: {
        type: Sequelize.STRING,
        allowNull: false

    },
    title: {
        type: Sequelize.STRING,
        allowNull: false

    },
    imageUrl: {
        allowNull: false,
        type: Sequelize.STRING
    }
});

module.exports = Blog;