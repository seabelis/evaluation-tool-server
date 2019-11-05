const express = require("express");
const app = express();
const port = 4000;
const db = require("./db");

// Body-Parser
const bodyParser = require('body-parser')

// Cors
const cors = require("cors");
const corsMiddleware = cors();

// Models and Routers
const User = require("./user/model");
const userRouter = require("./user/router");

// const Batch = require("./batch/model");
// const batchRouter = require("./batch/router");

const Student = require("./student/model");
const studentRouter = require("./student/router");

// const Evaluation = require("./evaluation/model");
// const evaluationRouter = require("./evaluation/router");


app
.use(corsMiddleware)
.use(bodyParser.json())
.use(userRouter)
// .use(batchRouter)
.use(studentRouter)
// .use(evaluationRouter)
.listen(port, () => console.log(`Example app listening on port ${port}!`))


