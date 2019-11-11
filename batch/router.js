const { Router } = require("express");
const Batch = require("./model");
const Student = require("../student/model");
const Evaluation = require("../evaluation/model");

const auth = require("../auth/middleware");

const router = new Router();

// Create batch
router.post("/batch", auth, (req, res, next) => {
  Batch.create(req.body)
    .then(batch => res.json(batch))
    .catch(next);
});

// Get all batches
// router.get("/batches", auth, (req, res, next) => {
  router.get("/batches", (req, res, next) => {

  Batch.findAll()
    .then(batches => {
      res.send(batches);
    })
    .catch(next);
});

// Get specific batch by id
router.get("/batches/:id", (req, res, next) => {
  // router.get("/batches/:id", (req, res, next) => {

  Batch.findByPk(req.params.id, {include : [
    { 
      model: Student, 
      required: true,
      include: [{model: Evaluation }]}
  ]}, 
    )
    .then(batch => {
      res.send(batch);
    })
    .catch(next);
});

// Get all batch students
// router.get("/batches/:id/students, auth, (req, res, next) => {
  router.get("/batches/:batchId/students", (req, res, next) => {
    Student.findAll({ where: { batchId: req.params.batchId } })
      .then(batches => {
        res.json(batches);
      })
      .catch(next);
  });

// Update existing batch
router.put("/batches/:id", auth, (req, res, next) => {
  Batch.findByPk(req.params.id)
    .then(batch => {
      if (batch) {
        batch.update(req.body).then(batch => res.json(batch));
      } else {
        res.status(404).end();
      }
    })
    .catch(next);
});


// Authorization:"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjMsImlhdCI6MTU3MzEzOTIzNSwiZXhwIjoxNTczNDk5MjM1fQ.1TbKoglSaPWziUjOjBiZvscPgxHMVEigQjyKps79dqY"
module.exports = router;
