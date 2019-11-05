const Sequelize = require("sequelize");
const db = require("../db")
const Student = require("../student/model")
const User = require("../user/model")


const Evaluation = db.define("evaluation", {
  lessonDate: {
    type: Sequelize.DATEONLY,
    allowNull: false,
    defaultValue: Sequelize.NOW
  },
  grade: {
    type: Sequelize.STRING,
  },
  remarks: {
    type: Sequelize.TEXT
  }
});
Student.hasMany(Evaluation)
User.hasMany(Evaluation)

module.exports = Evaluation;