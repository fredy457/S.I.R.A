
const Sequelize = require("sequelize");
const Role = {
  id: {
    field: "role_id",
    type: Sequelize.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
  },
  name: {
    field: "role_name",
    type: Sequelize.STRING
  }
}

module.exports = Role
