require('dotenv').config();
const Sequelize = require('sequelize');

const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASS, {
    host: process.env.DB_HOST,
    dialect: 'postgres'
});

sequelize.authenticate().then(
    function success() {  // вынести оба обработчика наружу
        console.log("Connected to DB");
    },

    function fail(err) {
        console.log(`Error: ${err}`);
    }
);

module.exports = { sequelize, DataTypes: Sequelize.DataTypes };
