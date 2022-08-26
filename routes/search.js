const express = require('express');
const searchCtrl = require('../controllers/search');
const router = express.Router();
module.exports = router;

router.get('/movie/:title',  searchCtrl.searchMovie);