const { Router } = require("express");
const Evaluation = require("./model");
const Batch = require("../batch/model");
const Student = require("../student/model");

const router = new Router();

// Create evaluation
router.post("/evaluation", (req, res, next) => {
  Evaluation.create(req.body)
    .then(evaluation => res.json(evaluation))
    .catch(next);
});

// Get all evaluations
router.get("/evaluations", (req, res, next) => {
  Evaluation.findAll()
    .then(evaluations => {
      res.send(evaluations);
    })
    .catch(next);
});

// Get specific evaluation by id
router.get("/evaluations/:id", (req, res, next) => {
  Evaluation.findByPk(req.params.id)
    .then(evaluations => {
      res.send(evaluations);
    })
    .catch(next);
});

// Update existing evaluation
router.put("/evaluations/:id", (req, res, next) => {
  Evaluation.findByPk(req.params.id)
    .then(evaluation => {
      if (evaluation) {
        evaluation.update(req.body).then(evaluation => res.json(evaluation));
      } else {
        res.status(404).end();
      }
    })
    .catch(next);
});

module.exports = router;
