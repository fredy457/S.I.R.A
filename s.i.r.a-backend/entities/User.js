
const Sequelize = require("sequelize");
const User = {
  id: {
    field: "user_id",
    type: Sequelize.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
  },
  name: {
    field: "user_name",
    allowNull: false,
    type: Sequelize.STRING,
  },
  email: {
    field: "work_email",
    allowNull: false,
    type: Sequelize.STRING,
  },
  password: {
    field: "password",
    allowNull: false,
    type: Sequelize.STRING,
  },

  status: {
    field: "status",
    allowNull: false,
    type: Sequelize.STRING,
  },
  department_id: {
    field: "department_id",
    type: Sequelize.INTEGER,
  },
  role_id: {
    field: "role_id",
    type: Sequelize.INTEGER,
    reference: {
      model: Role,
      key: "id"
    }
  },
}
module.exports = User

