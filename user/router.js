const { Router } = require("express");
const User = require("./model");
const bcrypt = require("bcrypt");

router = new Router();

// create user
router.post("/user", (request, response) => {
  console.log("Got a request on /user");
  const email = request.body.email;
  const password = request.body.password;

  if (!email || !password) {
    response.status(400).send({
      message: "Please supply a valid email and password"
    });
  } else {
    User.create({
      email: email,
      password: bcrypt.hashSync(password, 10)
    }).then(user => {
      response.status(201);
      response.send({ status: "OK" });
    });
  }
});

module.exports = router;
