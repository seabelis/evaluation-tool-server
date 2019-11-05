const Sequelize = require("sequelize");
const db = require("../db");

const Batch = db.define("batch", {
  batchNumber: {
    type: Sequelize.INTEGER,
    allowNull: false,
    unique: true
  },
  startDate: {
    type: Sequelize.DATEONLY
  },
  endDate: {
    type: Sequelize.DATEONLY
  }
});

module.exports = Batch;
