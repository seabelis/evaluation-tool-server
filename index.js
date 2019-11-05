const express = require("express");
const app = express();
const port = 4000;
const db = require("./db");

const bodyParser = require("body-parser");
const cors = require("cors");
const corsMiddleware = cors();

// Models and Routers

const authRouter = require("./auth/router");

const User = require("./user/model");
const userRouter = require("./user/router");

const Batch = require("./batch/model");
const batchRouter = require("./batch/router");

const Student = require("./student/model");
const studentRouter = require("./student/router");

const Evaluation = require("./evaluation/model");
const evaluationRouter = require("./evaluation/router");

app
  .use(corsMiddleware)
  .use(bodyParser.json())
  .use(userRouter)
  .use(authRouter)
  .use(batchRouter)
  .use(studentRouter)
  .use(evaluationRouter)
  .listen(port, () => console.log(`Example app listening on port ${port}!`));

// db.sync({ force: true })
  db.sync()
  .then(() => console.log("Database schema updated"))
  .then(() => {
    const users = [
      { email: "user1@email.com", password: "password" },
      
    ];

    const userPromises = users.map(user => User.create(user));
    return Promise.all(userPromises);
  })
  .then(() => {
    const batches = [
      { batchNumber: 1, startDate: "2019-01-01", endDate: "2019-03-31" },
      { batchNumber: 2, startDate: "2019-04-01", endDate: "2019-06-30" },
      { batchNumber: 3, startDate: "2019-07-01", endDate: "2019-09-30" },
      { batchNumber: 4, startDate: "2019-10-01", endDate: "2019-12-31" }
    ];

    const batchPromises = batches.map(batch => Batch.create(batch));
    return Promise.all(batchPromises);
  })
  .then(() => {
    const students = [
      {
        name: "Hannah Abbott",
        photo:
          "https://vignette.wikia.nocookie.net/harrypotterwiki2/images/4/48/Hannah_Abbott.jpg",
        batchId: 1
      },
      {
        name: "Bathilda Bagshot",
        photo:
          "https://vignette.wikia.nocookie.net/harrypotter/images/7/7c/Bagshot_profile.jpg/",
        batchId: 1
      },
      {
        name: "Katie Bell",
        photo:
          "https://vignette.wikia.nocookie.net/harrypotter/images/5/52/Katiebellinfobox.jpg",
        batchId: 1
      },
      {
        name: "Cuthbert Binns",
        photo: "http://wandw.wdfiles.com/local--files/binns/Binns_01.jpg",
        batchId: 1
      },
      {
        name: "Sirius Black",
        photo:
          "https://vignette.wikia.nocookie.net/harrypotter/images/7/75/Sirius_Black_profile.jpg",
        batchId: 1
      },
      {
        name: "Amelia Bones",
        photo:
          "https://vignette.wikia.nocookie.net/fanfic-marauders-era/images/2/25/Amelia_Bones.png",
        batchId: 2
      },
      {
        name: "Susan Bones",
        photo:
          "https://vignette.wikia.nocookie.net/harrypotter/images/7/77/Susan01.png",
        batchId: 2
      },
      {
        name: "Terry Boot",
        photo:
          "https://pbs.twimg.com/profile_images/740547943455936512/u0unMJ8Q.jpg",
        batchId: 2
      },
      {
        name: "Lavender Brown",
        photo:
          "https://vignette.wikia.nocookie.net/harrypotter/images/8/8e/LavenderBrown_WB_F6_LavenderCrying_Promo_080615_Port.jpg",
        batchId: 2
      },
      {
        name: "Alecto Carrow",
        photo:
          "https://scontent.fams1-1.fna.fbcdn.net/v/t31.0-8/19956660_1449573398431243_1151106133247597183_o.jpg",
        batchId: 2
      },
      {
        name: "Amycus Carrow",
        photo:
          "https://vignette.wikia.nocookie.net/harrypotter/images/9/97/Amycus_Carrow_PM.png",
        batchId: 3
      },
      {
        name: "Reginald Cattermole",
        photo:
          "https://vignette.wikia.nocookie.net/harrypotter/images/4/43/ReginaldCattermole.jpg",
        batchId: 3
      },
      {
        name: "Cho Chang",
        photo:
          "https://vignette.wikia.nocookie.net/harrypotter/images/4/4a/Cho-OOTP-cho-chang-16048651-1919-2560.jpg",
        batchId: 3
      },
      {
        name: "Michael Corner",
        photo:
          "https://vignette.wikia.nocookie.net/harrypotter/images/f/f5/Michael_1995.jpg",
        batchId: 3
      },
      {
        name: "Vincent Crabbe",
        photo:
          "https://vignette.wikia.nocookie.net/harrypotter/images/b/ba/Vincent_Crabbe.jpg",
        batchId: 3
      },
      {
        name: "Dennis Creevey",
        photo:
          "https://66.media.tumblr.com/839a057796285b0204b4abf202379a68/tumblr_oxxbszeG2W1unwndno5_r1_250.png",
        batchId: 4
      },
      {
        name: "Dirk Cresswell ",
        photo:
          "https://vignette.wikia.nocookie.net/harrypotter/images/d/d5/Harry-potter-deathly-hallows_dirk.jpg",
        batchId: 4
      },
      {
        name: "Barty Crouch",
        photo:
          "https://vignette.wikia.nocookie.net/harrypotter/images/1/15/Roger_Lloyd_Pack_as_Barty_Crouch_Snr_%28GoF-promo-02%29.jpg",
        batchId: 4
      },
      {
        name: "Roger Davies",
        photo:
          "https://vignette.wikia.nocookie.net/harrypotter/images/8/82/Fleur_y_Roger_Davies_1.jpg",
        batchId: 4
      },
      {
        name: "John Dawlish ",
        photo:
          "https://pm1.narvii.com/6159/bd97a27f10b7c2f97fa0285aa7d69fa9960535e3_hq.jpg",
        batchId: 4
      }
    ];

    const studentPromises = students.map(student => Student.create(student));
    return Promise.all(studentPromises);
  })
  .catch(console.error);
