const Sequelize = require("sequelize");
const db = require("../db")

const Batch = db.define("batch", {
  startDate: {
    type: Sequelize.DATE,
  },
  endDate: {
    type: Sequelize.DATE,
  }
});

module.exports = Batch;