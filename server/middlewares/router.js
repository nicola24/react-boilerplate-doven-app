const express = require('express');
const db = require('../../db/models');

const router = express.Router();

router.route('/getstrings').get((req, res, next) => {
  db.getAllStrings()
    .then(strings => {
      res.json(strings);
    })
    .catch(err => {
      next(err);
    });
});

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
