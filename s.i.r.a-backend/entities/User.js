
const Sequelize = require("sequelize");
/*
 *
 *
      - user_id (primary key)
      - user_name(varchar(50))
      - work_email(varchar(200))
      - password(varchar(400))
      - role_id(Foreign Key)
      - status(varchar(20))
      - department_id(Foreign Key
 * */

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
    allowNullP: false,
    type: Sequelize.STRING,
  },
  email: {
    field: "work_email",
    allowNullP: false,
    type: Sequelize.STRING,
  },
  password: {
    field: "password",
    allowNullP: false,
    type: Sequelize.STRING,
  },

  status: {
    field: "status",
    allowNullP: false,
    type: Sequelize.STRING,
  },
  department_id: {
    field: "department_id",
    type: Sequelize.INTEGER,
  },
  role_id: {
    field: "role_id",
    type: Sequelize.INTEGER,
  },
}
module.exports = User

