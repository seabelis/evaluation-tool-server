const { Router } = require("express");
const Batch = require("./model");
const Student = require("../student/model");
const auth = require("../auth/middleware");

const router = new Router();

// Create batch
router.post("/batch", auth, (req, res, next) => {
  Batch.create(req.body)
    .then(batch => res.json(batch))
    .catch(next);
});

// Get all batches
router.get("/batches", auth, (req, res, next) => {
  Batch.findAll()
    .then(batches => {
      res.send(batches);
    })
    .catch(next);
});

// Get specific batch by id
router.get("/batches/:id", auth, (req, res, next) => {
  Batch.findByPk(req.params.id)
    .then(batch => {
      res.send(batch);
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

module.exports = router;
