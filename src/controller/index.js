const express = require('express');
const router = express.Router();

const populateDB = require('./populateDB');

router.get('/', populateDB);

module.exports = router;