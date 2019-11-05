const Sequelize = require("sequelize");
const db = require("../db")
const Batch = require("../batch/model")

const Student = db.define("student", {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  photo: {
    type: Sequelize.STRING,
  }
});
Student.belongsTo(Batch); // Will add student to batch
Batch.hasMany(Student) // get me the students of this batch

module.exports = Student;