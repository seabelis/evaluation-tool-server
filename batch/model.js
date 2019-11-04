const Sequelize = require("sequelize");
const db = require("../db")

const Batch = db.define("batch", {
  startDate: {
    type: Sequelize.DATEONLY,
  },
  endDate: {
    type: Sequelize.DATEONLY,
  }
});

module.exports = Batch;