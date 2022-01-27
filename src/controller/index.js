const express = require('express');
const router = express.Router();

const populateDB = require('./populateDB');

router.post('/', populateDB);

module.exports = router;