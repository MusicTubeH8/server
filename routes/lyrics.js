var express = require('express');
var router = express.Router();
var lyricController = require('../controllers/lyricController');

router.post('/', lyricController.getLyrics);

module.exports = router;
