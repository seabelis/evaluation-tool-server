const { Router } = require("express");
const Student = require("./model");
const Batch = require("../batch/model");
const auth = require("../auth/middleware");

const router = new Router();

// Create student
router.post("/student", auth, (req, res, next) => {
  Student.create(req.body)
    .then(student => res.json(student))
    .catch(next);
});

// Get all students
// router.get("/students", auth, (req, res, next) => {
  router.get("/students", (req, res, next) => {

  Student.findAll({ include: [Batch] })
    .then(students => {
      res.send(students);
    })
    .catch(next);
});

// Get specific student by id
router.get("/students/:id", (req, res, next) => {
  Student.findByPk(req.params.id, { include: [Batch] })
    .then(student => {
      res.send(student);
    })
    .catch(next);
});

// Update existing student
router.put("/students/:id", auth, (req, res, next) => {
  Student.findByPk(req.params.id)
    .then(student => {
      if (student) {
        student.update(req.body).then(student => res.json(student));
      } else {
        res.status(404).end();
      }
    })
    .catch(next);
});

module.exports = router;
