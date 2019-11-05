const Sequelize = require("sequelize");

const databaseUrl =
  process.env.DATABASE_URL ||
  "postgres://postgres:password@localhost:5434/postgres";

const db = new Sequelize(databaseUrl);

module.exports = db;
