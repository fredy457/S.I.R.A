const { Sequelize, db } = require("../database/config")
const User = require("../entities/User")

module.exports = db.define("user", User, {
  timestamps: false
});

