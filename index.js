const express = require("express");
const app = express();
const port = 4000;
const db = require("./db");

// Body-Parser
const bodyParser = require('body-parser')

// Cors
const cors = require("cors");
const corsMiddleware = cors();

// Models
const User = require("./user/model");
const Batch = require("./batch/model");
const Student = require("./student/model");
const Evaluation = require("./evaluation/model");

// Routers
const userRouter = require("./user/router");

app.use(corsMiddleware);
app.use(bodyParser.json())
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
app.use(userRouter);
