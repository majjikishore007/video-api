const express = require('express');
const { getAllVideoes } = require('../controllers/youtube.js');

const router = express.Router();

router.get('/getAllVideoes', getAllVideoes);

module.exports = router;
