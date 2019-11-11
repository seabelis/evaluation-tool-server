const { Router } = require("express");
const Student = require("./model");
const Batch = require("../batch/model");
const auth = require("../auth/middleware");
const Evaluation = require('../evaluation/model')

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

  Student.findAll({ include: [{all: true}]
  })
    .then(students => {
      res.send(students);
    })
    .catch(next);
});


// router.get("/students-evaluations", auth, (req, res, next) => {
  router.get("/students-evaluations", (req, res, next) => {

    Student.findAll({
      include: [{all: true}]
      })
      .then(students => {
        res.send(students);
      })
      .catch(next);
  });

// Get specific student by id
// router.get("/students/:id", auth, (req, res, next) => {
  router.get("/students/:id", (req, res, next) => {

  Student.findByPk(req.params.id, { include: [Evaluation]})
    .then(student => {
      res.send(student);
    })
    .catch(next);
});

// Get all student evaluations
// router.get("/students/:id/evaluations, auth, (req, res, next) => {
router.get("/students/:studentId/evaluations", (req, res, next) => {
  Evaluation.findAll({ where: { studentId: req.params.studentId } })
    .then(evaluations => {
      res.json(evaluations);
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
