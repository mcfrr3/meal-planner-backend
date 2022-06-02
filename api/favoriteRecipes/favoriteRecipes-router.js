const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
  res.end();
});

router.post('/', (req, res) => {
  res.end();
});

module.exports = router;