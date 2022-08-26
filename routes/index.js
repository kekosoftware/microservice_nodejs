const express = require('express');
const searchRoutes = require('./search');
const router = express.Router();

router.use('/search', searchRoutes);

module.exports = router;