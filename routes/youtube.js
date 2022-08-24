const express = require('express');
const {
  getAllVideoes,
  getByTitleAndDesc,
} = require('../controllers/youtube.js');

const router = express.Router();

// this route is to get all the videoes with pagination enabled
// end point  /api/getAllVideoes?size=30&page=1
router.get('/getAllVideoes', getAllVideoes);

// to find a sepific video by title and description
// end point  /api/getByTitleAndDesc?title=$description=
router.get('/getByTitleAndDesc', getByTitleAndDesc);
module.exports = router;
