const Sequelize = require("sequelize");
const db = new Sequelize('postgres://sira_dba:Password100@127.0.0.1:5432/sira_db')
module.exports = { Sequelize, db }
