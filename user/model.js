const Sequelize = require("sequelize");
const db = require("../db")

const User = db.define("user", {
  email: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true
  },
  password: {
    type: Sequelize.STRING,
    allowNull: false
  }
});

module.exports = User;

// If this app were part of a larger system with other user types, a field for 'role' would be required for user-based permissions. 