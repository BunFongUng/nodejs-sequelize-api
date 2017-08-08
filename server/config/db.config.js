const Sequelize = require('sequelize');

const DB_NAME = process.env.DB_NAME;

const DB_HOST = process.env.DB_HOST;

const DB_DRIVER = process.env.DB_DRIVER;

const DB_USERNAME = process.env.DB_USERNAME;

const DB_PASSWORD = process.env.DB_PASSWORD;

const sequelize = new Sequelize(DB_NAME, DB_USERNAME, DB_PASSWORD, {
    host: DB_HOST,
    dialect: DB_DRIVER
});

sequelize.authenticate().then(() => {
    console.log('Connection has been established successfully.');
}).catch(err => {
    console.error('Unable to connect to the database:', err);
});

module.exports = { sequelize };