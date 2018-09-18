const express = require('express');
const db = require('../../db/db');

const router = express.Router();

// GET => api/getstrings fetch all the strings
router.route('/getstrings').get((req, res, next) => {
  db.getAllStrings()
    .then(strings => {
      res.send(strings);
    })
    .catch(err => {
      next(err);
    });
});

// POST => api/insertstring insert a new string
router.route('/insertstring').post((req, res, next) => {
  db.createString(req.body)
    .then(() => {
      res.send();
    })
    .catch(err => {
      next(err);
    });
});

module.exports = router;
