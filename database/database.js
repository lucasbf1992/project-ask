const Sequelize = require('sequelize');

const connection = new Sequelize('project_ask', 'root', 'root', {
    host: 'localhost',
    dialect: 'mysql'
});

module.exports = connection;



