// Init
const express = require("express");
const app = express();
const port = 4000;
// Models & DB
const db = require("./db");

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
