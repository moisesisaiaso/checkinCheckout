const { Sequelize, DataTypes } = require("sequelize");

//connect to database
const db = new Sequelize({
    dialect: "postgres",
    host: "localhost",
    username: "postgres",
    password: "07101165",
    port: 5432,
    database: "checkinCheckout",
});

module.exports = { db, DataTypes };
